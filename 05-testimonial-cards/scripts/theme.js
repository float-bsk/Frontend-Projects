const storedTheme = localStorage.getItem("theme");
applyTheme(storedTheme);

function applyTheme(theme){
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
}

function toggleTheme(){
    const currenttheme = document.documentElement.getAttribute("data-theme");
    const newtheme = currenttheme === 'dark' ? 'light' : 'dark';
    applyTheme(newtheme);
}

const theme_toggle_button = document.getElementById("toggle-theme");
theme_toggle_button.addEventListener("click", toggleTheme);

