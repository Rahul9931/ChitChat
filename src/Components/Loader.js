//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet,ActivityIndicator,Modal } from 'react-native';

// create a component
const Loader = ({isLoading=false}) => {
    if (isLoading){
        return (
            <Modal>
            <View style={styles.loaderstyle}>
            <ActivityIndicator size={50}/>
            </View>
            </Modal>
        )
    }
    return null;
    
};

// define your styles
const styles = StyleSheet.create({
    loaderstyle: {
        position: 'absolute',
        left:0,
        right:0,
        top: 0,
        bottom: 0,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'rgba(0,0,0,0.3)',
    },
});

//make this component available to the app
export default Loader;
