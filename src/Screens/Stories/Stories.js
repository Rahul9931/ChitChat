//import liraries
import React, { useState, useEffect } from 'react';
import { View,TouchableOpacity, Text,ImageBackground,Image,ScrollView } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import HomeHeader from '../../Components/HomeHeader';
import Roundimg from '../../Components/Roundimg';
import WrapperContainer from '../../Components/WrapperContainer';
import {data} from '../../Constants/data'
import Imagespath from '../../Constants/Imagespath';
import { moderateScale,moderateScaleVertical } from '../../styles/responsiveSize';
import actions from '../../Redux/actions';
import styles from './styles';
import strings from '../../Constants/Languages'
import commonStyles from '../../styles/commonStyles';
import colors from '../../styles/colors';
const Stories = () => {
    const [state, setState] = useState({
        isLoading:false
    });
    const {isLoading}=state
    const renderStories=({item,index})=>{
        return(
            <View>
                <Roundimg 
                image={item.img}
                size={80}
                />
                <Text>{item.name}</Text>
            </View>
        )
    }
    const renderQuickAdd=({item,index})=>{
        return(
            <View style={styles.quickStyle}>
                <View style={{flexDirection:'row',alignItems:'center'}}>
                <Roundimg 
                image={item.img}
                size={50}
                />
                <View>
                <Text style={styles.textStyle}>{item.name}</Text>
                <Text style={styles.textStyle}>Recently Joined</Text>
                </View>
                </View>
                <View style={{flexDirection:'row',alignItems:'center'}}>
                <TouchableOpacity style={styles.btnStyle}>
                    <Text style={{...commonStyles.fontSize14}}>+Add</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{marginLeft:moderateScale(10)}}>
                    <Image source={Imagespath.close18} />
                </TouchableOpacity>
                </View>
            </View>
        )
    }
    const renderSubscription=({item,index})=>{
        return(
            <ImageBackground
            source={{uri: item.img}}
            style={styles.subscribeStyle}
            >
            <View style={{marginLeft:moderateScale(10)}}>
            <Text style={{...commonStyles.fontSize14 ,color:colors.white}}>{item.name}</Text>
            <Text style={{...commonStyles.fontSize14 ,color:colors.white}}>Mon</Text>
            </View>
            </ImageBackground>
        )
    }
    const renderDiscover=({item,index})=>{
        return(
            <ImageBackground
            source={{uri: item.img}}
            style={styles.discoverStyle}
            borderRadius={10}
            >
            <View style={{marginLeft:moderateScale(10)}}>
            <Text style={{...commonStyles.fontSize14 ,color:colors.white}}>{item.name}</Text>
            <Text style={{...commonStyles.fontSize14 ,color:colors.white}}>Mon</Text>
            </View>
            </ImageBackground>
        )
    }
    return (
        <WrapperContainer style={{padding:0}} isLoading={isLoading}>
            <HomeHeader centerText={strings.STORIES} />
            <ScrollView showsVerticalScrollIndicator={false} style={{flex: 1}}>
            <View>
            <Text style={styles.friendStyle}>{strings.FRIENDS}</Text>
            <FlatList 
            horizontal
            showsHorizontalScrollIndicator={false}
            data={data}
            renderItem={renderStories}
            keyExtractor={(item,index)=>item.id.toString()}
            ItemSeparatorComponent={()=><View style={{marginLeft:moderateScale(10)}}></View>}
            ListHeaderComponent={()=><View style={{marginLeft:moderateScale(25)}}></View>}
            ListFooterComponent={()=><View style={{marginLeft:moderateScale(25)}}></View>}
            />
            </View>
            <View>
            <Text style={styles.friendStyle}>{strings.QUICK_ADD}</Text>
            <FlatList 
            horizontal
            showsHorizontalScrollIndicator={false}
            data={data}
            renderItem={renderQuickAdd}
            keyExtractor={(item,index)=>item.id.toString()}
            ItemSeparatorComponent={()=><View style={{marginLeft:moderateScale(10)}}></View>}
            ListHeaderComponent={()=><View style={{marginLeft:moderateScale(25)}}></View>}
            ListFooterComponent={()=><View style={{marginLeft:moderateScale(25)}}></View>}
            />
            </View>
            <View>
            <Text style={styles.friendStyle}>{strings.SUBSCRIPTION}</Text>
            <FlatList 
            horizontal
            showsHorizontalScrollIndicator={false}
            data={data}
            renderItem={renderSubscription}
            keyExtractor={(item,index)=>item.id.toString()}
            ItemSeparatorComponent={()=><View style={{marginLeft:moderateScale(10)}}></View>}
            ListHeaderComponent={()=><View style={{marginLeft:moderateScale(25)}}></View>}
            ListFooterComponent={()=><View style={{marginLeft:moderateScale(25)}}></View>}
            />
            </View>
            <View>
            <Text style={styles.friendStyle}>{strings.DISCOVER}</Text>
            <FlatList 
            showsHorizontalScrollIndicator={false}
            numColumns={2}
            data={data}
            renderItem={renderDiscover}
            keyExtractor={(item,index)=>item.id.toString()}
            ItemSeparatorComponent={()=><View style={{margin:moderateScale(10)}}></View>}
            />
            </View>
            </ScrollView>
        </WrapperContainer>
    );
};
export default Stories;
