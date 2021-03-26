import React from "react";
import { StyleSheet, Text, View } from "react-native";

import CaretLeft from "react-native-bootstrap-icons/icons/caret-left";
import CaretRight from "react-native-bootstrap-icons/icons/caret-right";
import Calendar from "react-native-bootstrap-icons/icons/calendar";

export default function TopPart({ navigation }) {
    return (
        <View style={styles.topPart}>
            <CaretLeft width="50" height="50" fill="white" />
            <View style={styles.topPartDateWrapper}>
                <Calendar width="20" height="20" fill="white" />
                <Text style={styles.topPartDate}>MARCH 2021</Text>
            </View>
            <CaretRight width="50" height="50" fill="white" />
        </View>
    );
}

const styles = StyleSheet.create({
    topPart: {
        backgroundColor: "#123456",
        width: "100%",
        height: 100,
        borderBottomRightRadius: 30,
        borderBottomLeftRadius: 30,

        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center",
    },
    topPartDate: {
        color: "white",
        fontSize: 30,
        marginLeft: 10,
    },
    topPartDateWrapper: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
});
