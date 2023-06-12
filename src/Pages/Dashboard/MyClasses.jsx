import React from "react";

const MyClasses = () => {
  return (
    <div className="bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-lg p-4 shadow-lg">
      <table className="w-full">
        <thead>
          <tr className="bg-yellow-500 text-white">
            <th className="py-2 px-4 rounded-tl-lg">Class Img</th>
            <th className="py-2 px-4">Class Name</th>
            <th className="py-2 px-4">Total Enrolled Students</th>
            <th className="py-2 px-4">Status</th>
            <th className="py-2 px-4 rounded-tr-lg">Feedback</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="py-2 px-4">
              <img
                src="class-img-url"
                alt="Class Image"
                className="rounded-lg w-12 h-12"
              />
            </td>
            <td className="py-2 px-4">Class A</td>
            <td className="py-2 px-4">25</td>
            <td className="py-2 px-4">Approved</td>
            <td className="py-2 px-4">
              <button className="bg-yellow-500 hover:bg-yellow-600 text-white py-1 px-2 rounded-md">
                Send Feedback
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default MyClasses;
