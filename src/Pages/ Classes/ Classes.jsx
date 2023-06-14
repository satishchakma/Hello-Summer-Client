import { useQuery } from "@tanstack/react-query";
import React from "react";
import useAdmin from "../../hooks/useAdmin";
import useInstructor from "../../hooks/useInstructor";
import useSecureAxios from "../../hooks/useSecureAxios";

import Swal from "sweetalert2";
import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";

const Classes = () => {
  const { user } = useAuth();
  const [isAdmin] = useAdmin();
  const [isInstructor] = useInstructor();
  const [axiosSecure] = useSecureAxios();
  const { register, handleSubmit, reset } = useForm();

  const navigate = useNavigate();
  const location = useLocation();
  console.log("login page location", location);
  const from = location.state?.from?.pathname || "/";

  const { data: classes = [], refetch } = useQuery(["classes"], async () => {
    const res = await axiosSecure.get("/classes");
    return res.data;
  });

  const approvedClasses = classes.filter((item) => item.status === "approved");
  console.log(approvedClasses);
  // console.log(classes);

  const handleSelect = (id) => {
    if (!user) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please login before selecting a class!",
      });
      // navigate(from, { replace: true });
    } else if (user) {
      console.log(id);
      const findClass = approvedClasses.find((item) => item._id === id);
      console.log(findClass, "findclass");
      const {
        classImg,
        className,
        instructorEmail,
        instructorName,
        price,
        seats,
        status,
        _id,
      } = findClass;
      const selectedClass = {
        _id,
        classImg,
        className,
        instructorEmail,
        instructorName,
        price,
        seats,
        status,
        student: [user?.email],
      };
      console.log(selectedClass);

      axiosSecure
        .post("/selectedClass", selectedClass)
        .then((response) => {
          console.log("after posting new class item", response.data);
          if (response.data.insertedId) {
            reset();
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Selected Class",
              showConfirmButton: false,
              timer: 1700,
            });
          }
        })
        .catch((error) => {
          console.log("Error response:", error.response); // Log the error response
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Already selected this class!",
            footer: "Please select another class",
          });
        });
    }
  };

  return (
    <>
      <h1 className="family-lucky text-5xl text-center my-12">Our Classes</h1>
      <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5  ">
        {approvedClasses.map((approvedClass) => (
          <div
            key={approvedClass._id}
            className={`${
              approvedClass?.seats === 0
                ? "bg-red-600 text-white rounded-lg"
                : ""
            }`}
          >
            <div className="rounded-lg overflow-hidden shadow-lg border border-yellow-400 ">
              <img
                className="w-full h-[400px] object-cover object-center"
                src={approvedClass.classImg}
                alt="Mountain"
              />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">
                  Class Name: {approvedClass.className}
                </div>
                <div className="font-bold text-xl mb-2">
                  Instructor: {approvedClass.instructorName}
                </div>
                <p className="text-gray-700 text-base mb-2">
                  Available seats: {approvedClass.seats}
                </p>
                <p className="text-gray-700 font-bold text-xl mb-2">
                  Price: ${approvedClass.price}
                </p>
                <button
                  disabled={
                    isAdmin || isInstructor || approvedClass?.seats === 0
                      ? true
                      : false
                  }
                  className="btn btn-accent text-white"
                  onClick={() => handleSelect(approvedClass._id)}
                >
                  Select
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Classes;
