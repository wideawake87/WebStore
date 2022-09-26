import React from "react";
import { Text,Image, View, Pressable } from "react-native";
import Button from "../../../components/Button";
import { styles } from "./styles";

const Splash = () => {
    return (
        <View style={styles.container} >
            <Image resizeMode="contain" style={styles.image} source={require('../../../assets/splashImage.png')}/>

            <View style={styles.titleContainer}>
                <Text style={styles.title}>You'll Find</Text>
                <Text style={[styles.title,styles.innertitle]}>All you need</Text>
                <Text style={styles.title}>Here!</Text>
            </View>
            

            <Button title='Sign Up'></Button>

            <Pressable hitSlop={20}>
                <Text style={styles.footerText}> Sign In</Text>
            </Pressable>
        </View>
    )
        
    
}

export default Splash;


