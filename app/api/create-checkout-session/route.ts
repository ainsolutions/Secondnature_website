import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || "");

export async function POST(request: any) {
  try {
    const body = await request.json();
    const { cart, deliveryCharge, promoCode } = body;

    if (!cart || cart.length === 0) {
      return Response.json({ error: "Cart is empty" }, { status: 400 });
    }

    const lineItems = cart.map((item: any) => ({
      price_data: {
        currency: "eur",
        product_data: {
          name: item.name,
        },
        unit_amount: Math.round(item.price * 100),
      },
      quantity: item.quantity
    }));

    if (deliveryCharge && deliveryCharge > 0) {
      lineItems.push({
        price_data: {
          currency: "eur",
          product_data: {
            name: "Delivery Charges",
          },
          unit_amount: Math.round(deliveryCharge * 100),
        },
        quantity: 1,
      });
    }

    let discounts:any = [];
    if (promoCode != '') {
      const promo = await stripe.promotionCodes.list({
        code: promoCode,
        active: true,
        limit: 1,
      });

      if (promo.data.length === 0) {
        return Response.json(
          { error: "Invalid or expired promo code", promo: 'invalid' },
          { status: 400 }
        );
      }

      discounts = [{ promotion_code: promo.data[0].id }];
    }

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: lineItems,
      mode: "payment",
      discounts,
      success_url: `${process.env.CLIENT_URL}/payment-success`,
      cancel_url: `${process.env.CLIENT_URL}/payment-cancelled`,
    });

    return Response.json({ url: session.url });
  } catch (err: any) {
    console.error("Stripe error:", err);
    return Response.json({ error: err.message }, { status: 500 });
  }
}
