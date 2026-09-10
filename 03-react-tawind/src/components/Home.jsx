function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="bg-white text-center py-24 px-5">
        <h1 className="text-5xl font-bold text-gray-900 mb-5">
          Welcome to MyWebsite
        </h1>

        <p className="text-lg text-gray-600 mb-8">
          Learn React and build modern web applications.
        </p>

        <button
          className="
            bg-blue-600
            text-white
            px-6
            py-3
            rounded-lg
            hover:bg-blue-700
            transition
            font-medium
          "
        >
          Get Started
        </button>
      </section>

      {/* Cards Section */}
      <section className="bg-gray-100 py-16 px-5">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div
            className="
              bg-white
              p-8
              rounded-xl
              shadow-md
              hover:shadow-xl
              transition
              text-center
            "
          >
            <h2 className="text-2xl font-bold mb-4">React</h2>

            <p className="text-gray-600 leading-7">
              Learn React components, props, state and hooks.
            </p>
          </div>

          {/* Card 2 */}
          <div
            className="
              bg-white
              p-8
              rounded-xl
              shadow-md
              hover:shadow-xl
              transition
              text-center
            "
          >
            <h2 className="text-2xl font-bold mb-4">JavaScript</h2>

            <p className="text-gray-600 leading-7">
              Learn modern JavaScript for frontend development.
            </p>
          </div>

          {/* Card 3 */}
          <div
            className="
              bg-white
              p-8
              rounded-xl
              shadow-md
              hover:shadow-xl
              transition
              text-center
            "
          >
            <h2 className="text-2xl font-bold mb-4">Projects</h2>

            <p className="text-gray-600 leading-7">
              Build real-world projects using React.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;
