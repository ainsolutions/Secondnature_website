import nodemailer from "nodemailer";

export async function POST(req: any) {
  try {
    const body = await req.json();
    const { user, cart, total, deliveryCharges, promoCode } = body;

    if (!user || !cart || cart.length === 0) {
      console.error("❌ Invalid order data:", body);
      return Response.json(
        { error: "Invalid order data" },
        { status: 400 }
      );
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Order HTML
    const orderDetailsHTML = `
      <h2>New Order Received</h2>
      <p><b>Name:</b> ${user.name}</p>
      <p><b>Email:</b> ${user.email}</p>
      <p><b>Contact:</b> ${user.contact}</p>
      <p><b>Address:</b> ${user.address}</p>
      <hr />
      <h3>Order Details</h3>
      <ul>
        ${cart
          .map(
            (item: any) =>
              `<li>${item.name} (${item.quantity} × € ${item.price})</li>`
          )
          .join("")}
      </ul>

      <p><b>Standard Delivery:</b> €${deliveryCharges}</p>
      <p><b>Total:</b> €${total}</p>
      ${promoCode != '' ? `<p><b>Promo Code:</b> ${promoCode}` : `<p></p>`}
    `;

    // Send email to sales team
    await transporter.sendMail({
      from: `"Second Nature Oils" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_SALES_TEAM,
      subject: "🛒 New Order Received",
      html: orderDetailsHTML,
    });

    // Send confirmation email to customer
    if (user.email) {
      const customerHTML = `
        <h2>Thank You for Your Order!</h2>
        <p>Hi ${user.name},</p>
        <p>Your order has been received. We will contact you soon.</p>
        <hr />
        <h3>Your Order Details</h3>
        <ul>
          ${cart
            .map(
              (item: any) =>
                `<li>${item.name} (${item.quantity} × €${item.price})</li>`
            )
            .join("")}
        </ul>

        <p>Standard Delivery: €${deliveryCharges}</p>
        <p><b>Total:</b> €${total}</p>
        ${promoCode != '' ? `<p><b>Promo Code:</b> ${promoCode}</p>` : `<p></p>`}
        ${promoCode != '' ? `<p><b>Note:</b> We verify promo codes manually after receiving your order by email. If the code is valid, your discount will be added before final payment.</p>`: `<p></p>`}


        <p><br/>Regards,<br/>Second Nature Oils Team</p>
      `;

      await transporter.sendMail({
        from: `"Second Nature Oils" <${process.env.EMAIL_USER}>`,
        to: user.email,
        subject: "✅ Order Confirmation – Second Nature Oils",
        html: customerHTML,
      });
    }

    return Response.json({ success: true }, { status: 200 });

  } catch (err: any) {
    console.error("❌ Email send error:", err);
    return Response.json(
      { success: false, error: err.message },
      { status: 500 }
    );
  }
}
