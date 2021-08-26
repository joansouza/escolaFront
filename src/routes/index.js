import React from 'react';
import { Switch } from 'react-router-dom';
import { toast } from 'react-toastify';
import Login from '../pages/Login/index';
import Page404 from '../pages/Page404/index';
import MyRoute from './MyRoute';

export default function Routes() {
  toast.success('deu certo !');
  toast.error('deu ruim !');
  toast.warn('deu ruim !');
  return (
    <Switch>
      <MyRoute exact path='/' component={Login} />
      <MyRoute path='*' component={Page404} />
    </Switch>
  );
}
