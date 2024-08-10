import React from "react";

const Sidebar = () => {
  return (
    <div className="bg-blue-600 text-white w-64 h-screen p-6">
      <div className="text-2xl font-bold">Bare Kaab</div>
      <nav className="mt-10">
        <ul>
          <li className="py-2">Government Overview</li>
          <li className="py-2">Institute Registry</li>
          <li className="py-2">Academics</li>
          <li className="py-2">Institute Inspection</li>
          <li className="py-2">Raise a Ticket</li>
          <li className="py-2">Communication</li>
          <li className="py-2">Profile</li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
