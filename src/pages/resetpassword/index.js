import React, { useState } from "react";
import Resetpassword from "../../components/Resetpassword/Resetpassword";
import forgotPasswordEmail from "../../util/mail";

function reset() {
  const [email, setEmail] = useState("");

  const sendEmail = async (email) => {
    console.log(email);
    await forgotPasswordEmail(email)
      .then((res) => {
        console.log("Done" + res);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <div>
      <h1>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit" onClick={sendEmail(email)}>
          Send
        </button>
      </h1>
    </div>
  );
}

export default reset;
