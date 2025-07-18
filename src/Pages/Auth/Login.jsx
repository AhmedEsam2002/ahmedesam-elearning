import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaUser,
  FaLock,
  FaEye,
  FaEyeSlash,
  FaEnvelope,
  FaFacebookF,
} from "react-icons/fa";

export default function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      console.log("Login data:", formData);
      setIsLoading(false);
      // Here you would typically handle the login logic
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-primary/10 to-blue-primary/10 flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <img
              src="https://alnwabgh.com/new/images/logo.png"
              alt="Logo"
              className="w-16 h-12"
            />
          </div>
          <h1 className="text-3xl font-bold text-dark-blue font-rady-pro mb-2">
            تسجيل الدخول
          </h1>
          <p className="text-gray-600 font-rady-pro-regular">
            أهلاً بك مرة أخرى في منصة الأستاذ احمد عصام
          </p>
        </div>

        {/* Login Form */}
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email Field */}
            <div>
              <label className="block text-dark-blue font-semibold mb-2 font-rady-pro">
                البريد الإلكتروني
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                  <FaEnvelope className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full pr-10 pl-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-primary focus:border-transparent transition-all duration-300 font-rady-pro-regular"
                  placeholder="أدخل بريدك الإلكتروني"
                  dir="ltr"
                />
              </div>
            </div>

            {/* Password Field */}
            <div>
              <label className="block text-dark-blue font-semibold mb-2 font-rady-pro">
                كلمة المرور
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                  <FaLock className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  className="w-full pr-10 pl-12 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-primary focus:border-transparent transition-all duration-300 font-rady-pro-regular"
                  placeholder="أدخل كلمة المرور"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 left-0 pl-3 flex items-center"
                >
                  {showPassword ? (
                    <FaEyeSlash className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                  ) : (
                    <FaEye className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                  )}
                </button>
              </div>
            </div>

            {/* Remember Me & Forgot Password */}
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-teal-primary focus:ring-teal-primary border-gray-300 rounded"
                />
                <label
                  htmlFor="remember-me"
                  className="mr-2 block text-sm text-gray-700 font-rady-pro-regular"
                >
                  تذكرني
                </label>
              </div>
              <Link
                to="/forgot-password"
                className="text-sm text-teal-primary hover:text-teal-dark font-rady-pro-regular"
              >
                نسيت كلمة المرور؟
              </Link>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-teal-primary text-white font-rady-pro py-3 px-4 rounded-lg hover:bg-teal-dark focus:ring-4 focus:ring-teal-primary/50 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {isLoading ? (
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
              ) : (
                <>
                  <FaUser />
                  تسجيل الدخول
                </>
              )}
            </button>
          </form>

          {/* Register Link */}
          <div className="mt-8 text-center">
            <p className="text-gray-600 font-rady-pro-regular">
              ليس لديك حساب؟{" "}
              <Link
                to="/register"
                className="text-teal-primary hover:text-teal-dark font-semibold font-rady-pro"
              >
                انشئ حساباً جديداً
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
