import Container from "@/components/Container";
import { motion } from "framer-motion";
import { ChevronDown, Mail, Github, Linkedin, Phone, MapPin, Award, Star, BookOpen, Database, Trophy, Users } from "lucide-react";
import styles from "@/styles/Home.module.css";

const skillBadges = [
  { icon: <Database className="w-4 h-4 mr-1" />, label: "MySQL" },
  { icon: <Database className="w-4 h-4 mr-1" />, label: "PostgreSQL" },
  { icon: <BookOpen className="w-4 h-4 mr-1" />, label: "Python" },
  { icon: <BookOpen className="w-4 h-4 mr-1" />, label: "Java" },
  { icon: <BookOpen className="w-4 h-4 mr-1" />, label: "C++" },
  { icon: <BookOpen className="w-4 h-4 mr-1" />, label: "TypeScript" },
  { icon: <BookOpen className="w-4 h-4 mr-1" />, label: "JavaScript" },
  { icon: <BookOpen className="w-4 h-4 mr-1" />, label: "HTML" },
  { icon: <BookOpen className="w-4 h-4 mr-1" />, label: "CSS" },
];

const toolBadges = [
  { icon: <Users className="w-4 h-4 mr-1" />, label: "Git" },
  { icon: <Users className="w-4 h-4 mr-1" />, label: "JIRA" },
  { icon: <Users className="w-4 h-4 mr-1" />, label: "VS Code" },
  { icon: <Users className="w-4 h-4 mr-1" />, label: "Maven" },
  { icon: <Users className="w-4 h-4 mr-1" />, label: "Postman" },
  { icon: <Users className="w-4 h-4 mr-1" />, label: "Swagger" },
  { icon: <Users className="w-4 h-4 mr-1" />, label: "IntelliJ IDEA" },
  { icon: <Users className="w-4 h-4 mr-1" />, label: "DBeaver" },
];

const certBadges = [
  { icon: <Award className="w-4 h-4 mr-1 text-primary" />, label: "Software Architecture Foundations" },
  { icon: <Award className="w-4 h-4 mr-1 text-primary" />, label: "Programming for Beginners" },
  { icon: <Award className="w-4 h-4 mr-1 text-primary" />, label: "Makerspace" },
  { icon: <Award className="w-4 h-4 mr-1 text-primary" />, label: "Python for Beginners" },
  { icon: <Award className="w-4 h-4 mr-1 text-primary" />, label: "Business English" },
  { icon: <Award className="w-4 h-4 mr-1 text-primary" />, label: "Basic 3D Design and Animation" },
  { icon: <Award className="w-4 h-4 mr-1 text-primary" />, label: "CyberZee'23 quiz competition" },
];

const achievementBadges = [
  { icon: <Trophy className="w-4 h-4 mr-1 text-yellow-400" />, label: "Dean's List" },
  { icon: <Trophy className="w-4 h-4 mr-1 text-yellow-400" />, label: "First Place - Paws Click 2024" },
  { icon: <Award className="w-4 h-4 mr-1 text-primary" />, label: "Certificate of Excellence (MIND)" },
  { icon: <Award className="w-4 h-4 mr-1 text-primary" />, label: "SLASSCOM Communication Skills" },
  { icon: <Award className="w-4 h-4 mr-1 text-primary" />, label: "SLASSCOM Presentation Skills" },
  { icon: <Star className="w-4 h-4 mr-1 text-yellow-400" />, label: "A/L 3As, Z=2.4175, District 12" },
  { icon: <Star className="w-4 h-4 mr-1 text-yellow-400" />, label: "O/L 9As" },
  { icon: <BookOpen className="w-4 h-4 mr-1 text-primary" />, label: "MAHAPOLA Scholarship" },
  { icon: <BookOpen className="w-4 h-4 mr-1 text-primary" />, label: "BOC NANAJAYA & Jinnah Scholarship" },
  { icon: <Users className="w-4 h-4 mr-1 text-primary" />, label: "Amplifier21 Appreciation" },
];

export default function Home() {
  return (
    <Container>
      {/* Hero Section */}
      <section id="home" className="flex min-h-screen flex-col items-center justify-center">
        <motion.div
          className={styles.intro}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-5xl font-bold mb-4 text-gradient clash-grotesk">
            Praveenasarma Baskarakurukkal
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mb-8">
            Final year Computer Science and Engineering undergraduate at the University of Moratuwa, 
            currently working on a research project in Semantic Similarity and Uncertainty Quantification.
            <br /><br />
            Skilled in Python, Java, and Spring Boot with experience in web development and backend systems. 
            Actively seeking opportunities in software engineering, machine learning, or NLP.
          </p>
          <div className="flex flex-wrap gap-4 mb-8">
            <a href="https://github.com/Praveenasarma-Baskarakurukkal" target="_blank" rel="noopener noreferrer" className={styles.pill}>
              <Github className="h-4 w-4 mr-2" />
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/praveenasarma/" target="_blank" rel="noopener noreferrer" className={styles.pill}>
              <Linkedin className="h-4 w-4 mr-2" />
              LinkedIn
            </a>
            <a href="mailto:baskarakurukkal.21@cse.mrt.ac.lk" className={styles.pill}>
              <Mail className="h-4 w-4 mr-2" />
              Email
            </a>
            <span className={styles.pill}>
              <Phone className="h-4 w-4 mr-2" />
              +94760595738
            </span>
            <span className={styles.pill}>
              <MapPin className="h-4 w-4 mr-2" />
              Jaffna, Sri Lanka
            </span>
          </div>
        </motion.div>
        <motion.div
          className={styles.scroll}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <ChevronDown className="h-4 w-4 animate-bounce" />
          <span>Scroll down</span>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="my-20 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-gradient clash-grotesk">About Me</h2>
        <div className="space-y-6">
          <p className="text-lg text-muted-foreground">
            Final year Computer Science and Engineering undergraduate at the University of Moratuwa, 
            currently working on a research project in Semantic Similarity and Uncertainty Quantification. 
            Skilled in Python, Java, and Spring Boot with experience in web development and backend systems. 
            Actively seeking opportunities in software engineering, machine learning, or NLP.
          </p>
          <div>
            <h3 className="text-xl font-semibold mb-4">Education</h3>
            <div className="space-y-3">
              <div className="bg-white/5 rounded-lg p-4">
                <h4 className="font-bold">University of Moratuwa</h4>
                <p className="text-muted-foreground">BSc (Hons.) in Computer Science and Engineering (2022 – present)</p>
                <p className="text-sm text-muted-foreground">CGPA: 3.4875/4.0</p>
              </div>
              <div className="bg-white/5 rounded-lg p-4">
                <h4 className="font-bold">Jaffna Hindu College</h4>
                <p className="text-muted-foreground">2012 – 2020</p>
              </div>
              <div className="bg-white/5 rounded-lg p-4">
                <h4 className="font-bold">Jaffna Hindu Primary School</h4>
                <p className="text-muted-foreground">2007 – 2011</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="my-20 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-gradient clash-grotesk">Experience</h2>
        <div className="space-y-8">
          <div className={`${styles["project-card"]} hover:shadow-lg hover:scale-105 transition-all duration-300`}>
            <h3 className="text-xl font-bold text-primary mb-2 flex items-center"><Users className="w-5 h-5 mr-2 text-primary" />Software Engineering Intern</h3>
            <p className="text-muted-foreground mb-1">GTN Technologies (Pvt) Ltd, Colombo, Sri Lanka</p>
            <p className="text-sm text-muted-foreground mb-4">Dec 2024 – Jun 2025</p>
            <ul className="list-disc ml-6 space-y-1 text-muted-foreground">
              <li>Developed an Event Planning System using Java; later migrated it to Spring Boot with PostgreSQL</li>
              <li>Automated API testing with Playwright for validation, pagination, permissions, and error handling</li>
              <li>Created Mermaid.js diagrams to visualize architecture and improve system understanding</li>
              <li>Implemented validations for a monitoring application and analyzed execution time</li>
              <li>Performed peer testing and verifying expected outputs of system components</li>
            </ul>
          </div>
          <div className={`${styles["project-card"]} hover:shadow-lg hover:scale-105 transition-all duration-300`}>
            <h3 className="text-xl font-bold text-primary mb-2 flex items-center"><Users className="w-5 h-5 mr-2 text-primary" />Mentee – MIND Mentoring Program</h3>
            <p className="text-muted-foreground mb-1">The Corridors Academy</p>
            <p className="text-sm text-muted-foreground mb-4">Jan 2025 – Jun 2025</p>
            <ul className="list-disc ml-6 space-y-1 text-muted-foreground">
              <li>Completed a 6-month mentoring program focused on personal branding, communication, and leadership</li>
              <li>Awarded Certificate of Excellence and secured 2nd Place in the final cohort evaluation</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="my-20 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-gradient clash-grotesk">Projects</h2>
        <div className="grid gap-8 md:grid-cols-2">
          <div className={`${styles["project-card"]} hover:shadow-lg hover:scale-105 transition-all duration-300`}>
            <h3 className="text-xl font-bold mb-2 flex items-center"><Database className="w-5 h-5 mr-2 text-primary" />Semantic Similarity & Uncertainty Quantification</h3>
            <p className="text-sm text-muted-foreground mb-3">Python (in progress)</p>
            <div className="flex flex-wrap gap-2 mb-2">
              <span className="px-2 py-1 rounded-full bg-primary/10 text-primary text-xs flex items-center"><BookOpen className="w-4 h-4 mr-1" />Python</span>
            </div>
            <p className="text-muted-foreground">
              Exploring methods to compute semantic similarity between texts while quantifying uncertainty in predictions. 
              Currently conducting literature review on embedding-based similarity techniques and evaluating models for 
              trustworthiness in NLP tasks such as question answering.
            </p>
          </div>
          <div className={`${styles["project-card"]} hover:shadow-lg hover:scale-105 transition-all duration-300`}>
            <h3 className="text-xl font-bold mb-2 flex items-center"><Database className="w-5 h-5 mr-2 text-primary" />Smart Parking System – ParkEase</h3>
            <p className="text-sm text-muted-foreground mb-3">React, MySQL</p>
            <div className="flex flex-wrap gap-2 mb-2">
              <span className="px-2 py-1 rounded-full bg-primary/10 text-primary text-xs flex items-center"><Users className="w-4 h-4 mr-1" />React</span>
              <span className="px-2 py-1 rounded-full bg-primary/10 text-primary text-xs flex items-center"><Database className="w-4 h-4 mr-1" />MySQL</span>
            </div>
            <p className="text-muted-foreground">
              Developed key modules including admin and security dashboards, booking history, user profile management, 
              and report generation. Implemented validations, real-time report logic, and database design for booking 
              and user data. Collaborated on requirement analysis and led team coordination.
            </p>
          </div>
          <div className={`${styles["project-card"]} hover:shadow-lg hover:scale-105 transition-all duration-300`}>
            <h3 className="text-xl font-bold mb-2 flex items-center"><Users className="w-5 h-5 mr-2 text-primary" />Research Data Collection Platform</h3>
            <p className="text-sm text-muted-foreground mb-3">React, Tailwind CSS, NestJS, MongoDB</p>
            <div className="flex flex-wrap gap-2 mb-2">
              <span className="px-2 py-1 rounded-full bg-primary/10 text-primary text-xs flex items-center"><Users className="w-4 h-4 mr-1" />React</span>
              <span className="px-2 py-1 rounded-full bg-primary/10 text-primary text-xs flex items-center"><Users className="w-4 h-4 mr-1" />Tailwind</span>
              <span className="px-2 py-1 rounded-full bg-primary/10 text-primary text-xs flex items-center"><Users className="w-4 h-4 mr-1" />NestJS</span>
              <span className="px-2 py-1 rounded-full bg-primary/10 text-primary text-xs flex items-center"><Database className="w-4 h-4 mr-1" />MongoDB</span>
            </div>
            <p className="text-muted-foreground">
              Developed customizable research data collection, supporting various data types (text, images, audio, video) 
              with offline functionality. Implemented frontend for password recovery, form responses, and data visualization 
              dashboards. Integrated NestJS with MongoDB to improve frontend performance.
            </p>
          </div>
          <div className={`${styles["project-card"]} hover:shadow-lg hover:scale-105 transition-all duration-300`}>
            <h3 className="text-xl font-bold mb-2 flex items-center"><Users className="w-5 h-5 mr-2 text-primary" />Airline Reservation System</h3>
            <p className="text-sm text-muted-foreground mb-3">React, MySQL</p>
            <div className="flex flex-wrap gap-2 mb-2">
              <span className="px-2 py-1 rounded-full bg-primary/10 text-primary text-xs flex items-center"><Users className="w-4 h-4 mr-1" />React</span>
              <span className="px-2 py-1 rounded-full bg-primary/10 text-primary text-xs flex items-center"><Database className="w-4 h-4 mr-1" />MySQL</span>
            </div>
            <p className="text-muted-foreground">
              Developed a MySQL-based database for B Airways, handling flight scheduling, bookings, and passenger management. 
              Implemented dynamic seat selection, passenger categorization, and ensured data integrity by adhering to ACID properties. 
              Additionally, contributed to front-end design and database development.
            </p>
          </div>
          <div className={`${styles["project-card"]} hover:shadow-lg hover:scale-105 transition-all duration-300`}>
            <h3 className="text-xl font-bold mb-2 flex items-center"><Database className="w-5 h-5 mr-2 text-primary" />RPal interpreter</h3>
            <p className="text-sm text-muted-foreground mb-3">Java</p>
            <div className="flex flex-wrap gap-2 mb-2">
              <span className="px-2 py-1 rounded-full bg-primary/10 text-primary text-xs flex items-center"><BookOpen className="w-4 h-4 mr-1" />Java</span>
            </div>
            <p className="text-muted-foreground">
              Developed an interpreter for the functional programming language RPAL, incorporating a lexical analyzer, parser, 
              and CSE machine. The interpreter was designed to execute RPAL programs by constructing an abstract syntax tree (AST), 
              standardizing the AST, and evaluating it to produce the correct output.
            </p>
          </div>
          <div className={`${styles["project-card"]} hover:shadow-lg hover:scale-105 transition-all duration-300`}>
            <h3 className="text-xl font-bold mb-2 flex items-center"><Users className="w-5 h-5 mr-2 text-primary" />Nano-processor design</h3>
            <p className="text-sm text-muted-foreground mb-3">VHDL, Xilinx Vivado</p>
            <div className="flex flex-wrap gap-2 mb-2">
              <span className="px-2 py-1 rounded-full bg-primary/10 text-primary text-xs flex items-center"><Users className="w-4 h-4 mr-1" />VHDL</span>
              <span className="px-2 py-1 rounded-full bg-primary/10 text-primary text-xs flex items-center"><Users className="w-4 h-4 mr-1" />Xilinx Vivado</span>
            </div>
            <p className="text-muted-foreground">
              Designed a 4-bit Nano-processor in Vivado software with components such as 4-bit Add/Subtract unit, a 3-bit adder, 
              a 3-bit Program Counter (PC), k-way b-bit multiplexers, a Register Bank, a Program ROM, an Instruction Decoder, 
              a 7-Segment Display, and a slow clock. Then implemented the design on a BASYS3 board.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="my-20 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-gradient clash-grotesk">Skills & Knowledge</h2>
        <div className="grid gap-8 md:grid-cols-2">
          <div className={`${styles["project-card"]} hover:shadow-lg hover:scale-105 transition-all duration-300`}>
            <h3 className="text-xl font-bold mb-4 flex items-center"><Database className="w-5 h-5 mr-2 text-primary" />Technical Fields</h3>
            <ul className="list-disc ml-6 space-y-1 text-muted-foreground">
              <li>Digital design</li>
              <li>OOP</li>
              <li>Data structures and Algorithms</li>
              <li>Image Processing</li>
            </ul>
          </div>
          <div className={`${styles["project-card"]} hover:shadow-lg hover:scale-105 transition-all duration-300`}>
            <h3 className="text-xl font-bold mb-4 flex items-center"><BookOpen className="w-5 h-5 mr-2 text-primary" />Programming</h3>
            <div className="flex flex-wrap gap-2 mb-2">
              {skillBadges.map((badge, idx) => (
                <span key={idx} className="px-2 py-1 rounded-full bg-primary/10 text-primary text-xs flex items-center">{badge.icon}{badge.label}</span>
              ))}
            </div>
          </div>
          <div className={`${styles["project-card"]} hover:shadow-lg hover:scale-105 transition-all duration-300`}>
            <h3 className="text-xl font-bold mb-4 flex items-center"><Database className="w-5 h-5 mr-2 text-primary" />Database</h3>
            <span className="px-2 py-1 rounded-full bg-primary/10 text-primary text-xs flex items-center"><Database className="w-4 h-4 mr-1" />MySQL</span>
            <span className="px-2 py-1 rounded-full bg-primary/10 text-primary text-xs flex items-center ml-2"><Database className="w-4 h-4 mr-1" />PostgreSQL</span>
          </div>
          <div className={`${styles["project-card"]} hover:shadow-lg hover:scale-105 transition-all duration-300`}>
            <h3 className="text-xl font-bold mb-4 flex items-center"><Users className="w-5 h-5 mr-2 text-primary" />Tools</h3>
            <div className="flex flex-wrap gap-2 mb-2">
              {toolBadges.map((badge, idx) => (
                <span key={idx} className="px-2 py-1 rounded-full bg-primary/10 text-primary text-xs flex items-center">{badge.icon}{badge.label}</span>
              ))}
            </div>
          </div>
          <div className={`${styles["project-card"]} hover:shadow-lg hover:scale-105 transition-all duration-300`}>
            <h3 className="text-xl font-bold mb-4 flex items-center"><Users className="w-5 h-5 mr-2 text-primary" />Testing</h3>
            <span className="px-2 py-1 rounded-full bg-primary/10 text-primary text-xs flex items-center"><Users className="w-4 h-4 mr-1" />Playwright</span>
            <span className="px-2 py-1 rounded-full bg-primary/10 text-primary text-xs flex items-center ml-2"><Users className="w-4 h-4 mr-1" />JUnit</span>
          </div>
          <div className={`${styles["project-card"]} hover:shadow-lg hover:scale-105 transition-all duration-300`}>
            <h3 className="text-xl font-bold mb-4 flex items-center"><BookOpen className="w-5 h-5 mr-2 text-primary" />Visualization</h3>
            <span className="px-2 py-1 rounded-full bg-primary/10 text-primary text-xs flex items-center"><BookOpen className="w-4 h-4 mr-1" />Mermaid.js</span>
          </div>
          <div className={`${styles["project-card"]} hover:shadow-lg hover:scale-105 transition-all duration-300`}>
            <h3 className="text-xl font-bold mb-4 flex items-center"><Star className="w-5 h-5 mr-2 text-primary" />Other Skills</h3>
            <ul className="list-disc ml-6 space-y-1 text-muted-foreground">
              <li>Problem solving, Documentation, Agile technologies, mobile photography</li>
            </ul>
          </div>
          <div className={`${styles["project-card"]} hover:shadow-lg hover:scale-105 transition-all duration-300`}>
            <h3 className="text-xl font-bold mb-4 flex items-center"><Users className="w-5 h-5 mr-2 text-primary" />Version Control & Project Management</h3>
            <span className="px-2 py-1 rounded-full bg-primary/10 text-primary text-xs flex items-center"><Users className="w-4 h-4 mr-1" />GitLab</span>
            <span className="px-2 py-1 rounded-full bg-primary/10 text-primary text-xs flex items-center ml-2"><Users className="w-4 h-4 mr-1" />GitHub</span>
            <span className="px-2 py-1 rounded-full bg-primary/10 text-primary text-xs flex items-center ml-2"><Users className="w-4 h-4 mr-1" />Jira</span>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="my-20 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-gradient clash-grotesk">Achievements</h2>
        <div className={`${styles["project-card"]} hover:shadow-lg hover:scale-105 transition-all duration-300 flex flex-wrap gap-2`}>
          {achievementBadges.map((badge, idx) => (
            <span key={idx} className="px-2 py-1 rounded-full bg-primary/10 text-primary text-xs flex items-center mb-2">{badge.icon}{badge.label}</span>
          ))}
        </div>
      </section>

      {/* Certificates Section */}
      <section id="certificates" className="my-20 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-gradient clash-grotesk">Professional Certificates</h2>
        <div className={`${styles["project-card"]} hover:shadow-lg hover:scale-105 transition-all duration-300 flex flex-wrap gap-2`}>
          {certBadges.map((badge, idx) => (
            <span key={idx} className="px-2 py-1 rounded-full bg-primary/10 text-primary text-xs flex items-center mb-2">{badge.icon}{badge.label}</span>
          ))}
        </div>
      </section>

      {/* Clubs & Societies Section */}
      <section id="clubs" className="my-20 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-gradient clash-grotesk">Clubs & Societies</h2>
        <div className={`${styles["project-card"]} hover:shadow-lg hover:scale-105 transition-all duration-300`}>
          <ul className="list-disc ml-6 space-y-2 text-muted-foreground">
            <li>AIESEC iGT Product Development and Innovation Panelist Colombo South</li>
            <li>Customer Experience (CXP) team member for the term 23.24 AIESEC Colombo South</li>
            <li>Publicity team member of Mora Ventures 6.0 program by IEEE and entrepreneurship society</li>
            <li>IESL Student Member</li>
          </ul>
        </div>
      </section>

      {/* Relevant Academics Section */}
      <section id="academics" className="my-20 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-gradient clash-grotesk">Relevant Academics</h2>
        <div className={`${styles["project-card"]} hover:shadow-lg hover:scale-105 transition-all duration-300`}>
          <ul className="list-disc ml-6 space-y-2 text-muted-foreground">
            <li>Database Systems: <span className="font-semibold text-primary">A</span></li>
            <li>Data structures and Algorithms: <span className="font-semibold text-primary">A</span></li>
            <li>Programming Fundamentals: <span className="font-semibold text-primary">A</span></li>
            <li>Program Construction: <span className="font-semibold text-primary">A-</span></li>
            <li>Data Communication and Networking: <span className="font-semibold text-primary">A</span></li>
            <li>Computer Architecture: <span className="font-semibold text-primary">A-</span></li>
          </ul>
        </div>
      </section>

      {/* Volunteering Section */}
      <section id="volunteering" className="my-20 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-gradient clash-grotesk">Volunteering</h2>
        <div className={`${styles["project-card"]} hover:shadow-lg hover:scale-105 transition-all duration-300`}>
          <ul className="list-disc ml-6 space-y-2 text-muted-foreground">
            <li>CSE Careers Day 2024 Company Coordinator</li>
            <li>Decoration team & Finance team member for Intreccio'24 (CSE Night)</li>
            <li>Project Blue Waves (Beach cleanup project by AIESEC Sri Lanka)</li>
            <li>Mora Exams 2021 conducted by Tamil Literary Association, University of Moratuwa</li>
            <li>Event handling member for "Monster Mash 2.0" - The Halloween Night, by Rotaract Club</li>
          </ul>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="my-20 max-w-4xl mx-auto">
        <div className="rounded-lg bg-gradient-to-br from-primary/10 to-white/5 px-8 py-16 text-center shadow-lg hover:shadow-lg hover:scale-105 transition-all duration-300">
          <h2 className="text-4xl font-bold mb-4 text-gradient clash-grotesk">Let's Connect!</h2>
          <p className="mb-8 text-lg text-muted-foreground">
            Interested in collaborating, hiring, or just want to say hi? Fill out the form below or reach out via email or LinkedIn.
          </p>
          <form
            className="mx-auto max-w-xl flex flex-col gap-4"
            action="mailto:baskarakurukkal.21@cse.mrt.ac.lk"
            method="POST"
            encType="text/plain"
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="rounded-md border border-primary bg-background px-4 py-2 text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="rounded-md border border-primary bg-background px-4 py-2 text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              required
              rows={4}
              className="rounded-md border border-primary bg-background px-4 py-2 text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <button
              type="submit"
              className="mt-2 rounded-md bg-primary px-6 py-2 font-semibold text-white transition hover:bg-primary/80"
            >
              Send Message
            </button>
          </form>
          <div className="mt-8 flex flex-row justify-center gap-6">
            <a href="mailto:baskarakurukkal.21@cse.mrt.ac.lk" className="hover:text-primary transition">
              <Mail className="inline h-6 w-6" />
            </a>
            <a href="https://github.com/Praveenasarma-Baskarakurukkal" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition">
              <Github className="inline h-6 w-6" />
            </a>
            <a href="https://www.linkedin.com/in/praveenasarma/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition">
              <Linkedin className="inline h-6 w-6" />
            </a>
          </div>
        </div>
      </section>
    </Container>
  );
}
