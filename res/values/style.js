import { StyleSheet } from "react-native-web";
import colors from "./colors";
import fonts from "./fonts";

export default StyleSheet.create({
    root: {
        paddingTop: 15,
        paddingBottom: 15
      },
      viewCenter: {
        flexDirection: 'center-reverse', 
        justifyContent: 'center', 
        alignItems: 'center',
        padding: 30
      },
      textHeader: {
        padding: 10,
        alignSelf: 'center',
        fontSize:25,
        textShadowColor: 'white',
        textDecorationColor: 'white',
        fontFamily: fonts.MontserratBold,
      }
});