import React from "react";
import { Image, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

const ChackBox = ({chacked, onChack}) => {
   
    return (
        <TouchableOpacity style={styles.container} activeOpacity={0.6} onPress={()=> onChack(!chacked)} >
        {chacked ? (
            <View style={styles.innerContainer}>
                <Image style={styles.chackIcon} source={require('../../assets/chack.png')} />

            </View>
        ) : null}
       </TouchableOpacity>
    )
    
}
export default React.memo (ChackBox);
