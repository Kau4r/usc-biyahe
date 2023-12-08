const eeclient = require('elasticemail-webapiclient').client

const EE = new eeclient({
    apiKey: process.env.MAIL_KEY,
    apiUri: 'https://api.elasticemail.com/',
    apiVersion: 'v2',
})

export async function POST(req) {
    const formData = await req.json()

    EE.Account.Load().then(function(resp) {
        console.log(resp)
    })

    const email = {
        "subject": 'USC Biyahe | Mail',
        "to": 'adrianbonpin@gmail.com',
        "from": 'uscbiyahe@adrianbonpin.online',
        "body": `| Name: ${formData.name} | Email: ${formData.email} | Address: ${formData.address} | Phone: ${formData.phone} | Main Message: ${formData.main}`,
        "bodyType": 'Plain',
    }

    EE.Email.Send(email).catch((err) => {
        throw new Error(err)
    })

    return new Response('OK')
}