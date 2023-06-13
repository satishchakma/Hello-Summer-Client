import { useQuery } from "@tanstack/react-query";
import React from "react";
import useAuth from "../../hooks/useAuth";
import useSecureAxios from "../../hooks/useSecureAxios";

import Swal from "sweetalert2";

const MySelectedClasses = () => {
  const [axiosSecure] = useSecureAxios();
  const { user } = useAuth();

  const { data: selectedClass = [], refetch } = useQuery(
    ["selectedClass"],
    async () => {
      const res = await axiosSecure.get(`/selectedClass/${user?.email}`);
      return res.data;
    }
  );
  console.log(selectedClass, "this is my selected claasees");

  const handleDelete = (id) => {
    if (!user) {
      alert("Please login before deleting a class");
    } else {
      // Send a DELETE request to the backend
      axiosSecure
        .delete(`/selectedClass/${id}/${user?.email}`)
        .then((response) => {
          console.log("Course deleted:", response.data);
          // Refresh the data by refetching
          refetch();
          // Show a success message
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Deleted Class",
            showConfirmButton: false,
            timer: 1700,
          });
        })
        .catch((error) => {
          console.log("Error deleting course:", error);
          // Show an error message
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Error deleting the class!",
            footer: "Please try again",
          });
        });
    }
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

            <th className="p-2 border-b border-yellow-500">Action</th>
          </tr>
        </thead>
        <tbody>
          {selectedClass.map((singleClass) => (
            <tr className="hover:bg-yellow-50" key={singleClass._id}>
              <td className="p-2 border-b border-yellow-500">
                <img
                  src={singleClass.classImg}
                  className="rounded-lg w-24"
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
                ${singleClass.price}
              </td>

              <td className="p-2 border-b border-yellow-500">
                <div className="flex justify-center space-x-2">
                  <button
                    onClick={() => handleApprove(singleClass._id)}
                    disabled={singleClass.status === "denied"}
                    className={`bg-green-500  hover:bg-green-600 text-white py-1 px-2 rounded-md`}
                  >
                    Pay
                  </button>

                  <button
                    onClick={() => handleDelete(singleClass._id)}
                    className={`bg-red-500  hover:bg-red-600 text-white py-1 px-2 rounded-md`}
                  >
                    Delete
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

export default MySelectedClasses;
