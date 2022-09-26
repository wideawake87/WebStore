import { StyleSheet } from "react-native";
import { colors } from "../../../utils/colors";

export const styles = StyleSheet.create ({
    container:{
        backgroundColor: colors.splashBlue,
        paddingHorizontal:20,
        paddingVertical: 8,
        borderRadius:10,
        width:'100%',
        
        
    },
    title:{
        color: colors.white,
        textAlign: 'center',
        fontSize: 16,
        fontWeight: 'bold',

    }
   
})