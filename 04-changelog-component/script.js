const currentTheme = localStorage.getItem("theme") || "light";
applyTheme(currentTheme);
const themeToggleBtn = document.getElementById("theme-toggle");
themeToggleBtn.addEventListener("click", toggleTheme); 

function toggleTheme(){
    const newTheme = document.documentElement.getAttribute("data-theme") === "dark" ? "light" : "dark";
    applyTheme(newTheme);
}

function applyTheme(theme){    
    document.documentElement.setAttribute("data-theme",theme);
    localStorage.setItem("theme", theme);
}