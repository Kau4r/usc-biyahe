import mail from 'nodemailer'

const transporter = mail.createTransport({
    host: 'smtp.google.com',
    port: 465,
    secure: true,
    auth: {
        type: 'OAUTH2',
        user: email ,
        pass: password ,
    }
})

export async function POST(req) {
    const formData = await req.json()
    console.log(formData)

    const info = await transporter.sendMail({
        from: '"USC Biyahe" uscbiyahe@gmail.com',
        to: 'adrianbonpin@gmail.com',
        subject: "USC Biyahe | Mail",
        text: `Name: ${formData.name} Email: ${formData.email} Address: ${formData.address} Phone: ${formData.phone} Main Message: ${formData.main}`,
    })

    console.log("Message sent: %s", info.messageId);

    return new Response('OK')
}
