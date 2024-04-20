
import { svg1, svg2, svg3 } from "../assets";

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
    id: "One-step",
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
  {
    label: "Country",
    type: "text",
    id: "country",
    placeholder: "Enter your country",
  },
  {
    label: "Challenge Type",
    type: "select",
    id: "challengeType",
    options: ["Type 1", "Type 2", "Type 3"],
  },
  {
    label: "Simulated Account Size",
    type: "number",
    id: "accountSize",
    placeholder: "Enter account size",
  },
  {
    label: "Platform",
    type: "text",
    id: "platform",
    placeholder: "Enter platform name",
  },
  {
    label: "Broker",
    type: "text",
    id: "broker",
    placeholder: "Enter broker name",
  },
  {
    label: "Account Type",
    type: "text",
    id: "accountType",
    placeholder: "Enter account type",
  },
  
];