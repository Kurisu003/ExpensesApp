import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    TextInput,
} from "react-native";
import React, { useState, useEffect } from "react";
import auth from "@react-native-firebase/auth";

export default function Login({ navigation }) {
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

    // if (initializing) return null;

    // singIn = (email, password) => {
    function signIn() {
        if (email && password) {
            auth()
                // .signInWithEmailAndPassword(email, password)
                .signInWithEmailAndPassword('dani003@outlook.com', '123456')
                .then(() => {
                    console.log("signed in!");
                })
                .catch((error) => {
                    if (error.code === "auth/email-already-in-use") {
                        console.log("That email address is already in use!");
                    }
                    if (error.code === "auth/invalid-email") {
                        console.log("That email address is invalid!");
                    }
                    console.error(error);
                });
            navigation.navigate("NavStackInit");
        } else {
            console.log("cant be empty");
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
            <TouchableOpacity style={styles.test} onPress={() => signIn()}>
                <Text>Sign in</Text>
            </TouchableOpacity>
            <Text> Login test </Text>
        </View>
    );
    // }

    // return (
    //     <View>
    //         {/* <TouchableOpacity style={styles.test} onPress={() => logOut()}>
    //             <Text>Sign Out</Text>
    //         </TouchableOpacity>
    //         <Text> Welcome {user.email} </Text> */}
    //         {navigation.navigate('NavStackInit')}
    //     </View>
    // );
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
