import { Code, Database, Globe, Smartphone } from "lucide-react";

const skillCategories = [
  {
    title: "Programming Languages",
    icon: Code,
    skills: ["C++", "Python", "JavaScript", "Java"],
    color: "primary"
  },
  {
    title: "Frontend Development",
    icon: Globe,
    skills: ["React.js", "HTML5", "CSS3", "TypeScript"],
    color: "accent"
  },
  {
    title: "Backend Development", 
    icon: Database,
    skills: ["Node.js", "Express.js", "REST APIs", "Authentication"],
    color: "primary"
  },
  {
    title: "Full Stack Skills",
    icon: Smartphone,
    skills: ["Responsive Design", "Database Design", "Version Control", "Deployment"],
    color: "accent"
  }
];

const About = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            I'm a passionate full-stack developer with expertise in modern web technologies. 
            I love building scalable applications that solve real-world problems.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <div key={index} className="glow-card rounded-lg p-6 group">
                <div className={`inline-flex p-3 rounded-lg mb-4 ${
                  category.color === 'primary' ? 'bg-primary/20' : 'bg-accent/20'
                }`}>
                  <IconComponent className={`w-6 h-6 ${
                    category.color === 'primary' ? 'text-primary' : 'text-accent'
                  }`} />
                </div>
                
                <h3 className="text-lg font-semibold mb-3 group-hover:text-primary transition-colors">
                  {category.title}
                </h3>
                
                <div className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <div 
                      key={skillIndex}
                      className="text-muted-foreground text-sm bg-muted/50 px-3 py-1 rounded-full inline-block mr-2 mb-2"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Personal Info */}
        <div className="glow-card rounded-xl p-8 max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-primary">
                Let's Build Something Amazing Together
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                With a strong foundation in both frontend and backend technologies, 
                I create end-to-end solutions that are not only functional but also 
                user-friendly and scalable. I'm always eager to learn new technologies 
                and take on challenging projects.
              </p>
              <div className="space-y-2">
                <p className="text-sm">
                  <span className="text-primary font-medium">Email:</span>{" "}
                  <a href="mailto:harisai44450@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                    harisai44450@gmail.com
                  </a>
                </p>
                <p className="text-sm">
                  <span className="text-primary font-medium">Phone:</span>{" "}
                  <span className="text-muted-foreground">8977355434</span>
                </p>
              </div>
            </div>
            
            <div className="lg:text-right">
              <div className="inline-block p-8 rounded-full bg-gradient-to-br from-primary/20 to-accent/20">
                <div className="text-4xl font-bold gradient-text">3+</div>
                <div className="text-sm text-muted-foreground mt-1">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;