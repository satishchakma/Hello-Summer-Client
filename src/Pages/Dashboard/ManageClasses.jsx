import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import useSecureAxios from "../../hooks/useSecureAxios";
// ES6 Modules or TypeScript
import Swal from "sweetalert2";
import FeedbackModal from "./FeedbackModal";

import { useForm } from "react-hook-form";

const ManageClasses = () => {
  const [axiosSecure] = useSecureAxios();
  const { register, handleSubmit } = useForm();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedClass, setSelectedClass] = useState(null);

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const { data: classes = [], refetch } = useQuery(["classes"], async () => {
    const res = await axiosSecure.get("/classes");
    return res.data;
  });

  console.log(classes);

  const handleApprove = (id) => {
    console.log("clicked on approved");
    fetch(`https://hello-summer-server-two.vercel.app/classes/${id}`, {
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
  const handleDeny = (id) => {
    console.log("clicked on deny button");
    fetch(`https://hello-summer-server-two.vercel.app/classes/deny/${id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          refetch();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "The class is denied!!",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };
  const handleSendFeedback = (id) => {
    Swal.fire({
      title: "Send Feedback",
      text: "Please provide your feedback:",
      input: "textarea",
      inputAttributes: {
        autocapitalize: "off",
      },
      showCancelButton: true,
      confirmButtonText: "Send",
      showLoaderOnConfirm: true,
      preConfirm: (feedback) => {
        console.log(feedback, "this is feedback");
        return axiosSecure
          .patch(`/classes/feedback/${id}`, { feedback: feedback })
          .then((response) => {
            if (response.data.modifiedCount) {
              refetch();
              Swal.fire({
                title: "Feedback Sent",
                text: "Your feedback has been submitted.",
                icon: "success",
              });
            } else {
              throw new Error("Failed to send feedback.");
            }
          })
          .catch((error) => {
            Swal.fire({
              title: "Error",
              text: "Failed to send feedback.",
              icon: "error",
            });
          });
      },
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
            <tr className="hover:bg-yellow-50" key={singleClass._id}>
              <td className="p-2 border-b border-yellow-500">
                <img
                  src={singleClass.classImg}
                  className="rounded-lg w-36"
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
                    disabled={singleClass.status === "denied"}
                    className={`bg-green-500 ${
                      singleClass.status === "denied"
                        ? "bg-slate-300 hover:bg-slate-300"
                        : ""
                    }  hover:bg-green-600 text-white py-1 px-2 rounded-md`}
                  >
                    Approve
                  </button>

                  <button
                    disabled={
                      singleClass.status === "approved" ||
                      singleClass.status === "denied"
                    }
                    onClick={() => handleDeny(singleClass._id)}
                    className={`bg-red-500 ${
                      singleClass.status === "approved" ||
                      singleClass.status === "denied"
                        ? "bg-slate-300 hover:bg-slate-300"
                        : ""
                    }  hover:bg-red-600 text-white py-1 px-2 rounded-md`}
                  >
                    Deny
                  </button>

                  {/* <button
                    disabled={singleClass.status === "approved"}
                    // onClick={() => handleSendFeedback(singleClass._id)}
                    className={`bg-yellow-500 ${
                      singleClass.status === "approved"
                        ? "bg-slate-300 hover:bg-slate-300"
                        : ""
                    } hover:bg-yellow-600 text-white py-1 px-2 rounded-md`}
                  >
                    Send feedback
                  </button> */}
                  <FeedbackModal
                    singleClass={selectedClass}
                    onClose={handleCloseModal}
                  />
                  <button
                    disabled={singleClass.status === "approved"}
                    className={`bg-yellow-500 ${
                      singleClass.status === "approved"
                        ? "bg-slate-300 hover:bg-slate-300"
                        : ""
                    } hover:bg-yellow-600 text-white py-1 px-2 rounded-md`}
                    onClick={() => handleSendFeedback(singleClass._id)}
                  >
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
