// Shift time constants
export const SHIFT_TIMES = {
  MORNING: {
    START: '07:00',
    END: '11:00'
  },
  AFTERNOON: {
    START: '12:00', 
    END: '17:00'
  },
  EVENING: {
    START: '17:00',
    END: '23:00'
  }
};

// Employee names constants
export const EMPLOYEE_NAMES = [
  'Nguyễn Văn A',
  'Trần Thị B', 
  'Lê Thị C',
  'Phạm Thị D',
  'Hoàng Thị E',
  'Mai Anh',
  'Văn Nam',
  'Thị Hoa',
  'Hương Thảo',
  'Tuấn Minh',
  'Lê Bình An'
];

// Employee roles constants
export const EMPLOYEE_ROLES = [
  'Bán hàng',
  'Thu ngân',
  'Pha chế',
  'Quản lý',
  'Bảo vệ'
];

// Employee types constants
export const EMPLOYEE_TYPES = [
  'Fulltime',
  'Parttime',
  'Contract'
];

// Navigation items constants
export const NAVIGATION_ITEMS = [
  { key: 'month', label: 'Tháng' },
  { key: 'week', label: 'Tuần' },
  { key: 'day', label: 'Ngày' }
];

// Header constants
export const HEADER_CONSTANTS = {
  STATUS_TIME: new Date().toLocaleTimeString('vi-VN', { 
    hour: '2-digit', 
    minute: '2-digit',
    hour12: false 
  }),
  NAV_TITLE: 'Ca làm việc',
  LOCATION: 'Nhoy Tea 1',
  STATUS_ICONS: {
    CELLULAR: 'cellular',
    WIFI: 'wifi',
    BATTERY: 'battery-full'
  },
  NAV_ICONS: {
    BACK: 'arrow-back',
    MENU: 'menu'
  },
  SELECTOR_ICONS: {
    CHEVRON_DOWN: 'chevron-down',
    CHEVRON_BACK: 'chevron-back',
    CHEVRON_FORWARD: 'chevron-forward'
  }
};

// Employee suggestion constants
export const EMPLOYEE_SUGGESTION_CONSTANTS = {
  TITLE: 'Đề xuất nhân viên',
  AUTO_CA_TEXT: 'AutoCa',
  AUTO_CA_ICON: 'star',
  SUGGESTED_EMPLOYEES: [
    {
      id: 1,
      name: 'Hương Thảo',
      position: 'Nv bán hàng • Parttime',
      avatar: 'https://i.pravatar.cc/40?img=1',
    },
    {
      id: 2,
      name: 'Lê Tuấn',
      position: 'Nv bán hàng • Parttime',
      avatar: 'https://i.pravatar.cc/40?img=2',
    }
  ]
};

// Avatar URLs constants
export const AVATAR_URLS = [
  'https://i.pravatar.cc/32?img=1',
  'https://i.pravatar.cc/32?img=2',
  'https://i.pravatar.cc/32?img=3',
  'https://i.pravatar.cc/32?img=4',
  'https://i.pravatar.cc/32?img=5'
];
