import React, { useState, useEffect } from 'react';
import { Authenticator } from '@aws-amplify/ui-react';
import { getCurrentUser } from '@aws-amplify/auth';
import axios from 'axios';
import '@aws-amplify/ui-react/styles.css';

const AuthApp = () => {
  const [user, setUser] = useState(null);

  const saveUserToBFF = async (user) => {
    try {
      await axios.post('http://localhost:3001/api/users', {
        email: user.attributes.email,
        name: user.attributes.name
      }, {
        headers: {
          'Authorization': `Bearer ${(await getCurrentUser()).getSignInUserSession().getIdToken().getJwtToken()}`
        }
      });
      console.log('User data sent to BFF');
    } catch (error) {
      console.error('Error sending user data to BFF:', error);
    }
  };

  useEffect(() => {
    if (user) {
      saveUserToBFF(user);
    }
  }, [user]);

  return (
    <Authenticator>
      {({ signOut, user: authUser }) => {
        if (authUser && !user) {
          setUser(authUser);
        }
        
        // You can customize this to return whatever UI you want
        // after successful authentication
        return (
          <div>
            <h1>Welcome {user?.attributes?.email}</h1>
            <button onClick={signOut}>Sign Out</button>
          </div>
        );
      }}
    </Authenticator>
  );
};

export default AuthApp;