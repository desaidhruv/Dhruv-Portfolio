import React, { useEffect } from "react";
import { motion } from "framer-motion";
// import { fadeUp } from "../animations";
import gsap from "gsap";
import Footer from "../components/Footer";

const transition = { duration: 1, ease: "easeInOut", delay: 0.8 };

const About = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
    });
    document.title = "Dhruv — About Me";
    // fadeUp(".about-inner", 0.8);
    gsap.from(".about__inner", {
      duration: 0.2,
      delay: 1,
      opacity: 0,
      ease: "Power4.out",
    });
    gsap.to(".cursor", {
      duration: 0,
      css: { display: "none" },
    });
  }, []);
  return (
    <>
      <motion.div
        initial={{ height: "100%" }}
        // animate={{ height: "0%", transition: { ...transition, delay: 1 } }}
        className="transition"
      />
      <motion.div
        exit={{ height: "100%", transition }}
        className="transition2"
      />
      <motion.div
        initial={{ height: 0, visibility: "hidden" }}
        animate={{
          height: "100%",
          visibility: "visible",
          transition: { ...transition, duration: 2, delay: -0.2 },
        }}
        className="about"
      >
        <div className="about__inner">
          <div className="about__top">
            <div className="my-name">
              Dhruv <br /> Desai.
            </div>
            <div className="desc">
              <p>
                Software Developer based in Mumbai, India focused on branding,
                building interactive experiences & creating emotions through
                design and technology.
              </p>
              <p>
                I have always supported the idea of a minimalistic and
                user-focused approach to design and development, which I indeed
                imbibe when building scalable and fully responsive web
                applications.
              </p>
            </div>
            <a
              href="https://drive.google.com/uc?export=download&id=1BIJ6Fbvq2rwjcGqILr793vqIUvwzgrf4"
              download
            >
              <i className="fas fa-file-alt"></i> Download Resume
            </a>
          </div>

          <div className="about__bottom">
            <div className="experience">
              <div className="stack main-title">
                <span>Stack.</span>
              </div>

              <div className="companies">
                <div className="company">
                  <div className="name tech">Core Tech:</div>
                  <ul className="tasks">
                    <li>Python</li>
                    <li>Java</li>
                    <li>JavaScript</li>
                    <li>Django</li>
                    <li>React</li>
                    <li>REST APIs</li>
                    <li>SQLite3</li>
                    <li>Firebase</li>
                    <li>MySQL</li>
                    <li>CSS</li>
                  </ul>
                </div>

                <div className="company">
                  <div className="name tech">Familiar:</div>
                  <ul className="tasks">
                    <li>Node</li>
                    <li>GSAP</li>
                    <li>Express</li>
                    <li>PWAs</li>
                  </ul>
                </div>

                <div className="company">
                  <div className="name tech">On The Job:</div>
                  <ul className="tasks">
                    <li>Responsive Design.</li>
                    <li>Version Control.</li>
                    <li>
                      JavaScript best practices, clean code and ES6+ knowledge.
                    </li>
                    <li>Continuous Integration/Development.</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="experience">
              <div className="main-title">
                <span>experience.</span>
              </div>

              <div className="companies">
                <div className="company">
                  <div className="name">Spirnicle (SDE Intern)</div>
                  <div className="year">October 2020 - December 2020(3 Months)</div>
                  <ul className="tasks">
                      Developed a scalable web application using Django for students and faculty where I completed 3 modules during my internship period. Including functionalities such as:
                    <li>
                      Built an impregnable multi-role user authentication system with email verification and password reset.
                    </li>
                    <li>
                      Adding a new course, calculating the duration of the course, scheduling courses.
                    </li>
                    <li>
                      Enrolling in the courses, students showcasing their talents.
                    </li>
                  </ul>
                </div>
                <div className="company">
                  <div className="name">Kalam Labs</div>
                  <div className="year">December 2020 - January 2021</div>
                  <ul className="tasks">
                    <li>
                      Delivered a website with interactive and user-friendly interface that enables students to enroll in their classes.
                    </li>
                    <li>
                      Worked with UI/UX designer and translated Figma designs to code.
                    </li>
                    <li>
                      Exceeded the client's estimations with regards to completion time. The website incorporated numerous animations for an interactive look.
                    </li>
                  </ul>
                </div>

                <div className="company">
                  <div className="name">L&T (Larsen and Toubro)</div>
                  <div className="year">May 2018 - June 20218</div>
                  <ul className="tasks">
                    <li>
                      Gained hands-on experience on the web development domain.
                    </li>

                    <li>
                      Learned to deploy the website on L&T's cloud server.
                    </li>
                  </ul>
                </div>

                <div className="company">
                  <div className="name">Widhya - Mission Advocate</div>
                  <div className="year">July 2020 - October 2020</div>
                  <ul className="tasks">
                    <li>
                    Built missions on Full-stack web development that helped students to become industry ready by adopting “Learning by doing” approach.
                    </li>

                  </ul>
                </div>

              </div>
            </div>
          </div>
          <Footer />
        </div>
      </motion.div>
    </>
  );
};

export default About;
