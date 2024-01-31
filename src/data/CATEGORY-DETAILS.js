import CLASSIC from '../assets/classic.jpg';
import CONTEMPORARY from '../assets/contemporary.jpg';
import MINIMALIST from '../assets/minimalist.jpg';
import MODERN from '../assets/modern.jpg';
import PROFESSIONAL from '../assets/professional.jpg';
import STANDARD from '../assets/standard.jpg';
import STYLISH from '../assets/stylish.jpg';
import TECHNICAL from '../assets/technical.jpg';

export const CATEGORIZED = [
    {
        id: 1,
        name: 'Classic'
    },
    {
        id: 2,
        name: 'Contemporary'
    },
    {
        id: 3,
        name: 'Minimalist'
    },
    {
        id: 4,
        name: 'Modern'
    },
    {
        id: 5,
        name: 'Professional'
    },
    {
        id: 6,
        name: 'Standard'
    },
    {
        id: 7,
        name: 'Stylish'
    },
    {
        id: 8,
        name: 'Technical'
    },
];

const CATEGORY_DETAILS = [
    {
      id: 1,
      definition: `A chronological resume is a traditional and widely used format that presents an individual's 
      work experiences in reverse chronological order, starting with the most recent job. It emphasizes career progression 
      and showcases a candidate's employment history in a clear and linear manner.`,
      features: [
        { 'Reverse Chronological Order': [
          `Work experiences are listed from the most recent to the oldest.`,
          `Provides a clear timeline of a candidate's career history.`,
        ]},
        { 'Focus on Work History': [
          `Places emphasis on detailed descriptions of job roles, responsibilities, and achievements.`,
          `Offers a comprehensive overview of the candidate's professional journey.`,
        ]},
        { 'Highlight Career Growth': [
          `Showcases the progression and continuity of the candidate's career.`,
          `Enables recruiters to trace the development of skills and experiences.`,
        ]},
        { 'Easy to Read': [
          `Provides a straightforward and easy-to-follow structure for recruiters.`,
          `Allows for quick assessment of a candidate's work history and qualifications.`,
        ]},
      ],
      structure: [
        { 'Contact Information, Professional Summary, and Skills': [
          `Standard contact details, a brief summary, and a section highlighting skills.`
        ]},
        { 'Work Experience': [
          `Chronological listing of work experience, focusing on key achievements.`
        ]},
        { 'Education': [
          `Details about educational background.`
        ]},
        { 'Certifications and Achievements': [
          `Include relevant certifications, awards, or achievements.`
        ]},
      ],
      whenToUse: [
        `When showcasing a strong and consistent work history is important.`,
        `Suited for individuals with a clear career progression.`,
      ],
      ending: `A chronological resume effectively presents a candidate's professional journey, highlighting career growth 
      and experiences in a linear and organized manner.`,
    },
    {
      id: 2,
      definition: `A functional resume is a non-traditional format that prioritizes skills and qualifications over a detailed 
      chronological work history. It is particularly useful for individuals with employment gaps, those changing careers, 
      or anyone wanting to highlight specific skills relevant to a new position.`,
      features: [
        { 'Skills Emphasis': `Highlights skills and qualifications over a detailed work history.` },
        { 'Transferable Skills': `Emphasizes skills that can be applied across different roles and industries.` },
        { 'Address Employment Gaps': `Ideal for individuals with gaps in their work history.` },
        { 'Career Changers': `Suited for those transitioning to a new career path.` },
      ],
      ending: `A functional resume strategically presents a targeted skill set, allowing individuals to stand out in situations 
      where traditional chronological formats may not effectively convey their strengths.`,
    },
    {
      id: 3,
      definition: `A combination/hybrid resume combines elements of both chronological and functional resumes. 
      It highlights both work experience and skills, providing a comprehensive overview of the candidate's qualifications.`,
      features: [
        { 'Blend of Chronological and Functional': `Combines work history details with a focus on skills.` },
        { 'Comprehensive Overview': `Showcases both the candidate's experience and relevant skills.` },
        { 'Flexibility': `Offers flexibility in presenting information based on individual strengths.` },
        { 'Customizable': `Tailorable to the specific requirements of the job application.` },
      ],
      samples: [  
        { 'Stylish': STYLISH }, 
        { 'Minimalist': MINIMALIST }, 
        { 'Modern': MODERN },
        { 'Contemporary': CONTEMPORARY },
        { 'Professional': PROFESSIONAL },
        { 'Classic': CLASSIC },
      ],
    },
    {
      id: 4,
      definition: `A targeted resume is customized for a specific job by emphasizing skills and experiences relevant to the position. 
      It is tailored to address the specific requirements of a job posting, increasing the chances of standing out to employers.`,
      features: [
        { 'Customized for Specific Job': `Tailored to match the qualifications and requirements of a particular job.` },
        { 'Relevant Skills Highlighted': `Emphasizes skills and experiences directly related to the target position.` },
        { 'Increased Relevance': `Increases the chances of getting noticed by aligning with the employer's needs.` },
        { 'Higher Impact': `Creates a stronger impression by showcasing directly relevant qualifications.` },
      ],
      samples: [ 
        { 'Technical': TECHNICAL }, 
        { 'Stylish': STYLISH }, 
        { 'Minimalist': MINIMALIST }, 
      ],
    },
    {
      id: 5,
      definition: `A mini or short resume is a concise version of a traditional resume, typically one page in length. 
      It focuses on key achievements and qualifications, providing a quick overview of the candidate's suitability for a position.`,
      features: [
        { 'Concise Format': `One-page format that quickly highlights key information.` },
        { 'Key Achievements': `Focuses on the most impactful achievements and qualifications.` },
        { 'Time-Efficient': `Provides a quick overview for busy recruiters and hiring managers.` },
        { 'Suitable for Networking': `Ideal for networking events and situations where brevity is key.` },
      ],
      samples: [ 
        { 'Technical': TECHNICAL }, 
        { 'Stylish': STYLISH }, 
        { 'Minimalist': MINIMALIST }, 
      ],
    },
    {
      id: 6,
      definition: `A CV (Curriculum Vitae) is commonly used in academic and research fields. 
      It includes a comprehensive list of academic achievements, publications, conferences, and other scholarly activities.`,
      features: [
        { 'Academic Focus': `Designed for individuals in academic and research-oriented fields.` },
        { 'Comprehensive Academic History': `Includes detailed information on education, research, and publications.` },
        { 'Professional Memberships': `May include details about professional memberships and associations.` },
        { 'Research Contributions': `Showcases contributions to research, publications, and conferences.` },
      ],
      samples: [ 
        { 'Standard': STANDARD }, 
        { 'Modern': MODERN }, 
        { 'Classic': CLASSIC },
        { 'Contemporary': CONTEMPORARY },
        { 'Minimalist': MINIMALIST },
        { 'Stylish': STYLISH }, 
      ],
    },
    {
      id: 7,
      definition: `A federal resume is used for applying to federal government positions. 
      It includes detailed information about qualifications, work experiences, and achievements, following specific guidelines.`,
      features: [
        { 'Government Position Focus': `Tailored for applications to federal government positions.` },
        { 'Detailed Qualifications': `Includes in-depth information about qualifications and experiences.` },
        { 'Specific Guidelines': `Follows specific guidelines set by federal agencies for resume submissions.` },
        { 'Emphasis on Achievements': `Highlights achievements and contributions in a structured manner.` },
      ],
      samples: [ 
        { 'Stylish': STYLISH }, 
        { 'Modern': MODERN }, 
        { 'Classic': CLASSIC }, 
      ],
    },
    {
      id: 8,
      definition: `An international CV is similar to a CV but may include personal details, such as age, marital status, and a photograph. 
      It is more common in certain international job markets.`,
      features: [
        { 'International Job Markets': `Suited for job applications in specific international markets.` },
        { 'Personal Details Inclusion': `May include personal details like age, marital status, and a photograph.` },
        { 'Cultural Considerations': `Takes into account cultural norms and expectations in certain regions.` },
        { 'Comprehensive Information': `Provides a comprehensive overview of both professional and personal details.` },
      ],
      samples: [ 
        { 'Standard': STANDARD }, 
        { 'Professional': PROFESSIONAL }, 
        { 'Classic': CLASSIC }, 
      ],
    },
  ];
  
  export default CATEGORY_DETAILS;
  