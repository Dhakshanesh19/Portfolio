import React from 'react'
import './Home.css'
const Home = () => {
  return (
    <>
      <main id="main-container" class="main-div">
  <div class="main-card">
    <h2 class="main-title">I'M Dhakshanesh</h2>
    <h3>Problem Solver. Full Stack Developer. CSE Undergraduate</h3>
    <p class="main-subset">Eat..Code..Repeat</p>
    <div class="main-btn">
      <a href="#projects" class="btn-primary hover-effect">View My Work</a>
      <button class="btn-outline">Get In Touch</button>
    </div>
  </div>
</main>

      <section className='social-card-section'>
  <div className='social-grid'>
    <a href="https://github.com/your-github-username" target="_blank" rel="noopener noreferrer" className="social-card github">
      <img src="/icons/github.svg" alt="GitHub" />
      <div className="social-info">
        <h3>GitHub</h3>
        <p>Explore my open-source projects and contributions</p>
      </div>
    </a>

    <a href="https://www.linkedin.com/in/your-linkedin-id" target="_blank" rel="noopener noreferrer" className="social-card linkedin">
      <img src="/icons/linkedin.svg" alt="LinkedIn" />
      <div className="social-info">
        <h3>LinkedIn</h3>
        <p>Connect with me professionally and view my resume</p>
      </div>
    </a>

    <a href="https://leetcode.com/your-leetcode-username" target="_blank" rel="noopener noreferrer" className="social-card leetcode">
      <img src="/icons/leetcode.svg" alt="LeetCode" />
      <div className="social-info">
        <h3>LeetCode</h3>
        <p>Check out my problem-solving journey and rankings</p>
      </div>
    </a>
  </div>
</section>

<section className="about-section" id="about">
  <h2 className="section-title">ABOUT ME</h2>
  <div className="about-container">
    <div className="about-text">
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
        <div className="stat-card">
          <h3>3</h3>
          <p>Projects Completed</p>
        </div>
        <div className="stat-card">
          <h3>14 <span>days</span></h3>
          <p>Implant Training</p>
        </div>
        <div className="stat-card">
          <h3>7.91</h3>
          <p>CGPA</p>
        </div>
      </div>
    </div>
    <div className="about-image">
      <div className="emoji-ring">
        <span role="img" aria-label="coder">👨‍💻</span>
      </div>
    </div>
  </div>
</section>


<section className="skills-section" id="skills">
  <h2 className="section-title">SKILLS & EXPERTISE</h2>

  <div className="skills-grid">
    <div className="skill-card">
      <h3>Frontend Development</h3>
      <ul>
        <li>React</li>
        <li>JavaScript</li>
        <li>HTML</li>
        <li>CSS</li>
        <li>Bootstrap</li>
      </ul>
    </div>
    <div className="skill-card">
      <h3>Backend Development</h3>
      <ul>
        <li>Node.js</li>
        <li>MongoDB</li>
        <li>Express.js</li>
      </ul>
    </div>
    <div className="skill-card">
      <h3>UI/UX Design</h3>
      <ul>
        <li>Figma</li>
        <li>Adobe Illustrator</li>
        <li>Canva</li>
      </ul>
    </div>
    <div className="skill-card">
      <h3>Programming Languages</h3>
      <ul>
        <li>C</li>
        <li>Java</li>
        <li>Python</li>
        <li>JavaScript</li>
      </ul>
    </div>
  </div>

  <div className="certifications-hackathons">
    <div className="certifications">
      <h3>📜 Global Certifications</h3>
      <div className="cert-card">
        <img src="java-cert-icon.png" alt="Java SE17" />
        <div>
          <h4>Java SE 17 Developer</h4>
          <p>Oracle Certified</p>
        </div>
      </div>
      <div className="cert-card">
        <img src="mongodb-cert-icon.png" alt="MongoDB" />
        <div>
          <h4>MongoDB Node.js Associate Developer</h4>
          <p>MongoDB Certified</p>
        </div>
      </div>
    </div>

    <div className="hackathons">
      <h3>🏆 Hackathons</h3>
      <div className="hack-card">
        <p>
          <strong>HACKNOVATE'25 – CSD Department</strong><br />
          Project: KEC Student Portal UI Design<br />
          Prize: 🥈 2nd Place — 
          <a href="https://www.figma.com/file-link" target="_blank" rel="noopener noreferrer">
            View Figma Page
          </a>
        </p>
      </div>
      <div className="hack-card">
        <p>
          <strong>AI Bytes Hackathon by BYTS</strong><br />
          Project: Unmasking Fake Reviews using AI<br />
          <a href="https://github.com/project-repo" target="_blank" rel="noopener noreferrer">
            View GitHub Repo
          </a>
        </p>
      </div>
    </div>
  </div>
</section>


<section id="projects" className="projects-section">
  <h2 className="section-title">Featured Projects</h2>
  <div className="projects-grid">
    
    {/* Project 1: Expense Tracker */}
    <div className="project-card">
      <img src="/assets/expense-tracker.png" alt="Expense Tracker" className="project-img" />
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
          <a href="https://expense-demo.com" target="_blank">🔗 Live Demo</a>
          <a href="https://github.com/yourrepo/expense-tracker" target="_blank">💻 Code</a>
        </div>
      </div>
    </div>

    {/* Project 2: To-Do List */}
    <div className="project-card">
      <img src="/assets/todo-app.png" alt="To-Do List" className="project-img" />
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
          <a href="https://todo-demo.com" target="_blank">🔗 Live Demo</a>
          <a href="https://github.com/yourrepo/todo-list" target="_blank">💻 Code</a>
        </div>
      </div>
    </div>

    {/* Project 3: Color Changer Tool */}
    <div className="project-card">
      <img src="/assets/color-changer.png" alt="Color Changer Tool" className="project-img" />
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
          <a href="https://color-changer-demo.com" target="_blank">🔗 Live Demo</a>
          <a href="https://github.com/yourrepo/color-changer" target="_blank">💻 Code</a>
        </div>
      </div>
    </div>

    {/* Project 4: Handcraft Goods Selling Website */}
    <div className="project-card">
      <img src="/assets/handcraft-shop.png" alt="Handcraft Goods Website" className="project-img" />
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
          <a href="https://handcraftshop-demo.com" target="_blank">🔗 Live Demo</a>
          <a href="https://github.com/yourrepo/handcraft-shop" target="_blank">💻 Code</a>
        </div>
      </div>
    </div>

  </div>
</section>



    </>
  )
}

export default Home