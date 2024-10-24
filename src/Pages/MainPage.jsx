const MainPage = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto shadow-lg rounded-lg mt-10 bg-white dark:bg-gray-800">
      <h1 className="text-4xl font-bold text-center text-blue-600 dark:text-blue-400 mb-6 p-6 sm:p-4">
        Welcome to My Website!
      </h1>
      <p className="mt-4 text-lg text-center text-gray-700 dark:text-gray-300 leading-relaxed">
        Hi there! I'm <span className="font-semibold">Ye Man Oo</span>, a
        passionate web developer from Taunggyi, Shan State, Myanmar. I
        specialize in building modern, interactive web applications with{" "}
        <span className="font-semibold">React</span> and{" "}
        <span className="font-semibold">Next.js</span>, and I love exploring new
        technologies to create seamless user experiences.
      </p>
      <p className="mt-4 text-lg text-center text-gray-700 dark:text-gray-300 leading-relaxed">
        My tech stack includes <span className="font-semibold">JavaScript</span>
        , <span className="font-semibold">TypeScript</span>, and{" "}
        <span className="font-semibold">Python</span>, with expertise in
        databases like <span className="font-semibold">PostgreSQL</span>,{" "}
        <span className="font-semibold">MongoDB</span>, and{" "}
        <span className="font-semibold">SQLite</span>. I also enjoy working with
        tools like <span className="font-semibold">Docker</span>,{" "}
        <span className="font-semibold">Git</span>, and various API Technologies
        including <span className="font-semibold">REST</span> and{" "}
        <span className="font-semibold">GraphQL</span>.
      </p>
      <p className="mt-4 text-lg text-center text-gray-700 dark:text-gray-300 leading-relaxed">
        When I'm not coding, you’ll find me contributing to projects like{" "}
        <span className="font-semibold">Buy and Sell Vehicles</span>, or
        creating mood tracking apps like{" "}
        <span className="font-semibold">Mood Tracker</span> to help users
        analyze their emotional well-being. Feel free to explore my work!
      </p>
      <div className="mt-6 text-center">
        <a
          href="https://github.com/Axizeaus"
          target="_blank"
          className="inline-block px-6 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition duration-300"
        >
          Check Out My Github!
        </a>
      </div>
    </div>
  );
};

export default MainPage;
