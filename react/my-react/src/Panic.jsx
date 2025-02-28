import React, { useState } from 'react';
import './exams.css';

const options = ['כן', 'לא'];

const Panic = () => {
  const [formData, setFormData] = useState({
    dfeekutLev: '',
    haza: '',
    kotzerNeshima: '',
    chnek: '',
    keevBaLeiv: '',
    bikhila: '',
    chulshaBaRaglayim: '',
    sachraza: '',
    tachushaLoMetsuyanit: '',
    tachushaShalAvodShilKontrol: '',
    pachadMiMavet: '',
    akutzut: '',
    tzmaromot: '',
    pachadMiMekomot: '',
    loYacholLeNasea: '',
    pachadMiAtaF: '',
    shinuiBehitnagut: '',
  });

  const [evaluationMessage, setEvaluationMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const countPositiveAnswers = (answers) => {
    return answers.filter((answer) => answer === 'כן').length;
  };

  const evaluatePanicExam = () => {
    const answers = Object.values(formData);
    const positiveAnswersCount = countPositiveAnswers(answers);

    if (positiveAnswersCount > 4) {
      const additionalQuestions = [formData.pachadMiAtaF, formData.shinuiBehitnagut];
      const additionalPositiveAnswersCount = countPositiveAnswers(additionalQuestions);

      if (additionalPositiveAnswersCount > 0) {
        setEvaluationMessage(
          'ניכר שאתה סובל מהתקפי חרדה, המתבטאים בחוויה רגשית של חרדה ופחד, בסימפטומים פיזיולוגיים (גופניים) ובסממנים התנהגותיים (בד"כ הימנעות). ניתן לטפל בחרדה בכל המישורים הללו - הרגשי, הפיזיולוגי וההתנהגותי. אל תמשיך לסבול או להימנע, פנה לטיפול.'
        );
      } else {
        setEvaluationMessage('לא נדרשות תשובות נוספות');
      }
    } else {
      setEvaluationMessage('לא נדרשות תשובות נוספות');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    evaluatePanicExam();
  };

  return (
    <div>
      <h1>Panic Attack Assessment</h1>
      <form onSubmit={handleSubmit}>
        {Object.keys(formData).map((key) => (
          <div key={key}>
            <label>
              {key.replace(/([A-Z])/g, ' $1').toUpperCase()}:
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

export default Panic;
