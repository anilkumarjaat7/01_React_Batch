const CourseCard = ({ course }) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition duration-300">
      {/* Course Image */}
      <img
        src={course.image}
        alt={course.title}
        className="w-full h-48 object-cover"
      />

      {/* Card Content */}
      <div className="p-5">
        {/* Category */}
        <span className="inline-block bg-blue-100 text-blue-600 text-sm px-3 py-1 rounded-full mb-3">
          {course.category}
        </span>

        {/* Title */}
        <h2 className="text-xl font-bold text-gray-800 mb-2">{course.title}</h2>

        {/* Description */}
        <p className="text-gray-600 text-sm mb-4">{course.description}</p>

        {/* Course Info */}
        <div className="flex justify-between items-center mb-4">
          <span className="text-gray-700 font-medium">⏱ {course.duration}</span>

          <span className="text-green-600 font-bold text-lg">
            ₹{course.price}
          </span>
        </div>

        {/* Button */}
        <button className="w-full bg-blue-600 text-white py-2.5 rounded-lg hover:bg-blue-700 transition">
          View Course
        </button>
      </div>
    </div>
  );
};

export default CourseCard;
