const nodemailer = require("nodemailer");

const forgotPasswordEmail = async (email) => {
  var transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "vadapavwithchutney1234@gmail.com",
      pass: "VadapavWithSals@",
    },
  });

  let buffer = new Buffer(email);
  let baseData = buffer.toString("base64");
  let origin = req.get("origin") + "/reset?token=" + baseData;

  console.log(origin);
  var details = {
    from: "vadapavwithchutney1234@gmail.com",
    to: email,
    subject: "Reset password",
    html: `<a href="${origin}" target="_blank">Click</a>`,
  };
  var mailOptions = details;

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log(
        `Email has been sent to ${email}, response: ` + info.response
      );
    }
  });
  const data = JSON.stringify({
    status: 200,
    response: response,
  });
  console.log("Data is : " + data);
  return data;
};

export default forgotPasswordEmail;
