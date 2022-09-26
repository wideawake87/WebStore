import React, { useEffect } from "react";
import { SafeAreaView, } from "react-native"; 
import SignUp from "./src/screens/auth/SignUp";
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import Config from 'react-native-config';
import SignIn from "./src/screens/auth/SignIn";


WEB_CLIENT_ID = '228156472894-r866dav4gjt1seej0dkchk1qv6j1pm8h.apps.googleusercontent.com'
IOS_CLIENT_ID = '228156472894-p7u2fomtpsttm77tm0selj2r5mj2mpkg.apps.googleusercontent.com'

const App = () =>{
  useEffect(() => {
    GoogleSignin.configure({
      scopes: ['https://www.googleapis.com/auth/drive.readonly'], // what API you want to access on behalf of the user, default is email and profile
      webClientId: WEB_CLIENT_ID, // client ID of type WEB for your server (needed to verify user ID and offline access)
      offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
      iosClientId: IOS_CLIENT_ID, // [iOS] if you want to specify the client ID of type iOS (otherwise, it is taken from GoogleService-Info.plist)
      
    });

  }, [])

 

  return (
    
      <SafeAreaView>
        <SignIn/>
      </SafeAreaView>
   
  );
};


export default App;
