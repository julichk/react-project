import { Formik, Form, Field } from "formik";
import { useState } from "react";
import { Alert } from "antd";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [showAlert, setShowAlert] = useState(false);
  const [active, setActive] = useState(true);

  const handleLoginClick = (event) => {
    if (event.target.classList.contains("login-form")) {
      setActive(false);
      window.location.href = "/news";
    }
  };

  function handleSubmit(values) {
    const token = localStorage.getItem("token");
    const expectedToken = "1ee5ea2d-d7c2-460b-8031-eb18e1c8aede";
    const { login, password } = values;

    if (token === expectedToken && login === "Yuliia" && password === "cat") {
      localStorage.setItem("login", login);
      navigate("/");
    } else {
      setShowAlert(true);
    }
  }

  if (!active) {
    return null;
  }

  return (
    <div
      className={`login-form ${active ? "active" : ""}`}
      onClick={handleLoginClick}
    >
      <div className="login-form_conteiner">
        <Formik
          initialValues={{ login: "", password: "" }}
          onSubmit={handleSubmit}
        >
          <Form className="login-form_conteiner_block">
            <div className="login-form_conteiner_block_inputs">
              <div className="login-form_conteiner_block_inputs_login">
                <label
                  htmlFor="login"
                  className="login-form_conteiner_block_inputs_login_label"
                >
                  Login:
                </label>
                <Field
                  type="text"
                  id="login"
                  name="login"
                  autoComplete="off"
                  className="login-form_conteiner_block_inputs_login_input"
                />
              </div>
              <div className="login-form_conteiner_block_inputs_pass">
                <label
                  htmlFor="password"
                  className="login-form_conteiner_block_inputs_pass_label"
                >
                  Password:
                </label>
                <Field
                  type="password"
                  id="password"
                  name="password"
                  autoComplete="off"
                  className="login-form_conteiner_block_inputs_pass_input"
                />
              </div>
              {showAlert && (
                <Alert message="User noy found" type="error" showIcon />
              )}
            </div>

            <div className="sign-form_conteiner_formik_block_button">
              <button
                type="submit"
                className="sign-form_conteiner_formik_block_button_sub"
              >
                Log in
              </button>
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  );
}

export default Login;
