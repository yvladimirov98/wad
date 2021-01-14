import React, { useState } from "react";
import PropTypes from "prop-types";
import Button from "../components/button";
import ErrorLabel from "../components/errorLabel"
import styled from "styled-components";
import { SocialIcon } from "react-social-icons";
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import WebFont from 'webfontloader';

WebFont.load({
  google: {
    families: ['BenchNine:300,400,700', 'sans-serif']
  }
});

const StyledHeading = styled.h2`
    text-align: center;
    margin-top: 2%;
    color: white;
    font-family: 'BenchNine', sans-serif;
  `;

  const StyledSocialIconArea = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    a: {
      cursor: pointer;
    }
  `;



function LoginForm(props) {
  
  const {buttonText, onSubmit, serverError, onSocialLogin} = props;
  const [displayEmail, setDisplayEmail] = useState(false);

  //console.log(onSocialLogin)
  const loginFormSchema = yup.object().shape({
    email: yup.string().email('please enter a valid email').required('please enter a email'),
    password: yup.string().required('please enter a password').min(5, 'password must be 5 characters long')
  })


  const { register, handleSubmit,  errors } = useForm({validationSchema:loginFormSchema});
  

  const handleClick = e => {
    e.preventDefault();
    setDisplayEmail(!displayEmail);

  }

  const handleInnerSubmit = data => { onSubmit(data) }
  const errorBorder = error => error && ({borderColor: 'red'})
  const handleSocialClick = provider => {
    //console.log(onSocialLogin)
    onSocialLogin(provider)
  }

  return (
    <React.Fragment>
      <StyledSocialIconArea>
        <SocialIcon onClick={() => handleSocialClick("facebook")} network="facebook" />
        <StyledHeading> OR </StyledHeading>
        <SocialIcon onClick={() => handleSocialClick("google")} network="google" />
      </StyledSocialIconArea>
      
    </React.Fragment>
  );
}

LoginForm.propTypes = {
  buttonText: PropTypes.string,
  onSubmit: PropTypes.func.isRequired,
  onSocialLogin: PropTypes.func.isRequired,
  error: PropTypes.string
};

LoginForm.defaultProps = {
  buttonText: "JOIN",
  serverError: '',
  
};

export default LoginForm;
