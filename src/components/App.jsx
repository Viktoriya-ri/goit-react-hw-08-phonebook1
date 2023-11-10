import React, { lazy, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { routes } from 'routes';
import { MainContainer } from './App.styled';
import { AppBar } from './appBar';
import { useDispatch, useSelector } from 'react-redux';
import { RefreshUser, selectIsRefreshing } from 'redux/auth';
import { RestrictedRoute } from 'RestrictedRoute';
import { PrivateRoute } from 'PrivateRoute';
import { Dna} from 'react-loader-spinner';

const Home = lazy(() => import('../pages/Home'));
const Contacts = lazy(() => import('../pages/Contacts'));
const LoginPage = lazy(() => import('../pages/Login'));
const RegisterPage = lazy(() => import('../pages/Register'));

const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(RefreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <Dna
            visible={true}
            height="80"
            width="80"
            ariaLabel="dna-loading"
            wrapperStyle={{color:'black',display:'flex', justifyContent: 'center',
            alignItems:'center',margin: '0 auto', marginTop:'320px'}}
            wrapperClass="dna-wrapper"
          />
  ) : (
    <MainContainer>
      <Routes>
        <Route path={routes.HOME} element={<AppBar />}>
          <Route index element={<Home />} />
          <Route path={routes.CONTACTS} element={<PrivateRoute component={<Contacts/>} redirectTo='/login'/>} />
          <Route path={routes.LOGIN} element={<RestrictedRoute component={<LoginPage/>} redirectTo='/contacts'/>} />
          <Route path={routes.REGISTER} element={<RestrictedRoute component={<RegisterPage/>} redirectTo='/contacts'/>} />
        </Route>
        <Route path="*" element={<Home/>}/>
      </Routes>
    </MainContainer>
  );
};

export default App;
