const MainPage = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto shadow-lg rounded-lg mt-10 bg-white dark:bg-gray-800">
      <h1 className="text-4xl font-bold text-center text-blue-600 dark:text-blue-400 mb-6">
        Welcome to My Website!
      </h1>
      <p className="mt-4 text-lg text-center text-gray-700 dark:text-gray-300 leading-relaxed">
        Hi there! I'm <span className="font-semibold">Ye Man Oo</span>, a web
        developer from Taunggyi, Shan State, Myanmar. I love building fun and
        interactive web apps using <span className="font-semibold">React</span>{" "}
        and <span className="font-semibold">Next.js</span>.
      </p>
      <p className="mt-4 text-lg text-center text-gray-700 dark:text-gray-300 leading-relaxed">
        I’ve learned a lot through{" "}
        <span className="font-semibold">The Odin Project</span> and other online
        resources. My toolkit includes{" "}
        <span className="font-semibold">Python</span>,{" "}
        <span className="font-semibold">JavaScript</span>, and databases like{" "}
        <span className="font-semibold">MongoDB</span> and{" "}
        <span className="font-semibold">PostgreSQL</span>.
      </p>
      <p className="mt-4 text-lg text-center text-gray-700 dark:text-gray-300 leading-relaxed">
        I enjoy creating smooth user experiences and exploring new technologies.
        Whether it’s building APIs with{" "}
        <span className="font-semibold">REST</span> or{" "}
        <span className="font-semibold">GraphQL</span>, I’m always up for a
        challenge!
      </p>
      <div className="mt-6 text-center">
        <a
          href="https://github.com/Axizeaus"
          className="inline-block px-6 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition duration-300"
        >
          Check Out My Github!
        </a>
      </div>
    </div>
  );
};

export default MainPage;
