import React from 'react';
import { StyleSheet, View } from 'react-native';
import ShiftCard from './ShiftCard';
import { sampleShifts } from '../data/sampleData';

const ShiftList = ({ selectedDate }) => {
  return (
    <View style={styles.container}>
      {sampleShifts.map((shift) => (
        <ShiftCard key={shift.id} shift={shift} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
});

export default ShiftList;
