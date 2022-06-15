import backGround from '../../assets/img/home-bg.jpg'
import {getUser, updateRequireAuth} from '../../store/modules/user/userAction';
import _ from 'lodash';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {useEffect} from 'react';

const loadServerData = ({user, ...otherProps}) => {

  if (_.isEmpty(user)) {
    otherProps.getUser(true);
  }

};


const Header = ({ ...otherProps }) => {

  // loadServerData(otherProps);
  useEffect(() => {

    // load data from server
    loadServerData(otherProps);
  }, []);

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light" id="mainNav">
        <div className="container px-4 px-lg-5">
          <Link className="navbar-brand" to="/">React Blog</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive"
                  aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            Menu
            <i className="fas fa-bars"></i>
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ms-auto py-4 py-lg-0">
              <li className="nav-item">
                <Link className="nav-link px-lg-3 py-3 nav-link-custom" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link px-lg-3 py-3 nav-link-custom" to="/about">About</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link px-lg-3 py-3 nav-link-custom" to="/blogs">Blog Posts</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link px-lg-3 py-3 nav-link-custom" to="/contact">Contact</Link>
              </li>
              <li className="nav-item auth-button">
                <Link className="nav-link px-lg-3 py-3 nav-link-custom" to="/login">Login</Link>
              </li>
              <li className="nav-item auth-button">
                <Link className="nav-link px-lg-3 py-3 nav-link-custom" to="/register">Register</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <header className="masthead" style={{ backgroundImage: `url(${backGround})` }}>
        <div className="container position-relative px-4 px-lg-5">
          <div className="row gx-4 gx-lg-5 justify-content-center">
            <div className="col-md-10 col-lg-8 col-xl-7">
              <div className="site-heading">
                <h1>React Blog</h1>
                <span className="subheading">A Blog created with REACT</span>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

const mapStateToProps = (state) => ({
  user: state.user.data,
  isRequireAuth: state.user.requireAuth,
});

const mapDispatchToProps = (dispatch) => ({
  getUser: (updateState = false) => dispatch(getUser(updateState)),
  updateRequireAuth: (payload) => dispatch(updateRequireAuth(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
