import React from 'react';
import { StyleSheet, View, StatusBar, SafeAreaView } from 'react-native';
import WeeklyScheduleScreen from './src/screens/WeeklyScheduleScreen';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />
      <WeeklyScheduleScreen />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
});
