import React from 'react';
import { Amplify } from 'aws-amplify';
import { Authenticator } from '@aws-amplify/ui-react';
import AuthApp from './App';
import awsConfig from './aws-exports';

// Configure Amplify
Amplify.configure(awsConfig);

export default function Root(props) {
  return (
    <Authenticator.Provider>
      <AuthApp />
    </Authenticator.Provider>
  );
}