import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import ListPoint from "./ListPoint";

let listPointsArray = [];

export default function ListTransaction({ transactions }) {
    const [listPointsStates, setListPointsStates] = useState();

    useEffect(() => {
        listPointsArray = [];
        for (let i = 0; i < transactions.length; i += 2) {
            console.log("i: " + i + " trans: " + transactions[i]);
            listPointsArray.push(
                <ListPoint
                    reason={transactions[i]}
                    number={transactions[i + 1]}
                />
            );
            setListPointsStates(listPointsArray);
        }
    }, []);

    return (
        <View>
            {/* {transactions.map(element => {return(<Text>{element}</Text>)})} */}
            {/* {console.log("transactions: " + transactions[0])} */}
            {listPointsStates}
        </View>
    );
}

const styles = StyleSheet.create({
    test: {},
});
