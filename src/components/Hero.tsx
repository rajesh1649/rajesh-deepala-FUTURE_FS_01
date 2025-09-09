import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center hero-glow overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-background/80" />
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-primary/20 rounded-full blur-3xl animate-float" />
        <div className="absolute top-3/4 right-1/4 w-48 h-48 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-3/4 w-24 h-24 bg-primary-glow/30 rounded-full blur-2xl animate-glow-pulse" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Hi, I'm{" "}
            <span className="gradient-text">Rajesh Deepala</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
            Full Stack Developer passionate about creating innovative solutions 
            with <span className="text-primary font-semibold">modern technologies</span>
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg font-semibold"
              onClick={() => scrollToSection('projects')}
            >
              View My Work
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-primary/50 text-foreground hover:bg-primary/10 px-8 py-6 text-lg"
              onClick={() => scrollToSection('contact')}
            >
              Get In Touch
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-12">
            <a 
              href="mailto:harisai44450@gmail.com"
              className="p-3 rounded-full border border-border hover:border-primary/50 hover:bg-primary/10 transition-all duration-300 group"
            >
              <Mail className="w-6 h-6 group-hover:text-primary transition-colors" />
            </a>
            <a 
              href="#" 
              className="p-3 rounded-full border border-border hover:border-primary/50 hover:bg-primary/10 transition-all duration-300 group"
            >
              <Github className="w-6 h-6 group-hover:text-primary transition-colors" />
            </a>
            <a 
              href="#" 
              className="p-3 rounded-full border border-border hover:border-primary/50 hover:bg-primary/10 transition-all duration-300 group"
            >
              <Linkedin className="w-6 h-6 group-hover:text-primary transition-colors" />
            </a>
          </div>

          {/* Scroll Indicator */}
          <button 
            onClick={() => scrollToSection('about')}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
          >
            <ArrowDown className="w-6 h-6 text-primary" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;