export default function CourseCard({ course }) {
  return (
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden group">
      {/* Course Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={course.image}
          alt={course.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute top-4 right-4">
          <span className="bg-teal-primary text-white px-3 py-1 rounded-full text-sm font-rady-pro-regular">
            {course.level}
          </span>
        </div>
      </div>

      {/* Course Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-[#1C1D3E] mb-3">
          {course.title}
        </h3>
        <p className="text-[#5F5F5F] font-rady-pro-regular text-sm mb-4 leading-relaxed">
          {course.description}
        </p>

        {/* Course Info */}
        <div className="flex items-center justify-between mb-6">
          <span className="text-teal-primary font-semibold text-sm">
            {course.coursesCount}
          </span>
          <span className="text-[#5F5F5F] text-sm">🎓 مرحلة ثانوية</span>
        </div>

        {/* Action Button */}
        <button className="w-full bg-teal-primary text-white font-rady-pro-regular py-3 px-4 rounded-lg text-sm hover:bg-teal-dark hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2">
          <span>ابدأ التعلم الآن</span>
          <span>←</span>
        </button>
      </div>
    </div>
  );
}
