import React from 'react'
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native'
import {MaterialIcons} from '@expo/vector-icons';

export default function Todo({item,pressHandler}) {
    return (
        <TouchableOpacity onPress={() => pressHandler(item.key)}>
            <View style={styles.item}>
                <MaterialIcons name='delete' size={18} color='#333'/>
                <Text style={styles.itemText}>{item.text}</Text></View>
           
        </TouchableOpacity>
            
        
    )
}

const styles = StyleSheet.create({
    item:{
        padding:16,
        marginTop: 16,
        borderColor:'#bbb',
        borderWidth: 1,
        borderStyle: 'solid',
        flexDirection: 'row'
    },
    itemText:{
        marginLeft: 10,
    }
})