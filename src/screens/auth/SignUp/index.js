import React, { useState } from "react";
import { View , Text, ScrollView, } from "react-native";
import AuthHeader from "../../../components/AuthHeader";
import ChackBox from "../../../components/ChackBox";
import Input from "../../../components/Input";
import { styles } from "./styles";
import Button from "../../../components/Button";
import Seperator from "../../../components/Seperator";
import GoogleLogin from "../../../components/GoogleLogin";

const SignUp = () => {
    const [chacked, setChacked ] = useState(false);
    const  onSignIn = () => {
        console.log('working')
    }
   
    return (
       <ScrollView style={styles.container}>
            <AuthHeader title="Sign Up"/>

            <Input label="Name" placeholder="Jane Doe"/>
            <Input label="Email" placeholder="example@gmail.com"/>
            <Input isPassword label="Password" placeholder="********"/>


            <View style={styles.agreeRow}>
            <ChackBox chacked={chacked} onChack={setChacked}/>
            <Text style={styles.chackBoxText}> I agree with <Text style={styles.terms} >Terms</Text> & <Text style={styles.privacy} >Privacy</Text> </Text>
            </View>

            <Button style={styles.button}  title="Sing Up"/>

            <Seperator text="Or sign up with"/>

            <GoogleLogin/>

            <Text style={styles.footerText}>
                Already have an account? 
                <Text onPress={onSignIn} style={styles.footerLink}> Sign in</Text>
            </Text>
            
          
       </ScrollView>
    )
    
}
export default React.memo(SignUp);
