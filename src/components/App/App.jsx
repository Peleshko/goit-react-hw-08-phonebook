import { useEffect, Suspense, lazy } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Switch } from 'react-router-dom';
import AppBar from '../AppBar';
import Container from '../Container';
import PrivateRoute from '../PrivateRoute';
import PublicRoute from '../PublicRoute';
import { fetchCurrentUser } from '../../redux/auth/auth-operations';
import authSelectors from '../../redux/auth/auth-selectors';

const HomePage = lazy(() => import('../../pages/HomePage'));
const RegisterPage = lazy(() => import('../../pages/RegisterPage'));
const LoginPage = lazy(() => import('../../pages/LoginPage'));
const ContactsPage = lazy(() => import('../../pages/ContactsPage'));

export default function App() {
  const dispatch = useDispatch();
  const isFetchingCurrentUser = useSelector(authSelectors.getIsFetchingCurrent);

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  return (
    <Container>
      {!isFetchingCurrentUser && (
        <>
          <AppBar />

          <Switch>
            <Suspense fallback={<p>Loading...</p>}>
              <PublicRoute exact path="/">
                <HomePage />
              </PublicRoute>

              <PublicRoute
                exact
                path="/register"
                redirectTo="/contacts"
                restricted
              >
                <RegisterPage />
              </PublicRoute>

              <PublicRoute
                exact
                path="/login"
                redirectTo="/contacts"
                restricted
              >
                <LoginPage />
              </PublicRoute>

              <PrivateRoute path="/contacts" redirectTo="/login">
                <ContactsPage />
              </PrivateRoute>
            </Suspense>
          </Switch>
        </>
      )}
    </Container>
  );
}
