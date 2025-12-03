import Link from "next/link";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-dark border-t border-gray-200 dark:border-gray-800">
      <div className="container max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <Link href="/" className="text-xl font-bold text-primary">
              Portfolio
            </Link>
            <p className="text-sm text-secondary mt-1">
              © {new Date().getFullYear()} Tanvir. All rights reserved.
            </p>
          </div>
          <div className="flex space-x-8 ">
          <Link
            href="https://github.com/mitanvir05"
            target="_blank"
            className="text-2xl text-gray-600 hover:text-primary dark:text-gray-300 transition-colors duration-300"
          >
            <FaGithub size={24} />
          </Link>
          <Link
            href="https://www.linkedin.com/in/muhaimin-tanvir"
            target="_blank"
            className="text-2xl text-gray-600 hover:text-primary dark:text-gray-300 transition-colors duration-300"
          >
            <FaLinkedin size={24} />
          </Link>
          <Link
            href="https://wa.me/8801700955009"
            target="_blank"
            className="text-2xl text-gray-600 hover:text-primary dark:text-gray-300 transition-colors duration-300"
          >
            <FaWhatsapp size={24} />
          </Link>
        </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
