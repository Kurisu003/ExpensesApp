import { StyleSheet, Text, View, TouchableOpacity, Button } from "react-native";
import React, { useState, useEffect } from "react";
import auth from "@react-native-firebase/auth";
import firestore from "@react-native-firebase/firestore";
import { TextInput } from "react-native-gesture-handler";

export default function Register({ navigation }) {
    // Set an initializing state whilst Firebase connects
    // When function is first called it uses initializing as to not
    // render app while initializing
    const [initializing, setInitializing] = useState(true);
    const [user, setUser] = useState();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    // Handle user state changes
    function onAuthStateChanged(user) {
        setUser(user);
        if (initializing) setInitializing(false);
    }

    useEffect(() => {
        const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
        return subscriber; // unsubscribe on unmount
    }, []);

    if (initializing) return null;

    // createUser = function(email, password){
    function createUser() {
        // checks if neither are null
        if (email && password) {
            // Adds user in database
            firestore()
                .collection("Users")
                .doc(email)
                .set({
                    // email: email,
                    total: 0,
                })
                .then(() => {
                    console.log("User added!");
                });
            // Adds user in authentication
            auth()
                .createUserWithEmailAndPassword(email, password)
                .then(() => {
                    console.log("User account created & signed in!");
                    navigation.navigate("Login");
                })
                .catch((error) => {
                    if (error.code === "auth/email-already-in-use") {
                        console.log("That email address is already in use!");
                    }
                    if (error.code === "auth/invalid-email") {
                        console.log("That email address is invalid!");
                    }
                    // if (error.code)
                    console.error(error.code);
                });
        } else {
            console.error("Email and password can't be empty");
        }
    }

    // if (!user) {
    return (
        <View style={{ marginTop: 10 }}>
            <TextInput
                style={styles.TextInput}
                keyboardType={"email-address"}
                placeholder={"example@gmail.com"}
                autoCapitalize={"none"}
                onChangeText={(email) => setEmail(email)}
            />
            <TextInput
                style={styles.TextInput}
                placeholder={"password"}
                secureTextEntry={true}
                autoCapitalize={"none"}
                onChangeText={(password) => setPassword(password)}
            />
            <TouchableOpacity
                style={styles.SignUp}
                onPress={() => createUser()}
            >
                <Text>Sing Up</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.SignUp}
                onPress={() => navigation.navigate("Login")}
            >
                <Text>Sing In</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    SignUp: {
        height: 100,
        backgroundColor: "#8CE296",
        alignItems: "center",
        justifyContent: "center",
    },
    TextInput: {
        width: "100%",
        backgroundColor: "#ADD8E6",
    },
});
