const toggleButton = document.getElementById("theme-toggle");


// Check whether the visitor previously selected a theme.
const savedTheme = localStorage.getItem("theme");


// If the visitor has already chosen a theme,
// restore that choice.
if (savedTheme === "dark") {

    document.documentElement.setAttribute(
        "data-theme",
        "dark"
    );

} else if (savedTheme === "light") {

    document.documentElement.setAttribute(
        "data-theme",
        "light"
    );

} else {

    // On the visitor's first visit,
    // use their operating system preference.
    const prefersDark =
        window.matchMedia(
            "(prefers-color-scheme: dark)"
        ).matches;


    document.documentElement.setAttribute(
        "data-theme",
        prefersDark ? "dark" : "light"
    );

}


// Toggle between themes.
toggleButton.addEventListener("click", () => {

    const currentTheme =
        document.documentElement.getAttribute(
            "data-theme"
        );


    const newTheme =
        currentTheme === "dark"
            ? "light"
            : "dark";


    document.documentElement.setAttribute(
        "data-theme",
        newTheme
    );


    localStorage.setItem(
        "theme",
        newTheme
    );

});
