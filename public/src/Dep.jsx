import React, { useState } from 'react';
import './exams.css';

const options = ['כן', 'לעיתים קרובות', 'מדי פעם', 'לא'];

const Dep = () => {
  const [formData, setFormData] = useState({
    internalSadness: '',
    internalTension: '',
    lossOfInterest: '',
    pessimisticThoughts: '',
    suicidalThoughts: '',
    concentrationDifficulties: '',
    fatigue: '',
    othersNoticeSadness: '',
    insomnia: '',
    lackOfAppetite: ''
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

  const evaluateDepressionExam = () => {
    const answers = Object.values(formData);
    const positiveAnswersCount = countPositiveAnswers(answers);

    if (positiveAnswersCount >= 5) {
      setEvaluationMessage(
        'נראה שאת/ה סובל מכמה מאפיינים של דיכאון כמו עצב, פסימיות, חוסר חשק או חוסר הנאה מדברים. כדאי לפנות לקבלת טיפול פסיכולוגי אצל פסיכולוג, על מנת לשפר את מצב הרוח או להביא ליציבותו.'
      );
    } else {
      const functionalSymptoms = answers.slice(5, 10);
      const functionalPositiveAnswersCount = countPositiveAnswers(functionalSymptoms);

      if (functionalPositiveAnswersCount > 0) {
        setEvaluationMessage(
          'לא מדובר רק בתחושה פנימית של עצב או דכדוך, אלא גם בסממנים אובייקטיביים הפוגעים בתפקוד היומיומי שלך, מה שיכול להעיד על דיכאון. במקרה כזה מומלץ לפנות בדחיפות לקבלת טיפול נפשי אצל פסיכולוג או פסיכיאטר.'
        );
      } else {
        setEvaluationMessage('לא נדרשות תשובות נוספות');
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    evaluateDepressionExam();
  };

  return (
    <div>
      <h1>Depression Exam</h1>
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

export default Dep;
