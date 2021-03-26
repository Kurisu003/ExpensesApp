import React from "react";
import { StyleSheet, Text, View } from "react-native";
import ListTransaction from "./ListTransaction";

export default function Settings(props) {
    return (
        <View style={styles.listContainer}>
            <View style={styles.listDate}>
                <Text style={styles.listDateText}>{props.date}</Text>
            </View>
                <ListTransaction transactions={props.transactions} />
        </View>
    );
}

const styles = StyleSheet.create({
    listContainer: {
        width: '100%',
        height: '100%'
    },
    listDate: {
        display: "flex",
        justifyContent: "center",

        width: "100%",
        height: 30,
        backgroundColor: "#F3F7F6",

        marginTop: 10,
    },
    listDateText: {
        marginLeft: "3%",
        color: "#899496",
        fontSize: 20,
    },
});
