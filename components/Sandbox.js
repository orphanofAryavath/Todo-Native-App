import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default function Sandbox() {
    return (
        <View style={styles.container}>
            <Text style={styles.boxOne}>one</Text>
            <Text style={styles.boxTwo}>two</Text>
            <Text style={styles.boxThree}>three</Text>
            <Text style={styles.boxFour}>four</Text>
            
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
       // flex:1,
        flexDirection: 'row',
        paddingTop:40,
        justifyContent:'space-around',
        alignItems:'flex-end',
        backgroundColor:"#ddd"
    },
    boxOne:{
        backgroundColor:'violet',
        padding:10
    },
    boxTwo:{
        backgroundColor:'gold',
        padding:20
    },
    boxThree:{
        backgroundColor:'coral',
        padding:30
    },
    boxFour:{
        backgroundColor:'skyblue',
        padding:40
    },

})