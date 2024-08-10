import React from "react";

const StatBox = ({ title, value, bgColor }) => {
  return (
    <div className={`p-4 rounded-lg shadow-md ${bgColor}`}>
      <h4 className="text-xl font-semibold">{title}</h4>
      <p className="text-3xl font-bold">{value}</p>
    </div>
  );
};

const Overview = () => {
  return (
    <div className="grid grid-cols-4 gap-6 mb-6">
      <StatBox title="Total School" value="145" bgColor="bg-blue-100" />
      <StatBox title="Total Staffs" value="1,265" bgColor="bg-purple-100" />
      <StatBox title="Total Students" value="21,571" bgColor="bg-pink-100" />
      <StatBox title="Total Parents" value="25,245" bgColor="bg-green-100" />
    </div>
  );
};

export default Overview;
