var postmark = require('postmark')

// Send an email:
var client = new postmark.ServerClient(process.env.POSTMARK_API)

const sendEmail = async (data) => {
  const { name, email, company, phone, how_can_we_help, budget, how_did_you_hear_about_us } = data
  // console.log(data)
  // console.log('sendEmail called')
  try {
    return client.sendEmail({
      From: 'me@chrisellis.dev',
      To: 'me@chrisellis.dev',
      Subject: '✨ CAE Web contact',
      HtmlBody: `Hey Chris<br />
      Looks like <strong>${name}</strong> at ${company} is interested in working with you.<br />
      Contact them at: ${email} or ${phone}<br />
      Details of the job:<br/>
      <p>Budget: $${budget}</p>
      <p>${how_can_we_help}</p>
      <p>We heard about you: ${how_did_you_hear_about_us}</p>
      `,
      TextBody: `Hey Chris, Looks like ${name} at ${company} is interested in working with you.
      Contact them at: ${email} or ${phone}
      Details of the job:
      Budget: $${budget}
      ${how_can_we_help}
      We heard about you: ${how_did_you_hear_about_us}
      `,
      MessageStream: 'outbound',
    })
  } catch (error) {
    console.error(error)
  }
}

export { sendEmail }
