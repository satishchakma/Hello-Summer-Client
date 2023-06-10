import React from "react";

const ManageClasses = () => {
  return (
    <div>
      <table className="border border-yellow-500 rounded-lg">
        <thead>
          <tr className="bg-yellow-100">
            <th className="p-2 border-b border-yellow-500">Class Image</th>
            <th className="p-2 border-b border-yellow-500">Class Name</th>
            <th className="p-2 border-b border-yellow-500">Instructor Name</th>
            <th className="p-2 border-b border-yellow-500">Instructor Email</th>
            <th className="p-2 border-b border-yellow-500">Available Seats</th>
            <th className="p-2 border-b border-yellow-500">Price</th>
            <th className="p-2 border-b border-yellow-500">Status</th>
            <th className="p-2 border-b border-yellow-500">Action</th>
          </tr>
        </thead>
        <tbody>
          {/* Table rows with data */}
          <tr className="hover:bg-yellow-50">
            <td className="p-2 border-b border-yellow-500">Class Image 1</td>
            <td className="p-2 border-b border-yellow-500">Class Name 1</td>
            <td className="p-2 border-b border-yellow-500">
              Instructor Name 1
            </td>
            <td className="p-2 border-b border-yellow-500">
              Instructor Email 1
            </td>
            <td className="p-2 border-b border-yellow-500">
              Available Seats 1
            </td>
            <td className="p-2 border-b border-yellow-500">Price 1</td>
            <td className="p-2 border-b border-yellow-500">Status 1</td>
            <td className="p-2 border-b border-yellow-500">
              <div className="flex justify-center space-x-2">
                <button className="bg-yellow-500 hover:bg-yellow-600 text-white py-1 px-2 rounded-md">
                  Button 1
                </button>
                <button className="bg-yellow-500 hover:bg-yellow-600 text-white py-1 px-2 rounded-md">
                  Button 2
                </button>
                <button className="bg-yellow-500 hover:bg-yellow-600 text-white py-1 px-2 rounded-md">
                  Button 3
                </button>
              </div>
            </td>
          </tr>
          {/* Add more table rows as needed */}
        </tbody>
      </table>
    </div>
  );
};

export default ManageClasses;
