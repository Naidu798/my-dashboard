import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Header = () => {
  const [startDate, setStartDate] = useState(new Date()); // Initial date set to today
  const [endDate, setEndDate] = useState(new Date()); // Initial date set to today

  return (
    <div className="bg-white p-6 flex justify-between items-center shadow-md">
      <input
        type="text"
        placeholder="Search here"
        className="border rounded p-2 w-1/3"
      />
      <div className="flex items-center space-x-4">
        <div className="flex items-center space-x-2">
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            selectsStart
            startDate={startDate}
            endDate={endDate}
            className="border p-2 rounded"
            dateFormat="dd, MMM yyyy"
          />
          <span> - </span>
          <DatePicker
            selected={endDate}
            onChange={(date) => setEndDate(date)}
            selectsEnd
            startDate={startDate}
            endDate={endDate}
            minDate={startDate}
            className="border p-2 rounded"
            dateFormat="dd, MMM yyyy"
          />
        </div>
        <div className="flex items-center space-x-2">
          <div>Super Admin</div>
          <img
            src="https://via.placeholder.com/40"
            alt="Admin"
            className="w-10 h-10 rounded-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
