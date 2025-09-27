import { SHIFT_TIMES, EMPLOYEE_NAMES, AVATAR_URLS } from '../constants/shiftTimes';
import { COLORS } from '../constants/colors';

// Generate fixed shift data based on current date
const generateShiftsForDate = (date) => {
  const dayOfWeek = date.getDay();
  const isWeekend = dayOfWeek === 0 || dayOfWeek === 6;
  
  // Different shift patterns for weekdays vs weekends
  if (isWeekend) {
    return [
      {
        id: `${date.getDate()}-1`,
        title: 'Ca sáng',
        startTime: SHIFT_TIMES.MORNING.START,
        endTime: SHIFT_TIMES.MORNING.END,
        backgroundColor: COLORS.MORNING_BG,
        iconColor: COLORS.MORNING_ICON,
        iconName: 'sunrise',
        employees: [
          { id: 1, name: EMPLOYEE_NAMES[0], avatar: AVATAR_URLS[0] },
          { id: 2, name: EMPLOYEE_NAMES[1], avatar: AVATAR_URLS[1] },
        ],
        status: 'normal'
      },
      {
        id: `${date.getDate()}-2`,
        title: 'Ca trưa',
        startTime: SHIFT_TIMES.AFTERNOON.START,
        endTime: SHIFT_TIMES.AFTERNOON.END,
        backgroundColor: COLORS.AFTERNOON_BG,
        iconColor: COLORS.AFTERNOON_ICON,
        iconName: 'sun', // mặt trời
        employees: [
          { id: 3, name: EMPLOYEE_NAMES[2], avatar: AVATAR_URLS[2] },
        ],
        status: 'missing',
        missingText: 'Thiếu nv'
      },
      {
        id: `${date.getDate()}-3`,
        title: 'Ca tối',
        startTime: SHIFT_TIMES.EVENING.START,
        endTime: SHIFT_TIMES.EVENING.END,
        backgroundColor: COLORS.EVENING_BG,
        iconColor: COLORS.EVENING_ICON,
        iconName: 'moon',
        employees: [
          { id: 4, name: EMPLOYEE_NAMES[3], avatar: AVATAR_URLS[3] },
        ],
        status: 'normal'
      }
    ];
  } else {
    return [
      {
        id: `${date.getDate()}-1`,
        title: 'Ca sáng',
        startTime: SHIFT_TIMES.MORNING.START,
        endTime: SHIFT_TIMES.MORNING.END,
        backgroundColor: COLORS.MORNING_BG,
        iconColor: COLORS.MORNING_ICON,
        iconName: 'sunrise',
        employees: [
          { id: 1, name: EMPLOYEE_NAMES[0], avatar: AVATAR_URLS[0] },
          { id: 2, name: EMPLOYEE_NAMES[1], avatar: AVATAR_URLS[1] },
          { id: 3, name: EMPLOYEE_NAMES[2], avatar: AVATAR_URLS[2] },
        ],
        task: 'Kiểm tra kho',
        status: 'normal'
      },
      {
        id: `${date.getDate()}-2`,
        title: 'Ca trưa',
        startTime: SHIFT_TIMES.AFTERNOON.START,
        endTime: SHIFT_TIMES.AFTERNOON.END,
        backgroundColor: COLORS.AFTERNOON_BG,
        iconColor: COLORS.AFTERNOON_ICON,
        iconName: 'sun', // mặt trời
        employees: [
          { id: 4, name: EMPLOYEE_NAMES[3], avatar: AVATAR_URLS[3] },
          { id: 5, name: EMPLOYEE_NAMES[4], avatar: AVATAR_URLS[4] },
        ],
        task: 'Phục vụ khách',
        status: 'normal'
      },
      {
        id: `${date.getDate()}-3`,
        title: 'Ca tối',
        startTime: SHIFT_TIMES.EVENING.START,
        endTime: SHIFT_TIMES.EVENING.END,
        backgroundColor: COLORS.EVENING_BG,
        iconColor: COLORS.EVENING_ICON,
        iconName: 'moon',
        employees: [
          { id: 6, name: 'Vũ Thị F', avatar: 'https://i.pravatar.cc/32?img=6' },
          { id: 7, name: 'Đặng Văn G', avatar: 'https://i.pravatar.cc/32?img=7' },
        ],
        task: 'Dọn dẹp',
        status: 'normal'
      }
    ];
  }
};

// Generate shifts for a week
const generateWeekShifts = (startDate) => {
  const shifts = {};
  for (let i = 0; i < 7; i++) {
    const date = new Date(startDate);
    date.setDate(startDate.getDate() + i);
    shifts[date.getDate()] = generateShiftsForDate(date);
  }
  return shifts;
};

// Get current week's Monday
const getCurrentWeekMonday = () => {
  const today = new Date();
  const dayOfWeek = today.getDay();
  const monday = new Date(today);
  monday.setDate(today.getDate() - (dayOfWeek === 0 ? 6 : dayOfWeek - 1));
  return monday;
};

// Generate shifts for current week and next few weeks
const currentWeekMonday = getCurrentWeekMonday();
export const weeklyShifts = generateWeekShifts(currentWeekMonday);

export const timeSlots = [
  '07:00', '08:00', '09:00', '10:00', '11:00', '12:00',
  '13:00', '14:00', '15:00', '16:00', '17:00', '18:00',
  '19:00', '20:00', '21:00', '22:00', '23:00'
];

// Helper function to get shifts for any date
export const getShiftsForDate = (date) => {
  return generateShiftsForDate(date);
};
