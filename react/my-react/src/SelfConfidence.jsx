import React, { useState } from 'react';
import './exams.css';

const SelfConfidence = () => {
  const [formData, setFormData] = useState({
    difficultyInDecisionMaking: false,
    consultOthersForDecisions: false,
    doThingsForOthers: false,
    worriedAboutOthersOpinions: false,
    adjustBehaviorToPleaseOthers: false,
    feelWorthlessWhenFailing: false,
    attributeSuccessToExternalFactors: false,
    successFeelsTakenForGranted: false,
    mistakesAreIntolerable: false,
    avoidTasksDueToFearOfFailure: false,
    fearOfRejectionInInterviews: false,
    impostorSyndromeWithPositiveFeedback: false,
  });

  const [evaluationMessage, setEvaluationMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.checked,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      setEvaluationMessage('לא נדרשות תשובות נוספות');
    } catch (err) {
      setError('There was an error submitting the form. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="form-container">
      <h2>Self Confidence Exam</h2>
      <form onSubmit={handleSubmit}>
        {Object.keys(formData).map((key) => (
          <div key={key} className="form-group">
            <label>
              {key.replace(/([A-Z])/g, ' $1').toUpperCase()}: 
              <input
                type="checkbox"
                name={key}
                checked={formData[key]}
                onChange={handleChange}
              />
            </label>
          </div>
        ))}
        <button type="submit" disabled={loading}>
          {loading ? 'Submitting...' : 'Submit'}
        </button>
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

export default SelfConfidence;
