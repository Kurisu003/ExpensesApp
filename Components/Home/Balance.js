import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function StartingBalance(props) {

    return (
        <View style={styles.startingBalanceWrapper}>
            <Text style={styles.balanceText}>{props.balanceTitle} balance:</Text>
            <Text style={styles.balanceText, props.style === 'green' ? styles.greenText : styles.redText}>{props.balanceAmount}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    startingBalanceWrapper: {
        borderWidth: 2,
        borderRadius: 10,
        borderColor: 'black',
        justifyContent: 'center',
        alignItems: 'center',
        width: '40%',
        height: '100%',
    },
    balanceText: {
        textAlign: 'center',
        fontSize: 15
    },
    greenText: {
        color: 'green',
        fontSize: 20
    },
    redText: {
        color: 'red',
        fontSize: 20
    }
});
