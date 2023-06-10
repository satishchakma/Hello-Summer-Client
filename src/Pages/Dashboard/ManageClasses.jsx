import React from "react";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useSecureAxios";
// ES6 Modules or TypeScript
import Swal from "sweetalert2";

const ManageClasses = () => {
  const [axiosSecure] = useAxiosSecure();

  const { data: classes = [], refetch } = useQuery(["classes"], async () => {
    const res = await axiosSecure.get("/classes");
    return res.data;
  });
  console.log(classes);

  const handleApprove = (id) => {
    fetch(`http://localhost:3000/classes/${id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          refetch();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "The class is approved!!",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

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
          {classes.map((singleClass) => (
            <tr className="hover:bg-yellow-50">
              <td className="p-2 border-b border-yellow-500">
                <img
                  src={singleClass.classImg}
                  className="rounded-lg w-full"
                ></img>
              </td>
              <td className="p-2 border-b border-yellow-500">
                {singleClass.className}
              </td>
              <td className="p-2 border-b border-yellow-500">
                {singleClass.instructorName}
              </td>
              <td className="p-2 border-b border-yellow-500">
                {singleClass.instructorEmail}
              </td>
              <td className="p-2 border-b border-yellow-500">
                {singleClass.seats}
              </td>
              <td className="p-2 border-b border-yellow-500">
                {singleClass.price}
              </td>
              <td className="p-2 border-b border-yellow-500">
                {singleClass.status}
              </td>
              <td className="p-2 border-b border-yellow-500">
                <div className="flex justify-center space-x-2">
                  <button
                    onClick={() => handleApprove(singleClass._id)}
                    className="bg-green-500 hover:bg-green-600 text-white py-1 px-2 rounded-md"
                  >
                    Approve
                  </button>
                  <button className="bg-red-500 hover:bg-red-600 text-white py-1 px-2 rounded-md">
                    Deny
                  </button>
                  <button className="bg-yellow-500 hover:bg-yellow-600 text-white py-1 px-2 rounded-md">
                    Send feedback
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageClasses;

<tr className="hover:bg-yellow-50">
  <td className="p-2 border-b border-yellow-500"></td>
  <td className="p-2 border-b border-yellow-500">Class Name 1</td>
  <td className="p-2 border-b border-yellow-500">Instructor Name 1</td>
  <td className="p-2 border-b border-yellow-500">Instructor Email 1</td>
  <td className="p-2 border-b border-yellow-500">Available Seats 1</td>
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
</tr>;
