import React from "react";
import { useNavigate } from "react-router-dom";
import "../CSS/./AboutUs.css";
import NavBar from "./NavBar";
import hospitalImage from "../images/hospital.png"; // Import the hospital image

const AboutUs = () => {
  const navigate = useNavigate();

  return (
    <div>
      <NavBar />


      <div className="flex justify-center items-center h-screen bg-gradient-to-b from-black to-green-700 ">
        <div className="flex flex-col text-custom-blue space-y-8 w-3/5 p-1 mt-5 bg-green-800 shadow-lg rounded-lg transition-transform duration-10000 ease-in-out transform hover:scale-105">
          <div className="space-y-2">
            <h1 className="text-lg font-mono text-center">About Us</h1> {/* Center align the "About Us" heading */}
            <div className="about-content text-left"> {/* Left align the content */}
              <h2>Who We Are</h2>
              <p>
                We are a dedicated team of healthcare professionals and
                technologists committed to revolutionizing the way Electronic
                Health Records (EHR) are managed. Our mission is to provide a
                secure, efficient, and user-friendly platform for managing EHR.
              </p>

              <h3>For Doctors</h3>
              <p>
                Doctors can access the patient list assigned to them, view
                patient records and medical history, and write comments and
                treatment plans for treating patients.
              </p>

              <h3>For Patients</h3>
              <p>
                Patients can view their own medical records and history, upload
                new medical records, test reports, and other documents, and
                grant access to doctors.
              </p>

              <h3>For Diagnostic Centers</h3>
              <p>
                Diagnostic Centers can view comments and treatment plans from
                doctors and upload EHR reports to patient records.
              </p>
            </div>
             <div className="flex justify-center">
        <button
          className="bg-teal-500 text-black font-bold py-2 px-2 rounded transition duration-300 ease-in-out transform hover:scale-110 hover:bg-gray-600"
          onClick={() => {
            navigate("/");
          }}
        >
          Back to Home Page
        </button>
      </div>
          </div>
        </div>
      </div>

     
    </div>
  );
};

export default AboutUs;
