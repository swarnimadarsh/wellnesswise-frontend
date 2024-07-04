import React, { useState } from 'react';
import './Style.css'; // Import your CSS file
import { Link } from 'react-router-dom';

function Quiz() {
  const [quizResult, setQuizResult] = useState('');
  const [showQuiz, setShowQuiz] = useState(false);

  const handleSubmitQuiz = () => {
    const answer1 = document.querySelector('input[name="question1"]:checked');
    const answer2 = document.querySelector('input[name="question2"]:checked');
    const answer3 = document.querySelector('input[name="question3"]:checked');
    const answer4 = document.querySelector('input[name="question4"]:checked');

    if (!answer1 || !answer2 || !answer3 || !answer4) {
      alert('Please answer all questions.');
      return;
    }

    let correctCount = 0;

    if (answer1.value === 'b') correctCount++;
    if (answer2.value === 'b') correctCount++;
    if (answer3.value === 'a') correctCount++;
    if (answer4.value === 'c') correctCount++;

    setQuizResult(` You got ${correctCount} out of 4 questions correct. `);
  };

  return (
    <div style={{fontFamily:'cursive'}}>
      <header class="header">
        <h1>Physical Education Interactive Page</h1>
      </header>
      <nav class="nav1">
        <Link to="/quiz" onClick={() => setShowQuiz(true)}>Take Quiz</Link>
        <Link to="" onClick={() => setShowQuiz(false)}>View Exercises</Link>
      </nav>
      {showQuiz && (
        <section id="quiz-section">
          <h2>Physical Fitness Quiz</h2>
          <div className="quiz-question">
            <p>1. What is the recommended daily amount of physical activity for adults?</p>
            <label><input type="radio" name="question1" value="a" className="quiz-option" /></label> 30 minutes<br />
            <label><input type="radio" name="question1" value="b" className="quiz-option" /></label> 60 minutes<br />
            <label><input type="radio" name="question1" value="c" className="quiz-option" /></label> 60 minutes
          </div>

          <div className="quiz-question">
            <p>2. Which of the following exercises helps improve cardiovascular fitness?</p>
            <label><input type="radio" name="question2" value="a" className="quiz-option" /></label> push ups<br />
            <label><input type="radio" name="question2" value="b" className="quiz-option" /></label> Jumping jacks<br />
            <label><input type="radio" name="question2" value="c" className="quiz-option" /></label> Sit-ups
          </div>

          <div className="quiz-question">
            <p>3. What is the purpose of warming up before exercise?</p>
            <label><input type="radio" name="question3" value="a" className="quiz-option" /></label> To prevent injury and improve performance<br />
            <label><input type="radio" name="question3" value="b" className="quiz-option" /></label> To cool down the body <br />
            <label><input type="radio" name="question3" value="c" className="quiz-option" /></label> To reduce Flexibility
          </div>

          <div className="quiz-question">
            <p>4. Which of the following is NOT a component of physical fitness?</p>
            <label><input type="radio" name="question4" value="a" className="quiz-option" /></label> Flexibility <br />
            <label><input type="radio" name="question4" value="b" className="quiz-option" /></label> Strength <br />
            <label><input type="radio" name="question4" value="c" className="quiz-option" /></label> Rest
          </div>

          <button onClick={handleSubmitQuiz}>Submit</button>
          <div id="quiz-result">{quizResult}</div>
        </section>
      )}
      {!showQuiz && (
        <section id="exercise-section">
          <h2>Exercise Demonstrations</h2>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/Q1y8c_MZYvE?si=UVtgDzGWbifzkXqD" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </section>
      )}
    </div>
  );
}

export default Quiz;