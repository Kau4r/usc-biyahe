const eeclient = require('elasticemail-webapiclient').client

const API = '4732F19C5B55FE39188933B6C45C58A4430BF677B9DDC486E49667D88C654A1BEA0D4C87B96E4BBDDC077367ED84B133';
// I know the API key is there, I can just delete if it gets abused

const EE = new eeclient({
    apiKey: API,
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