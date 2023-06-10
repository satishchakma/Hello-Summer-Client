import React from "react";
import { useQuery } from "@tanstack/react-query";
import UserSingle from "./UserSingle";
import useAxiosSecure from "../../hooks/useSecureAxios";

const ManageUsers = () => {
  const [axiosSecure] = useAxiosSecure();

  const { data: users = [], refetch } = useQuery(["users"], async () => {
    const res = await axiosSecure.get("/users");
    return res.data;
  });
  console.log(users);
  return (
    <div className="w-full px-6">
      <div className="flex flex-col">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
            <div className="overflow-hidden">
              <table className="min-w-full text-center text-sm font-light">
                <thead className="border-b bg-neutral-800 font-medium text-white dark:border-neutral-500 dark:bg-neutral-900">
                  <tr>
                    <th scope="col" className=" px-6 py-4">
                      #
                    </th>
                    <th scope="col" className=" px-6 py-4">
                      Name
                    </th>
                    <th scope="col" className=" px-6 py-4">
                      Email
                    </th>
                    <th scope="col" className=" px-6 py-4">
                      Current Role
                    </th>
                    <th scope="col" className=" px-6 py-4">
                      Change to Instructor
                    </th>
                    <th scope="col" className=" px-6 py-4">
                      Change to Admin
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((user, index) => (
                    <UserSingle
                      key={user._id}
                      user={user}
                      index={index}
                      refetch={refetch}
                    ></UserSingle>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageUsers;
