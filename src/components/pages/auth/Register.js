import {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import {api, apiRequest} from '../../../utils/util';
import {AUTH_ENDPOINT_REGISTER} from '../../../utils/constant';

const initialState = {
  name: '',
  email: '',
  password: '',
  password_confirmation: ''
}

const Register = () => {

  const navigate = useNavigate();

  const [{name, email, password, password_confirmation}, setState] = useState(initialState);

  const clearState = () => {
    return setState({...initialState})
  };

  const onChangeHandler = e => {
    const {name, value} = e.target;
    setState(prevState => ({ ...prevState, [name]: value }));
  }

  const registerFormData = {
    name: name,
    email: email,
    password: password,
    password_confirmation: password_confirmation
  }

  const handleRegister = e => {
    e.preventDefault();

    api().get('sanctum/csrf-cookie').then(() => {
      apiRequest.post(AUTH_ENDPOINT_REGISTER, registerFormData).then(response => {
        if (response.data.error) {
          console.log(response.data.error)
        }

        setState({
          loggedIn: true
        })

        clearState();
        navigate('/login');
      })
    })
  };

  return (
    <>
      <main className="mb-4">
        <div className="container px-4 px-lg-5">
          <div className="row gx-4 gx-lg-5 justify-content-center">
            <div className="col-md-10 col-lg-8 col-xl-7">
              <h2>Registration</h2>
              <div className="my-5">
                <form id="contactForm" data-sb-form-api-token="API_TOKEN" onSubmit={handleRegister}>
                  <div className="form-floating">
                    <input
                      className="form-control"
                      id="name"
                      type="text"
                      name="name"
                      value={name}
                      onChange={onChangeHandler}
                      placeholder="Enter your name..."
                      data-sb-validations="required"/>
                    <label htmlFor="name">Name</label>
                    <div
                      className="invalid-feedback"
                      data-sb-feedback="name:required">
                      A name is required.
                    </div>
                  </div>
                  <div className="form-floating">
                    <input
                      className="form-control"
                      id="email"
                      type="email"
                      name="email"
                      value={email}
                      onChange={onChangeHandler}
                      placeholder="Enter your email..."
                      data-sb-validations="required,email"/>
                    <label htmlFor="email">Email address</label>
                    <div
                      className="invalid-feedback"
                      data-sb-feedback="email:required">
                      An email is required.
                    </div>
                    <div
                      className="invalid-feedback"
                      data-sb-feedback="email:email">
                      Email is not valid.
                    </div>
                  </div>
                  <div className="form-floating">
                    <input
                      className="form-control"
                      id="password"
                      type="password"
                      name="password"
                      value={password}
                      onChange={onChangeHandler}
                      placeholder="Enter your password"
                      data-sb-validations="required"/>
                    <label htmlFor="password">Password</label>
                    <div className="invalid-feedback" data-sb-feedback="phone:required">
                      Password is required.
                    </div>
                  </div>
                  <br/>
                  <div className="form-floating">
                    <input
                      className="form-control"
                      id="password"
                      type="password"
                      name="password_confirmation"
                      value={password_confirmation}
                      onChange={onChangeHandler}
                      placeholder="Enter your password"
                      data-sb-validations="required"/>
                    <label htmlFor="password">Confirm Password</label>
                    <div
                      className="invalid-feedback"
                      data-sb-feedback="phone:required">
                      Confirm Password is required.
                    </div>
                  </div>
                  <br/>
                  <div className="d-none" id="submitErrorMessage">
                    <div
                      className="text-center text-danger mb-3">
                      Error sending message!
                    </div>
                  </div>
                  <button
                    className="btn btn-primary text-uppercase"
                    id="submitButton"
                    type="submit">
                    Register Here
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default Register
