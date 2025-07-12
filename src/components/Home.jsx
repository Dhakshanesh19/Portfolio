import React, { useEffect } from 'react';
import './Home.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Dhakshanesh from '../assets/Dhakshanesh.jpg';
import leetcodeLogo from '../assets/leetcode.jpg';
import linkedin from '../assets/linkedin.jpg';
import git from '../assets/git.jpg';
import expense from '../assets/expense.jpg';
import todolist from '../assets/todolist.png';
import colorchanger from '../assets/colorchanger.png';

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-in-out',
      offset: 120,
    });
  }, []);

  return (
    <>
      <main id="main-container" className="main-div" data-aos="fade-in">
        <div className="main-card">
          <h2 className="main-title">I'M Dhakshanesh</h2>
          <h3>Problem Solver. Full Stack Developer. CSE Undergraduate</h3>
          <p className="main-subset">Eat..Code..Repeat</p>
          <div className="main-btn">
            <a href="#projects" className="btn-primary hover-effect">View My Work</a>
            <button className="btn-outline">Get In Touch</button>
          </div>
        </div>
      </main>

      <section className='social-card-section' data-aos="fade-up">
        <div className='social-grid'>
          <a href="https://github.com/Dhakshanesh19" target="_blank" rel="noopener noreferrer" className="social-card github" data-aos="zoom-in" data-aos-delay="100">
            <img src={git} alt="GitHub" />
            <div className="social-info">
              <h3>GitHub</h3>
              <p>Explore my open-source projects and contributions</p>
            </div>
          </a>

          <a href="https://www.linkedin.com/in/dhakshanesh-rajasekaran-2694002a7" target="_blank" rel="noopener noreferrer" className="social-card linkedin" data-aos="zoom-in" data-aos-delay="200">
            <img src={linkedin} alt="LinkedIn" />
            <div className="social-info">
              <h3>LinkedIn</h3>
              <p>Connect with me professionally and view my resume</p>
            </div>
          </a>

          <a href="https://leetcode.com/u/Dhakshanesh/" target="_blank" rel="noopener noreferrer" className="social-card leetcode" data-aos="zoom-in" data-aos-delay="300">
            <img src={leetcodeLogo} alt="LeetCode" />
            <div className="social-info">
              <h3>LeetCode</h3>
              <p>Check out my problem-solving journey and rankings</p>
            </div>
          </a>
        </div>
      </section>

      <section className="about-section" id="about" data-aos="fade-up">
        <h2 className="section-title">ABOUT ME</h2>
        <div className="about-container">
          <div className="about-text" data-aos="fade-right">
            <p>
              I'm a passionate Computer Science and Engineering student with a keen
              interest in building real-world tech solutions. I enjoy exploring the
              full stack — from crafting responsive frontends to designing efficient
              backend systems.
            </p>
            <p>
              I believe in continuous learning, teamwork, and writing code that not
              only works but also makes a difference.
            </p>
            <div className="stats-grid">
              <div className="stat-card" data-aos="zoom-in" data-aos-delay="100">
                <h3>4</h3>
                <p>Projects Completed</p>
              </div>
              <div className="stat-card" data-aos="zoom-in" data-aos-delay="200">
                <h3>14 <span>days</span></h3>
                <p>Implant Training</p>
              </div>
              <div className="stat-card" data-aos="zoom-in" data-aos-delay="300">
                <h3>7.81</h3>
                <p>CGPA</p>
              </div>
            </div>
          </div>
          <div className="about-image" data-aos="fade-left">
            <img src={Dhakshanesh} alt="Dhakshanesh" className="profile-pic" />
          </div>
        </div>
      </section>

      <section className="skills-section" id="skills" data-aos="fade-up">
        <h2 className="section-title">SKILLS & EXPERTISE</h2>
        <div className="skills-grid">
          <div className="skill-card" data-aos="flip-left">
            <h3>Frontend Development</h3>
            <ul>
              <li>React</li>
              <li>JavaScript</li>
              <li>HTML</li>
              <li>CSS</li>
              <li>Bootstrap</li>
            </ul>
          </div>
          <div className="skill-card" data-aos="flip-left" data-aos-delay="100">
            <h3>Backend Development</h3>
            <ul>
              <li>Node.js</li>
              <li>MongoDB</li>
              <li>Express.js</li>
            </ul>
          </div>
          <div className="skill-card" data-aos="flip-left" data-aos-delay="300">
            <h3>Programming Languages</h3>
            <ul>
              <li>C</li>
              <li>Java</li>
              <li>Python</li>
              <li>JavaScript</li>
            </ul>
          </div>
        </div>

        <div className="certifications-hackathons" data-aos="fade-up">
          <div className="certifications">
            <h3>📜 Global Certifications</h3>
            <div className="cert-card" data-aos="zoom-in" data-aos-delay="100">
              <img src="java-cert-icon.png" alt="Java SE17" />
              <div>
                <h4>Java SE 17 Developer</h4>
                <p>Oracle Certified</p>
              </div>
            </div>
            <div className="cert-card" data-aos="zoom-in" data-aos-delay="200">
              <img src="mongodb-cert-icon.png" alt="MongoDB" />
              <div>
                <h4>MongoDB Node.js Associate Developer</h4>
                <p>MongoDB Certified</p>
              </div>
            </div>
          </div>

          <div className="hackathons">
            <h3>🏆 Hackathons</h3>
            <div className="hack-card" data-aos="fade-up" data-aos-delay="200">
              <p>
                <strong>Hackanovate 2025 – 2nd Prize Winner</strong><br />
                Built a cybersecurity automation tool called KPRAutoScan.
              </p>
            </div>
            <div className="hack-card" data-aos="fade-up" data-aos-delay="300">
              <p>
                <strong>Ideathon KEC 2024 – Finalist</strong><br />
                Developed a smart trust review platform with sentiment AI.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="projects-section" data-aos="fade-up">
        <h2 className="section-title">Featured Projects</h2>
        <div className="projects-grid">

          <div className="project-card" data-aos="fade-up" data-aos-delay="100">
            <img src={expense} alt="Expense Tracker" className="project-img" />
            <div className="project-content">
              <h3>Expense Tracker</h3>
              <p>
                A full-featured budget tracker with CRUD operations and real-time balance calculation.
              </p>
              <div className="tech-tags">
                <span>React</span>
                <span>Node.js</span>
                <span>MongoDB</span>
                <span>Express</span>
              </div>
              <div className="project-links">
                <a href="https://github.com/yourrepo/expense-tracker" target="_blank" rel="noopener noreferrer">💻 Code</a>
              </div>
            </div>
          </div>

          <div className="project-card" data-aos="fade-up" data-aos-delay="200">
            <img src={todolist} alt="To-Do List" className="project-img" />
            <div className="project-content">
              <h3>To-Do List</h3>
              <p>
                A modern task manager allowing users to add, complete, and remove daily tasks.
              </p>
              <div className="tech-tags">
                <span>React</span>
                <span>Node.js</span>
                <span>MongoDB</span>
                <span>Express</span>
              </div>
              <div className="project-links">
                <a href="https://github.com/yourrepo/todo-list" target="_blank" rel="noopener noreferrer">💻 Code</a>
              </div>
            </div>
          </div>

          <div className="project-card" data-aos="fade-up" data-aos-delay="300">
            <img src={colorchanger} alt="Color Changer Tool" className="project-img" />
            <div className="project-content">
              <h3>Color Changer Tool</h3>
              <p>
                A UI utility app to change and apply custom background colors using React state.
              </p>
              <div className="tech-tags">
                <span>React</span>
                <span>JavaScript</span>
              </div>
              <div className="project-links">
                <a href="https://github.com/yourrepo/color-changer" target="_blank" rel="noopener noreferrer">💻 Code</a>
              </div>
            </div>
          </div>

          <div className="project-card" data-aos="fade-up" data-aos-delay="400">
            <img src={todolist} alt="Handcraft Goods Website" className="project-img" />
            <div className="project-content">
              <h3>Handcraft Goods Website</h3>
              <p>
                An online store for selling handmade products, built with complete e-commerce features.
              </p>
              <div className="tech-tags">
                <span>MERN Stack</span>
                <span>JWT Auth</span>
                <span>Stripe API</span>
                <span>MongoDB</span>
              </div>
              <div className="project-links">
                <a href="https://github.com/yourrepo/handcraft-shop" target="_blank" rel="noopener noreferrer">💻 Code</a>
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  );
};

export default Home;
