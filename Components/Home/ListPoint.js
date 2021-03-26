import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Settings(props) {
    return (
        <View style={styles.pointsWrapper}>
            <View style={styles.listPointReasonWrapper}>
                <Text style={styles.listPointReason}>{props.reason}</Text>
                {/* ICON */}
                <Text >Card</Text>
            </View>
            <Text
                style={
                    props.number < 0
                        ? styles.listNumberRed
                        : styles.listNumberGreen
                }
            >
                € {props.number}
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    pointsWrapper: {
        width: "100%",
        height: 30,
        // backgroundColor: 'red',
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 20
    },
    listPointReasonWrapper: {
        marginLeft: "3%",
    },
    listPointReason: {
        fontSize: 20,
        color: 'black',
    },
    listNumberRed: {
        textAlign: "center",
        marginRight: "3%",
        backgroundColor: "#EDD3D6",
        color: "#ED5564",
        width: "20%",
        fontSize: 20,
        borderRadius: 999,
    },
    listNumberGreen: {
        textAlign: "center",
        marginRight: "3%",
        backgroundColor: "#E6F3EA",
        color: "#539970",
        width: "20%",
        fontSize: 20,
        borderRadius: 999,
    },
});
