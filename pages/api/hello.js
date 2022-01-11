// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const nodemailer = require("nodemailer");

export default async function handler(req, res) {
  if (req.method != "POST") return res.status(401);

  var transport = nodemailer.createTransport({
    host: "smtp-mail.outlook.com", // hostname
    secureConnection: false, // TLS requires secureConnection to be false
    port: 587, // port for secure SMTP
    auth: {
      user: "the_gamex@outlook.com",
      pass: "gamex@01",
    },
    tls: {
      ciphers: "SSLv3",
    },
  });

  await transport
    .sendMail({
      from: "the_gamex@outlook.com",
      to: "the_gamex@outlook.com",
      subject: `Manufacturers form filled by: ${req.body.company} <${req.body.email}>`,
      html: `
      <div>
        <p>Company name: ${company}</p>
        <p>Manager's name: ${manager}</p>
        <p>Factory address: ${factory_address}</p>
        <p>Admin addess: ${admin_address}</p>
        <p>
          Phone numbers: $
          {req.body.phones.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </p>
        <p>Email: ${req.body.email}</p>
      </div>

      <div>
        <p>Products</p>
        <ul>
          {req.body.products.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
      `,
    })
    .then(() => res.status(201).send("Message sent"))
    .catch(() => res.status(500));
}
