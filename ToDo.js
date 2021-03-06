import React, { Component } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from "react-native";


const { width, height } = Dimensions.get("window");

export default class ToDo extends React.Component {
    state = {
        isEditing: false,
        isCompleted: false
    };
    render() {
        const { isCompleted } = this.state;
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={this._toggleComplete}>
                    <View style={[styles.circle, isCompleted ? styles.completedCircle : styles.uncompletedCircle
                        //state가 isCompleted면 styles는 completedCircle state가 isCompleted가 아니면 uncompletedCircle
                    ]}>

                    </View>
                </TouchableOpacity>
                <Text style={styles.text}>Hello I'm a To Do</Text>
            </View>
        );
    }
    _toggleComplete = () => {
        this.setState(prevState => {
            return {
                isCompleted: !prevState.isCompleted //get previous state 그리고 완성의 반대(미완성)을 이전 state에 준다.
            };
        });
    };
}



const styles = StyleSheet.create({
    container: {
        width: width - 50,
        borderBottomColor: "#bbb",
        borderBottomWidth: StyleSheet.hairlineWidth,
        flexDirection: "row",
        alignItems: "center"
    },
    circle: {
        width: 30,
        height: 30,
        borderRadius: 15, //원이 되려면 항상 위드와 하이트의 절반이어야 한다.
        borderWidth: 3,
        marginRight: 20
    },
    completedCircle: {
        borderColor:"#bbb"
    },

    uncompletedCircle: {
        borderColor:"#F23657"
    },

    text: {
        fontWeight: "600",
        fontSize: 20,
        marginVertical: 20
    }
});