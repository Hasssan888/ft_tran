"use strict";
// Toggle Password Visibility
const passwordInput = document.getElementById("password");
const toggleBtn = document.getElementById("togglePassword");
toggleBtn?.addEventListener("click", () => {
    const isText = passwordInput.type === "text";
    passwordInput.type = isText ? "password" : "text";
    toggleBtn.textContent = isText ? "👁" : "🙈";
});
