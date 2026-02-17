//global theme variable
let currentTheme = "dark";


/**
 * Saves theme to local storage.
 * Will be called every time theme changes
 * @param {string} theme - "light" or "dark"
 */
function setTheme(theme)
{
    let images = document.getElementsByTagName("img");
    if (theme == "light")
    {
        for (const image of images)
        {
            if (image.hasAttribute("data-themed"))
            {
                image.setAttribute("src", image.getAttribute("data-src-light"));
            }
        }
    }
    else
    {
        for (const image of images)
        {
            if (image.hasAttribute("data-themed"))
            {    
                image.setAttribute("src", image.getAttribute("data-src-dark"));
            }
        }
    }
    //update global variable
    currentTheme = theme
    //add to local storage
    localStorage.setItem("theme", theme);
}

/**
 * 
 * @returns {string} "light" or "dark" - current theme on site
 */
function getTheme()
{
    theme = localStorage.getItem("theme");
    if (theme == null) //fall back to current theme if none is saved
    {
        newTheme = getUserTheme();
        setTheme(newTheme);
        return newTheme;
    }
    else
    {
        return theme;
    }
}

/**
 * Gets and returns current os theme
 * @return {string}  "light" or "dark"
 */
function getUserTheme()
{
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)'))
        {
            return "dark";
        }
        else
        {
            return "light";
        }
}
function onThemeButton()
{
    if (currentTheme == "light")
    {
        setTheme("dark");
    }
    else
    {
        setTheme("light")
    }
}
function setup()
{
    theme = getTheme();
    const themeButton = document.getElementById("themeButton");
    themeButton.addEventListener("click", onThemeButton);
}
//add event listeners
document.addEventListener("DOMContentLoaded", setup);


/*
potential event listener to update with OS theme change
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', setTheme(getUserTheme()));
*/