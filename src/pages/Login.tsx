import Input from "components/Input";
import logo from "assets/images/logo.svg";
import illustration from "assets/images/sign-in-illustration.svg";
import { useState } from "react";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePassword = (e: Event) => {
    e.preventDefault();
    setShowPassword(!showPassword);
  };

  return (
    <div className="login-container">
      <div className="login-container__illustration">
        <img src={logo} alt="lendsqr" width={"162px"} />
        <img src={illustration} alt="lendsqr" width={"100%"} />
      </div>
      <div className="login-container__form">
        <div className="login-container__form-images">
          <img src={logo} alt="lendsqr" width={"40%"} />
          <img src={illustration} alt="lendsqr" width={"90%"} />
        </div>
        <h1 className="">Welcome!</h1>
        <p className="form__paragraph">Enter details to login.</p>
        <form action="">
          <Input inputType="email" placeholder="Email" customClass="py-10" />
          <Input
            inputType={showPassword ? "text" : "password"}
            placeholder="Password"
            addon="SHOW"
            addOnFunction={togglePassword}
            customClass="py-10 "
          />
          <p className="cta-text">FORGOT PASSWORD?</p>
          <div className="w-full">
            <a
              href="/dashboard"
              className="cta-button grow inline-block w-full text-center py-2.5"
            >
              LOG IN
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
