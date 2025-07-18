import { FaQuestionCircle, FaVideo, FaChartLine } from "react-icons/fa";

const data = {
  features: [
    {
      id: 1,
      title: "بنوك أسئلة و إختبارات إلكترونية",
      description:
        "يتوفر من خلال المنصة بنوك أسئلة في كل فرع من فروع المادة لطلاب المرحلة الثانوية و إختبارات إلكترونية محاكية لإختبارات الوزارة.",
      icon: <FaQuestionCircle className="text-primary" />,
    },
    {
      id: 2,
      title: "شرح متزامن و غير متزامن",
      description:
        "يتوفر من خلال المنصة الشرح مباشر من خلال فصول إفتراضية مع الأستاذ محمود عبد العليم أو فيديوهات مسجله.",
      icon: <FaVideo className="text-primary" />,
    },
    {
      id: 3,
      title: "متابعة مستمرة",
      description:
        "نظام متابعة متكامل للطالب و لولي الأمر مدعم بإحصائيات و تقارير لمستوى الطالب في الإختبارات.",
      icon: <FaChartLine className="text-primary" />,
    },
  ],
};
export default function Features() {
  return (
    <div>
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-xl font-semibold text-teal-primary text-center mb-8">
          ليه تختارنا
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.features.map((feature) => (
            <FeaturesCard
              key={feature.id}
              title={feature.title}
              description={feature.description}
              icon={feature.icon} // You can add an icon if needed
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function FeaturesCard({ title, description, icon }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 transition-all duration-300 hover:shadow-xl hover:scale-105 border-b-2 border-[#0e9985] h-full">
      <div className="flex flex-col items-center text-center">
        {icon && <div className="text-5xl mb-5 text-[#0e9985]">{icon}</div>}
        <h3 className="text-xl font-semibold mb-3 font-[RadyPro] text-[#02060b]">
          {title}
        </h3>
        <p className="text-gray-600 font-[RadyPro-Regular]">{description}</p>
      </div>
    </div>
  );
}
