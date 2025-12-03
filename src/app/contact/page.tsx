"use client";

import Link from "next/link";
import { useState } from "react";
import { FaEnvelope, FaMapMarkerAlt, FaPhone } from "react-icons/fa";

interface FormData {
  name: string;
  email: string;
  message: string;
}
type FormStatus = "idle" | "loading" | "success" | "error";

const ContactPage = () => {
  const [] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState<FormStatus>("idle");
  return (
    <div className="container max-w-7xl mx-auto py-20">
      <h1 className="text-4xl font-bold mb-8 text-center">Contact Me</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="space-y-8">
          <h2 className="text-2xl font-semibold mb-04">Get in Touch</h2>
          <p className="text-secondary md:w-2/3 ">
            Feel free to reach out for collaboration, project opportunities, or
            any professional inquiries. I try to respond as quickly as possible.
          </p>

          <div>
            <div className="space-y-8">
              {/* Email */}
              <div className="flex items-center gap-4">
                <FaEnvelope className="w-6 h-6 text-primary" />
                <div>
                  <h3 className="font-semibold">Email :</h3>
                  <Link
                    href="mailto:tanvir.cse05@gmail.com"
                    className="text-secondary hover:text-primary"
                  >
                    tanvir.cse05@gmail.com
                  </Link>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-4">
                <FaPhone className="w-6 h-6 text-primary" />
                <div>
                  <h3 className="font-semibold">Phone :</h3>
                  <Link
                    href="tel:+8801700955009"
                    className="text-secondary hover:text-primary"
                  >
                    +880 1700955009
                  </Link>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center gap-4">
                <FaMapMarkerAlt className="w-6 h-6 text-primary" />
                <div>
                  <h3 className="font-semibold">Location :</h3>
                  <p className="text-secondary hover:text-primary">
                    Mirpur,Dhaka, Bangladesh
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* contact form */}
        <div className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md">
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Name
              </label>
              <input
                required
                className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary"
                type="text"
                id="name"
                name="name"
                placeholder="Enter Your Name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email
              </label>
              <input
                required
                className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary"
                type="email"
                id="email"
                name="email"
                placeholder="Enter Your Email"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium mb-2"
              >
                Message
              </label>
              <textarea
                className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary"
                rows={4}
                required
                id="message"
                name="message"
                placeholder="Enter Your Message"
              />
            </div>

            <button type="submit" className="w-full btn btn-primary cursor-pointer">
              {status === "loading" ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
