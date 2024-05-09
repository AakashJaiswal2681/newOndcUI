import Button from "../UI/Button";
import Card from "../UI/Card";
import Input from "../UI/Input";
import Modal from '../UI/Modal';
import "./Login.css";

const Login = (props) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("clicked");
  };

  return (
    <Modal onHide={props.onHideLogin}>
      <Card custom="card-style-login">
        <form>
          <Input
            label="Username"
            input={{
              id: "username",
              type: "text",
              placeholder: "Username",
            }}
          />
          <Input
            label="Password"
            input={{
              id: "password",
              type: "text",
              placeholder: "Password",
            }}
          />
          <div className="btn">
            <Button type="submit" onClick={handleSubmit} custom="sub-btn">
              Submit
            </Button>
          </div>
        </form>
      </Card>
    </Modal>
  );
};

export default Login;
