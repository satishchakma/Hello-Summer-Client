import { useQuery } from "@tanstack/react-query";
import React from "react";
import useSecureAxios from "../../hooks/useSecureAxios";

const Instructors = () => {
  const [axiosSecure] = useSecureAxios();
  const { data: users = [], refetch } = useQuery(["users"], async () => {
    const res = await axiosSecure.get("/users");
    return res.data;
  });
  console.log(users);
  const instrucotrs = users.filter((item) => item.role === "instructor");
  console.log(instrucotrs);
  return (
    <>
      <h1 className="family-lucky text-5xl text-center my-12">
        Our Instructors
      </h1>
      <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
        {instrucotrs.map((instructor) => (
          <>
            <div className="rounded-lg overflow-hidden shadow-lg border  border-yellow-400">
              <img
                className="w-full h-[400px] object-cover object-center"
                src={instructor.photo}
                alt="Mountain"
              />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{instructor.name}</div>
                <p className="text-gray-700 text-base">
                  {" "}
                  Email: {instructor.email}
                </p>
              </div>
              <div className="px-6 pt-4 pb-2">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  #photography
                </span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  #travel
                </span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  #winter
                </span>
              </div>
            </div>
          </>
        ))}
      </div>
    </>
  );
};

export default Instructors;
