import { StyleSheet } from "react-native";
import { colors } from "../../../../utils/colors";


export const styles = StyleSheet.create ({
    container:{
        padding: 24,

    },
    agreeRow:{
        flexDirection:'row',
        alignItems:'center',

    },
    chackBoxText:{
        color: colors.splashBlue,
        fontWeight: '500',
        marginHorizontal: 13,
    },
    terms:{
        fontWeight: 'bold',
    },
    privacy:{
        fontWeight: 'bold',
    },
    button:{
        marginVertical: 20,

    },
    footerText:{
        color: colors.splashBlue,
        fontWeight: '500',
        marginBottom:30,
        textAlign: 'center',
    }, 
    footerLink:{
        fontWeight:'bold',
    }


      
})