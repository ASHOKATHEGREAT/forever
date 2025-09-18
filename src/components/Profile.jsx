import React from "react";

const Profile = () => {
  return (
    <div className="p-6 border-t min-h-[80vh]">
      <h1 className="text-2xl font-semibold mb-4">My Profile</h1>
      <div className="text-gray-700 space-y-2">
        <p><strong>Name:</strong> Ashok Kummar Uppara</p>
        <p><strong>Email:</strong> ashokkumar.uppara98@gmail.com</p>
        <p><strong>Phone:</strong> 123-456-7890</p>
      </div>
    </div>
  );
};

export default Profile;