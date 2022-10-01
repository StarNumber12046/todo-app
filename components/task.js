import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

const Task = (props)=>{
    return(
        <View style={styles.item}>
            <View style={styles.itemSinistra}>
                <View style={styles.square}></View>
                <Text style={styles.itemText}>{props.text}</Text>
            </View>
            <View style={styles.circular}></View>
        </View>
    )
}
const styles = StyleSheet.create({
    item:{
        backgroundColor: '#FFF',
        padding:20,
        borderRadius: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20
    },
    itemSinistra:{
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap'
    },
    square:{
        width:25,
        height:25,
        backgroundColor: '#20b7bd',
        opacity: 0.5,
        borderRadius: 5,
        marginRight: 15
    },
    itemText:{
        maxWidth: '80%',
    },
    circular:{
        width: 10,
        height: 10,
        borderColor: '#20b7bd',
        borderWidth: 2,
        borderRadius: 5
    },
})

export default Task;