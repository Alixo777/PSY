import React, { useState } from 'react';
import { Calendar } from 'lucide-react';
import './bootstrap.min.css';        
import './App.css';
import './exams.css';



const PatientExamBookingSystem = () => {
  // State management
  const [step, setStep] = useState(1);
  const [selectedExam, setSelectedExam] = useState(null);
  const [selectedTherapist, setSelectedTherapist] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);

  // Sample data (would come from API in real application)
  const exams = [
    { id: 1, name: 'Panic' , imageSrc: "images/a_girl_panicking.jpeg", alt: "Panic flag", link: "Panic.html"},
    { id: 2, name: 'Deppression' , imageSrc: "images/depression.jpeg",alt: "Depression flag",link: "depression.html"},
    { id: 3, name: 'Self Confidence' , imageSrc: "images/self_confidence.jpeg",alt: "Self Confidence flag",link: "SelfConfidence.html"},
    { id: 4, name: 'Social Panic' ,imageSrc: "images/panic_attack.jpeg",alt: "Social Panic flag",link: "SocialPanic.html" },
    { id: 5, name: 'Stress' , imageSrc: "images/stress_situation.jpeg",alt: "Stress flag",link: "Stress.html"},

  ];

  const therapists = [
    { id: 1, name: 'Dr. Sarah Johnson', specialty: 'General Medicine', rating: 4.9 },
    { id: 2, name: 'Dr. Michael Chen', specialty: 'Radiology', rating: 4.8 },
    { id: 3, name: 'Dr. Zigmond Freud', specialty: 'Psycology', rating: 5 },
  ];

  // Generate dates for the next 14 days
  const dates = Array.from({ length: 14 }, (_, i) => {
    const date = new Date();
    date.setDate(date.getDate() + i);
    return date;
  });

  // Sample available time slots
  const timeSlots = ['9:00 AM', '10:00 AM', '11:00 AM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM'];

  // Format date for display
  const formatDate = (date) => {
    return date.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' });
  };

  // Handle booking confirmation
  const handleConfirmBooking = () => {
    alert(`
      Exam booking confirmed!
      Exam: ${selectedExam.name}
      Therapist: ${selectedTherapist.name}
      Date: ${formatDate(selectedDate)}
      Time: ${selectedTime}
    `);

    // Reset form after booking confirmation
    setStep(1);
    setSelectedExam(null);
    setSelectedTherapist(null);
    setSelectedDate(null);
    setSelectedTime(null);
  };

  const handleNext = () => {
    setStep(step + 1);
  };

  const handleBack = () => {
    setStep(step - 1);
  };

  return (
    <div className="max-w-4xl mx-auto p-6 rounded-lg shadow-lg center row">
      {/* Progress indicator */}
      <div className="mb-8">
        <h1>welcome patients to home page</h1>
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center ${step >= 1 ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}>1</div>
            <span className="ml-2 text-sm font-medium">Choose Exam</span>
          </div>
          <div className="flex-1 h-px bg-gray-300 mx-4"></div>
          <div className="flex items-center">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center ${step >= 2 ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}>2</div>
            <span className="ml-2 text-sm font-medium">Select Therapist</span>
          </div>
          <div className="flex-1 h-px bg-gray-300 mx-4"></div>
          <div className="flex items-center">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center ${step >= 3 ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}>3</div>
            <span className="ml-2 text-sm font-medium">Schedule</span>
          </div>
          <div className="flex-1 h-px bg-gray-300 mx-4"></div>
          <div className="flex items-center">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center ${step >= 4 ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}>4</div>
            <span className="ml-2 text-sm font-medium">Confirm</span>
          </div>
        </div>
      </div>

      {/* Step 1: Exam Selection */}
      {step === 1 && (
        <div>
          <h2 className="text-2xl font-bold mb-4">Select an Exam</h2>
          <div className="grid grid-cols-3 gap-4">
  {exams.map((exam, index) => (
    <div
      key={exam.id}
      className={`p-4 border rounded-lg cursor-pointer hover:border-blue-500 transition ${selectedExam?.id === exam.id ? 'border-blue-500 bg-blue-50' : ''}`}
      onClick={() => setSelectedExam(exam)}
    >
      <h3 className="font-semibold text-lg">{exam.name}</h3>
      <h2>
        <img
          id="id_img"
          src={exam.imageSrc}
          height="180px"
          width="240px"
          alt={exam.alt}
        />
      </h2>
    </div>
  ))}
</div>

          <div className="mt-6 flex justify-end">
            <button
              className="px-4 py-2 bg-blue-600 text-white rounded-lg disabled:bg-gray-300"
              disabled={!selectedExam}
              onClick={handleNext}
            >
              Next
            </button>
          </div>
        </div>
      )}

      {/* Step 2: Therapist Selection */}
      {step === 2 && (
        <div>
          <h2 className="text-2xl font-bold mb-4">Select a Therapist</h2>
          <div className="space-y-4">
            {therapists.map((therapist) => (
              <div
                key={therapist.id}
                className={`p-4 border rounded-lg cursor-pointer hover:border-blue-500 transition ${selectedTherapist?.id === therapist.id ? 'border-blue-500 bg-blue-50' : ''}`}
                onClick={() => setSelectedTherapist(therapist)}
              >
                <h3 className="font-semibold text-lg">{therapist.name}</h3>
                <div className="mt-2 text-gray-600">Specialty: {therapist.specialty}</div>
                <div className="text-gray-600">Rating: {therapist.rating}/5.0</div>
              </div>
            ))}
          </div>
          <div className="mt-6 flex justify-between">
            <button className="px-4 py-2 border border-gray-300 rounded-lg" onClick={handleBack}>
              Back
            </button>
            <button
              className="px-4 py-2 bg-blue-600 text-white rounded-lg disabled:bg-gray-300"
              disabled={!selectedTherapist}
              onClick={handleNext}
            >
              Next
            </button>
          </div>
        </div>
      )}

      {/* Step 3: Calendar Selection */}
      {step === 3 && (
        <div>
          <h2 className="text-2xl font-bold mb-4">Select Date and Time</h2>

          {/* Calendar view */}
          <div className="mb-6">
            <div className="flex items-center mb-4">
              <Calendar className="w-5 h-5 mr-2 text-blue-600" />
              <h3 className="font-semibold">Available Dates</h3>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-2">
              {dates.map((date, index) => (
                <div
                  key={index}
                  className={`p-3 border rounded-md text-center cursor-pointer hover:border-blue-500 transition ${selectedDate && date.toDateString() === selectedDate.toDateString() ? 'border-blue-500 bg-blue-50' : ''}`}
                  onClick={() => setSelectedDate(date)}
                >
                  <div className="font-medium">{date.toLocaleDateString('en-US', { weekday: 'short' })}</div>
                  <div className="text-lg">{date.getDate()}</div>
                  <div className="text-xs">{date.toLocaleDateString('en-US', { month: 'short' })}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Time slots */}
          {selectedDate && (
            <div>
              <h3 className="font-semibold mb-3">Available Times for {formatDate(selectedDate)}</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
                {timeSlots.map((time, index) => (
                  <div
                    key={index}
                    className={`p-2 border rounded-md text-center cursor-pointer hover:border-blue-500 transition ${selectedTime === time ? 'border-blue-500 bg-blue-50' : ''}`}
                    onClick={() => setSelectedTime(time)}
                  >
                    {time}
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="mt-6 flex justify-between">
            <button className="px-4 py-2 border border-gray-300 rounded-lg" onClick={handleBack}>
              Back
            </button>
            <button
              className="px-4 py-2 bg-blue-600 text-white rounded-lg disabled:bg-gray-300"
              disabled={!selectedDate || !selectedTime}
              onClick={handleNext}
            >
              Next
            </button>
          </div>
        </div>
      )}

      {/* Step 4: Confirmation */}
      {step === 4 && (
        <div>
          <h2 className="text-2xl font-bold mb-4">Confirm Your Exam</h2>
          <div className="bg-gray-50 p-6 rounded-lg">
            <div className="mb-4">
              <h3 className="text-gray-500 text-sm">Exam</h3>
              <p className="font-medium">{selectedExam.name}</p>
            </div>

            <div className="mb-4">
              <h3 className="text-gray-500 text-sm">Therapist</h3>
              <p className="font-medium">{selectedTherapist.name}</p>
              <p className="text-sm text-gray-600">{selectedTherapist.specialty}</p>
            </div>

            <div className="mb-4">
              <h3 className="text-gray-500 text-sm">Date & Time</h3>
              <p className="font-medium">
                {formatDate(selectedDate)} at {selectedTime}
              </p>
            </div>
          </div>

          <div className="mt-6 flex justify-between">
            <button className="px-4 py-2 border border-gray-300 rounded-lg" onClick={handleBack}>
              Back
            </button>
            <button className="px-4 py-2 bg-green-600 text-white rounded-lg" onClick={handleConfirmBooking}>
              Confirm Exam
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PatientExamBookingSystem;
