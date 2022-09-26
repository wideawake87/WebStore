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
        height:'100%'
    },
    titleContainer:{
        marginVertical:54,
    },
    image:{
        width: "100%",
        height: 200,
    },
    title:{
        fontSize: 40,
        fontWeight:'bold',
        textAlign: 'center',

    },
    innertitle:{
        color: colors.orange,
        textDecorationLine: 'underline'
    },
    footerText:{
        color: colors.blue,
        textAlign: 'center',
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 30,
    }
})