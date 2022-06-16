import {useLocation, useNavigate} from 'react-router-dom';
import {useEffect, useState} from 'react';
import routes from '../../../utils/routes';
import {urlRedirectSet} from '../../../store/modules/url/urlActions';
import {connect} from "react-redux";

const Blog = ({ props, ...otherProps }) => {

  const navigate = useNavigate();

  const getLocation = useLocation();


  useEffect(() => {

    if (!otherProps.user.isLoggedIn) {
      otherProps.setUrlRedirect(getLocation.pathname, routes.login);
      navigate(routes.login);
    }

  }, [otherProps.user]);

  const [userUpdateState, setUserUpdateState] = useState(otherProps.user);

  return (
    <>
      <div className="container px-4 px-lg-5">
        <div className="row gx-4 gx-lg-5 justify-content-center">
          <div className="col-md-12 text-center">
            <h1>Hello World</h1>
            <small>aa@aa.com</small>
            <hr/>
          </div>
          <div className="col-md-10 col-lg-8 col-xl-7">
            <div className="post-preview">
              <a href="src/components/pages/blog/Blog#">
                <h2 className="post-title">Man must explore, and this is exploration at its greatest</h2>
                <h3 className="post-subtitle">Problems look mighty small from 150 miles up</h3>
              </a>
              <p className="post-meta">
                Posted by
                <a href="src/components/pages/blog/Blog#!">Start Bootstrap</a>
                on September 24, 2022
              </p>
            </div>
            <hr className="my-4"/>
            <div className="post-preview">
              <a href="src/components/pages/blog/Blog#"><h2 className="post-title">
                I believe every human has a finite number of heartbeats. I
                don't intend to waste any of mine.</h2></a>
              <p className="post-meta">
                Posted by
                <a href="src/components/pages/blog/Blog#!">Start Bootstrap</a>
                on September 18, 2022
              </p>
            </div>
            <hr className="my-4"/>
            <div className="post-preview">
              <a href="src/components/pages/blog/Blog#">
                <h2 className="post-title">Science has not yet mastered prophecy</h2>
                <h3 className="post-subtitle">We predict too much for the next year and yet far too little for the next
                  ten.
                </h3>
              </a>
              <p className="post-meta">
                Posted by
                <a href="src/components/pages/blog/Blog#!">Start Bootstrap</a>
                on August 24, 2022
              </p>
            </div>
            <hr className="my-4"/>
            <div className="post-preview">
              <a href="src/components/pages/blog/Blog#">
                <h2 className="post-title">Failure is not an option</h2>
                <h3 className="post-subtitle">Many say exploration is part of our destiny, but it’s actually our duty to
                  future generations.</h3>
              </a>
              <p className="post-meta">
                Posted by
                <a href="src/components/pages/blog/Blog#!">Start Bootstrap</a>
                on July 8, 2022
              </p>
            </div>
            <hr className="my-4"/>
            <div className="d-flex justify-content-end mb-4">
              <a className="btn btn-primary text-uppercase" href="src/components/pages/blog/Blog#!">
                Older Posts →
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

const mapStateToProps = (state) => ({
  user: state.user
});

const mapDispatchToProps = (dispatch) => ({
  setUrlRedirect: (from, to) => dispatch(urlRedirectSet(from, to)),

});

export default connect(mapStateToProps, mapDispatchToProps)(Blog);
