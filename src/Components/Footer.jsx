import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaWhatsapp,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaGraduationCap,
  FaChalkboardTeacher,
  FaBookOpen,
  FaUsers,
} from "react-icons/fa";

const footerData = {
  about: {
    title: "منصة الأستاذ احمد عصام",
    description:
      "منصة تعليمية متخصصة في تدريس مادة الرياضيات لطلاب الثانوية العامة بأحدث الطرق التفاعلية والتقنيات الحديثة.",
    logo: "https://alnwabgh.com/new/images/logo.png",
  },
  quickLinks: {
    title: "روابط سريعة",
    links: [
      { name: "الرئيسية", href: "/" },
      { name: "الكورسات", href: "#courses" },
      { name: "المميزات", href: "#features" },
      { name: "من نحن", href: "#about" },
      { name: "اتصل بنا", href: "#contact" },
    ],
  },
  courses: {
    title: "المراحل الدراسية",
    items: [
      { name: "الصف الأول الثانوي", href: "#" },
      { name: "الصف الثاني الثانوي", href: "#" },
      { name: "الصف الثالث الثانوي", href: "#" },
      { name: "الثانوية العامة", href: "#" },
    ],
  },
  contact: {
    title: "تواصل معنا",
    info: [
      { icon: <FaPhone />, text: "+20 123 456 7890", type: "phone" },
      { icon: <FaWhatsapp />, text: "+20 123 456 7890", type: "whatsapp" },
      { icon: <FaEnvelope />, text: "info@ahmedesam.com", type: "email" },
      { icon: <FaMapMarkerAlt />, text: "القاهرة، مصر", type: "address" },
    ],
  },
  social: {
    title: "تابعنا على",
    links: [
      { icon: <FaFacebookF />, href: "#", name: "فيسبوك" },
      { icon: <FaYoutube />, href: "#", name: "يوتيوب" },
      { icon: <FaInstagram />, href: "#", name: "انستجرام" },
      { icon: <FaTwitter />, href: "#", name: "تويتر" },
    ],
  },
  stats: [
    { icon: <FaUsers />, number: "5000+", label: "طالب" },
    { icon: <FaBookOpen />, number: "42", label: "كورس" },
    { icon: <FaChalkboardTeacher />, number: "15+", label: "سنة خبرة" },
    { icon: <FaGraduationCap />, number: "98%", label: "نجاح" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-dark-blue text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <img
                src={footerData.about.logo}
                alt="Logo"
                className="w-10 h-8"
              />
              <h3 className="text-xl font-bold text-teal-primary font-rady-pro">
                {footerData.about.title}
              </h3>
            </div>
            <p className="text-gray-300 font-rady-pro-regular text-sm leading-relaxed mb-6">
              {footerData.about.description}
            </p>

            {/* Social Media */}
            <div>
              <h4 className="text-white font-semibold mb-3 font-rady-pro">
                {footerData.social.title}
              </h4>
              <div className="flex gap-3">
                {footerData.social.links.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="w-10 h-10 bg-teal-primary/20 hover:bg-teal-primary text-teal-primary hover:text-white rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                    aria-label={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold text-white mb-6 font-rady-pro">
              {footerData.quickLinks.title}
            </h3>
            <ul className="space-y-3">
              {footerData.quickLinks.links.map((link, index) => (
                <li key={index}>
                  {link.href.startsWith("#") ? (
                    <a
                      href={link.href}
                      className="text-gray-300 hover:text-teal-primary transition-colors duration-300 font-rady-pro-regular text-sm flex items-center gap-2 group"
                    >
                      <span className="w-2 h-2 bg-teal-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                      {link.name}
                    </a>
                  ) : (
                    <Link
                      to={link.href}
                      className="text-gray-300 hover:text-teal-primary transition-colors duration-300 font-rady-pro-regular text-sm flex items-center gap-2 group"
                    >
                      <span className="w-2 h-2 bg-teal-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                      {link.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Courses */}
          <div>
            <h3 className="text-xl font-bold text-white mb-6 font-rady-pro">
              {footerData.courses.title}
            </h3>
            <ul className="space-y-3">
              {footerData.courses.items.map((course, index) => (
                <li key={index}>
                  <a
                    href={course.href}
                    className="text-gray-300 hover:text-teal-primary transition-colors duration-300 font-rady-pro-regular text-sm flex items-center gap-2 group"
                  >
                    <span className="w-2 h-2 bg-teal-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    {course.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold text-white mb-6 font-rady-pro">
              {footerData.contact.title}
            </h3>
            <div className="space-y-4">
              {footerData.contact.info.map((item, index) => (
                <div key={index} className="flex items-center gap-3 group">
                  <div className="w-10 h-10 bg-teal-primary/20 text-teal-primary rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-teal-primary group-hover:text-white transition-all duration-300">
                    {item.icon}
                  </div>
                  <span className="text-gray-300 font-rady-pro-regular text-sm">
                    {item.text}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-400 text-sm font-rady-pro-regular text-center md:text-right">
              © 2025 منصة الأستاذ احمد عصام. جميع الحقوق محفوظة.
            </div>
            <div className="flex gap-6 text-sm">
              <a
                href="#"
                className="text-gray-400 hover:text-teal-primary transition-colors duration-300 font-rady-pro-regular"
              >
                سياسة الخصوصية
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-teal-primary transition-colors duration-300 font-rady-pro-regular"
              >
                شروط الاستخدام
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
