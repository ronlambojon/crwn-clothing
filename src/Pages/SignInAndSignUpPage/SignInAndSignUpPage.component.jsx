import React from 'react';

import SignIn from '../../Components/SignIn/SignIn.component';
import SignUp from '../../Components/SignUp/SignUp.component';

import { SignInAndSignUpPageContainer } from './SignInAndSignUpPage.styles';

const SignInAndSignUpPage = () => (
  <SignInAndSignUpPageContainer>
    <SignIn />
    <SignUp />
  </SignInAndSignUpPageContainer>
);

export default SignInAndSignUpPage