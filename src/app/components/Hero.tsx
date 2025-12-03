import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaWhatsapp } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";

const Hero = () => {
  return (
    <section className="py-28 container mx-auto px-4">
      <div className="max-w-3xl mx-auto text-center">
        <div className="flex flex-col items-center mb-4">
          <Image
            src="/profile.png"
            alt="pro img"
            width={100}
            height={100}
            className="rounded-full nb-4 w-32 h-32 object-cover ring-2 ring-primary"
          />
        </div>
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Hi, I'm <span className="text-primary">Tanvir</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8">
          Dedicated to developing efficient, user-centric web solutions with a
          focus on quality, clarity, and performance.
        </p>
        <div className="flex justify-center space-x-8 mb-8">
          <Link
            href="https://github.com/mitanvir05"
            target="/"
            className="text-2xl text-gray-600 hover:text-primary dark:text-gray-300 transition-colors duration-300"
          >
            <FaGithub size={34} />
          </Link>
          <Link
            href="https://www.linkedin.com/in/muhaimin-tanvir"
            target="/"
            className="text-2xl text-gray-600 hover:text-primary dark:text-gray-300 transition-colors duration-300"
          >
            <FaLinkedin size={34} />
          </Link>
          <Link
            href="https://wa.me/8801700955009"
            target="/"
            className="text-2xl text-gray-600 hover:text-primary dark:text-gray-300 transition-colors duration-300"
          >
            <FaWhatsapp size={34} />
          </Link>
        </div>

        <div className="flex flex-col md:flex-row justify-center gap-4">
          <Link
            href="/projects"
            className="bg-primary inline-block w-full md:w-auto text-white px-8 py-3 rounded-lg hover:bg-primary/70 transition-colors text-xl "
          >
            View Project
          </Link>
          <Link
            href="/contact"
            className="bg-gray-500 inline-block w-full md:w-auto text-white px-8 py-3 rounded-lg hover:bg-primary/70 transition-colors text-xl"
          >
            Contact Me
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
