import React, { useState } from 'react';
import './exams.css';

const options = ['כן', 'לא'];

const SocialPanic = () => {
  const [formData, setFormData] = useState({
    fearOfJudgmentInSocialSituations: '',
    fearOfHumiliationInSocialSituations: '',
    fearOfPhysicalSignsOfAnxietyBeingNoticed: '',
    awarenessThatFearIsExaggeratedOrUnrealistic: '',
    constantAnxietyInSocialSituations: '',
    avoidanceOfScarySocialSituations: '',
    disruptionToDailyLife: ''
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
    return answers.filter((answer) => answer === 'כן').length;
  };

  const evaluateSocialPanicExam = () => {
    const answers = Object.values(formData);
    const group1Answers = answers.slice(0, 4); // First 4 questions
    const group2Answers = answers.slice(4); // Last 3 questions

    const group1PositiveCount = countPositiveAnswers(group1Answers);
    const group2PositiveCount = countPositiveAnswers(group2Answers);

    if (group1PositiveCount >= 2) {
      if (group2PositiveCount >= 1) {
        setEvaluationMessage(
          'החרדה בסיטואציות חברתיות מפריעה לאורח חייך התקין. כדאי לפנות לטיפול מקצועי כדי להתמודד עם החרדה החברתית.'
        );
      } else {
        setEvaluationMessage(
          'נראה שאתה סובל מחוסר ביטחון וחרדה בסיטואציות חברתיות. כדאי לפנות לקבלת טיפול על מנת לשפר את ההתמודדות עם חרדה זו.'
        );
      }
    } else {
      setEvaluationMessage(
        'לא נמצאו תסמינים חמורים של חרדה חברתית. אם אתה מרגיש שיש מקום לשיפור, ניתן לשקול פנייה לעזרה מקצועית.'
      );
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    evaluateSocialPanicExam();
  };

  return (
    <div>
      <h1>Social Panic Exam</h1>
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

export default SocialPanic;
