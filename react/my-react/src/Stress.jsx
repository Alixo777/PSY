import React, { useState } from 'react';
import './exams.css';

const options = ['כן', 'לעיתים קרובות', 'מדי פעם', 'לא'];

const Stress = () => {
  const [formData, setFormData] = useState({
    difficultyFallingAsleep: '',
    feelingsOfAnger: '',
    difficultyStayingAsleep: '',
    intrusiveFeelingsRelatedToEvent: '',
    feelingThatEventWasUnreal: '',
    intrusiveImagesOfEvent: '',
    unwantedThoughtsAboutEvent: '',
    avoidanceOfThingsRemindingOfEvent: '',
    tryingNotToWorryAboutEvent: '',
    beingEasilyStartled: '',
    overwhelmingFeelingsAboutEvent: '',
    avoidingThinkingAboutEvent: '',
    tryingToEraseEventFromMind: '',
    difficultyConcentrating: '',
    emotionalNumbnessOrApathy: '',
    nightmaresAboutEvent: '',
    reExperiencingTheEvent: '',
    avoidingTalkingAboutEvent: '',
    awarenessOfUnresolvedEmotions: '',
    physicalSymptomsFromEventCues: ''
  });

  const [evaluationMessage, setEvaluationMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const countPositiveAnswers = (answers) => {
    return answers.filter((answer) => answer === 'כן' || answer === 'לעיתים קרובות').length;
  };

  const evaluateStressExam = () => {
    const answers = Object.values(formData);
    const positiveAnswersCount = countPositiveAnswers(answers);

    if (positiveAnswersCount >= 3) {
      setEvaluationMessage(
        'ייתכן שאת/ה מתקשה להתמודד עם מצבי לחץ. כדאי לפנות לסיוע מקצועי על מנת ללמוד איך לשפר את יכולת ההתמודדות שלך עם מצבים כאלו.'
      );
    } else {
      setEvaluationMessage('לא נדרשות תשובות נוספות');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    evaluateStressExam();
  };

  return (
    <div>
      <h1>Stress Exam</h1>
      <form onSubmit={handleSubmit}>
        {Object.keys(formData).map((key) => (
          <div key={key}>
            <label>
              {key}:
              <select name={key} value={formData[key]} onChange={handleChange}>
                <option value="">בחר תשובה</option>
                {options.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </label>
          </div>
        ))}
        <button type="submit">Submit</button>
      </form>

      {evaluationMessage && (
        <div>
          <h2>Evaluation Result</h2>
          <p>{evaluationMessage}</p>
        </div>
      )}
    </div>
  );
};

export default Stress;
