import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const LandingPage = ({token}) => {
    if (token) {
        return <Redirect to="/dashboard" />;
      }
      return <Redirect to="/auth" />;
    
}


const mapStateToProps = (state) => {
    return {
      token: state.auth.token,
    };
  };

  
export default connect(mapStateToProps)(LandingPage);

