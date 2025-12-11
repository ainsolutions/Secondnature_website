import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export async function POST(request) {
  try {
    const { promoCode } = await request.json();

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

    return Response.json({
      valid: true,
      discount: promo.data[0].coupon.percent_off || promo.data[0].coupon.amount_off,
      type: promo.data[0].coupon.percent_off ? "percent" : "fixed",
    });
    
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
}
