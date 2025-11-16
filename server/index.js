import express from "express";
import nodemailer from "nodemailer";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// ✅ Email sending route
app.post("/api/sendOrderEmail", async (req, res) => {
  try {
    const { user, cart, total } = req.body;

    // console.log("📦 Incoming order data:", JSON.stringify(req.body, null, 2));

    if (!user || !cart || cart.length === 0) {
      console.error("❌ Invalid order data:", { user, cart });
      return res.status(400).json({ error: "Invalid order data" });
    }

    // ✅ Create transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // ✅ Build order details HTML
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
            (item) =>
              `<li>${item.name} (${item.quantity} × € ${item.price})</li>`
          )
          .join("")}
      </ul>
      <p><b>Total:</b> € ${total}</p>
    `;

    // ✅ Send email to Sales
    await transporter.sendMail({
      from: `"Second Nature Oils" <${process.env.EMAIL_USER}>`,
      to: `${process.env.EMAIL_SALES_TEAM}`,
      subject: "🛒 New Order Received",
      html: orderDetailsHTML,
    });

    // ✅ Send confirmation email to Customer
    if (user.email) {
      const customerMessage = `
        <h2>Thank You for Your Order!</h2>
        <p>Hi ${user.name},</p>
        <p>We’ve received your order and our team will contact you soon for confirmation.</p>
        <hr />
        <h3>Your Order Details</h3>
        <ul>
          ${cart
            .map(
              (item) =>
                `<li>${item.name} (${item.quantity} × €${item.price})</li>`
            )
            .join("")}
        </ul>
        <p><b>Total:</b> €${total}</p>
        <br/>
        <p>Warm regards,<br/>Second Nature Oils Team</p>
      `;

      await transporter.sendMail({
        from: `"Second Nature Oils" <${process.env.EMAIL_USER}>`,
        to: user.email,
        subject: "✅ Order Confirmation – Second Nature Oils",
        html: customerMessage,
      });
    }

    res.json({ success: true });
  } catch (err) {
    console.error("❌ Email send error:", err);
    res.status(500).json({ success: false, error: err.message });
  }
});


// ✅ Email sending route
app.post("/api/contactUs", async (req, res) => {
  try {
    const { user } = req.body;

    if (!user) {
      console.error("❌ Invalid data:", { user, cart });
      return res.status(400).json({ error: "Invalid data" });
    }

    // ✅ Create transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // ✅ Build order details HTML
    const contactUsHTML = `
      <h2>New Query Received</h2>
      <p><b>Name:</b> ${user.name}</p>
      <p><b>Email:</b> ${user.email}</p>
      <hr />
      <h3>Message:</h3>
      <p>${user.message}</p>
    `;

    // ✅ Send email to Sales
    await transporter.sendMail({
      from: `"Second Nature Oils" <${process.env.EMAIL_USER}>`,
      to: `${process.env.EMAIL_FOR_CONTACT}`,
      subject: `"💬 New Query Received" from ${user.name}`,
      html: contactUsHTML,
    });

    res.json({ success: true });
  } catch (err) {
    console.error("❌ Email send error:", err);
    res.status(500).json({ success: false, error: err.message });
  }
});




// ✅ Server setup
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
