import React from 'react';

const Skills = () => {
  return (
    <section className="section-padding" id="skills">
      <div className="container">
        <div className="section-header reveal active">
          <span className="section-subtitle">My Stack</span>
          <h2 className="section-title">Skills & Technologies</h2>
        </div>

        <div className="skills-container">
          {/* Using Now */}
          <div className="skills-category reveal active">
            <h3>Using Now</h3>
            <div className="skills-grid">
              <div className="skill-badge">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML5" />
                <span className="skill-name">HTML5</span>
              </div>
              <div className="skill-badge">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS3" />
                <span className="skill-name">CSS3</span>
              </div>
              <div className="skill-badge">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg" alt="Sass" />
                <span className="skill-name">Sass</span>
              </div>
              <div className="skill-badge">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" alt="Tailwind CSS" />
                <span className="skill-name">Tailwind</span>
              </div>
              <div className="skill-badge">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" />
                <span className="skill-name">JavaScript</span>
              </div>
              <div className="skill-badge">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" />
                <span className="skill-name">React</span>
              </div>
              <div className="skill-badge">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" alt="Bootstrap" />
                <span className="skill-name">Bootstrap</span>
              </div>
              <div className="skill-badge">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" alt="Figma" />
                <span className="skill-name">Figma</span>
              </div>
            </div>
          </div>

          {/* Learning */}
          <div className="skills-category reveal active">
            <h3>Learning</h3>
            <div className="skills-grid">
              <div className="skill-badge">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="Node.js" />
                <span className="skill-name">Node.js</span>
              </div>
              <div className="skill-badge">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" alt="MySQL" />
                <span className="skill-name">MySQL</span>
              </div>
              <div className="skill-badge">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" alt="MongoDB" />
                <span className="skill-name">MongoDB</span>
              </div>
              <div className="skill-badge">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" alt="TypeScript" />
                <span className="skill-name">TypeScript</span>
              </div>
            </div>
          </div>

          {/* Other Skills */}
          <div className="skills-category reveal active">
            <h3>Other Skills</h3>
            <div className="skills-grid">
              <div className="skill-badge">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" alt="C++" />
                <span className="skill-name">C++</span>
              </div>
              <div className="skill-badge">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" alt="C" />
                <span className="skill-name">C</span>
              </div>
              <div className="skill-badge">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" alt="Git" />
                <span className="skill-name">Git</span>
              </div>
              <div className="skill-badge">
                <img src="/iot.jpg" alt="IoT" style={{ borderRadius: '6px' }} />
                <span className="skill-name">IoT</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
