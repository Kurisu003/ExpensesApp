import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    TextInput,
} from "react-native";
import React, { useState, useEffect } from "react";

import TopPart from "../Components/Home/TopPart";
import Balance from "../Components/Home/Balance";
import ListDate from "../Components/Home/ListDate";
import ListPoint from "../Components/Home/ListPoint";

import firestore from "@react-native-firebase/firestore";
import { firebase } from "@react-native-firebase/firestore";
import auth from "@react-native-firebase/auth";

const user = firebase.auth().currentUser;

let displayArray = [];

// Creates date variable for usage with storage
var d = new Date();
var t = d.toDateString().split(" ");
var date = t[1] + t[2] + t[3];

let datesArray = [];

export default function Login() {
    const [datesArrayState, setDatesArrayState] = useState();

    function additionHandler() {
        // Checks to see if user is logged in
        if (user) {
            firestore()
                .collection("Users")
                // accesses field of users email
                .doc(user.email)
                .get()
                .then((documentSnapshot) => {
                    if (documentSnapshot.exists) {
                        // Checks to see if array with current date exists
                        // if id doesnt exist, it adds the array
                        if (documentSnapshot.get(date) == undefined) {
                            console.log("Add array");
                        }

                        // Checks again to see if array is there
                        // after its been added
                        if (documentSnapshot.get(date) != undefined) {
                            documentSnapshot
                                .get(date)
                                .forEach((element) => console.log(element));
                        }
                    } else {
                        console.log("fehler, snapshot existiert nicht");
                    }
                });
        }
    }

    useEffect(() => {
        datesArray = [];
        if (user) {
            firestore()
                .collection("Users")
                // accesses field of users email
                .doc(user.email)
                .get()
                .then((documentSnapshot) => {
                    Object.keys(documentSnapshot.data()).map((element) => {
                        datesArray.push( 
                            <ListDate
                                date={element}
                                transactions={documentSnapshot.data()[element]}
                            />
                        );
                        setDatesArrayState(datesArray);
                        // console.log(datesArray)
                    });
                });
        }
    }, []);

    return (
        <View style={{ backgroundColor: "white" }}>
            <TopPart />

            <View style={styles.balanceWrapper}>
                <Balance
                    style="green"
                    balanceAmount="+ € 120"
                    balanceTitle="Starting"
                />
                <Balance
                    style="red"
                    balanceAmount="- € 14.99"
                    balanceTitle="Ending"
                />
            </View>

            <View style={styles.listContainer}>{datesArrayState}</View>

            {/* <TouchableOpacity
                style={{ width: 100, height: 100, backgroundColor: "#123456" }}
                // onPress={() => test()}
            >
                <Text>Test</Text>
            </TouchableOpacity> */}
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
    balanceWrapper: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly",
        width: "100%",
        height: 100,
        marginTop: 25,
        marginBottom: 25,
        // backgroundColor: '#654321'
    },
    listContainer: {
        // backgroundColor: '#123456',
        width: "100%",
        height: '100%',
    },
});
