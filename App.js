import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ChatBot from './src/ChatBot';
export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
        <ChatBot/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
