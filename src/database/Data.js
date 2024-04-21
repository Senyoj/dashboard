
import { svg1, svg2, svg3 , } from "../assets";



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
    icon: "ic:baseline-download",
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
    { icon: "sym1", text: "Challenge Type" },
    { icon: "sym2", text: "Account Type" },
    { icon: "sym3", text: "Platform" },
    { icon: "sym4", text: "Broker" },
  ],
  amount: {
    express: "$5,000.00",
    mt5: "--",
  },
};
