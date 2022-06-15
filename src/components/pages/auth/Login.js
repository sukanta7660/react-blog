import React, {useState} from 'react';
import useRedirectIfAuthenticated from '../../../hooks/userRedirectIfAuthenticated';
import useRedirectToIntended from '../../../hooks/useRedurectToIntended';
import {connect} from 'react-redux';
import {login} from "../../../store/modules/user/userAction";

const errorTypes = {
  SUBMIT: 'SUBMIT',
  SUBMIT_SUCCESS: 'SUBMIT_SUCCESS',
  SUBMIT_FAIL: 'SUBMIT_FAIL',
  FIELD_ERROR: 'FIELD_ERROR',
};

const errorDefaultState = {
  loading: false,
  error: false,
  success: false,
  message: '',
  fields: {
    email: false,
    password: false,
  }
};

function errorReducer(state, { type, payload }) {
  switch (type) {
    case errorTypes.SUBMIT:
      return {
        ...state,
        loading: true
      }

    case errorTypes.SUBMIT_SUCCESS:
      return {
        ...state,
        error: false,
        success: true,
        loading: false,
        message: payload
      }

    case errorTypes.SUBMIT_FAIL:
      return {
        ...state,
        loading: false,
        error: true,
        success: false,
        message: (payload) || 'Something went wrong, please try again later'
      }

    case errorTypes.FIELD_ERROR:
      return {
        ...state,
        fields: {
          ...state.fields,
          ...payload
        }
      }

    default:
      return state;
  }
}

const Login = (props) => {

  useRedirectIfAuthenticated();

  useRedirectToIntended();

  const [isloading, setIsLoading] = useState(false);

  const [credentials, setCredentials] = useState({
    email: '',
    password: '',
  });

  const [email, setEmail] = useState('');
  const emailChangeHandler = (e) => {
    setEmail(e.target.value);
  }

  const loginChangeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setCredentials({
      ...credentials,
      [name]: value
    });

  };

  const handleLogin = async (e) => {
    setIsLoading(true);
    e.preventDefault();

    await props.login(credentials.email, credentials.password);
    setIsLoading(false);
  }

  return (
    <>
      <main className="mb-4">
        <div className="container px-4 px-lg-5">
          <div className="row gx-4 gx-lg-5 justify-content-center">
            <div className="col-md-10 col-lg-8 col-xl-7">
              <h2>Login</h2>
              <div className="my-5">
                <form id="contactForm" data-sb-form-api-token="API_TOKEN" onSubmit={handleLogin}>
                  <div className="form-floating">
                    <input
                      className="form-control"
                      type="email"
                      name="email"
                      placeholder="Enter your email..."
                      autoComplete="off"
                      value={credentials.email}
                      onChange={loginChangeHandler}
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
                      type="password"
                      name="password"
                      value={credentials.password}
                      onChange={loginChangeHandler}
                      placeholder="Enter your password"
                      data-sb-validations="required"/>
                    <label htmlFor="password">Password</label>
                    <div
                      className="invalid-feedback"
                      data-sb-feedback="phone:required">
                      Password is required.
                    </div>
                  </div>
                  <br/>
                  <div className="d-none" id="submitErrorMessage">
                    <div className="text-center text-danger mb-3">Error sending message!</div>
                  </div>
                  <button
                    className="btn btn-primary text-uppercase"
                    type="submit">
                    Login
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

const mapStateToProps = (state) => ({
  isLoggedIn: state.user.isLoggedIn,
  user: state.user.data,
  errors: state.user.errors,
  url: state.url
});

const mapDispatchToProps = (dispatch) => ({
  login: (email, password) => dispatch(login(email, password))
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
