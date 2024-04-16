﻿const MAX_CHARACTERS = 1000; // Sets the maximum amount of characters the User can enter.

// Document Object Model(DOM) elements.
const iconPrivacyElement = document.getElementById("icon-privacy");
const iconRegisteredUsersElement = document.getElementById("icon-registeredUsers");
const userStateElement = document.getElementById("userState").textContent;
const userTextAreaElement = document.getElementById("userTextArea");
const maxCharsElement = document.getElementById("maxChars");
const charCountElement = document.getElementById("charCount");
const wordCountElement = document.getElementById("wordCount");

document.addEventListener("DOMContentLoaded", function () {
    updateIconsPath();
    isCharInputSupported();
});

/**
 * Updates the Icons Path based on the Users login state.
 */
function updateIconsPath() {
    // Icons for the Navigation Links.
    const iconPathLocked = "M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2m3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2";
    const iconPathUnocked = "M11 1a2 2 0 0 0-2 2v4a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h5V3a3 3 0 0 1 6 0v4a.5.5 0 0 1-1 0V3a2 2 0 0 0-2-2";

    // If the user is logged in, set the icon to unlocked otherwise set it to locked.
    const iconPath = userStateElement === "Logout" ? iconPathUnocked : iconPathLocked;

    // Updates the Icons Path for "Privacy" and "RegisteredUsers" Navigation Links.
    iconPrivacyElement.setAttribute("d", iconPath);
    iconRegisteredUsersElement.setAttribute("d", iconPath);
}

/**
 * If the page supports the charInput() function, call the function.
 */
function isCharInputSupported() {
    const VALID_PAGES = ["/Create", "/Edit/", "/Details/"];

    let validPage = Array.from(VALID_PAGES).some(p => window.location.href.includes(p));

    // Only call if on the Create, Edit or Details pages.
    if (validPage) {
        maxCharsElement.textContent = `/${MAX_CHARACTERS}`;
        charInput(userTextAreaElement);
    }
}

/**
 * Counts how many characters and words there are in the <textarea> and displays it.
 */
function charInput(input) {
    const inputChar = input.value;
    const charCount = inputChar.length;

    // Split the input into words using space as the separator.
    const words = inputChar.trim().split(/\s+/);

    // If there are no words, set to 0 otherwise return the length.
    const wordCount = words[0] === "" ? 0 : words.length;

    // Display the results.
    charCountElement.textContent = `${charCount}`;
    wordCountElement.textContent = `${wordCount}`;
}
