import React from "react";
import {Text, ScrollView, } from "react-native";
import AuthHeader from "../../../components/AuthHeader";
import Input from "../../../components/Input";
import { styles } from "./styles";
import Button from "../../../components/Button";
import Seperator from "../../../components/Seperator";
import GoogleLogin from "../../../components/GoogleLogin";

const SignIn = () => {
    const  onSignUp = () => {
        console.log('Test to se Changes')
    }
   
    return (
       <ScrollView style={styles.container}>
            <AuthHeader title="Sign In"/>

            <Input label="Email" placeholder="example@gmail.com"/>
            <Input isPassword label="Password" placeholder="********"/>

            <Button style={styles.button}  title="Sing In"/>

            <Seperator text="Or sign in with"/>

            <GoogleLogin/>

            <Text style={styles.footerText}>
                Don't have an account? 
                <Text onPress={onSignUp} style={styles.footerLink}> Sign up</Text>
            </Text>
            
          
       </ScrollView>
    )
    
}
export default React.memo(SignIn);
