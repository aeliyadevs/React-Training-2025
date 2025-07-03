import "./App.css";
import Button from "./Button";

function Login() {
  return (
    <div
      className="wrapper"
      //   style={{ background: "red", color: "white", border: "10px solid green" }}
    >
      <div className="form">
        <img src="./travele-logo-main.png" alt="" />
        <h2>Log Into Your InVision Account</h2>
        <form action="">
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <input type="button" value="LOGIN" />
          <Button />
        </form>
      </div>
    </div>
  );
}
export default Login;
