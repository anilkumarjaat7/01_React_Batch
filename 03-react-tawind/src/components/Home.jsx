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
    </main>
  );
}

export default Home;
