import React from 'react';

const Template1 = ({ formData }) => {
    const { 
        firstName, 
        lastName, 
        email, 
        phone, 
        links, 
        summary, 
        education, 
        experience, 
        skills, 
        projects, 
        certifications, 
        achievements, 
        extra_curricular_activities, 
        additional_links 
    } = formData;

    // Helper function to split comma-separated string into list
    const splitStringIntoList = (inputString) => {
        if (!inputString) return [];
        return inputString.split(',').map(item => item.trim());
    };

    const skillsList = splitStringIntoList(skills);
    const extraCurricularList = splitStringIntoList(extra_curricular_activities);
    const additionalLinksList = splitStringIntoList(additional_links);

    return (
        <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-md">
            <div className="text-center">
                <h1 className="text-3xl font-bold">{firstName} {lastName}</h1>
                <div className="flex justify-center space-x-4 text-sm text-gray-600 mt-2">
                    <span>📞 {phone}</span>
                    <span>✉️ {email}</span>
                    <div className="text-sm text-blue-500 flex justify-center space-x-2">
                        {additionalLinksList.map((link, index) => (
                            <a key={index} href={link} className="hover:underline">🔗 {link}</a>
                        ))}
                    </div>
                </div>
            </div>

            {/* Summary */}
            <div className="mt-6">
                <h2 className="text-xl font-semibold border-b border-gray-300 pb-1">SUMMARY</h2>
                <p className="mt-2">{summary}</p>
            </div>

            {/* Education */}
            <div className="mt-6">
                <h2 className="text-xl font-semibold border-b border-gray-300 pb-1">EDUCATION</h2>
                {education.map((edu, index) => (
                    <p className="mt-2" key={index}>
                        <strong>{edu.clg_name}</strong><br />
                        {edu.course_name} <br />
                        <div className="flex justify-between">
                            <p> <strong className="text-sm">CGPA: </strong>{edu.cgpa}</p>
                            <p>{edu.from} - {edu.to}</p>
                        
                        </div>
                    </p>
                ))}
            </div>

            {/* Skills & Courses */}
            <div className="mt-6">
                <h2 className="text-xl font-semibold border-b border-gray-300 pb-1">SKILLS & COURSES</h2>
                <p className="mt-2">
                    <strong>Skills:</strong> {skillsList.join(', ')}
                </p>
            </div>

            {/* Experience */}
            <div className="mt-6">
                <h2 className="text-xl font-semibold border-b border-gray-300 pb-1">EXPERIENCE</h2>
                {experience.map((exp, index) => (
                    <p className="mt-2" key={index}>
                        <strong>{exp.exp_position} | {exp.exp_company}</strong><br />
                        {exp.exp_from} - {exp.exp_to}<br />
                        {exp.exp_desc}
                    </p>
                ))}
            </div>

            {/* Projects */}
            <div className="mt-6">
                <h2 className="text-xl font-semibold border-b border-gray-300 pb-1">PROJECTS</h2>
                <ul className="list-disc ml-5 mt-2">
                    {projects.map((project, index) => (
                        <li key={index}>
                            <strong>{project.proj_name}:</strong> {project.proj_desc}<br/>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Achievements & Certifications */}
            <div className="mt-6">
                <h2 className="text-xl font-semibold border-b border-gray-300 pb-1">ACHIEVEMENTS & CERTIFICATIONS</h2>
                <ul className="list-disc ml-5 mt-2">
                    <li>{achievements}</li>
                    {certifications.map((cert, index) => (
                        <li key={index}>{cert.cert_name}</li>
                    ))}
                </ul>
            </div>

            {/* Extracurricular Activities */}
            <div className="mt-6">
                <h2 className="text-xl font-semibold border-b border-gray-300 pb-1">EXTRACURRICULAR ACTIVITIES</h2>
                <ul className="list-disc ml-5 mt-2">
                    {extraCurricularList.map((activity, index) => (
                        <li key={index}>{activity}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Template1;
