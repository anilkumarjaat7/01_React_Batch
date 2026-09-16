import CourseCard from "./CourseCard";

function Course() {
  const courses = [
    {
      id: 1,
      title: "Java Full Stack Development",
      category: "Java",
      description:
        "Learn Java, Spring Boot, MySQL, React and build real-world projects.",
      duration: "6 Months",
      price: 25000,
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3",
    },
    {
      id: 2,
      title: "MERN Stack Development",
      category: "MERN",
      description:
        "Learn MongoDB, Express, React and Node.js with practical projects.",
      duration: "5 Months",
      price: 22000,
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    },
    {
      id: 3,
      title: "Python Full Stack",
      category: "Python",
      description:
        "Learn Python, Django, REST API, React and database development.",
      duration: "6 Months",
      price: 24000,
      image: "https://images.unsplash.com/photo-1526379095098-d400fd0bf935",
    },
    {
      id: 4,
      title: "Frontend Development",
      category: "Frontend",
      description: "Learn HTML, CSS, JavaScript, React and Tailwind CSS.",
      duration: "4 Months",
      price: 18000,
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c",
    },
  ];

  return (
    <div className="bg-gray-300 py-12">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-gray-700">Our Course</h1>

        <p className="text-gray-600 mt-3">
          Learn industry-ready skills with practical projects
        </p>
      </div>

      <div className="grid grid-cols-4 gap-8 ">
        {courses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
        ;
      </div>

      {/* <CourseCard
        course={{
          title: "Java Full Stack Development",
          category: "Java",
          description:
            "Learn Java, Spring Boot, MySQL, React and build real-world projects.",
          duration: "6 Months",
          price: 25000,
          image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3",
        }}
      />
      <CourseCard
        course={{
          title: "MERN Stack Development",
          category: "MERN",
          description:
            "Learn MongoDB, Express, React and Node.js with practical projects.",
          duration: "5 Months",
          price: 22000,
          image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
        }}
      />
      <CourseCard
        course={{
          title: "Python Full Stack",
          category: "Python",
          description:
            "Learn Python, Django, REST API, React and database development.",
          duration: "6 Months",
          price: 24000,
          image: "https://images.unsplash.com/photo-1526379095098-d400fd0bf935",
        }}
      />
      <CourseCard
        course={{
          title: "Frontend Development",
          category: "Frontend",
          description: "Learn HTML, CSS, JavaScript, React and Tailwind CSS.",
          duration: "4 Months",
          price: 18000,
          image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c",
        }}
      />*/}
    </div>
  );
}

export default Course;
