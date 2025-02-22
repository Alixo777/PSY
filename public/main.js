
const formLogin = document.getElementById("formLogin")

formLogin.addEventListener("submit", (e) => {
    e.preventDefault()
    console.log("form Login");
    const email = document.querySelector('[type=email]').value
    const password = document.querySelector('[type=password]').value
    console.log(email, password)
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
        .then((response) => response.json())
        .then((result) => {
            localStorage.setItem("token", result.token)
            // localStorage.setItem("role",rool hide in yhe token needs to verify the token )            // localStorage.setItem("role", result.token._role)

            // if(!token)
              window.open("home.html"); 
                })
        .catch((error) => console.error(error));
    
})


