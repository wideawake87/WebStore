import { StyleSheet } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { colors } from "../../../../utils/colors";

export const styles = StyleSheet.create ({
    container:{
        backgroundColor:colors.white,
        padding: 24,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',   
        
    },
    titleContainer:{
        marginVertical:35,
    },
    image:{
        width: "100%",
        height: 300,
    },
    title:{
        fontSize: 22,
        fontWeight:'bold',
        textAlign: 'center',
        color:colors.black

    },
    innertitle:{
        color: colors.splashBlue,
        textDecorationLine: 'underline',
        fontSize: 40,
    },
    footerText:{
        color: colors.splashBlue,
        textAlign: 'center',
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 80,
        paddingBottom: '100%',
        
    }
})