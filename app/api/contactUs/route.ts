import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const body = await req.json();
    const { user } = body;

    if (!user) {
      console.error("❌ Invalid data:", body);
      return Response.json({ error: "Invalid data" }, { status: 400 });
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Email HTML
    const contactUsHTML = `
      <h2>New Query Received</h2>
      <p><b>Name:</b> ${user.name}</p>
      <p><b>Email:</b> ${user.email}</p>
      <hr />
      <h3>Message:</h3>
      <p>${user.message}</p>
    `;

    // Send email
    await transporter.sendMail({
      from: `"Second Nature Oils" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_FOR_CONTACT,
      subject: `💬 New Query Received from ${user.name}`,
      html: contactUsHTML,
    });

    return Response.json({ success: true }, { status: 200 });

  } catch (err) {
    console.error("❌ Email send error:", err);
    return Response.json(
      { success: false, error: err.message },
      { status: 500 }
    );
  }
}
