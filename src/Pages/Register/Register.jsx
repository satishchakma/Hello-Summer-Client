import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProviders";

const Register = () => {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm();
  const password = watch("password");

  const [showPassword, setShowPassword] = useState(false);

  const { createUser, updateUserProfile } = useContext(AuthContext);
  const navigate = useNavigate();

  const onSubmit = (data) => {
    console.log(data);
    createUser(data.email, data.password).then((result) => {
      const loggedUser = result.user;
      console.log(loggedUser);

      updateUserProfile(data.name, data.photoURL)
        .then(() => {
          const saveUser = { name: data.name, email: data.email };
          fetch("http://localhost:3000/users", {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(saveUser),
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.insertedId) {
                reset();
                // Swal.fire({
                //   position: "top-end",
                //   icon: "success",
                //   title: "User created successfully.",
                //   showConfirmButton: false,
                //   timer: 1500,
                // });
                alert("user created successfully");
                navigate("/");
              }
            });
        })
        .catch((error) => console.log(error));
    });
  };

  console.log(watch("example")); // watch input value by passing the name of it
  return (
    <>
      <div className="bg-[url(https://hello-summer.axiomthemes.com/wp-content/uploads/2017/11/top_bg.jpg?id=324)] h-[300px] flex items-center justify-center">
        <h1 className="family-lucky text-white text-center text-7xl">
          Register
        </h1>
      </div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="card-body grid grid-cols-2 container mx-auto"
      >
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            type="text"
            {...register("name", { required: true })}
            name="name"
            placeholder="Name"
            className="input input-bordered"
          />
          {errors.name && (
            <span className="text-red-600">Name is required</span>
          )}
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo URL</span>
          </label>
          <input
            type="text"
            {...register("photoURL", { required: true })}
            placeholder="Photo URL"
            className="input input-bordered"
          />
          {errors.photoURL && (
            <span className="text-red-600">Photo URL is required</span>
          )}
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            {...register("email", { required: true })}
            name="email"
            placeholder="email"
            className="input input-bordered"
          />
          {errors.email && (
            <span className="text-red-600">Email is required</span>
          )}
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            type="password"
            {...register("password", {
              required: true,
              minLength: 6,
              maxLength: 20,
              pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
            })}
            placeholder="password"
            className="input input-bordered"
          />
          {errors.password?.type === "required" && (
            <p className="text-red-600">Password is required</p>
          )}
          {errors.password?.type === "minLength" && (
            <p className="text-red-600">Password must be 6 characters</p>
          )}
          {errors.password?.type === "maxLength" && (
            <p className="text-red-600">
              Password must be less than 20 characters
            </p>
          )}
          {errors.password?.type === "pattern" && (
            <p className="text-red-600">
              Password must have one Uppercase one lower case, one number and
              one special character.
            </p>
          )}
        </div>
        {/* <div className="form-control">
          <label className="label">
            <span className="label-text"> Confirm Password</span>
          </label>
          <input
            type="password"
            {...register("password", {
              required: true,
              minLength: 6,
              maxLength: 20,
              pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
            })}
            placeholder="password"
            className="input input-bordered"
          />
          {errors.password?.type === "required" && (
            <p className="text-red-600">Password is required</p>
          )}
          {errors.password?.type === "minLength" && (
            <p className="text-red-600">Password must be 6 characters</p>
          )}
          {errors.password?.type === "maxLength" && (
            <p className="text-red-600">
              Password must be less than 20 characters
            </p>
          )}
          {errors.password?.type === "pattern" && (
            <p className="text-red-600">
              Password must have one Uppercase one lower case, one number and
              one special character.
            </p>
          )}
        </div> */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Confirm Password</span>
          </label>
          <input
            type={showPassword ? "text" : "password"}
            {...register("confirmPassword", {
              validate: (value) =>
                value === password || "Passwords do not match",
            })}
            placeholder="Confirm Password"
            className="input input-bordered"
          />
          {errors.confirmPassword && (
            <p className="text-red-600">{errors.confirmPassword.message}</p>
          )}
        </div>
        <p className="block col-span-2">
          Already have an account?
          <Link to="/login" className="underline">
            Login here
          </Link>
        </p>
        <div className="form-control mt-6 col-span-2">
          <input
            className="family-aleo banner-btn mt-6"
            type="submit"
            value="Register"
          />
        </div>
      </form>

      {/* <SocialLogin></SocialLogin> */}
    </>
  );
};

export default Register;
