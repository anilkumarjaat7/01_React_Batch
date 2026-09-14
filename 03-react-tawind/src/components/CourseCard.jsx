function CourseCard({ course }) {
  return (
    <div className="bg-emerald-300 rounded-xl ">
      <img src={course.image} className="h-48 w-full object-cover rounded-xl" />
      {/* Coard content */}
      <div className="p-5">
        <span className="inline-block bg-blue-100 text-blue-600 px-3 py-1 mb-3">
          {course.category}
        </span>
        <h2 className="text-xl font-bold text-gray-700 mb-2">{course.title}</h2>
        <p>{course.description}</p>
        <div className="">
          <span>{course.duration}</span>

          <span>{course.price}</span>
        </div>

        <button>View Course</button>
      </div>
    </div>
  );
}

export default CourseCard;
