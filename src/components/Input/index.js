import React, { useState } from "react";
import {Text, View, Image, TextInput,Pressable } from "react-native";
import { styles } from "./styles";

const Input = ({label,placeholder,isPassword}) => {
    const [isPasswordVisable, setIsPasswordVisable] = useState(false);

    const onEyePressed = () => {
        setIsPasswordVisable(!isPasswordVisable);
    }
   
    return (
       <View style={styles.label}>
            <Text style={styles.container}>{label}</Text>
        <View style={styles.inputContainer}>
            <TextInput secureTextEntry={isPassword && !isPasswordVisable}  placeholder={placeholder} style={styles.input}/>

            {isPassword ? (
                 <Pressable onPress={onEyePressed}>
                 <Image style={styles.eye} source={isPasswordVisable ? require('../../assets/eyeOpen.png') : require('../../assets/eyeHidden.png')} />
                </Pressable>        
            ): null}
           
        </View>
           
       </View>
    )
    
}
export default Input;
