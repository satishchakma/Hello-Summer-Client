import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import useAuth from "../../hooks/useAuth";

const MyClasses = () => {
  const { user } = useAuth();
  console.log("this is the current instructor, ", user?.email);

  const [myClasses, setMyClasses] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3000/classes/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setMyClasses(data));
  }, []);
  return (
    <div className="bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-lg p-4 shadow-lg  w-full px-8 ">
      <table className="w-full text-left">
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
          {myClasses.map((myClass) => (
            <tr key={myClass._id}>
              <td className="py-2 px-4">
                <img
                  src={myClass.classImg}
                  alt="Class Image"
                  className="rounded-lg w-12 h-12"
                />
              </td>
              <td className="py-2 px-4">{myClass.className}</td>
              <td className="py-2 px-4">1</td>
              <td className="py-2 px-4">{myClass.status}</td>
              <td className="py-2 px-4">
                <p>
                  {myClass?.feedback
                    ? myClass?.feedback
                    : "No feedback for now"}
                </p>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyClasses;
