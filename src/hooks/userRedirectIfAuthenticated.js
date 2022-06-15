import { useEffect } from 'react';
import routes from '../utils/routes';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

/**
 * Redirects to redirectPath if user is authenticated
 * @param redirectPath
 */

function useRedirectIfAuthenticated(redirectPath = routes.home) {

  const user = useSelector((state) => state.user);
  const navigate = useNavigate();

  useEffect(() => {

    if (user.isLoggedIn) {
      navigate(redirectPath);
    }
  }, [user]);

}

export default useRedirectIfAuthenticated;
