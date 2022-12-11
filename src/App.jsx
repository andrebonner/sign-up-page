import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { AcademicCapIcon } from "@heroicons/react/24/outline";
import "./App.css";

const App = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submit", e);
  };
  return (
    <div className="flex md:flex-row flex-col h-screen md:overflow-hidden">
      <div className="w-full md:w-1/2 bg-blue-500 h-screen md:-ml-10 md:-skew-x-6">
        <h1 className="flex m-3 text-4xl text-white font-medium md:skew-x-6">
          <AcademicCapIcon className="w-12" />
          &nbsp; School.com
        </h1>
        <div className="flex flex-col justify-center h-3/4 md:skew-x-6">
          {" "}
          <div className=" mx-auto w-2/3 md:w-1/2">
            <h2 className="py-5 text-2xl text-center text-white font-medium">
              Already have a Account?
            </h2>
            <p className="text-center text-white">
              Millions of people around the world are gaining access to this
              full featured portal. Welcome back to our community today!
            </p>
            <div className="mx-auto my-20 w-full md:w-1/3">
              <button className="mx-auto w-full rounded-lg bg-red-500 hover:bg-red-600 text-xl text-white font-medium shadow-md py-2 px-5">
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full md:w-1/2 h-screen">
        <div className="flex flex-col justify-center h-4/5 mt-20">
          <h2 className="text-2xl text-center text-black font-medium py-2">
            Create An Account
          </h2>
          <p className="text-center text-black py-2">
            Join our community today by creating an account today.
            <br /> You are just a few steps away.
          </p>
          <form className="my-4" onSubmit={handleSubmit}>
            <div className="flex flex-col items-center">
              <div className="flex w-2/3 md:w-1/2 space-x-2">
                <div className="flex flex-col w-1/2">
                  <label className="text-lg">First Name</label>
                  <input
                    type="text"
                    placeholder="First Name"
                    className="border border-gray-400 rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 text-lg placeholder:text-slate-400"
                  />
                </div>{" "}
                <div className="flex flex-col w-1/2">
                  <label className="text-lg">Last Name</label>
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="border border-gray-400 rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 text-lg placeholder:text-slate-400"
                  />
                </div>
              </div>
              <div className="flex flex-col w-2/3 md:w-1/2">
                <label className="text-lg">Email</label>
                <input
                  type="email"
                  placeholder="Email"
                  className="border border-gray-400 rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 text-lg placeholder:text-slate-400"
                />
              </div>
              <div className="flex flex-col w-2/3 md:w-1/2">
                <label className="text-lg">Phone</label>
                <input
                  type="text"
                  placeholder="Phone"
                  className="border border-gray-400 rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 text-lg placeholder:text-slate-400"
                />
              </div>
            </div>
            <div className="flex flex-col items-center my-5">
              <button
                type="submit"
                className="rounded-lg bg-purple-500 hover:bg-purple-600 text-xl text-white font-medium shadow-md py-2 px-5"
              >
                Create Account
              </button>
            </div>
            <div className="flex flex-col items-center my-2">Or</div>
            <div className="flex flex-col items-center my-5">
              <button
                type="submit"
                className="flex items-center rounded-lg bg-white hover:bg-purple-600 text-xl text-black font-medium shadow-md py-2 px-5 my-2"
              >
                <svg
                  viewBox="-2 -2 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="xMinYMin"
                  class="w-12 h-12"
                >
                  <path d="M4.376 8.068A5.944 5.944 0 0 0 4.056 10c0 .734.132 1.437.376 2.086a5.946 5.946 0 0 0 8.57 3.045h.001a5.96 5.96 0 0 0 2.564-3.043H10.22V8.132h9.605a10.019 10.019 0 0 1-.044 3.956 9.998 9.998 0 0 1-3.52 5.71A9.958 9.958 0 0 1 10 20 9.998 9.998 0 0 1 1.118 5.401 9.998 9.998 0 0 1 10 0c2.426 0 4.651.864 6.383 2.302l-3.24 2.652a5.948 5.948 0 0 0-8.767 3.114z" />
                </svg>
                &nbsp; Sign up with Google
              </button>
              <button
                type="button"
                className="flex items-center rounded-lg bg-white hover:bg-purple-600 text-xl text-black font-medium shadow-md py-2 px-5 my-2"
              >
                <svg
                  viewBox="0 0 64 64"
                  id="i-github"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-12 h-12"
                >
                  <path
                    stroke-width="0"
                    fill="currentColor"
                    d="M32 0 C14 0 0 14 0 32 0 53 19 62 22 62 24 62 24 61 24 60 L24 55 C17 57 14 53 13 50 13 50 13 49 11 47 10 46 6 44 10 44 13 44 15 48 15 48 18 52 22 51 24 50 24 48 26 46 26 46 18 45 12 42 12 31 12 27 13 24 15 22 15 22 13 18 15 13 15 13 20 13 24 17 27 15 37 15 40 17 44 13 49 13 49 13 51 20 49 22 49 22 51 24 52 27 52 31 52 42 45 45 38 46 39 47 40 49 40 52 L40 60 C40 61 40 62 42 62 45 62 64 53 64 32 64 14 50 0 32 0 Z"
                  />
                </svg>
                &nbsp; Sign up with Github
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default App;
