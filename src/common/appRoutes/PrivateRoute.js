import { isEmpty } from 'lodash';
import { Redirect, Route } from 'react-router-dom';
import { APP_ROUTE } from '../../utils/constants';

const PrivateRoute = ({ component, path, exact = true }) => {
  const user = localStorage.getItem('user');
  console.log('user', user);
  if (isEmpty(user)) {
    console.log('first');
    return <Redirect to={APP_ROUTE.LOGIN} />;
  }
  return <Route path={path} component={component} exact={exact} />;
};
export default PrivateRoute;
