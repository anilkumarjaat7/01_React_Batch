import CourseCard from "./CourseCard";

function Course() {
  return (
    <div className="grid grid-cols-4 gap-8">
      <CourseCard
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
      />
    </div>
  );
}

export default Course;
