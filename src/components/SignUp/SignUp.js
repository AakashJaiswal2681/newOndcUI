import Button from "../UI/Button";
import Card from "../UI/Card";
import Input from "../UI/Input";
import Modal from "../UI/Modal";
import "./SignUp.css";

const SignUp = (props) => {

    const handleSubmit = e => {
        e.preventDefault();
    }

  return (
    <Modal onHide={props.onHideSignup}>
      <Card custom="card-style-signup">
        <form>
          <Input
            label="Full Name"
            input={{
              id: "fullname",
              type: "text",
              placeholder: "Your Full Name",
            }}
          />
          <Input
            label="Email Id"
            input={{
              id: "email",
              type: "email",
              placeholder: "Your Email Id",
            }}
          />
          <Input
            label="Create Password"
            input={{
              id: "createpassword",
              type: "password",
              placeholder: "Your Password",
            }}
          />
          <Input
            label="Confirm Password"
            input={{
              id: "confirmpassword",
              type: "password",
              placeholder: "Confirm Your Password",
            }}
          />
          {/* <div className="btn"> */}
            <Button type="submit" onClick={handleSubmit} custom="register-button">Register</Button>
          {/* </div> */}
        </form>
      </Card>
    </Modal>
  );
};

export default SignUp;
