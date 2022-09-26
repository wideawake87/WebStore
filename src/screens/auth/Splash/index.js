import React from "react";
import { Text,Image, View, Pressable } from "react-native";
import Button from "../../../components/Button";
import { styles } from "./styles";

const Splash = () => {
    return (
        <View style={styles.container} >
            <Image resizeMode="contain" style={styles.image} source={require('../../../assets/splashImage.png')}/>

            <View style={styles.titleContainer}>
                <Text style={styles.title}>Moderan stil za vaš moderan život</Text>
                <Text style={[styles.title,styles.innertitle]}>Elektroterm 036 </Text>
                <Text style={styles.title}>Montaža i ugradnja rashladnih uređaja!</Text>
            </View>
            

            <Button title='Registruj se'></Button>

            <Pressable hitSlop={20}>
                <Text style={styles.footerText}> Prijavi se</Text>
            </Pressable>
        </View>
    )
        
    
}

export default Splash;


