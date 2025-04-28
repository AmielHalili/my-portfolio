const Projects = () => {
  const projects = [
    {
      title: 'E-commerce Platform',
      description: 'A full-stack e-commerce platform with user authentication, product management, and payment integration.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      github: 'https://github.com/yourusername/ecommerce',
      demo: 'https://demo-ecommerce.com',
    },
    {
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates and team features.',
      technologies: ['React', 'Firebase', 'Material-UI'],
      github: 'https://github.com/yourusername/task-manager',
      demo: 'https://demo-taskmanager.com',
    },
    {
      title: 'Weather Dashboard',
      description: 'A weather application that displays current and forecasted weather data using a weather API.',
      technologies: ['React', 'OpenWeather API', 'Chart.js'],
      github: 'https://github.com/yourusername/weather-dashboard',
      demo: 'https://demo-weather.com',
    },
    {
      title: 'Weather Dashboard',
      description: 'A weather application that displays current and forecasted weather data using a weather API.',
      technologies: ['React', 'OpenWeather API', 'Chart.js'],
      github: 'https://github.com/yourusername/weather-dashboard',
      demo: 'https://demo-weather.com',
    },
  ];

  return (
    <section id="projects" className="py-16 md:py-20 bg-dark-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-soft-white mb-8">Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-mid-gray p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <h3 className="text-xl font-semibold text-soft-white mb-3">{project.title}</h3>
              <p className="text-light-gray mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-dark-gray text-light-blue rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex space-x-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-light-gray hover:text-bright-blue"
                >
                  GitHub
                </a>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-light-gray hover:text-bright-blue"
                >
                  Demo
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects; 