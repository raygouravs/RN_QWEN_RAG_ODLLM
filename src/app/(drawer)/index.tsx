import { AppDarkTheme } from '@/constants/Colors';
import Entypo from '@expo/vector-icons/Entypo';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import React, { useState } from "react";
import { KeyboardAvoidingView, StyleSheet, TouchableOpacity, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
  
export default function HomeScreen() {
    const [isFileUpload, setIsFileUpload] = useState();
    const insets = useSafeAreaInsets();

    function handleSend() {

    }

    function handleFileUpload(){

    }

    return(
        <SafeAreaView style={{flex: 1}}>
        <KeyboardAvoidingView style={{flex: 1}} behavior='height'>
            <View style = {{flex: 1}}>
                <View style = {styles.topView}>
                </View>
            </View>  
            <View style = {{...styles.bottomView, marginBottom: insets.bottom + 100}}>
                    <TouchableOpacity style={styles.uploadBtn}
                        onPress={handleFileUpload}
                    >
                        <Entypo name="attachment" size={18} color="white" />
                    </TouchableOpacity>
                    <TextInput style={styles.inputBar} 
                        placeholder="Ask me anything..."
                    >
                    </TextInput>
                    <TouchableOpacity style={styles.sendBtn}
                        onPress={handleSend}
                    >
                        <MaterialCommunityIcons name="upload-circle-outline" size={18} color="white" />
                    </TouchableOpacity>
            </View> 
        </KeyboardAvoidingView>
        </SafeAreaView>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    topView: {
        flex: 1
    },
    bottomView: {
        flexDirection: 'row',
        backgroundColor: AppDarkTheme.colors.primary,
        borderRadius: 50,
        alignItems: 'center',
        paddingLeft: 5,
        paddingRight: 5,
        paddingTop: 5,
        paddingBottom: 5
    },
    inputBar: {
        flex: 1,
        backgroundColor: AppDarkTheme.colors.primary,
        marginLeft: 5,
        marginRight: 5
    },
    sendBtn: {
        backgroundColor: '#00274F',
        alignItems: 'center',
        justifyContent: 'center',
        height: 40,
        width: 40,
        borderRadius: 20
    },
    uploadBtn: {
        backgroundColor: '#636363',
        alignItems: 'center',
        justifyContent: 'center',
        height: 40,
        width: 40,
        borderRadius: 20
    }
});