import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './exams.css';

function ExamPage() {
  // Array of exam data
  const exams = [
    {
      id: 1,
      title: "Panic",
      imageSrc: "images/a_girl_panicking.jpeg",
      alt: "Panic flag",
      link: "Panic.html"
    },
    {
      id: 2,
      title: "Depression",
      imageSrc: "images/depression.jpeg",
      alt: "Depression flag",
      link: "depression.html"
    },
    {
      id: 3,
      title: "Self Confidence",
      imageSrc: "images/self_confidence.jpeg",
      alt: "Self Confidence flag",
      link: "SelfConfidence.html"
    },
    {
      id: 4,
      title: "Social Panic",
      imageSrc: "images/panic_attack.jpeg",
      alt: "Social Panic flag",
      link: "SocialPanic.html"
    },
    {
      id: 5,
      title: "Stress",
      imageSrc: "images/stress_situation.jpeg",
      alt: "Stress flag",
      link: "Stress.html"
    }
  ];

  return (
    <main className="container-fluid bg-secondary py-4">
      <div className="container">
        <div id="id_row3" className="center row">
          {exams.map((exam) => (
            <div key={exam.id} className="col-md-4 p-2">
              <article className="border border-light text-white p-2 shadow overflow-hidden">
                <h2>{exam.title}</h2>
                <a href={exam.link} rel="noopener noreferrer">
                  <h2>
                    <img
                      id="id_img"
                      src={exam.imageSrc}
                      height="180px"
                      width="240px"
                      alt={exam.alt}
                    />
                  </h2>
                </a>
              </article>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

export default ExamPage;