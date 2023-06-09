import React from "react";

const UserSingle = ({ user, index }) => {
  return (
    <tr className="border-b dark:border-neutral-500">
      <td className="whitespace-nowrap  px-6 py-4 font-medium">{index + 1}</td>
      <td className="whitespace-nowrap  px-6 py-4">{user.name}</td>
      <td className="whitespace-nowrap  px-6 py-4">{user.email}</td>
      <td className="whitespace-nowrap  px-6 py-4">@mdo</td>
      <td className="whitespace-nowrap  px-6 py-4">
        <button className="btn btn-accent">Make Instructor</button>
      </td>
      <td className="whitespace-nowrap  px-6 py-4">
        <button className="btn btn-accent">Make Admin</button>
      </td>
    </tr>
  );
};

export default UserSingle;
