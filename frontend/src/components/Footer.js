import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebookF,
  faLinkedinIn,
  faGithub,
  faReact,
  faServicestack,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className="bg-green-700 text-black p-6 ">
      <div className="container mx-auto">
        <div className="flex justify-between items-start mb-10 mt-10">
          {/* Contact Information */}
          <div className="w-1/3">
            <h3 className="font-bold text-xl mb-2">Contact Information</h3>
            <p>
              <span className="font-bold">Address:</span> Patna,
              India
            </p>
            <p>
              <span className="font-bold">Phone:</span> +91 9576454311
            </p>
            <p>
              <span className="font-bold">Email:</span> prince9b407@gmail.com
            </p>
          </div>

          {/* Useful Links */}
          <div className="w-1/3">
            <h3 className="font-bold text-xl mb-2">Useful Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:underline">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  FAQs
                </a>
              </li>

            </ul>
          </div>
          <div className="w-1/3">
            <h3 className="font-bold text-xl mb-2">Other Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:underline">
                  Security Partners
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Medical Donors
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Medical center
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media Icons */}
          <div className="w-1/3 flex justify-end items-center">
            <a
              href="https://github.com/shrivastava-26"
              className="mr-4"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faGithub} size="2x" />
            </a>
            <a
              href="https://princeshrivastava.netlify.app"
              className="mr-4"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faServicestack} size="2x" />
            </a>
            <a
              href="https://linkedin.com/prince26"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedinIn} size="2x" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
