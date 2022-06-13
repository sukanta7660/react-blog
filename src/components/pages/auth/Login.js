const Login = () => {
  return (
    <>
      <main className="mb-4">
        <div className="container px-4 px-lg-5">
          <div className="row gx-4 gx-lg-5 justify-content-center">
            <div className="col-md-10 col-lg-8 col-xl-7">
              <h2>Login</h2>
              <div className="my-5">
                <form id="contactForm" data-sb-form-api-token="API_TOKEN">
                  <div className="form-floating">
                    <input
                      className="form-control"
                      id="email"
                      type="email"
                      placeholder="Enter your email..."
                      autoComplete="off"
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
                    id="submitButton"
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

export default Login
