import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "E-Commerce Platform",
    description: "Full-stack e-commerce solution with React, Node.js, and MongoDB. Features include user authentication, payment integration, and admin dashboard.",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    image: "/api/placeholder/400/250",
    liveDemo: "#",
    github: "#",
    featured: true
  },
  {
    title: "Task Management App",
    description: "Collaborative task management application with real-time updates, file sharing, and team collaboration features.",
    technologies: ["React", "Express", "Socket.io", "PostgreSQL"],
    image: "/api/placeholder/400/250",
    liveDemo: "#",
    github: "#",
    featured: true
  },
  {
    title: "Weather Dashboard",
    description: "Interactive weather dashboard with location-based forecasts, historical data, and beautiful visualizations.",
    technologies: ["JavaScript", "Chart.js", "Weather API", "CSS3"],
    image: "/api/placeholder/400/250",
    liveDemo: "#",
    github: "#",
    featured: false
  },
  {
    title: "Portfolio Website",
    description: "Responsive portfolio website showcasing projects and skills with modern design and smooth animations.",
    technologies: ["React", "Tailwind", "TypeScript", "Framer Motion"],
    image: "/api/placeholder/400/250",
    liveDemo: "#",
    github: "#",
    featured: false
  },
  {
    title: "Blog Platform",
    description: "Full-featured blog platform with CMS, SEO optimization, and social sharing capabilities.",
    technologies: ["React", "Node.js", "MySQL", "JWT"],
    image: "/api/placeholder/400/250",
    liveDemo: "#",
    github: "#",
    featured: false
  },
  {
    title: "Chat Application",
    description: "Real-time chat application with private messaging, group chats, and file sharing features.",
    technologies: ["React", "Socket.io", "Express", "MongoDB"],
    image: "/api/placeholder/400/250",
    liveDemo: "#",
    github: "#",
    featured: false
  }
];

const Projects = () => {
  const featuredProjects = projects.filter(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Here are some of my recent projects that showcase my skills in full-stack development, 
            UI/UX design, and problem-solving.
          </p>
        </div>

        {/* Featured Projects */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {featuredProjects.map((project, index) => (
            <div key={index} className="glow-card rounded-xl overflow-hidden group">
              <div className="relative">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="text-xs bg-primary/20 text-primary px-2 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <Button 
                    size="sm" 
                    className="bg-primary hover:bg-primary/90"
                    asChild
                  >
                    <a href={project.liveDemo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </a>
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="border-primary/50 hover:bg-primary/10"
                    asChild
                  >
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Other Projects Grid */}
        <div>
          <h3 className="text-2xl font-bold mb-8 text-center">
            More <span className="gradient-text">Projects</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project, index) => (
              <div key={index} className="glow-card rounded-lg p-6 group">
                <h4 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h4>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-1 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="text-xs bg-muted/50 text-muted-foreground px-2 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-2">
                  <a 
                    href={project.liveDemo} 
                    className="text-primary hover:text-primary/80 transition-colors"
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                  <a 
                    href={project.github} 
                    className="text-muted-foreground hover:text-primary transition-colors"
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
