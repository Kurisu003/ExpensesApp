import { StyleSheet, Text, View} from "react-native";
import React, { useState, useEffect } from "react";

export default function AddFinances({navigation}) {

    return (
        <View>
            <Text>Finances</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    test: {
        // flex: 1,
        height: 100,
        backgroundColor: "#123456",
        alignItems: "center",
        justifyContent: "center",
    },
    default: {
        width: "100%",
        backgroundColor: "#654321",
    },
});
