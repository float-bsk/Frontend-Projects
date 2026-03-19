const themebtn = document.getElementById("theme-toggle");
themebtn.addEventListener("click",()=>{
    const currentTheme = document.documentElement.getAttribute("data-theme");
    const newTheme = currentTheme === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);

})

const savedTheme = localStorage.getItem("theme");
if(savedTheme){
    document.documentElement.setAttribute("data-theme", savedTheme);
}