const localtheme = localStorage.getItem("theme");
applyTheme(localtheme);

const toggleThemeBtn = document.getElementById("theme-toggle");

function applyTheme(theme){
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
}

function toggleTheme(){
    console.log("You clicked this");    
    const currentTheme = document.documentElement.getAttribute("data-theme");
    const newTheme = currentTheme === "dark" ? "light" : "dark";
    applyTheme(newTheme);
}


toggleThemeBtn.addEventListener("click", toggleTheme);
