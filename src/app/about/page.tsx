import React from "react";
import {
  FaCode,
  FaServer,
  FaDatabase,
  FaTools,
  FaGraduationCap,
  FaFolderOpen,
} from "react-icons/fa";

const AboutPage = () => {
  return (
    <div className="container max-w-7xl mx-auto py-16 px-4">
      <h1 className="text-4xl md:text-6xl font-bold mb-6 text-center">
        About Me
      </h1>

      {/* bio */}
      <section className="mb-12">
        <p className="text-lg text-secondary max-w-3xl mx-auto text-center leading-relaxed">
          I&apos;m a Software Engineer with a B.Sc. in Computer Science and
          Engineering from the Bangladesh University of Business and Technology
          (BUBT), graduating with a CGPA of 3.86. I&apos;m currently pursuing my
          M.Sc. in Information Technology at Jahangirnagar University.
          <br />
          <br />I specialize in building modern web applications using
          JavaScript, React.js, Next.js, Node.js, and related technologies.
          I&apos;ve worked as a Junior Software Engineer at Skyland Web where I
          helped build responsive, scalable, and user-focused web applications.
          I enjoy turning ideas into products, learning new tools, and crafting
          interfaces that work across devices.
        </p>
      </section>

      {/* skills */}
      <section className="mb-12">
        <h2 className="section-title text-2xl font-semibold mb-6 text-center">
          Skills
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-6 dark:bg-dark/50 rounded-lg shadow-md">
            <FaCode className="h-8 w-8 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Frontend</h3>
            <ul className="text-secondary list-disc list-inside space-y-1">
              <li>React.js</li>
              <li>Next.js</li>
              <li>JavaScript (ES6+)</li>
              <li>Tailwind CSS, DaisyUI, Ant Design</li>
              <li>CSS / SCSS</li>
            </ul>
          </div>

          <div className="bg-white p-6 dark:bg-dark/50 rounded-lg shadow-md">
            <FaServer className="h-8 w-8 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Backend</h3>
            <ul className="text-secondary list-disc list-inside space-y-1">
              <li>Node.js</li>
              <li>Express.js</li>
              <li>RESTful API design</li>
              <li>Authentication & authorization patterns</li>
            </ul>
          </div>

          <div className="bg-white p-6 dark:bg-dark/50 rounded-lg shadow-md">
            <FaDatabase className="h-8 w-8 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Databases & Tools</h3>
            <ul className="text-secondary list-disc list-inside space-y-1">
              <li>MongoDB</li>
              <li>Firebase</li>
              <li>Git / GitHub</li>
              <li>Stripe, Cloudinary (used in projects)</li>
              <li>Redux (state management)</li>
            </ul>
          </div>

          <div className="bg-white p-6 dark:bg-dark/50 rounded-lg shadow-md">
            <FaTools className="h-8 w-8 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Languages & Other</h3>
            <ul className="text-secondary list-disc list-inside space-y-1">
              <li>C / C++</li>
              <li>Python</li>
              <li>Developer tooling: npm, VSCode, Postman</li>
            </ul>
          </div>
        </div>
      </section>

      {/* experience */}
      <section className="mb-12">
        <h2 className="section-title text-2xl font-semibold mb-6 text-center">
          Experience
        </h2>

        <div className="max-w-4xl mx-auto space-y-6">
          <article className="p-6 bg-white rounded-lg shadow-md dark:bg-dark/50">
            <h3 className="text-lg font-semibold">
              Junior Software Engineer — Skyland Web
            </h3>
            <p className="text-sm text-secondary">06/2024 — Present</p>
            <ul className="mt-3 list-disc list-inside text-secondary space-y-1">
              <li>
                Developing and improving modern web applications using React.js
                / Next.js.
              </li>
              <li>
                Ensuring UI/UX quality across devices and improving performance.
              </li>
              <li>
                Collaborating with team members on scalable front-end
                architecture.
              </li>
            </ul>
          </article>

          <article className="p-6 bg-white rounded-lg shadow-md dark:bg-dark/50">
            <h3 className="text-lg font-semibold">
              Software Engineer Intern — Skyland Web
            </h3>
            <p className="text-sm text-secondary">03/2024 — 05/2024</p>
            <ul className="mt-3 list-disc list-inside text-secondary space-y-1">
              <li>
                Built front-end features with React.js and improved UI
                performance.
              </li>
              <li>
                Worked alongside backend developers using Node.js and
                Express.js.
              </li>
            </ul>
          </article>
        </div>
      </section>

      {/* education */}
      <section className="mb-12">
        <h2 className="section-title text-2xl font-semibold mb-6 text-center">
          Education
        </h2>

        <div className="max-w-4xl mx-auto space-y-4">
          <div className="p-6 bg-white rounded-lg shadow-md dark:bg-dark/50">
            <h3 className="text-lg font-semibold flex items-center gap-2">
              <FaGraduationCap /> Jahangirnagar University — M.Sc. (In Progress)
            </h3>
            <p className="text-secondary">
              Institute of Information Technology — 2025 - Present
            </p>
          </div>

          <div className="p-6 bg-white rounded-lg shadow-md dark:bg-dark/50">
            <h3 className="text-lg font-semibold">
              Bangladesh University of Business and Technology — B.Sc.
            </h3>
            <p className="text-secondary">
              Computer Science & Engineering — CGPA: 3.86 (2020 - 2024)
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
