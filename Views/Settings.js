import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    TextInput,
} from "react-native";
import React, { useState, useEffect } from "react";
import auth from "@react-native-firebase/auth";

export default function Settings({ navigation }) {
    
    const [user, setUser] = useState();

    
    // Handle user state changes
    function onAuthStateChanged(user) {
        setUser(user);
    }

    useEffect(() => {
        const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
        return subscriber; // unsubscribe on unmount
    }, []);

    function logOut() {
        auth()
            .signOut()
            .then(() => console.log("User signed out!"));
    }

    return (
        <View>
            <Text>Settings</Text>
            <TouchableOpacity style={styles.test} onPress={() => logOut()}>
                <Text>Log out</Text>
            </TouchableOpacity>
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
