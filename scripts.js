const toggleButton = document.getElementById("theme-toggle");
const themeIcon = document.getElementById("theme-icon");


// Check whether the visitor previously selected a theme
const savedTheme = localStorage.getItem("theme");


if (savedTheme === "dark") {

    document.documentElement.setAttribute("data-theme", "dark");

    themeIcon.textContent = "☀";

} else {

    document.documentElement.setAttribute("data-theme", "light");

    themeIcon.textContent = "☾";

}


toggleButton.addEventListener("click", () => {

    const currentTheme =
        document.documentElement.getAttribute("data-theme");


    if (currentTheme === "dark") {

        document.documentElement.setAttribute(
            "data-theme",
            "light"
        );

        themeIcon.textContent = "☾";

        localStorage.setItem(
            "theme",
            "light"
        );

    } else {

        document.documentElement.setAttribute(
            "data-theme",
            "dark"
        );

        themeIcon.textContent = "☀";

        localStorage.setItem(
            "theme",
            "dark"
        );

    }

});
