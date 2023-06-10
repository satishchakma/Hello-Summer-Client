import React from "react";
import useAuth from "../../hooks/useAuth";
import { useForm } from "react-hook-form";
import useSecureAxios from "../../hooks/useSecureAxios";

import Swal from "sweetalert2";

const AddClass = () => {
  const { user } = useAuth();
  const [axiosSecure] = useSecureAxios();
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    const {
      classImg,
      className,
      instructorEmail,
      instructorName,
      price,
      seats,
    } = data;

    let newClass = {
      className,
      classImg,
      instructorEmail,
      instructorName,
      price,
      seats,
      status: "pending",
    };
    console.log(newClass);
    axiosSecure.post("/classes", newClass).then((data) => {
      console.log("after posting new menu item", data.data);
      if (data.data.insertedId) {
        reset();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Class added ",
          showConfirmButton: false,
          timer: 1700,
        });
      }
    });
  };

  return (
    <div className="container mx-auto rounded-xl my-12  ">
      <div className="flex flex-col lg:flex-row justify-between items-center gap-12 ">
        <div className="border-2 border-yellow-400 w-full lg:w-[90%] py-12 lg:pt-4 lg:pb-8 px-6 lg:px-12 rounded-3xl">
          <h2 className="text-4xl family-aleo my-6">Add a Class</h2>
          <p className="mb-4">Please fill up the form to add your class.</p>
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* toy name and seller */}
            <div className="flex gap-6">
              <div className="w-[50%]">
                <label>Class Name</label> <br />
                <input
                  type="text"
                  name="className"
                  placeholder="Class Name"
                  className=" mt-2 mb-4 border-2 border-x-accent-contentfocus w-full px-4 py-3 rounded-3xl outline-accent2"
                  required
                  {...register("className", { required: true, maxLength: 120 })}
                />
              </div>
              <div className="w-[50%]">
                <label>Class Image</label> <br />
                <input
                  type="text"
                  name="classImg"
                  placeholder="Class Image"
                  className=" mt-2 mb-4 border-2 border-x-accent-contentfocus w-full px-4 py-3 rounded-3xl outline-accent2"
                  required
                  {...register("classImg", { required: true, maxLength: 120 })}
                />
              </div>
            </div>

            {/* seller email and sub-category */}
            <div className="flex gap-6">
              <div className="w-1/2">
                <label>Instructor name</label> <br />
                <input
                  type="text"
                  name="instructorName"
                  defaultValue={user?.displayName}
                  placeholder="Enter your name"
                  className=" mt-2 mb-4 border-2 border-x-accent-contentfocus w-full px-4 py-3 rounded-3xl  outline-accent2"
                  required
                  {...register("instructorName", {
                    required: true,
                    maxLength: 120,
                  })}
                />
              </div>
              <div className="w-[50%]">
                <label>Instructor Email</label> <br />
                <input
                  type="email"
                  name="instructorEmail"
                  defaultValue={user?.email}
                  placeholder="Enter your email"
                  className=" mt-2 mb-4 border-2 border-x-accent-contentfocus w-full px-4 py-3 rounded-3xl  outline-accent2"
                  required
                  {...register("instructorEmail", {
                    required: true,
                    maxLength: 120,
                  })}
                />
              </div>
            </div>

            {/* Price and Rating */}
            <div className="flex gap-6">
              <div className="w-[50%]">
                <label>Available seats</label> <br />
                <input
                  type="number"
                  name="seats"
                  placeholder="Enter quantity"
                  className=" mt-2 mb-4 border-2 border-x-accent-contentfocus w-full px-4 py-3 rounded-3xl  outline-accent2"
                  required
                  {...register("seats", {
                    valueAsNumber: true,
                    required: true,
                  })}
                />
              </div>

              <div className="w-[50%]">
                <label>Price</label> <br />
                <input
                  type="number"
                  name="price"
                  placeholder="Enter class price"
                  className=" mt-2 mb-4 border-2 border-x-accent-contentfocus w-full px-4 py-3 rounded-3xl  outline-accent2"
                  required
                  {...register("price", {
                    valueAsNumber: true,
                    required: true,
                  })}
                />
              </div>
            </div>

            <input
              type="submit"
              className=" transition duration-200  shadow-md  md:mb-0  px-4 py-2 md:px-12 md:py-3 m-2 text-xl rounded-3xl border-transparent border-2 text-white btn banner-btn mb-8 w-full cursor-pointer"
              value="Submit"
            />
          </form>
        </div>
        <div className="">
          <img
            src=""
            className="w-[65%] mx-auto lg:w-full rounded-3xl"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default AddClass;
