import React, { useState } from 'react';
import { useParams } from 'react-router-dom'; // to get the template number from the URL
import ResumeForm from './ResumeForm';
import Template1 from './Templates/Template1';
import Template2 from './Templates/Template2';
import Template3 from './Templates/Template3';
import Template4 from './Templates/Template4';
import Template5 from './Templates/Template5';
import Template6 from './Templates/Template6';
import Template7 from './Templates/Template7';
import html2pdf from 'html2pdf.js';

const ResumeBuilder = () => {
  const { templateNumber } = useParams();

  const [formData, setFormData] = useState({
    firstName: 'Michael',
    lastName: 'Jordan',
    email: 'michael776@example.com',
    phone: "9123456789",
    links: 'github.com',
    summary: 'A passionate frontend developer with expertise in crafting dynamic and responsive user interfaces.',
    education: [{
      clg_name: 'Chaitanya Bharathi Institute of Technology',
      course_name: 'Computer Science',
      cgpa: '9.11',
      from: '2021',
      to: '2025'
    }],
    experience: [{
      exp_position: 'Team Lead',
      exp_company: 'Course Vita',
      exp_desc: 'Developed key features using ReactJS, enhancing application performance and user engagement.',
      exp_from: '2021',
      exp_to: '2025'
    }],
    skills: 'C, CPP, Python, HTML, CSS, Bootstrap, Tailwind CSS  SQL, JavaScript,  ReactJs, MongoDB, MySQL, Git/ GitHub,VS Code',
    projects: [
      {
      proj_name: 'CraftMyCv',
      proj_desc: ' A responsive web app for real-time resume customization and preview. Offers seamless editing and instant PDF downloads, built with React and Tailwind CSS for an intuitive user experience',
      proj_link: 'www.craftMyCV.com'
    },
    {
      proj_name: 'Instagram Fraud Detection',
      proj_desc: ' Developed an advanced fraud detection system for Instagram, leveraging machine learning algorithms and sophisticated feature extraction techniques to accurately identify and prevent fraudulent activities.',
      proj_link: 'https://github.com/SumanR1602/InstaFrauddetection'
    }
  ],
    certifications: [
      {
        cert_name: 'Google Data Analytics',
        cert_orgname: 'Coursera',
        cert_link: 'www.coursera.com'
      },
      {
        cert_name: 'Microsoft Azure',
        cert_orgname: 'Microsoft',
        cert_link: 'www.microsoft.com'
      },
    ],
    achievements: 'Winner in Hackathon conducted by Course Vita',
    extra_curricular_activities: 'Reading books, playing badminton, jogging',
    additional_links: 'www.linkedIn.com, www.leetcode.com'
  });

  const handleFormChange = (newData) => {
    setFormData(newData);
  };

  const generatePDF = () => {
    const element = document.getElementById('resumePreview');
    const opt = {
      margin: 0,
      filename: 'resume.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' }
    };
    html2pdf().set(opt).from(element).save();
  };

  // Function to render the template based on templateNumber from the URL
  const renderTemplate = () => {
    switch (templateNumber) {
      case '1': return <Template1 formData={formData} />;
      case '2': return <Template2 formData={formData} />;
      case '3': return <Template3 formData={formData} />;
      case '4': return <Template4 formData={formData} />;
      case '5': return <Template5 formData={formData} />;
      case '6': return <Template6 formData={formData} />;
      case '7': return <Template7 formData={formData} />;
      default: return <Template1 formData={formData} />;
    }
  };

  return (
    <div className="container mx-auto px-4">
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="w-full lg:w-1/2">
          <ResumeForm formData={formData} onFormChange={handleFormChange} />
          <div className="flex justify-center w-full mt-6">
            <button
              type="button"
              onClick={generatePDF}
              className="text-center p-3 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300 ease-in-out"
            >
              Generate PDF
            </button>
          </div>
        </div>

        <div id="resumePreview">
          {renderTemplate()}
        </div>
      </div>
    </div>
  );
};

export default ResumeBuilder;
