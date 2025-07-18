import CourseCard from "../../../Components/CourseCard";

export default function Courses() {
  const coursesData = [
    {
      id: 1,
      title: "الصف الأول الثانوي",
      description: "ابدأ رحلتك التعليمية مع أساسيات المرحلة الثانوية",
      image:
        "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
      coursesCount: "12 كورس",
      level: "مبتدئ",
    },
    {
      id: 2,
      title: "الصف الثاني الثانوي",
      description: "طور مهاراتك وعمق فهمك للمواد الدراسية",
      image:
        "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
      coursesCount: "14 كورس",
      level: "متوسط",
    },
    {
      id: 3,
      title: "الصف الثالث الثانوي",
      description: "استعد للامتحانات النهائية والتفوق الأكاديمي",
      image:
        "https://images.unsplash.com/photo-1523050854058-8df90110c9d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
      coursesCount: "16 كورس",
      level: "متقدم",
    },
  ];

  return (
    <div className="text-center text-[#1C1D3E] font-semibold py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="flex flex-col items-center gap-4 mb-12">
          <h4 className="text-xl text-teal-primary">الكورسات</h4>
          <h5 className="text-4xl mb-4">المراحل التعليمية</h5>
          <div className="max-w-2xl">
            <p className="font-rady-pro-regular text-[16px] font-normal text-[#5F5F5F]">
              اختر المرحلة التعليمية المناسبة لك وابدأ رحلة التعلم مع أفضل
              المدرسين والمناهج التفاعلية
            </p>
          </div>
        </div>

        {/* Courses Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {coursesData.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </div>
    </div>
  );
}
