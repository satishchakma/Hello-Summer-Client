import React from "react";

// ES6 Modules or TypeScript
import Swal from "sweetalert2";

const UserSingle = ({ user, index, refetch }) => {
  const handleMakeAdmin = (id) => {
    fetch(
      `https://hello-summer-server-two.vercel.app/users/admin/${user._id}`,
      {
        method: "PATCH",
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          refetch();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Made Admin",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };
  const handleMakeInstructor = (id) => {
    fetch(
      `https://hello-summer-server-two.vercel.app/users/instructor/${user._id}`,
      {
        method: "PATCH",
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          refetch();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Made Instructor",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };
  return (
    <tr className="border-b dark:border-neutral-500">
      <td className="whitespace-nowrap  px-6 py-4 font-medium">{index + 1}</td>
      <td className="whitespace-nowrap  px-6 py-4">{user.name}</td>
      <td className="whitespace-nowrap  px-6 py-4">{user.email}</td>
      <td className="whitespace-nowrap  px-6 py-4">
        {user.role ? user.role : "student"}
      </td>
      <td className="whitespace-nowrap  px-6 py-4">
        <button
          disabled={user.role === "instructor" ? true : false}
          onClick={() => handleMakeInstructor(user._id)}
          className="btn btn-accent"
        >
          Make Instructor
        </button>
      </td>
      <td className="whitespace-nowrap  px-6 py-4">
        <button
          disabled={user.role === "admin" ? true : false}
          onClick={() => handleMakeAdmin(user._id)}
          className="btn btn-accent"
        >
          Make Admin
        </button>
      </td>
    </tr>
  );
};

export default UserSingle;
