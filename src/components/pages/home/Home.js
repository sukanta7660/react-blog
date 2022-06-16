import {useLocation, useNavigate} from 'react-router-dom';
import {useEffect} from 'react';
import routes from "../../../utils/routes";
import {urlRedirectSet} from '../../../store/modules/url/urlActions';
import {connect} from "react-redux";

const Home = ({ ...otherProps }) => {

  const navigate = useNavigate();

  const getLocation = useLocation();

  useEffect(() => {

    if (!otherProps.user.isLoggedIn) {
      otherProps.setUrlRedirect(getLocation.pathname, routes.login);
      // redirect
      navigate(routes.login);
    }
  });

  return (
    <>
      <div className="container px-4 px-lg-5">
        <div className="row gx-4 gx-lg-5 justify-content-center">
          <div className="col-md-12 col-lg-12 col-xl-12 p-5">
            <div className="post-preview text-center">
              <small>Hi Sukanta</small>
              <h1>Welcome to React Blog Application</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

const mapStateToProps = (state) => ({
  user: state.user,
});

const mapDispatchToProps = (dispatch) => ({
  setUrlRedirect: (from, to) => dispatch(urlRedirectSet(from, to)),

});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
