import React from "react";
import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";

const data = {
  title: "منصة الأستاذ",
  name: "احمد عصام احمد",
  slug: "منصة متخصصة في تدريس مادة",
  course: "الرياضيات",
  grade: "لطلاب الثانوية العامة",
  regestier: "انشئ حسابك الان",
};

export default function Hero() {
  return (
    <div className="w-full py-6 text-center xl:text-right">
      <div className="container mx-auto flex flex-col xl:flex-row items-center justify-center h-full gap-10">
        {/* Left side */}
        <div className="order-2 max-w-[500px] flex flex-col gap-5 justify-center items-center xl:items-start">
          <h2 className="font-rady-pro text-6xl font-700 text-teal-dark">
            {data.title}
          </h2>
          <h1 className="font-rady-pro text-6xl font-700 text-teal-primary">
            {data.name}
          </h1>
          <p className="font-rady-pro-regular text-2xl  text-yellow-warning">
            {data.slug}{" "}
            <span className="text-white bg-yellow-warning p-2">
              {data.course}{" "}
            </span>
            {data.grade}
          </p>

          <Link
            to="/register"
            className="bg-teal-primary text-white font-rady-pro-regular   w-fit px-3 py-2 rounded-lg text-lg hover:bg-teal-dark hover:-translate-y-1 transition-all duration-300
            flex gap-1 items-center justify-center
            "
          >
            <FaUser />
            {data.regestier}
          </Link>
        </div>
        {/* Right side */}
        <div>
          <img
            src="https://alnwabgh.com/new/images/banner/mrmahmoud.png"
            alt="الأستاذ احمد عصام"
            className=" w-full h-auto md:h-[500px] xl:h-screen object-cover"
          />
        </div>
      </div>
    </div>
  );
}
