const theme = document.getElementById("theme");
const toggle = document.getElementById('toggle')

toggle.addEventListener('click', (event) => {
  document.body.classList.toggle("dark");

  if (theme === "dark") {
    window.localStorage.setItem("theme", "light");
  } else window.localStorage.setItem("theme", "dark");

})