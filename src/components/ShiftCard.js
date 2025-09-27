import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';
import { FontAwesome } from '@fortawesome/react-native-fontawesome';
import { faSun, faMoon, faSunrise } from '@fortawesome/free-solid-svg-icons';

const getIconForShift = (iconName) => {
  switch (iconName) {
    case 'sunrise':
      return faSunrise;
    case 'sun':
      return faSun;
    case 'moon':
      return faMoon;
    default:
      return faSun;
  }
};

const ShiftCard = ({ shift }) => {
  const renderEmployees = () => {
    const visibleEmployees = shift.employees.slice(0, 3);
    const remainingCount = shift.additionalCount || 0;

    return (
      <View style={styles.employeesContainer}>
        <View style={styles.employeeAvatars}>
          {visibleEmployees.map((employee, index) => (
            <Image
              key={employee.id}
              source={{ uri: employee.avatar }}
              style={styles.employeeAvatar}
            />
          ))}
          {remainingCount > 0 && (
            <View style={styles.additionalCount}>
              <Text style={styles.additionalCountText}>+{remainingCount}</Text>
            </View>
          )}
        </View>
      </View>
    );
  };

  const renderStatus = () => {
    if (shift.status === 'missing') {
      return (
        <View style={styles.statusContainer}>
          <Ionicons name="add" size={12} color="#F44336" />
          <Text style={styles.missingText}>{shift.missingText}</Text>
        </View>
      );
    }
    
    if (shift.task) {
      return (
        <View style={styles.statusContainer}>
          <Ionicons name="calendar" size={12} color="#666666" />
          <Text style={styles.taskText}>{shift.task}</Text>
        </View>
      );
    }
    
    return null;
  };

  return (
    <TouchableOpacity style={[styles.card, { backgroundColor: shift.backgroundColor }]}>
      <View style={[styles.cardContent, { backgroundColor: shift.backgroundColor }]}>
        <View style={styles.iconSection}>
          <View style={[styles.iconContainer, { backgroundColor: shift.iconColor }]}>
            <FontAwesome 
              icon={getIconForShift(shift.iconName)} 
              size={12} 
              color="#FFFFFF" 
            />
          </View>
        </View>

        <Text style={styles.shiftTitle}>{shift.title}</Text>

        {renderEmployees()}

        {renderStatus()}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 4,
    marginBottom: 1,
    padding: 6,
    borderLeftWidth: 3,
    borderLeftColor: '#20B2AA',
    flex: 1,
    minHeight: 40,
    opacity: 1,
    backdropFilter: 'none',
    filter: 'none',
    zIndex: 999999,
    elevation: 999999,
    boxShadow: '0 1px 2px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#FFFFFF',
  },
  cardContent: {
    flex: 1,
    opacity: 1,
    backgroundColor: '#FFFFFF',
    width: '100%',
    height: '100%',
    position: 'relative',
    zIndex: 1000000,
  },
  iconSection: {
    alignItems: 'center',
    marginBottom: 4,
  },
  iconContainer: {
    width: 20,
    height: 20,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  shiftTitle: {
    fontSize: 12,
    fontWeight: '600',
    color: '#333333',
    textAlign: 'center',
    marginBottom: 6,
    opacity: 1,
    textShadow: 'none',
    lineHeight: 16,
    fontFamily: 'Roboto, sans-serif',
  },
  timeText: {
    fontSize: 9,
    color: '#5F6368',
    marginBottom: 2,
    opacity: 1,
    textShadow: 'none',
    lineHeight: 12,
    fontFamily: 'Roboto, sans-serif',
  },
  employeesContainer: {
    marginBottom: 6,
    alignItems: 'center',
  },
  employeeAvatars: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  employeeAvatar: {
    width: 16,
    height: 16,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: '#FFFFFF',
    marginBottom: -4,
  },
  additionalCount: {
    width: 16,
    height: 16,
    borderRadius: 8,
    backgroundColor: '#CCCCCC',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#FFFFFF',
    marginBottom: -4,
  },
  additionalCountText: {
    fontSize: 6,
    fontWeight: 'bold',
    color: '#666666',
  },
  statusContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 2,
  },
  missingText: {
    fontSize: 9,
    color: '#F44336',
    fontWeight: '500',
    textAlign: 'center',
    marginTop: 2,
  },
  taskText: {
    fontSize: 9,
    color: '#666666',
    textAlign: 'center',
    marginTop: 2,
  },
});

export default ShiftCard;