import { svg1, svg2, svg3, sym1, sym2, sym3, sym4 } from "../assets";

export const tradingStyles = [
  {
    id: "Evaluation",
    name: "Evaluation",
    profitTarget: "7% Profit Target",
    dailyDrawdown: "5% Daily Drawdown",
    timeLimits: "0% Time Limits",
    tradingVerification: "Trading & Verification",
    image: svg1,
  },
  {
    id: "Express",
    name: "Express",
    profitTarget: "0% Profit Target",
    dailyDrawdown: "5% Daily Drawdown",
    timeLimits: "9% Total Drawdowns",
    tradingVerification: "One Challenge",
    image: svg2,
  },
  {
    id: "OneStep",
    name: "One-step",
    profitTarget: "10% Profit Target",
    dailyDrawdown: "3% Daily Drawdown",
    timeLimits: "6% Total Drawdowns",
    tradingVerification: "Phase one & Funded Phase",
    image: svg3,
  },
];

export const asideLinks = [
  {
    id: 1,
    title: "Dashboard",
    path: "/dashboard",
    icon: "mage:dashboard-4-fill",
  },
  {
    id: 2,
    title: "Statistics",
    path: "/statistics",
    icon: "solar:chart-bold",
  },
  {
    id: 3,
    title: "Leaderboard",
    path: "/leaderboard",
    icon: "material-symbols-light:social-leaderboard-outline-rounded",
  },
  {
    id: 4,
    title: "Competition",
    path: "/competition",
    icon: "teenyicons:certificate-solid",
  },
  {
    id: 5,
    title: "Certificates",
    path: "/certificates",
    icon: "teenyicons:certificate-solid",
  },
  {
    id: 6,
    title: "Billing",
    path: "/billing",
    icon: "game-icons:two-coins",
  },
  {
    id: 7,
    title: "Downloads",
    path: "/downloads",
    icon: "bxs:download",
  },
  {
    id: 8,
    title: "Affiliate Portal",
    path: "/affiliate",
    icon: "tabler:affiliate-filled",
  },
  {
    id: 9,
    title: "How To",
    path: "/how-to",
    icon: "mdi:question-mark-box",
  },
  {
    id: 10,
    title: "Journaling Analysis",
    path: "/analysis",
    icon: "streamline:code-analysis-solid",
  },
  {
    id: 11,
    title: "Personal Settings",
    path: "/personal-settings",
    icon: "ic:sharp-settings",
  },
];

export const formData1 = [
  [
    {
      id: 1,
      label: "Country",
      type: "text",
      placeholder: "Enter your country",
    },
    {
      id: 2,
      label: "Challenge Type",
      type: "select",
      options: ["Type 1", "Type 2", "Type 3"],
    },
  ],
  [
    {
      id: 3,
      label: "Simulated Account Size",
      type: "number",
      placeholder: "Enter account size",
    },
    {
      id: 4,
      label: "Platform",
      type: "text",
      placeholder: "Enter platform name",
    },
  ],
  [
    {
      id: 5,
      label: "Broker",
      type: "text",
      placeholder: "Enter broker name",
    },
    {
      id: 6,
      label: "Account Type",
      type: "text",
      placeholder: "Enter account type",
    },
  ],
];

export const formData2 = [
  [
    {
      id: 7,
      label: "First Name",
      type: "text",
      placeholder: "Enter your first name",
    },
    {
      id: 8,
      label: "Last Name",
      type: "text",
      placeholder: "Enter your last name",
    },
    {
      id: 9,
      label: "Email",
      type: "email",
      placeholder: "Enter your email",
    },
    {
      id: 10,
      label: "Phone Number",
      type: "number",
      placeholder: "Enter your phone number",
    },
    {
      id: 11,
      label: "Address Line 1",
      type: "number",
      placeholder: "Enter your Address Line ",
    },
    {
      id: 12,
      label: "Town / City",
      type: "text",
      placeholder: "Enter Town / City",
    },
    {
      id: 13,
      label: "State/Region/ Province",
      type: "text",
      placeholder: "Enter State/Region/ Province",
    },
    {
      id: 14,
      label: "Country",
      type: "text",
      placeholder: "Enter Country",
    },
    {
      id: 15,
      label: "Additional Notes",
      type: "text",
      placeholder: "Additional Notes",
    },
  ],
  [
    {
      id: 16,
      label: "Phone Number",
      type: "tel",
      placeholder: "Enter your phone number",
    },
    {
      id: 17,
      label: "Address",
      type: "text",
      placeholder: "Enter your address",
    },
  ],
];

export const billInfoData = {
  billTo: {
    name: "Josiah Omorojoe",
    country: "NG",
  },
  contact: "08112346383",
  date: "April 17, 2024",
  description: [
    { icon: sym1, text: "Challenge Type" },
    { icon: sym2, text: "Account Type" },
    { icon: sym3, text: "Platform" },
    { icon: sym4, text: "Broker" },
  ],
  amount: {
    express: "$5,000.00",
    mt5: "--",
  },
};

export const compMonth = [
  {
    id: 1,
    name: "January Competition",
    status: "Ended",
    prize: "$1,000",
    description: "In cash prizes + Challenge accounts",
    contestants: 20546,
    winner: {
      name: "Obeng Sika",
      date: "January 2nd, 2024",
      reward: "$1,000 in cash prize + Challenge accounts",
    },
    standings: [
      {
        rank: 1,
        nickname: "Obeng Sika",
        returnPercent: 57.32,
        backFromFirst: "-",
        prize: "$500 Cash + $200,000 Challenge Account",
        country: "USA",
      },
      {
        rank: 2,
        nickname: "El Chapo",
        returnPercent: 45.36,
        backFromFirst: "3.05",
        prize: "$200 Cash + $100,000 Challenge Account",
        country: "Mexico",
      },
      {
        rank: 3,
        nickname: "Divine",
        returnPercent: 57.32,
        backFromFirst: "6.88",
        prize: "$100 Cash + $100,000 Challenge Account",
        country: "UK",
      },
      {
        rank: 4,
        nickname: "Aspiring",
        returnPercent: 45.36,
        backFromFirst: "7.55",
        prize: "$200 Cash + $100,000 Challenge Account",
        country: "Canada",
      },
      {
        rank: 5,
        nickname: "Samed",
        returnPercent: 57.32,
        backFromFirst: "6.88",
        prize: "$100 Cash + $100,000 Challenge Account",
        country: "Ghana",
      },
      {
        rank: 6,
        nickname: "Daniel",
        returnPercent: 45.36,
        backFromFirst: "7.55",
        prize: "$10,000 Challenge Account",
        country: "Australia",
      },
      {
        rank: 7,
        nickname: "Vyrus",
        returnPercent: 57.32,
        backFromFirst: "6.88",
        prize: "$10,000 Challenge Account",
        country: "Germany",
      },
      {
        rank: 8,
        nickname: "Skylington",
        returnPercent: 45.36,
        backFromFirst: "7.55",
        prize: "$10,000 Challenge Account",
        country: "France",
      },
      {
        rank: 9,
        nickname: "Kwakye",
        returnPercent: 57.32,
        backFromFirst: "6.88",
        prize: "$10,000 Challenge Account",
        country: "South Africa",
      },
      {
        rank: 10,
        nickname: "Kepler",
        returnPercent: 45.36,
        backFromFirst: "7.55",
        prize: "$10,000 Challenge Account",
        country: "Netherlands",
      },
    ],
  },
  {
    id: 2,
    name: "February Competition",
    status: "Ongoing",
    prize: "$2,000",
    description: "In cash prizes + Challenge accounts",
    contestants: 1245,
    winner: {
      name: "Jane Doe",
      date: "February 15th, 2024",
      reward: "$2,000 in cash prize + Challenge accounts",
    },
    standings: [
      {
        rank: 1,
        nickname: "Jane Doe",
        returnPercent: 60.12,
        backFromFirst: "-",
        prize: "$1,000 Cash + $200,000 Challenge Account",
        country: "USA",
      },
      {
        rank: 2,
        nickname: "John Smith",
        returnPercent: 55.36,
        backFromFirst: "4.76",
        prize: "$500 Cash + $100,000 Challenge Account",
        country: "UK",
      },
      {
        rank: 3,
        nickname: "Chris P.",
        returnPercent: 53.21,
        backFromFirst: "6.91",
        prize: "$200 Cash + $50,000 Challenge Account",
        country: "Canada",
      },
    ],
  },
  {
    id: 3,
    name: "March Competition",
    status: "Upcoming",
    prize: "$500",
    description: "In cash prizes + Challenge accounts",
    contestants: 8000,
    winner: {},
    standings: [],
  },
  {
    id: 4,
    name: "April Competition",
    status: "Ended",
    prize: "$3,000",
    description: "In cash prizes + Challenge accounts",
    contestants: 2890,
    winner: {
      name: "Alex Johnson",
      date: "April 20th, 2024",
      reward: "$3,000 in cash prize + Challenge accounts",
    },
    standings: [
      {
        rank: 1,
        nickname: "Alex Johnson",
        returnPercent: 70.45,
        backFromFirst: "-",
        prize: "$1,500 Cash + $300,000 Challenge Account",
        country: "Australia",
      },
      {
        rank: 2,
        nickname: "Sammy",
        returnPercent: 65.32,
        backFromFirst: "5.13",
        prize: "$800 Cash + $150,000 Challenge Account",
        country: "Germany",
      },
    ],
  },
  {
    id: 5,
    name: "May Competition",
    status: "Ongoing",
    prize: "$1,500",
    description: "In cash prizes + Challenge accounts",
    contestants: 3100,
    winner: {
      name: "Morgan Lee",
      date: "May 25th, 2024",
      reward: "$1,500 in cash prize + Challenge accounts",
    },
    standings: [
      {
        rank: 1,
        nickname: "Morgan Lee",
        returnPercent: 80.1,
        backFromFirst: "-",
        prize: "$750 Cash + $250,000 Challenge Account",
        country: "South Korea",
      },
      {
        rank: 2,
        nickname: "Charlie Brown",
        returnPercent: 75.5,
        backFromFirst: "4.60",
        prize: "$500 Cash + $100,000 Challenge Account",
        country: "USA",
      },
    ],
  },
  {
    id: 6,
    name: "June Competition",
    status: "Upcoming",
    prize: "$2,500",
    description: "In cash prizes + Challenge accounts",
    contestants: 4100,
    winner: {},
    standings: [],
  },
  {
    id: 7,
    name: "July Competition",
    status: "Ended",
    prize: "$1,200",
    description: "In cash prizes + Challenge accounts",
    contestants: 1900,
    winner: {
      name: "Patricia Fields",
      date: "July 30th, 2024",
      reward: "$1,200 in cash prize + Challenge accounts",
    },
    standings: [
      {
        rank: 1,
        nickname: "Patricia Fields",
        returnPercent: 55.32,
        backFromFirst: "-",
        prize: "$600 Cash + $150,000 Challenge Account",
        country: "Brazil",
      },
      {
        rank: 2,
        nickname: "Mark Z.",
        returnPercent: 52.14,
        backFromFirst: "3.18",
        prize: "$300 Cash + $75,000 Challenge Account",
        country: "USA",
      },
    ],
  },
  {
    id: 8,
    name: "August Competition",
    status: "Ongoing",
    prize: "$3,200",
    description: "In cash prizes + Challenge accounts",
    contestants: 2200,
    winner: {
      name: "Lucas M.",
      date: "August 15th, 2024",
      reward: "$3,200 in cash prize + Challenge accounts",
    },
    standings: [
      {
        rank: 1,
        nickname: "Lucas M.",
        returnPercent: 60.45,
        backFromFirst: "-",
        prize: "$1,600 Cash + $300,000 Challenge Account",
        country: "Argentina",
      },
      {
        rank: 2,
        nickname: "Isabella R.",
        returnPercent: 58.32,
        backFromFirst: "2.13",
        prize: "$800 Cash + $150,000 Challenge Account",
        country: "Spain",
      },
    ],
  },
  {
    id: 9,
    name: "September Competition",
    status: "Upcoming",
    prize: "$4,000",
    description: "In cash prizes + Challenge accounts",
    contestants: 4700,
    winner: {},
    standings: [],
  },
];

export const leaderboardData = [
  {
    rank: 1,
    username: "Tom_reddington",
    profit: "$50,875.87",
    accountSize: "$100,000",
    percentGain: "60.99%",
    country: "USA",
  },
  {
    rank: 2,
    username: "Don@elchapo",
    profit: "$30,825.27",
    accountSize: "$50,000",
    percentGain: "47.22%",
    country: "Mexico",
  },
  {
    rank: 3,
    username: "TOKMACHY",
    profit: "$15,675.82",
    accountSize: "$25,000",
    percentGain: "33.47%",
    country: "UK",
  },
  {
    rank: 4,
    username: "Ntownie",
    profit: "$10,215.87",
    accountSize: "$25,000",
    percentGain: "27.95%",
    country: "Canada",
  },
  {
    rank: 5,
    username: "Akabeneza",
    profit: "$9,475.87",
    accountSize: "$10,000",
    percentGain: "25.21%",
    country: "Rwanda",
  },
  {
    rank: 6,
    username: "O’Baah",
    profit: "$7,444.87",
    accountSize: "$10,000",
    percentGain: "22.74%",
    country: "Ghana",
  },
  {
    rank: 7,
    username: "eric",
    profit: "$1,875.87",
    accountSize: "$5,000",
    percentGain: "20.11%",
    country: "Australia",
  },
];

export const tradeData = [
  {
    openTime: "2023-05-15 09:07:03",
    openPrice: "2,035.2000",
    closeTime: "2023-05-16 21:15:14",
    closePrice: "1,989.16000",
    side: "Sell",
    symbol: "XAUUSD",
    volume: "0.40",
    profit: "$0",
  },
  {
    openTime: "2023-05-15 09:07:03",
    openPrice: "2,035.2000",
    closeTime: "2023-05-16 21:15:14",
    closePrice: "1,989.16000",
    side: "Sell",
    symbol: "GBPJPY.i",
    volume: "0.54",
    profit: "$0",
  },
  {
    openTime: "2023-05-15 09:07:03",
    openPrice: "2,035.2000",
    closeTime: "2023-05-16 21:15:14",
    closePrice: "1,989.16000",
    side: "Buy",
    symbol: "XAUUSD",
    volume: "0.40",
    profit: "-$116.2",
  },
  {
    openTime: "2023-05-15 09:07:03",
    openPrice: "2,035.2000",
    closeTime: "2023-05-16 21:15:14",
    closePrice: "1,989.16000",
    side: "Buy",
    symbol: "XAUUSD",
    volume: "0.40",
    profit: "$0",
  },
  {
    openTime: "2023-05-15 09:07:03",
    openPrice: "2,035.2000",
    closeTime: "2023-05-16 21:15:14",
    closePrice: "1,989.16000",
    side: "Buy",
    symbol: "XAUUSD",
    volume: "0.40",
    profit: "-$106.2",
  },
  {
    openTime: "2023-05-15 09:07:03",
    openPrice: "2,035.2000",
    closeTime: "2023-05-16 21:15:14",
    closePrice: "1,989.16000",
    side: "Sell",
    symbol: "XAUUSD",
    volume: "0.40",
    profit: "$0",
  },
];

export const equityData = [
  {
    id: 1,
    icon: "fluent-emoji-flat:books",
    label: "Current Equity",
    amount: "S 31,127.16",
  },
  {
    id: 2,
    icon: "ic:sharp-balance",
    label: "Current Balance",
    amount: "S 5,840.25",
  },
  {
    id: 3,
    icon: "material-symbols-light:account-balance",
    label: "Starting Balance",
    amount: "S 20,000.00",
  },
  {
    id: 4,
    icon: "mdi:white-balance-iridescent",
    label: "Culmulative Balance",
    amount: "S 25,000.00",
  },
];