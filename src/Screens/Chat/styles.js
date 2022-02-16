import { StyleSheet } from "react-native";
import colors from "../../styles/colors";
import commonStyles from "../../styles/commonStyles";
import fontFamily from "../../styles/fontFamily";
import { height, moderateScale,moderateScaleVertical } from "../../styles/responsiveSize";
const styles = StyleSheet.create({
    flatStyle:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        marginLeft:moderateScale(20),
        marginTop:moderateScale(10)
    },
    nameStyle:{
        ...commonStyles.fontSize20,
        marginLeft:moderateScale(20),
        
    },
    newSnapstyle:{
        marginHorizontal:moderateScale(10),
        color:colors.darkred,
        fontFamily:fontFamily.bold
    },
    timeStyle:{
        ...commonStyles.fontSize14,
        color:colors.black4,
        marginHorizontal:moderateScale(6)
    },
    streakStyle:{
        marginHorizontal:moderateScale(6),
        fontFamily:fontFamily.bold
    },
    lineStyle:{
        borderBottomWidth:1.3,
        borderBottomColor:colors.black1,
        marginVertical:moderateScaleVertical(10)
    },
    verticleLine:{
        borderRightWidth:1,
        borderColor:'black',
        height:moderateScale(20),
        marginHorizontal:moderateScale(5)
    },
    chatStyle:{
        tintColor:colors.black
    }
});
export default styles;