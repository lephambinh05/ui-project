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
        startTime: '07:00',
        endTime: '11:00',
        backgroundColor: '#FEF7E0',
        iconColor: '#FFD700',
        iconName: 'sunrise',
        employees: [
          { id: 1, name: 'Nguyễn Văn A', avatar: 'https://i.pravatar.cc/32?img=1' },
          { id: 2, name: 'Trần Thị B', avatar: 'https://i.pravatar.cc/32?img=2' },
        ],
        status: 'normal'
      },
      {
        id: `${date.getDate()}-2`,
        title: 'Ca trưa',
        startTime: '12:00',
        endTime: '17:00',
        backgroundColor: '#FCE8E6',
        iconColor: '#FF69B4',
        iconName: 'sun', // mặt trời
        employees: [
          { id: 3, name: 'Lê Thị C', avatar: 'https://i.pravatar.cc/32?img=3' },
        ],
        status: 'missing',
        missingText: 'Thiếu nv'
      },
      {
        id: `${date.getDate()}-3`,
        title: 'Ca tối',
        startTime: '17:00',
        endTime: '23:00',
        backgroundColor: '#E8EAF6',
        iconColor: '#9370DB',
        iconName: 'moon',
        employees: [
          { id: 4, name: 'Phạm Thị D', avatar: 'https://i.pravatar.cc/32?img=4' },
        ],
        status: 'normal'
      }
    ];
  } else {
    return [
      {
        id: `${date.getDate()}-1`,
        title: 'Ca sáng',
        startTime: '07:00',
        endTime: '11:00',
        backgroundColor: '#FEF7E0',
        iconColor: '#FFD700',
        iconName: 'sunrise',
        employees: [
          { id: 1, name: 'Nguyễn Văn A', avatar: 'https://i.pravatar.cc/32?img=1' },
          { id: 2, name: 'Trần Thị B', avatar: 'https://i.pravatar.cc/32?img=2' },
          { id: 3, name: 'Lê Thị C', avatar: 'https://i.pravatar.cc/32?img=3' },
        ],
        task: 'Kiểm tra kho',
        status: 'normal'
      },
      {
        id: `${date.getDate()}-2`,
        title: 'Ca trưa',
        startTime: '12:00',
        endTime: '17:00',
        backgroundColor: '#FCE8E6',
        iconColor: '#FF69B4',
        iconName: 'sun', // mặt trời
        employees: [
          { id: 4, name: 'Phạm Thị D', avatar: 'https://i.pravatar.cc/32?img=4' },
          { id: 5, name: 'Hoàng Thị E', avatar: 'https://i.pravatar.cc/32?img=5' },
        ],
        task: 'Phục vụ khách',
        status: 'normal'
      },
      {
        id: `${date.getDate()}-3`,
        title: 'Ca tối',
        startTime: '17:00',
        endTime: '23:00',
        backgroundColor: '#E8EAF6',
        iconColor: '#9370DB',
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
