import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";

const data = {
  regestier: "انشئ حسابك الان",
  login: "سجل دخولك الان",
};

export default function Header() {
  return (
    <header className=" py-6 sticky top-0  bg-white z-50 ">
      {/* Logo side  */}

      <div className="container flex items-center justify-around xl:justify-between mx-auto">
        <Link to="/" className="w-12 h-10">
          <img
            src="https://alnwabgh.com/new/images/logo.png"
            className="w-full h-full "
            alt="منصة الأستاذ احمد عصام"
          />
        </Link>

        <nav>
          <ul className="flex gap-3">
            <li>
              <Link
                to="/register"
                className="bg-teal-primary text-white font-rady-pro-regular   w-fit px-3 py-2 rounded-lg text-sm hover:bg-teal-dark hover:-translate-y-1 transition-all duration-300
                            flex gap-1 items-center
                            "
              >
                <FaUser />
                {data.regestier}
              </Link>
            </li>

            <li>
              <Link
                to="/login"
                className="bg-teal-primary text-white font-rady-pro-regular   w-fit px-3 py-2 rounded-lg text-sm hover:bg-teal-dark hover:-translate-y-1 transition-all duration-300
                            flex gap-1 items-center
                            "
              >
                <FaUser />
                {data.login}
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
