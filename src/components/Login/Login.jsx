import { Formik, Form, Field } from 'formik';
import { useState } from 'react';
import { Alert } from 'antd';
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();
  const [showAlert, setShowAlert] = useState(false);

  function handleSubmit(values) {
    const token = localStorage.getItem('token');
    const expectedToken = '2412dcc7-fc98-4ab7-9323-7c9bb4e99f73'; 
    const { login, password } = values;

    if (token === expectedToken && login === 'Yuliia' && password === 'cat') {
      navigate('/');
    } else {
      setShowAlert(true);
    }
  }

  return (
    <div className='login-form'>
      <div className='login-form_conteiner'>
        
        <Formik initialValues={{ login: '', password: '' }} onSubmit={handleSubmit}>
          <Form className='login-form_conteiner_block'>
            <div className='login-form_conteiner_block_inputs'>
              <div className='login-form_conteiner_block_inputs_login'>
                <label htmlFor="login" className='login-form_conteiner_block_inputs_login_label'>Login:</label>
                <Field type="text" id="login" name="login" autoComplete="off" className='login-form_conteiner_block_inputs_login_input' />
              </div>
              <div className='login-form_conteiner_block_inputs_pass'>
                <label htmlFor="password" className='login-form_conteiner_block_inputs_pass_label'>Password:</label>
                <Field type="password" id="password" name="password" autoComplete="off" className='login-form_conteiner_block_inputs_pass_input' />
              </div>
              {showAlert && (
          <Alert
            message="User noy found"
            type="error"
            showIcon
          />
        )}
            </div>
            
            <div className='sign-form_conteiner_formik_block_button'>
              <button type="submit" className='sign-form_conteiner_formik_block_button_sub'>Log in</button>
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  );
}

export default Login;
