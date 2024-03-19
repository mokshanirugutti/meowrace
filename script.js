const body = document.querySelector("body"),
toogle = document.querySelector(".toogle");
const navRoutes = document.querySelector(".nav-routes");
toogle.addEventListener("click", () =>

 {
    toogle.classList.toggle("active");
    body.classList.toggle("dark");
    navRoutes.classList.toggle("dark");

    if(!body.classList.contains("dark")){
        return localStorage.setItem("mode","light");
    }
    localStorage.setItem("mode","dark");
}
);