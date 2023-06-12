import { useQuery } from "@tanstack/react-query";
import React from "react";
import useAdmin from "../../hooks/useAdmin";
import useInstructor from "../../hooks/useInstructor";
import useSecureAxios from "../../hooks/useSecureAxios";

const Classes = () => {
  const [isAdmin] = useAdmin();
  const [isInstructor] = useInstructor();
  const [axiosSecure] = useSecureAxios();
  const { data: classes = [], refetch } = useQuery(["classes"], async () => {
    const res = await axiosSecure.get("/classes");
    return res.data;
  });

  const approvedClasses = classes.filter((item) => item.status === "approved");
  console.log(approvedClasses);
  // console.log(classes);
  return (
    <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
      {approvedClasses.map((approvedClass) => (
        <>
          <div className="rounded-lg overflow-hidden shadow-lg">
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
              <p className="text-gray-700 text-base mb-2">Available seats: 1</p>
              <p className="text-gray-700 font-bold text-xl mb-2">
                Price: ${approvedClass.price}
              </p>
              <button
                disabled={isAdmin || isInstructor ? true : false}
                className="btn btn-accent text-white"
              >
                Select
              </button>
            </div>
          </div>
        </>
      ))}
    </div>
  );
};

export default Classes;
