import React from "react";
import Link from "next/link";
import "../app/globals.css";

const Login = () => {
  return (
    <div className="conatiner flex justify-center ">
      <div className="flex justify-center pt-0 md:pt-10">
        <div className="pr-0 hidden md:block xl:block">
          {" "}
          <img src="img/home-phones-2x.png" width="450" alt="" />
        </div>
        <form className="sm:border sm:border-gray-300  w-[350px] h-[317px] md:mr-10 lg:mr-0  rounded-md mt-10  xl:mt-10">
          <div className="ml-20 mt-6">
            <img src="img/download.png" width="200" alt="" />
          </div>
          <div className="pt-8 xl:pt-8 text-center">
            <div className="relative">
              <label
                htmlFor=""
                className="absolute top-3 left-[54px] text-[12px] text-gray-600"
              >
                phone number , username, or email
              </label>
              <input
                type="text"
                className="border border-gray-300 py-[7px] focus:mt-3  focus:text-[10px] focus:py-[14px] rounded-sm  w-[260px] cursor-pointer pl-6"
              />
            </div>
            <div className="relative pt-2">
              <label
                htmlFor=""
                className="block absolute top-4 left-[54px] text-[12px] mt-1 text-gray-500"
              >
                password
              </label>
              <input
                type="password"
                className="border border-gray-300 py-[7px] rounded-sm w-[260px]  focus:mt-3  focus:text-[10px] focus:py-[14px]  cursor-pointer pl-5 -pt-3"
              />
            </div>
          </div>
          <div className="mt-3 ml-12">
            <button className="border border-blue-400 bg-blue-400 py-[3px] rounded-md w-[260px] text-white">
              login
            </button>
          </div>
          <div className=" mt-4 text-[12px] text-gray-800 text-center">
            forget password?
          </div>
          <div className="sm:border sm:border-gray-300 rounded-md w-[350px] h-[70px] mt-[30px] xl:mt-[30px]">
            <Link
              href="#"
              className="text-blue-600 cursor-pointer  text-center block mt-5 text-[14px]"
            >
              create new account
            </Link>
          </div>
          <p className="mt-3 text-center text-[13px]">Get the app.</p>
          <div className="  flex justify-center  mt-3  w-full">
            <div className="w-[140px]  mr-2">
              <img className="mr-2" src="img/c5Rp7Ym-Klz.png" alt="" />
            </div>{" "}
            <div className="w-[110px] ">
              <img src="img/EHY6QnZYdNX.png" alt="" />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
