import { StyleSheet } from "react-native";
import colors from "../../styles/colors";
import commonStyles from "../../styles/commonStyles";
import fontFamily from "../../styles/fontFamily";
import { height, moderateScale,moderateScaleVertical, width } from "../../styles/responsiveSize";
const styles = StyleSheet.create({
    friendStyle:{
        ...commonStyles.fontSize20,
        marginHorizontal:moderateScale(15),
        marginTop:moderateScale(10)
    },
    quickStyle:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        marginTop:moderateScale(10),
        borderWidth: 2,
        borderColor: colors.black3,
        backgroundColor:colors.white,
        borderRadius:moderateScale(10),
        padding:moderateScale(10),
        margin:2,
        width:width/1.25
    },
    btnStyle:{
        backgroundColor:colors.black2,
        borderRadius:moderateScale(10),
        marginLeft:moderateScale(20)
    },
    subscribeStyle:{
        height:moderateScale(190),
        width:moderateScale(140),
        borderRadius:20,
        justifyContent:'flex-end',
        
    },
    textStyle:{
        ...commonStyles.fontSize14
    },
    discoverStyle:{
        height:moderateScale(220),
        //width:moderateScale(170),
        padding:moderateScale(20),
        justifyContent:'flex-end',
        flex:1,
        //marginLeft:moderateScale(10),
        //marginRight:moderateScale(10)

    }
    
})
export default styles;