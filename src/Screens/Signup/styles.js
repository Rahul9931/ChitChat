import commonStyles from '../../styles/commonStyles';
import colors from '../../styles/colors';
import { moderateScale,moderateScaleVertical } from '../../styles/responsiveSize';
import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    headingText:{
        ...commonStyles.fontSize28,
        alignSelf:'center',
        marginBottom:moderateScaleVertical(20),
    },
    forgottextStyle:{
        ...commonStyles.fontSize14,
        color:colors.darkred
    },
    btnstyle:{
        borderRadius:moderateScale(30),
        width:moderateScale(300),
        alignSelf:'center',
        marginTop:20,
        backgroundColor:colors.black3
    }
});
export default styles;
