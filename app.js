// =========================
// Dark / Light Theme Toggle
// =========================

const themeBtn = document.getElementById("theme-btn");

themeBtn.addEventListener("click", () => {

    document.body.classList.toggle("dark-mode");


    if (document.body.classList.contains("dark-mode")) {

        themeBtn.textContent = "☀️";

    } else {

        themeBtn.textContent = "🌙";

    }

});




// =========================
// Smooth Scrolling
// =========================

document.querySelectorAll("a[href^='#']").forEach(link => {


    link.addEventListener("click", function (e) {

        e.preventDefault();


        const section = document.querySelector(
            this.getAttribute("href")
        );


        section.scrollIntoView({

            behavior: "smooth"

        });


    });


});





// =========================
// GitHub API Integration
// =========================

// Change this to your GitHub username

const githubUsername = "anu-git-lab";


const repoContainer = document.getElementById(
    "repositories"
);



fetch(`https://api.github.com/users/${githubUsername}/repos`)
    .then(response => response.json())

    .then(data => {


        repoContainer.innerHTML = "";


        data.slice(0, 6).forEach(repo => {


            const repoCard = document.createElement("div");


            repoCard.classList.add("repo");


            repoCard.innerHTML = `

            <h3>${repo.name}</h3>

            <p>
            ${repo.description || "No description available"}
            </p>

            <a href="${repo.html_url}" 
            target="_blank">
            View Repository
            </a>

        `;


            repoContainer.appendChild(repoCard);



        });



    })

    .catch(error => {


        repoContainer.innerHTML =
            "Unable to load GitHub repositories";


        console.log(error);


    });







// =========================
// Project Modal
// =========================


const projectButtons =
    document.querySelectorAll(".project-btn");



projectButtons.forEach(button => {


    button.addEventListener("click", () => {


        alert(
            "Project details will be added here."
        );


    });


});







// =========================
// Scroll Animation
// =========================


const sections =
    document.querySelectorAll("section");



window.addEventListener("scroll", () => {


    sections.forEach(section => {


        const position =
            section.getBoundingClientRect().top;


        const screenHeight =
            window.innerHeight;



        if (position < screenHeight - 100) {

            section.style.opacity = "1";
            section.style.transform =
                "translateY(0)";

        }


    });


});




// Initial animation style

sections.forEach(section => {


    section.style.opacity = "0";

    section.style.transform =
        "translateY(50px)";


    section.style.transition =
        "0.6s ease";


});