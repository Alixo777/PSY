import React, { useState } from 'react';
import './App.css';

function App() {
  // const [count, setCount] = useState(0)

  // return (
  //   <>
  //     <div>
  //       <a href="https://vite.dev" target="_blank">
  //         <img src={viteLogo} className="logo" alt="Vite logo" />
  //       </a>
  //       <a href="https://react.dev" target="_blank">
  //         <img src={reactLogo} className="logo react" alt="React logo" />
  //       </a>
  //     </div>
  //     <h1>Vite + React</h1>
  //     <div className="card">
  //       <button onClick={() => setCount((count) => count + 1)}>
  //         count is {count}
  //       </button>
  //       <p>
  //         Edit <code>src/App.jsx</code> and save to test HMR
  //       </p>
  //     </div>
  //     <p className="read-the-docs">
  //       Click on the Vite and React logos to learn more
  //     </p>

  
  return (
    
    <React.Fragment>
      <header>
        <h1>Welcome to Our PSY Website</h1>
        <p>Your Path to Better Mental Health!</p>
    </header>
    <section className="intro">
        <h2>Introduction to PSY</h2>
        <h1>Your Path to Better Mental Health</h1>
        
        <p>In today's fast-paced world, taking care of your mental health is just as important as your physical well-being. At <strong>PSY</strong>, we understand that reaching out for help can be daunting, and finding the right therapist is an essential step on your journey to healing and growth.</p>
        
        <p><strong>PSY</strong> is an app designed to connect patients with licensed psychology therapists in a safe, confidential, and easy-to-navigate platform. Whether you're struggling with anxiety, depression, stress, or just need someone to talk to, our team of compassionate professionals is here to guide you.</p>
        
        <h2>How It Works:</h2>
        <ul>
            <li><strong>Find the Right Therapist:</strong> Browse through profiles of licensed therapists with various specialties. Filter by your needs, preferred therapy type, or availability to find the perfect match.</li>
            <li><strong>Confidential Sessions:</strong> Book live video sessions or schedule text-based consultations with your therapist, all while ensuring your privacy and comfort.</li>
            <li><strong>Flexible and Convenient:</strong> Get the support you need, when you need it—whether you're at home, at work, or on the go.</li>
            <li><strong>Expert Guidance:</strong> Our therapists are highly trained professionals who use evidence-based practices to provide the best possible care.</li>
        </ul>

        <h2>Your Well-Being Matters</h2>
        <p>We believe that mental health is a vital part of overall wellness. With <strong>PSY</strong>, taking the first step toward improving your mental health has never been easier or more accessible. Let us help you find the right therapist who can support you through life’s challenges, big or small.</p>
        
        <p>Together, we can build a better, healthier, and happier you.</p>
    </section>

    <section className="auth-links">
        <a href="login.html" class="btn">Login</a>
        <a href="signin.html" class="btn">Register</a>
    </section>

    <footer>
        <p>© 2025 Shalex Website. All rights reserved.</p>
    </footer>

    </React.Fragment>

  )
}

export default App
