// Use Parse.Cloud.define to define as many cloud functions as you want.
// Welcome Email for new users
Parse.Cloud.define("WelcomeEmailnction(request, response) {

var Mailgun = require('mailgun');
 Mailgun.initialize('smtp.mailgun.org', 'key-466fc3d292440647622a5096ec517b3d');

 var mailEmail = request.params.email; <== You can get parameters this way
//  Mailgun.sendEmail({
//  to: "To Email <toEmail@example.com>",
//  from: "From Email <fromEmail@example.com>",
//  subject: "Welcome!",
//  text: "Hello "  + ", \n Thank you for signing up."

},{
   success: function() {
   response.success(request.params);
   console.log("--email - success");
   console.log(request.params);
 },
   error: function() {
   console.log("--failedend email - success");
   console.error(request.params);
   response.error("Uhsomething went wrong");
 }
 }); 
});
