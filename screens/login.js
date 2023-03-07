import React, {useState} from "react";
import {
    Text,
    SafeAreaView,
    View,
    TextInput,
    Pressable,
    Alert,
} from "react-native";

import {styles} from "../utils/styles"
const Login = ( {navigation} ) => {

    const [username, setUsername] = useState("");

    const handleSignIn = () => {
        if (username.trim()) {
            //👇🏻 Logs the username to the console
            console.log({ username });
        } else {
            Alert.alert("Username is required.");
        }
    };

    return(
        <SafeAreaView style={styles.loginscreen}>
            <View style={styles.loginscreen}>
                <Text style={styles.loginheading}>Sign in</Text>
                <View style={styles.logininputContainer}>
                    <TextInput
                        autoCorrect={false}
                        placeholder='Enter your username'
                        style={styles.logininput}
                        onChangeText={(value) => setUsername(value)}
                    />
                </View>

                <Pressable onPress={handleSignIn} style={styles.loginbutton}>
                    <View>
                        <Text style={styles.loginbuttonText}>Get Started</Text>
                    </View>
                </Pressable>
            </View>
        </SafeAreaView>
    )

}