import './exams.css';

const options = ['כן', 'לעיתים קרובות', 'מדי פעם', 'לא'];

const formData = {
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
};

const evaluationMessage = document.getElementById('evaluationMessage');
const evaluationResult = document.getElementById('evaluationResult');

document.getElementById('examForm').addEventListener('submit', function (e) {
  e.preventDefault();
  evaluateDepressionExam();
});

function handleChange(event) {
  const { name, value } = event.target;
  formData[name] = value;
}

function countPositiveAnswers(answers) {
  return answers.filter((answer) => answer === 'כן' || answer === 'לעיתים קרובות').length;
}

function evaluateDepressionExam() {
  const answers = Object.values(formData);
  const positiveAnswersCount = countPositiveAnswers(answers);

  if (positiveAnswersCount >= 5) {
    evaluationMessage.textContent = 'נראה שאת/ה סובל מכמה מאפיינים של דיכאון כמו עצב, פסימיות, חוסר חשק או חוסר הנאה מדברים. כדאי לפנות לקבלת טיפול פסיכולוגי אצל פסיכולוג, על מנת לשפר את מצב הרוח או להביא ליציבותו.';
    evaluationResult.style.display = 'block';

  } else {
    const functionalSymptoms = answers.slice(5, 10);
    const functionalPositiveAnswersCount = countPositiveAnswers(functionalSymptoms);

    if (functionalPositiveAnswersCount > 0) {
      evaluationMessage.textContent = 'לא מדובר רק בתחושה פנימית של עצב או דכדוך, אלא גם בסממנים אובייקטיביים הפוגעים בתפקוד היומיומי שלך, מה שיכול להעיד על דיכאון. במקרה כזה מומלץ לפנות בדחיפות לקבלת טיפול נפשי אצל פסיכולוג או פסיכיאטר.';
    } else {
      evaluationMessage.textContent = 'לא נדרשות תשובות נוספות';
    }
  }
}

// Add event listeners for form inputs
document.querySelectorAll('select').forEach(select => {
  select.addEventListener('change', handleChange);
});

