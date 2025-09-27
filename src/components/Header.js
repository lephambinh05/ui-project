import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { HEADER_CONSTANTS } from '../constants/shiftTimes';

const Header = ({ currentWeek, onWeekChange, onMenuPress }) => {
  const handlePreviousWeek = () => {
    const newWeek = new Date(currentWeek);
    newWeek.setDate(newWeek.getDate() - 7);
    onWeekChange(newWeek);
  };

  const handleNextWeek = () => {
    const newWeek = new Date(currentWeek);
    newWeek.setDate(newWeek.getDate() + 7);
    onWeekChange(newWeek);
  };

  const formatWeekRange = (weekDate) => {
    const dayOfWeek = weekDate.getDay();
    const monday = new Date(weekDate);
    monday.setDate(weekDate.getDate() - (dayOfWeek === 0 ? 6 : dayOfWeek - 1));
    
    const weekEnd = new Date(monday);
    weekEnd.setDate(monday.getDate() + 6);
    
    const startStr = monday.toLocaleDateString('vi-VN', { day: '2-digit', month: '2-digit' });
    const endStr = weekEnd.toLocaleDateString('vi-VN', { day: '2-digit', month: '2-digit' });
    return `${startStr} - ${endStr}`;
  };
  return (
    <View style={styles.container}>
      {/* Status Bar */}
      <View style={styles.statusBar}>
        <Text style={styles.statusTime}>{HEADER_CONSTANTS.STATUS_TIME}</Text>
        <View style={styles.statusIcons}>
          <Ionicons name={HEADER_CONSTANTS.STATUS_ICONS.CELLULAR} size={16} color="#000" />
          <Ionicons name={HEADER_CONSTANTS.STATUS_ICONS.WIFI} size={16} color="#000" style={styles.statusIcon} />
          <Ionicons name={HEADER_CONSTANTS.STATUS_ICONS.BATTERY} size={16} color="#000" style={styles.statusIcon} />
        </View>
      </View>

      {/* Navigation Bar */}
      <View style={styles.navBar}>
        <TouchableOpacity style={styles.navButton}>
          <Ionicons name={HEADER_CONSTANTS.NAV_ICONS.BACK} size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.navTitle}>{HEADER_CONSTANTS.NAV_TITLE}</Text>
              <TouchableOpacity style={styles.navButton} onPress={onMenuPress}>
                <Ionicons name={HEADER_CONSTANTS.NAV_ICONS.MENU} size={24} color="#000" />
              </TouchableOpacity>
      </View>

      {/* Location and Month Selector */}
      <View style={styles.selectorRow}>
        <View style={styles.locationContainer}>
          <Text style={styles.locationText}>{HEADER_CONSTANTS.LOCATION}</Text>
          <Ionicons name={HEADER_CONSTANTS.SELECTOR_ICONS.CHEVRON_DOWN} size={16} color="#20B2AA" />
        </View>
        
        <View style={styles.monthContainer}>
          <TouchableOpacity onPress={handlePreviousWeek}>
            <Ionicons name={HEADER_CONSTANTS.SELECTOR_ICONS.CHEVRON_BACK} size={16} color="#20B2AA" />
          </TouchableOpacity>
          <Text style={styles.monthText}>{formatWeekRange(currentWeek)}</Text>
          <TouchableOpacity onPress={handleNextWeek}>
            <Ionicons name={HEADER_CONSTANTS.SELECTOR_ICONS.CHEVRON_FORWARD} size={16} color="#20B2AA" />
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
