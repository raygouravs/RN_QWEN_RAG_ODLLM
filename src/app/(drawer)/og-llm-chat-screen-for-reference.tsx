import React, { useState } from 'react';
import {
  ActivityIndicator, KeyboardAvoidingView, Platform,
  ScrollView,
  StyleSheet, Text,
  TextInput, TouchableOpacity,
  View
} from 'react-native';
import { useLLM } from 'react-native-executorch';

// 4-BIT QUANTIZED URLS
const BASE_URL = 'https://huggingface.co/software-mansion/react-native-executorch-qwen-2.5/resolve/main';
const INT4_MODEL_URL = `${BASE_URL}/qwen-2.5-0.5B/quantized/qwen2_5_0_5b_8da4w.pte`;
const TOKENIZER_URL = `${BASE_URL}/tokenizer.json`;
const CONFIG_URL = `${BASE_URL}/tokenizer_config.json`;

export default function Home() {
  const [prompt, setPrompt] = useState('');

  const llm = useLLM({
    model: {
      modelSource: INT4_MODEL_URL,
      tokenizerSource: TOKENIZER_URL,
      tokenizerConfigSource: CONFIG_URL,
    },
  });

  const handleSend = async () => {
    if (!prompt || !llm.isReady || llm.isGenerating) return;
    try {
      await llm.sendMessage(prompt);
      setPrompt('');
    } catch (e) {
      console.error("AI Error:", e);
    }
  };

  return (
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Qwen 0.5B (4-bit INT4)</Text>
        
        {!llm.isReady && (
          <View style={styles.loaderContainer}>
            <ActivityIndicator size="small" color="#007AFF" />
            <Text style={styles.loaderText}>
              {llm.downloadProgress > 0 
                ? `Downloading: ${Math.round(llm.downloadProgress * 100)}%` 
                : 'Initializing...'}
            </Text>
          </View>
        )}
      </View>

      <ScrollView style={styles.chatContainer} contentContainerStyle={{ paddingBottom: 20 }}>
        {llm.messageHistory.map((msg, i) => (
          <View key={i} style={[styles.bubble, msg.role === 'user' ? styles.userBubble : styles.aiBubble]}>
            <Text style={msg.role === 'user' ? styles.whiteText : styles.blackText}>
              {msg.content}
            </Text>
          </View>
        ))}
        {llm.isGenerating && (
          <View style={styles.aiBubble}>
             <Text style={styles.italicText}>Generating...</Text>
          </View>
        )}
      </ScrollView>

      <View style={styles.inputBar}>
        <TextInput
          style={styles.input}
          placeholder={llm.isReady ? "Ask me anything..." : "Loading model..."}
          value={prompt}
          onChangeText={setPrompt}
          editable={llm.isReady && !llm.isGenerating}
        />
        <TouchableOpacity 
          onPress={handleSend} 
          disabled={!llm.isReady || llm.isGenerating}
          style={[styles.sendBtn, (!llm.isReady || llm.isGenerating) && styles.btnDisabled]}
        >
          <Text style={styles.sendBtnText}>Send</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f9f9f9' },
  header: { padding: 20, paddingTop: 50, backgroundColor: '#fff', borderBottomWidth: 1, borderColor: '#eee', alignItems: 'center' },
  title: { fontSize: 18, fontWeight: 'bold' },
  loaderContainer: { flexDirection: 'row', alignItems: 'center', marginTop: 8 },
  loaderText: { marginLeft: 8, fontSize: 12, color: '#666' },
  chatContainer: { flex: 1, padding: 15 },
  bubble: { padding: 12, borderRadius: 20, marginVertical: 4, maxWidth: '85%' },
  userBubble: { alignSelf: 'flex-end', backgroundColor: '#007AFF' },
  aiBubble: { alignSelf: 'flex-start', backgroundColor: '#E9E9EB' },
  whiteText: { color: '#fff' },
  blackText: { color: '#000' },
  italicText: { fontStyle: 'italic', color: '#666' },
  inputBar: { flexDirection: 'row', padding: 12, backgroundColor: '#fff', borderTopWidth: 1, borderColor: '#eee' },
  input: { flex: 1, height: 40, backgroundColor: '#f0f0f0', borderRadius: 20, paddingHorizontal: 15 },
  sendBtn: { marginLeft: 10, backgroundColor: '#007AFF', paddingHorizontal: 20, borderRadius: 20, justifyContent: 'center' },
  sendBtnText: { color: '#fff', fontWeight: 'bold' },
  btnDisabled: { backgroundColor: '#ccc' }
});