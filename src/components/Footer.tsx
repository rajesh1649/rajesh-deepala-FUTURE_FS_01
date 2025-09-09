import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Mail,
      href: "mailto:harisai44450@gmail.com",
      label: "Email"
    },
    {
      icon: Github,
      href: "#",
      label: "GitHub"
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/rajesh-deepala-555592284",
      label: "LinkedIn"
    }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {/* Logo & Description */}
          <div>
            <button 
              onClick={scrollToTop}
              className="text-2xl font-bold gradient-text hover:opacity-80 transition-opacity mb-2"
            >
              Rajesh.dev
            </button>
            <p className="text-muted-foreground text-sm">
              Full Stack Developer passionate about creating innovative digital solutions.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex justify-center md:justify-center space-x-6">
            {socialLinks.map((link, index) => {
              const IconComponent = link.icon;
              return (
                <a
                  key={index}
                  href={link.href}
                  aria-label={link.label}
                  className="p-3 rounded-full border border-border hover:border-primary/50 hover:bg-primary/10 transition-all duration-300 group"
                >
                  <IconComponent className="w-5 h-5 group-hover:text-primary transition-colors" />
                </a>
              );
            })}
          </div>

          {/* Copyright */}
          <div className="text-center md:text-right">
            <p className="text-muted-foreground text-sm flex items-center justify-center md:justify-end">
              © {currentYear} Made with <Heart className="w-4 h-4 mx-1 text-red-500" /> by Rajesh Deepala
            </p>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="text-muted-foreground text-xs">
            Built with React, TypeScript, and Tailwind CSS. Deployed with modern best practices.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;