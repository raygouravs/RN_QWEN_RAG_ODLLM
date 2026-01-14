import { Label } from "@react-navigation/elements";
import React from "react";
import { KeyboardAvoidingView, View } from "react-native";


export default function HomeScreen() {
    return(
        <KeyboardAvoidingView>
            <View style={{display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#d3e4'}}>
                <Label style = {{color: 'white'}}>
                    This is home screen
                </Label>
            </View>
        </KeyboardAvoidingView>
    );
}