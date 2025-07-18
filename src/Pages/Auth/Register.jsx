import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaUser,
  FaLock,
  FaEye,
  FaEyeSlash,
  FaEnvelope,
  FaPhone,
  FaGraduationCap,
} from "react-icons/fa";

export default function Register() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    grade: "",
    agreeToTerms: false,
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const grades = [
    { value: "", label: "اختر الصف الدراسي" },
    { value: "grade1", label: "الصف الأول الثانوي" },
    { value: "grade2", label: "الصف الثاني الثانوي" },
    { value: "grade3", label: "الصف الثالث الثانوي" },
  ];

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: "",
      });
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "الاسم الكامل مطلوب";
    }

    if (!formData.email.trim()) {
      newErrors.email = "البريد الإلكتروني مطلوب";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "البريد الإلكتروني غير صحيح";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "رقم الهاتف مطلوب";
    }

    if (!formData.password) {
      newErrors.password = "كلمة المرور مطلوبة";
    } else if (formData.password.length < 6) {
      newErrors.password = "كلمة المرور يجب أن تكون 6 أحرف على الأقل";
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = "تأكيد كلمة المرور مطلوب";
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "كلمة المرور غير متطابقة";
    }

    if (!formData.grade) {
      newErrors.grade = "الصف الدراسي مطلوب";
    }

    if (!formData.agreeToTerms) {
      newErrors.agreeToTerms = "يجب الموافقة على الشروط والأحكام";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      console.log("Register data:", formData);
      setIsLoading(false);
      // Here you would typically handle the registration logic
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
            إنشاء حساب جديد
          </h1>
          <p className="text-gray-600 font-rady-pro-regular">
            انضم إلى منصة الأستاذ احمد عصام وابدأ رحلة التعلم
          </p>
        </div>

        {/* Register Form */}
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Full Name Field */}
            <div>
              <label className="block text-dark-blue font-semibold mb-2 font-rady-pro">
                الاسم الكامل
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                  <FaUser className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  className={`w-full pr-10 pl-4 py-3 border rounded-lg focus:ring-2 focus:ring-teal-primary focus:border-transparent transition-all duration-300 font-rady-pro-regular ${
                    errors.fullName ? "border-red-500" : "border-gray-300"
                  }`}
                  placeholder="أدخل اسمك الكامل"
                />
              </div>
              {errors.fullName && (
                <p className="text-red-500 text-sm mt-1 font-rady-pro-regular">
                  {errors.fullName}
                </p>
              )}
            </div>

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
                  className={`w-full pr-10 pl-4 py-3 border rounded-lg focus:ring-2 focus:ring-teal-primary focus:border-transparent transition-all duration-300 font-rady-pro-regular ${
                    errors.email ? "border-red-500" : "border-gray-300"
                  }`}
                  placeholder="أدخل بريدك الإلكتروني"
                  dir="ltr"
                />
              </div>
              {errors.email && (
                <p className="text-red-500 text-sm mt-1 font-rady-pro-regular">
                  {errors.email}
                </p>
              )}
            </div>

            {/* Phone Field */}
            <div>
              <label className="block text-dark-blue font-semibold mb-2 font-rady-pro">
                رقم الهاتف
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                  <FaPhone className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className={`w-full pr-10 pl-4 py-3 border rounded-lg focus:ring-2 focus:ring-teal-primary focus:border-transparent transition-all duration-300 font-rady-pro-regular ${
                    errors.phone ? "border-red-500" : "border-gray-300"
                  }`}
                  placeholder="أدخل رقم هاتفك"
                  dir="ltr"
                />
              </div>
              {errors.phone && (
                <p className="text-red-500 text-sm mt-1 font-rady-pro-regular">
                  {errors.phone}
                </p>
              )}
            </div>

            {/* Grade Selection */}
            <div>
              <label className="block text-dark-blue font-semibold mb-2 font-rady-pro">
                الصف الدراسي
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                  <FaGraduationCap className="h-5 w-5 text-gray-400" />
                </div>
                <select
                  name="grade"
                  value={formData.grade}
                  onChange={handleChange}
                  className={`w-full pr-10 pl-4 py-3 border rounded-lg focus:ring-2 focus:ring-teal-primary focus:border-transparent transition-all duration-300 font-rady-pro-regular ${
                    errors.grade ? "border-red-500" : "border-gray-300"
                  }`}
                >
                  {grades.map((grade) => (
                    <option key={grade.value} value={grade.value}>
                      {grade.label}
                    </option>
                  ))}
                </select>
              </div>
              {errors.grade && (
                <p className="text-red-500 text-sm mt-1 font-rady-pro-regular">
                  {errors.grade}
                </p>
              )}
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
                  className={`w-full pr-10 pl-12 py-3 border rounded-lg focus:ring-2 focus:ring-teal-primary focus:border-transparent transition-all duration-300 font-rady-pro-regular ${
                    errors.password ? "border-red-500" : "border-gray-300"
                  }`}
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
              {errors.password && (
                <p className="text-red-500 text-sm mt-1 font-rady-pro-regular">
                  {errors.password}
                </p>
              )}
            </div>

            {/* Confirm Password Field */}
            <div>
              <label className="block text-dark-blue font-semibold mb-2 font-rady-pro">
                تأكيد كلمة المرور
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                  <FaLock className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className={`w-full pr-10 pl-12 py-3 border rounded-lg focus:ring-2 focus:ring-teal-primary focus:border-transparent transition-all duration-300 font-rady-pro-regular ${
                    errors.confirmPassword
                      ? "border-red-500"
                      : "border-gray-300"
                  }`}
                  placeholder="أعد إدخال كلمة المرور"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute inset-y-0 left-0 pl-3 flex items-center"
                >
                  {showConfirmPassword ? (
                    <FaEyeSlash className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                  ) : (
                    <FaEye className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                  )}
                </button>
              </div>
              {errors.confirmPassword && (
                <p className="text-red-500 text-sm mt-1 font-rady-pro-regular">
                  {errors.confirmPassword}
                </p>
              )}
            </div>

            {/* Terms Agreement */}
            <div>
              <div className="flex items-center">
                <input
                  id="agreeToTerms"
                  name="agreeToTerms"
                  type="checkbox"
                  checked={formData.agreeToTerms}
                  onChange={handleChange}
                  className="h-4 w-4 text-teal-primary focus:ring-teal-primary border-gray-300 rounded"
                />
                <label
                  htmlFor="agreeToTerms"
                  className="mr-2 block text-sm text-gray-700 font-rady-pro-regular"
                >
                  أوافق على{" "}
                  <Link
                    to="/terms"
                    className="text-teal-primary hover:text-teal-dark"
                  >
                    الشروط والأحكام
                  </Link>{" "}
                  و{" "}
                  <Link
                    to="/privacy"
                    className="text-teal-primary hover:text-teal-dark"
                  >
                    سياسة الخصوصية
                  </Link>
                </label>
              </div>
              {errors.agreeToTerms && (
                <p className="text-red-500 text-sm mt-1 font-rady-pro-regular">
                  {errors.agreeToTerms}
                </p>
              )}
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
                  إنشاء الحساب
                </>
              )}
            </button>
          </form>

          {/* Login Link */}
          <div className="mt-8 text-center">
            <p className="text-gray-600 font-rady-pro-regular">
              لديك حساب بالفعل؟{" "}
              <Link
                to="/login"
                className="text-teal-primary hover:text-teal-dark font-semibold font-rady-pro"
              >
                سجل دخولك الآن
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
