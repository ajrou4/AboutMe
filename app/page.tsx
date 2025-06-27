import type React from "react"
import Image from "next/image"
import { Github, Linkedin, Mail, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-white dark:bg-gray-950">
      {/* Dark mode toggle in top right */}
      <div className="absolute top-4 right-4">
        <ModeToggle />
      </div>

      <main className="max-w-2xl w-full text-center">
        {/* Profile Image */}
        <div className="relative w-40 h-40 mx-auto mb-6 rounded-full overflow-hidden border-2 border-gray-200 dark:border-gray-800">
          <Image src="/profile.png" alt="Mohamed Ajrou" fill className="object-cover" priority />
        </div>

        {/* Name */}
        <h1 className="text-4xl font-bold mb-1 text-gray-900 dark:text-white">Mohamed Ajrou</h1>

        {/* Location */}
        <p className="text-gray-600 dark:text-gray-400 mb-3">Casablanca, Morocco</p>

        {/* Title */}
        <h2 className="text-xl font-medium mb-6 text-gray-800 dark:text-gray-200">
          Backend Developer | DevOps Enthusiast
        </h2>

        {/* Bio */}
        <p className="text-gray-700 dark:text-gray-300 mb-10 max-w-lg mx-auto leading-relaxed">
          I code, and I build things. Passionate about backend development and DevOps. I have a strong foundation in
          building scalable web applications with hands-on experience in Docker and system administration. I thrive on
          solving challenging problems while continuously expanding my knowledge to create robust and efficient systems.
        </p>

        {/* Social Links */}
        <div className="flex justify-center space-x-6 mb-10">
          <SocialLink href="https://www.linkedin.com/in/majrou/" icon={<Linkedin size={24} />} label="LinkedIn" />
          <SocialLink href="https://github.com/ajrou4" icon={<Github size={24} />} label="GitHub" />
          <SocialLink href="mailto:mohamed1999ajro@gmail.com" icon={<Mail size={24} />} label="Email" />
          <SocialLink href="https://drive.google.com/file/d/1_rpk5DJ68m87wESf88S96_q5YOYtEyLs/view?usp=sharing"icon={<FileText size={24} />} label="Resume"  />
        </div>
      </main>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">About Me</h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg mb-6">
              As a backend developer with a strong foundation in building scalable web applications, I am deeply
              passionate about DevOps and dedicated to creating automated and efficient infrastructure solutions. I have
              hands-on experience with Docker and thrive on solving challenging problems while continuously expanding my
              knowledge in system administration, virtualization, and web development.
            </p>
            <p className="text-lg">
              My aim is to leverage my skills in a DevOps environment to contribute to robust and efficient systems.
            </p>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 bg-gray-100 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Education</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle>IT Architect</CardTitle>
                <CardDescription>1337 School</CardDescription>
              </CardHeader>
              <CardContent>
                <p>September 2022 - Present</p>
                <p className="mt-2">Tetouan, Morocco</p>
              </CardContent>
              <CardFooter>
                <a
                  href="https://1337.ma/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary flex items-center gap-1"
                >
                  <ExternalLink size={16} /> Visit Website
                </a>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Bachelor's Degree in Physics</CardTitle>
                <CardDescription>FSAC</CardDescription>
              </CardHeader>
              <CardContent>
                <p>September 2022 - Present</p>
                <p className="mt-2">Casablanca, Morocco</p>
              </CardContent>
              <CardFooter>
                <a
                  href="https://fsac.univh2c.ma/front/index.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary flex items-center gap-1"
                >
                  <ExternalLink size={16} /> Visit Website
                </a>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Skills</h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {[
                "C/C++",
                "HTML/CSS",
                "Git/GitHub",
                "Docker",
                "Docker Swarm",
                "K8S",
                "Python",
                "JavaScript",
                "System administration",
                "Linux server setup",
                "Virtualization",
                "Bash scripting",
                "Linux",
                "Django",
                "Django-REST",
                "PostgreSQL",
                "MySQL",
                "React",
                "RESTful APIs",
                "Nginx",
                "PM2",
              ].map((skill) => (
                <Badge key={skill} className="py-2 px-4 text-center">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Projects</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <ProjectCard
              title="ft_transcendence"
              description="Full-Stack Web Application with secure authentication, interactive chat, and online games (Pong)."
              techStack={["Django", "DRF", "JavaScript", "WebSockets", "Redis", "PostgreSQL", "Nginx", "Docker"]}
              highlights={[
                "JWT & 2FA authentication",
                "Real-time features via WebSockets (chat, matchmaking)",
                "Redis caching for performance",
                "Deployed with Docker & Nginx + SSL (HTTPS)",
              ]}
              links={[
                
                { url: "https://github.com/ajrou4/ft_transcendence", label: "Project Repo" },
                { url: "https://github.com/ajrou4/game-js", label: "Game Repo" },
              ]}
            />

              <ProjectCard
              title="Barbershop Website"
              description="A modern, responsive website for a barbershop, designed to showcase services, pricing, and booking options."
              techStack={["HTML5", "CSS3 (Flexbox, Grid, Animations)", "JavaScript (for interactivity)"]}
              highlights={[
                "Fully Responsive – Works on mobile, tablet, and desktop.",
                "Service & Pricing Display – Highlights haircuts, shaves, and grooming services.",
                "Booking Functionality – Allows users to book appointments (may require backend integration).",
                "Modern UI/UX – Clean design with smooth animations.",
                "Gallery Section – Showcases the barbershop's work."
              ]}
              links={[
                { url: "https://github.com/ajrou4/barbershop-website", label: "GitHub Repo" },
                { url: "https://ajrou4.github.io/barbershop-website/", label: "Live Demo" }
              ]}
            />
            <ProjectCard
              title="Inception Docker Infrastructure"
              description="Developed and deployed a virtualized infrastructure using Docker and Docker Compose."
              techStack={["Docker", "Docker Compose", "NGINX", "WordPress", "PHP-FPM", "MariaDB"]}
              highlights={[
                "Configured Docker containers from scratch",
                "Set up Docker volumes for persistent data",
                "Established secure networking between services",
                "Implemented best practices for security",
              ]}
              links={[{ url: "https://github.com/ajrou4/inception", label: "GitHub Repo" }]}
            />

            <ProjectCard
              title="Born2beRoot Project"
              description="Set up a secure, virtualized server environment adhering to strict system administration guidelines."
              techStack={["VirtualBox", "Debian/Rocky Linux", "LVM", "UFW/Firewalld", "SSH", "Bash"]}
              highlights={[
                "Configured a virtual server with minimal services for security",
                "Implemented encrypted partitions with LVM",
                "Enforced robust password policy and sudo configurations",
                "Developed a Bash script for system monitoring",
              ]}
            />

            <ProjectCard
              title="The Ownership Economy Directory"
              description="A comprehensive directory for organizations within the Ownership Economy."
              techStack={["React", "JSON Server"]}
              highlights={[
                "Responsive React frontend",
                "Search and filtering capabilities",
                "Simple JSON Server-based backend for data management",
              ]}
              links={[{ url: "https://github.com/ajrou4/ownership-economy-directory.git", label: "GitHub Repo" }]}
            />

            <ProjectCard
              title="Cub3D - Ray-Casting Maze Exploration"
              description="A project inspired by the classic Wolfenstein 3D game, exploring ray-casting techniques."
              techStack={["C", "Ray-casting"]}
              highlights={[
                "Created first-person perspectives",
                "Implemented graphical representations similar to early FPS games",
              ]}
              links={[{ url: "https://github.com/ajrou4/cub3d", label: "GitHub Repo" }]}
            />

            <ProjectCard
              title="Minishell"
              description="Developed a custom shell in C, emulating basic functionality of a Unix shell."
              techStack={["C"]}
              highlights={["Created a command-line interface with a prompt", "Implemented command history"]}
              links={[{ url: "https://github.com/ajrou4/Minishell", label: "GitHub Repo" }]}
            />

            <ProjectCard
              title="ft_IRC - IRC Server Development"
              description="Designed and implemented an IRC server in C++98, capable of handling multiple clients simultaneously."
              techStack={["C++98", "Non-blocking I/O"]}
              highlights={[
                "Developed core IRC functionalities including user authentication",
                "Implemented nickname and username management",
                "Created channel operations and private messaging",
                "Added operator-specific commands",
              ]}
              links={[{ url: "https://github.com/ajrou4/IRC-AK-MSN-", label: "GitHub Repo" }]}
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-100 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Contact Me</h2>
          <div className="max-w-md mx-auto">
            <Card>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-gray-500" />
                    <a href="mailto:mohamed1999ajro@gmail.com" className="text-primary">
                      mohamed1999ajro@gmail.com
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Linkedin className="h-5 w-5 text-gray-500" />
                    <a
                      href="https://www.linkedin.com/in/majrou/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary"
                    >
                      linkedin.com/in/majrou
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Github className="h-5 w-5 text-gray-500" />
                    <a
                      href="https://github.com/ajrou4"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary"
                    >
                      github.com/ajrou4
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <ExternalLink className="h-5 w-5 text-gray-500" />
                    <a
                      href="https://drive.google.com/file/d/1_rpk5DJ68m87wESf88S96_q5YOYtEyLs/view?usp=sharing"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary"
                    >
                      Resume
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>© {new Date().getFullYear()} Mohamed Ajrou. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

interface SocialLinkProps {
  href: string
  icon: React.ReactNode
  label: string
}

function SocialLink({ href, icon, label }: SocialLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
      aria-label={label}
    >
      {icon}
    </a>
  )
}

interface ProjectCardProps {
  title: string
  description: string
  techStack: string[]
  highlights: string[]
  links?: { url: string; label: string }[]
}

function ProjectCard({ title, description, techStack, highlights, links }: ProjectCardProps) {
  return (
    <Card className="h-full flex flex-col">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <div className="mb-4">
          <h4 className="font-semibold mb-2">Tech Stack:</h4>
          <div className="flex flex-wrap gap-2">
            {techStack.map((tech) => (
              <Badge key={tech} variant="secondary">
                {tech}
              </Badge>
            ))}
          </div>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Highlights:</h4>
          <ul className="list-disc pl-5 space-y-1">
            {highlights.map((highlight, index) => (
              <li key={index}>{highlight}</li>
            ))}
          </ul>
        </div>
      </CardContent>
      {links && links.length > 0 && (
        <CardFooter className="flex gap-3 flex-wrap">
          {links.map((link, index) => (
            <Button key={index} variant="outline" size="sm" asChild>
              <a href={link.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1">
                <Github size={16} /> {link.label}
              </a>
            </Button>
          ))}
        </CardFooter>
      )}
    </Card>
  )
}
