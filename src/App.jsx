import React from "react";
import "./index.css";

function App() {
  return (
    <div>
      <header className="header">
        <h1>Akhila K</h1>
        <p>Full Stack Developer | BE CSE | CGPA: 9.27</p>
      </header>

      <section className="contact">
        <h2>Contact</h2>
        <p>
          Email:{" "}
          <a href="mailto:akhilakedla25@gmail.com">akhilakedla25@gmail.com</a>
        </p>
        <p>Phone: 6363179214</p>
        <p>Location: Mysuru</p>
        <p>
          LinkedIn:{" "}
          <a
            href="https://www.linkedin.com/in/akhila-k-677491263"
            target="_blank"
            rel="noreferrer"
          >
            View Profile
          </a>
        </p>
        <p>
          GitHub:{" "}
          <a
            href="https://github.com/Akhila-kedla"
            target="_blank"
            rel="noreferrer"
          >
            View Projects
          </a>
        </p>
      </section>

      <section className="skills">
        <h2>Technical Skills</h2>
        <ul>
          <li>Programming: Python, C, Java</li>
          <li>Web: HTML, CSS, JavaScript, React, MEAN Stack</li>
          <li>Tools: Git, GitHub, Figma</li>
        </ul>
      </section>

      <section className="projects">
        <h2>Projects</h2>
        <div>
          <h3>Edufolio</h3>
          <p>Full stack web app enabling peer tutoring among students.</p>
        </div>
        <div>
          <h3>Cart Abandonment Detector</h3>
          <p>
            Used ML to predict potential cart abandonment and improve customer
            retention.
          </p>
        </div>
        <div>
          <h3>Farmers Management System</h3>
          <p>
            Platform for farmers to buy and sell agricultural products
            seamlessly.
          </p>
        </div>
        <div>
          <h3>Quiz App</h3>
          <p>
            An interactive web quiz application with multiple choice questions
            and scoring functionality.
          </p>
        </div>
        <div>
          <h3>Fashion Design Website</h3>
          <p>
            A web platform showcasing fashion designs and products with an
            elegant user interface.
          </p>
        </div>
      </section>

      <section className="education">
        <h2>Education</h2>
        <p>
          <strong>BE in Computer Science</strong> - Vidyavardhaka College of
          Engineering, Mysuru | CGPA: 9.27
        </p>
        <p>
          <strong>PUC</strong> - Vivekananda PU College, Puttur | Percentage:
          95.33%
        </p>
      </section>

      <section className="internship">
        <h2>Internship & Trainings</h2>
        <p>Currently working as IEEE Computer Society Project Intern.</p>
        <p>
          Completed 100 hrs React training from Incture Company, gaining strong
          expertise in frontend development.
        </p>
        <p>
          IBM SkillsBuild Summer Internship Program with CSRBOX, focused on
          Front-End Development.
        </p>
      </section>

      <section className="certifications">
        <h2>Certifications</h2>
        <ul>
          <li>Design of Embedded AI & IoT system using STM32</li>
          <li>Leadership Skills Training</li>
        </ul>
      </section>

      <section className="extras">
        <h2>Achievements & Activities</h2>
        <p>
          Active member of Aspera Club, IUCEE department coordinator, class
          representative demonstrating leadership and teamwork skills.
        </p>
      </section>

      <section className="hobbies">
        <h2>Hobbies & Languages</h2>
        <ul>
          <li>Photography, Singing, Listening to music, Cooking</li>
          <li>Languages: English, Kannada, Hindi, German (Basics)</li>
        </ul>
      </section>

      <footer>
        <p>© 2025 Akhila K</p>
      </footer>
    </div>
  );
}

export default App;
