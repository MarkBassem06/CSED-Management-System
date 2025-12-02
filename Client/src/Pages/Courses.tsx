import CoursCard from "../components/CoursCard";

export default function Courses() {
  // 1. Array of Mock Data
  const coursesData = [
    {
      id: 1,
      title: "Introduction to HCI",
      description: "Learn the basics of Human-Computer Interaction.",
      code: "HCI101",
      level: 1,
      iscompleted: false,
      numberOfMaterials: 10,
      finishedMaterials: 0,
    },
    {
      id: 2,
      title: "Programming 1",
      description: "Learn C, algorithms and problem solving techniques.",
      code: "CSE105",
      level: 1,
      iscompleted: true,
      numberOfMaterials: 12,
      finishedMaterials: 12,
    },
    {
      id: 3,
      title: "Digital Logic Design",
      description: "Boolean algebra, logic gates, and circuit design.",
      code: "CSE102",
      level: 1,
      iscompleted: false,
      numberOfMaterials: 8,
      finishedMaterials: 4,
    },
    {
      id: 4,
      title: "Data Structures",
      description: "Stacks, queues, trees, and graphs implementation.",
      code: "CSE201",
      level: 2,
      iscompleted: false,
      numberOfMaterials: 15,
      finishedMaterials: 2,
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 justify-items-center sm:justify-items-start">
      
      {/* 2. Map through the array */}
      {coursesData.map((course) => (
        <CoursCard
          key={course.id} 
          title={course.title}
          description={course.description}
          code={course.code}
          level={course.level}
          iscompleted={course.iscompleted}
          numberOfMaterials={course.numberOfMaterials}
          finishedMaterials={course.finishedMaterials}
        />
      ))}

    </div>
  );
}