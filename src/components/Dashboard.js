import React from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import Overview from "./Overview";
import Charts from "./Charts";

const Dashboard = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <div className="p-6 bg-gray-100 min-h-screen">
          <Overview />
          <Charts />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
