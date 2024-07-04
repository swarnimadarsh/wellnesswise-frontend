import React, { useState } from 'react';
import './Syllabus.css';

function Syllabus() {
  const [selectedTopic, setSelectedTopic] = useState(null);

  const curriculumData = {
    anatomy: {
      title: 'Anatomy and Physiology',
      description: 'Objective: Anatomy and physiology studies the structure and function of the human body.',
      module1:'Module 1:The skeletal systems',
      module2:'MOdule 2:The muscular systems',
      module3:'Module 3:Cardiovascular systems',
      module4:'Module 4:Respiratory systems',
      
    },
    nutrition: {
      title: 'Nutrition and Diet',
      description: 'Objective: Nutrition and diet focus on understanding the role of food in maintaining health and preventing disease.',
      module1:'Module 1:Macronutrients',
      module2:'Module 2:Micronutrients',
      module3:'Module 3:Dietary guidelines',
      module4:'Module 4:Healhty eating habits',
    },
    exercise: {
      title: 'Exercise and Fitness',
      description: 'Objective:Exercise and fitness explore various forms of physical activity and their benefits for overall health and well-being.',
      module1:'Module 1:Aerobic excercise',
      module2:'Module 2:Strength training',
      module3:'Module 3:Flexibility',
      module4:'Module 4:Excercise programming',
    },
    mentalHealth: {
      title: 'Mental Health and Stress Management',
      description: 'Objective:Mental health and stress management address the psychological aspects of health and wellness.',
      module1:'Module 1:Stressors',
      module2:'Module 2:Coping strategies',
      module3:'Module 3:Mindfullness techniques',
      module4:'Module 4:Mental health resources',
    },
    sports: {
      title: 'Sports and Recreation',
      description: 'Objective: Sports and recreation encompass a wide range of physical activities for leisure and competition.',
      module1:'Module 1:Different sports',
      module2:'Module 2:Recreational pursuits',
      module3:'Module 3:Impact on mental health',
      module4:'Module 4:Impact on physical health',
    },
  };

  const handleTopicChange = (event) => {
    setSelectedTopic(event.target.value);
  };

  return (
    <div className="App">
      <header className="Appheader">
        <h1>Physical Health Education Curriculum</h1>
      </header>
      <main>
        <section style={{backgroundColor:'#aebcbb'}}>
        <h2>Welcome to the curriculum page</h2>
        <div className="marquee-container">
          <div className="marquee">

          <p style={{backgroundColor:'#757a79',color:'#aeccc6'}}>The portions for the academic year 2024-2025 has been updated .The notes have been shared in the student portal.All the students are requested to check out the same.</p>
          </div>
          </div>
        </section>
        <section style={{backgroundColor:'#aebcbb'}} >
          <h2>Select a Topic</h2>
          <select value={selectedTopic} onChange={handleTopicChange}>
            <option value="">Select Topic</option>
            {Object.keys(curriculumData).map((topic) => (
              <option key={topic} value={topic}>{curriculumData[topic].title}</option>
            ))}
          </select>
        </section>
        {selectedTopic && (
          <section style={{backgroundColor:'#aebcbb'}}>
            <h2>{curriculumData[selectedTopic].title}</h2>
            <p>{curriculumData[selectedTopic].description}</p>
            <div>
                <ul>
                    <li>{curriculumData[selectedTopic].module1}</li>
                    <li>{curriculumData[selectedTopic].module2}</li>
                    <li>{curriculumData[selectedTopic].module3}</li>
                    <li>{curriculumData[selectedTopic].module4}</li>
                </ul>
            </div>
          </section>
        )}
       
      </main>
    </div>
  );
}

export default Syllabus;