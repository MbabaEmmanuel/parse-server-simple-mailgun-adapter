const resolve = require('path').resolve;
// Note that the paths to the templates are absolute.
var server = ParseServer({
  ...otherOptions,
  // Enable email verification
  verifyUserEmails: true,
  emailAdapter: {
    module: 'parse-server-mailgun',
    options: {
      // The address that your emails come from
      fromAddress: 'JokeKing <postmaster@sandbox8325a059a22e4ce7a0788087283b8aba.mailgun.org>',
      // Your domain from mailgun.com
      domain: 'smtp.mailgun.org',
      // Your API key from mailgun.com
      apiKey: 'key-466fc3d292440647622a5096ec517b3d',
      // The template section
      templates: {
        passwordResetEmail: {
          subject: 'Reset your password',
          pathPlainText: resolve(__dirname, 'password_reset_email.txt'),
          pathHtml: resolve(__dirname, 'path/to/templates/password_reset_email.html'),
          callback: (user) => { return { firstName: user.get('firstName') }}
          // Now you can use {{firstName}} in your templates
        },
        verificationEmail: {
          subject: 'Confirm your account',
          pathPlainText: resolve(__dirname, 'verification_email.txt'),
          pathHtml: resolve(__dirname, 'path/to/templates/verification_email.html'),
          callback: (user) => { return { firstName: user.get('firstName') }}
          // Now you can use {{firstName}} in your templates
        }
      }
    }
  }
});
