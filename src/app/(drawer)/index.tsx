import { AppDarkTheme } from '@/constants/Colors';
import AntDesign from '@expo/vector-icons/AntDesign';
import Entypo from '@expo/vector-icons/Entypo';
import React, { useState } from "react";
import { Alert, StyleSheet, TouchableOpacity, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { KeyboardAwareScrollView, KeyboardStickyView } from 'react-native-keyboard-controller';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
  
export default function HomeScreen() {
    const [isFileUpload, setIsFileUpload] = useState(false);
    const insets = useSafeAreaInsets();

    function handleSend() {
        if(!isFileUpload){
            Alert.alert(
                "Alert",
                "Upload a PDF file to continue... QWEN will then answer your prompts from the PDF...",
                [{text: "OK", onPress: () => console.log('OK')}]
            );
            return;
        }
    }

    function handleFileUpload(){

    }

    return(
        <SafeAreaView style={{flex: 1}} edges={['bottom', 'left', 'right']}>
        <KeyboardAwareScrollView style={{flex: 1}} contentContainerStyle={{ flexGrow: 1, padding: 5 }} bottomOffset={0} keyboardDismissMode='interactive'>
                <View style = {styles.topView}>
                </View>
        </KeyboardAwareScrollView>
        <KeyboardStickyView>
            <View style = {styles.bottomView}>
                    <TouchableOpacity style={styles.uploadBtn}
                        onPress={handleFileUpload}
                    >
                        <Entypo name="attachment" size={18} color="white" />
                    </TouchableOpacity>
                    <TextInput style={styles.inputBar} 
                        placeholder="Ask QWEN-0.5"
                    >
                    </TextInput>
                    <TouchableOpacity style={styles.sendBtn}
                        onPress={handleSend}
                    >
                        <AntDesign name="arrow-up" size={18} color="black" />
                    </TouchableOpacity>
            </View> 
        </KeyboardStickyView>
        </SafeAreaView>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    topView: {
        flex: 1,
        width: '100%',
        alignItems: 'center'
    },
    labelText: {
        flexShrink: 1,
        color: AppDarkTheme.colors.card,
        fontSize: 18,
        textAlign: 'left',
        backgroundColor: AppDarkTheme.colors.primary,
        padding: 5
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
        backgroundColor: AppDarkTheme.colors.border,
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