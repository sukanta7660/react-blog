import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { urlRedirectRemove } from '../store/modules/url/urlActions';

/**
 * Redirects to intended path where user tried to go but got intercepted (for login)
 * @param redirectPath  setting value to this will not redirect to intended but the provided path
 */

function useRedirectToIntended(redirectPath = false) {

  const { user, url } = useSelector((state) => ({
    user: state.user,
    url: state.url
  }));
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {

    // only redirect if user is logged in & already user is redirected
    if (user.isLoggedIn && url.isRedirected) {

      // clear redirect
      dispatch(urlRedirectRemove());

      // redirect to provided path or the intended url
      const redirectTo = redirectPath || url.redirectedFrom;

      navigate(redirectTo);
    }
  }, [user]);

}

export default useRedirectToIntended;
