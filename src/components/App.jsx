import { React, Suspense, lazy, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Container } from './MyStyles';
import { refreshUserThunk } from 'redux/user/userThunk';
import { PublicRoute } from './MyRoutes/PublicRoute';
import { PrivateRoute } from './MyRoutes/PrivateRoute';
import Navigation from 'components/Navigation/Navigation';
const SignUp = lazy(() => import('../MyPages/SingUp/SignUp'));
const Login = lazy(() => import('../MyPages/Login/Login'));
const Contacts = lazy(() => import('../MyPages/Contacts/Contacts'));

export const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(refreshUserThunk());
  }, [dispatch]);

  return (
    <Container>
      <Suspense>
        <Navigation />
        <Routes>
          <Route path="/" element={<PublicRoute />}>
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
          </Route>
          <Route path="/" element={<PrivateRoute />}>
            <Route path="/contacts" element={<Contacts />} />
          </Route>
        </Routes>
      </Suspense>
    </Container>
  );
};

export default App;
