import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const Header = ({ currentWeek, onWeekChange, onMenuPress }) => {
  return (
    <View style={styles.container}>
      {/* Status Bar */}
      <View style={styles.statusBar}>
        <Text style={styles.statusTime}>9:41</Text>
        <View style={styles.statusIcons}>
          <Ionicons name="cellular" size={16} color="#000" />
          <Ionicons name="wifi" size={16} color="#000" style={styles.statusIcon} />
          <Ionicons name="battery-full" size={16} color="#000" style={styles.statusIcon} />
        </View>
      </View>

      {/* Navigation Bar */}
      <View style={styles.navBar}>
        <TouchableOpacity style={styles.navButton}>
          <Ionicons name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.navTitle}>Ca làm việc</Text>
              <TouchableOpacity style={styles.navButton} onPress={onMenuPress}>
                <Ionicons name="menu" size={24} color="#000" />
              </TouchableOpacity>
      </View>

      {/* Location and Month Selector */}
      <View style={styles.selectorRow}>
        <View style={styles.locationContainer}>
          <Text style={styles.locationText}>Nhoy Tea 1</Text>
          <Ionicons name="chevron-down" size={16} color="#20B2AA" />
        </View>
        
        <View style={styles.monthContainer}>
          <TouchableOpacity>
            <Ionicons name="chevron-back" size={16} color="#20B2AA" />
          </TouchableOpacity>
          <Text style={styles.monthText}>{currentWeek}</Text>
          <TouchableOpacity>
            <Ionicons name="chevron-forward" size={16} color="#20B2AA" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    paddingTop: 0,
  },
  statusBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 8,
    backgroundColor: '#ffffff',
  },
  statusTime: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
  },
  statusIcons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  statusIcon: {
    marginLeft: 4,
  },
  navBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 16,
    backgroundColor: '#ffffff',
  },
  navButton: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  navTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333333',
  },
  selectorRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingBottom: 16,
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  locationText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#20B2AA',
    marginRight: 4,
  },
  monthContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  monthText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#20B2AA',
    marginHorizontal: 8,
  },
});

export default Header;
