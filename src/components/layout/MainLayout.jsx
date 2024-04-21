import React from "react";
import { Route, Routes } from "react-router-dom";
import Aside from "./Aside";
import TopNavbar from "./TopNavbar";
import DashMain from "../../pages/DashMain";
import Billing from "../../pages/Billing";
import Certificates from "../../pages/Certificates";
import Competition from "../../pages/Competition";
import Downloads from "../../pages/Downloads";
import AffiliatePortal from "../../pages/AffiliatePortal";
import Evaluation from "../../pages/dashSub/Evaluation";
import Express from "../../pages/dashSub/Express";
import OneStep from "../../pages/dashSub/OneStep";
import HowTo from "../../pages/HowTo";
import Analysis from "../../pages/Analysis";
import Leaderboard from "../../pages/Leaderboard";
import Settings from "../../pages/Settings";
import Statistics from "../../pages/Statistics";

function MainLayout() {
  return (
    <div className="flex bg-row text-white">
      <div className="flex h-screen">
        <Aside />
      </div>
      <div className="flex-1 overflow-y-auto flex-grow">
        <TopNavbar />
        <div className="p-4 ">
          <Routes>
            <Route path="/" element={<DashMain />} />
            <Route path="/challenge/Evaluation" element={<Evaluation />} />
            <Route path="/challenge/Express" element={<Express />} />
            <Route path="/challenge/OneStep" element={<OneStep />} />
            <Route path="/dashboard" element={<DashMain />} />
            <Route path="/statistics" element={<Statistics />} />
            <Route path="/leaderboard" element={<Leaderboard />} />
            <Route path="/competition" element={<Competition />} />
            <Route path="/certificates" element={<Certificates />} />
            <Route path="/billing" element={<Billing />} />
            <Route path="/affiliate" element={<AffiliatePortal />} />
            <Route path="/downloads" element={<Downloads />} />
            <Route path="/how-to" element={<HowTo />} />
            <Route path="/analysis" element={<Analysis />} />
            <Route path="/personal-settings" element={<Settings />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default MainLayout;
