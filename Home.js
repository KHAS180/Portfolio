document.addEventListener("DOMContentLoaded", () => {
  let but_Home = document.querySelector("#but_Home");
    but_Home.addEventListener("click", () =>{
      window.location.href = 'Home.html';
    });

  let but_About = document.querySelector("#but_About");
    but_About.addEventListener("click", () =>{
      window.location.href = 'AboutMe.html';
    });

  let but_Contact = document.querySelector("#but_Contact");
    but_Contact.addEventListener("click", () =>{
      window.location.href = 'Contact.html';
    });
});