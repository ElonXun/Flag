'use strict';

import { StackNavigator } from 'react-navigation';
import Login from '../account/Login';
import SignUp from '../account/SignUp';
import VerifyCode from '../account/VerifyCode';
import SetPassword from '../account/SetPassword';

const AccountNavigator = StackNavigator({
  LoginPage: { screen: Login },
  SignUpPage: { screen: SignUp },
  VerifyCodePage: { screen: VerifyCode },
  SetPasswordPage: { screen: SetPassword },
}); 

export default AccountNavigator;



