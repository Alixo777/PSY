const formLogin = document.getElementById("formLogin");

formLogin.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("Form submitted");
    
    const email = document.querySelector('[type=email]').value;
    const password = document.querySelector('[type=password]').value;
    console.log("Email:", email, "Password:", password);
    
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
        email,
        password
    });

    const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow"
    };

    fetch("/api/patients/login", requestOptions)
        .then((response) => {
            // Check if the response is OK
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then((result) => {
            console.log("Login result:", result);  // Debugging step to check the full response
            // Ensure the token exists in the response
            if (result && result.token) {
                localStorage.setItem("token", result.token);  // Store token in localStorage
                // Optionally, store role if needed
                // localStorage.setItem("role", result.role);

                // Redirect to home.html after successful login
                window.open("home.html");
            } else {
                console.error("Token not found in response");
            }
        })
        .catch((error) => {
            console.error("Error during fetch:", error);
        });
});
