import { useState } from "react";
import { Formik, Form, Field } from 'formik';
import { Alert, Button } from 'antd';
import { v4 as uuidv4 } from 'uuid'; 

function SignUp() {
  const [registrationSuccess, setRegistrationSuccess] = useState(false);
  const [active, setActive] = useState(true);

  const handleSubmit = (values) => {
    // генерація токену
    const token = uuidv4();

    localStorage.setItem('token', token);

    setRegistrationSuccess(true);
  };

  const handleOk = () => {
    window.location.href = '/news';
  };

  const handleFormClick = (event) => {
    if (event.target.classList.contains('sign-form')) {
      setActive(false);
      window.location.href = '/news';
    }
  };

  if (registrationSuccess) {
    return (
      <div className="alert-succes">
        <Alert
          message="Реєстрація пройшла успішно!"
          type="success"
          showIcon
          action={
            <Button type="primary" onClick={handleOk}>
              OK
            </Button>
          }
        />
      </div>
    );
  }

  if (!active) {
    return null;
  }

  return (
    <div className={`sign-form ${active ? 'active' : ''}`} onClick={handleFormClick}>
      <div className='sign-form_conteiner'>
        <Formik initialValues={{ login: '', password: '', email: '' }} onSubmit={handleSubmit}>
          <Form className='sign-form_conteiner_formik_block'>
            <div className='sign-form_conteiner_formik_block_inputs'>
              <div className='sign-form_conteiner_formik_block_inputs_login'>
                <label htmlFor="login" className='sign-form_conteiner_formik_block_inputs_login_label'>Login:</label>
                <Field type="text" id="login" name="login" autoComplete="off" className='sign-form_conteiner_formik_block_inputs_login_input' />
              </div>
              <div className='sign-form_conteiner_formik_block_inputs_pass'>
                <label htmlFor="password" className='sign-form_conteiner_formik_block_inputs_pass_label'>Password:</label>
                <Field type="password" id="password" name="password" autoComplete="off" className='sign-form_conteiner_formik_block_inputs_pass_input' />
              </div>
              <div className='sign-form_conteiner_formik_block_inputs_pass-conf'>
                <label htmlFor="password-conf" className='sign-form_conteiner_formik_block_inputs_pass-conf_label'>Confirm the Password:</label>
                <Field type="password" id="password-conf" name="password-conf" className='sign-form_conteiner_formik_block_inputs_pass-conf_input' />
              </div>
              <div className='sign-form_conteiner_formik_block_inputs_mail'>
                <label htmlFor="email" className='sign-form_conteiner_formik_block_inputs_mail_label'>Email:</label>
                <Field type="email" id="email" name="email" className='sign-form_conteiner_formik_block_inputs_mail_input' />
              </div>
            </div>
            <div className='sign-form_conteiner_formik_block_button'>
              <button type="submit" className='sign-form_conteiner_formik_block_button_sub'>Sign Up</button>
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  );
}

export default SignUp;
