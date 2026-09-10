function Home() {
  return (
    <main className="main">
      <section className="hero">
        <h1>Welcome to MyWebsite</h1>

        <p>Learn React and build modern web applications.</p>

        <button>Get Started</button>
      </section>

      <section className="cards">
        <div className="card">
          <h2>React</h2>
          <p>Learn React components, props, state and hooks.</p>
        </div>

        <div className="card">
          <h2>JavaScript</h2>
          <p>Learn modern JavaScript for frontend development.</p>
        </div>

        <div className="card">
          <h2>Projects</h2>
          <p>Build real-world projects using React.</p>
        </div>
      </section>
    </main>
  );
}

export default Home;
