import mailchimp from '@mailchimp/mailchimp_marketing'

mailchimp.setConfig({
  apiKey: process.env.MAILCHIMP_API_KEY,
  server: process.env.MAILCHIMP_SERVER_PREFIX
})

export default function mailer(req, res) {
  async function mail() {
    const response = await mailchimp.ping.get()
    res.end(JSON.stringify({ response }))
  }

  mail()
}
