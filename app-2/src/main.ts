// Toggle Password Visibility
const passwordInput = document.getElementById("password") as HTMLInputElement;
const toggleBtn = document.getElementById("togglePassword") as HTMLButtonElement;

toggleBtn?.addEventListener("click", () => {
    const isText = passwordInput.type === "text";
    passwordInput.type = isText ? "password" : "text";
    toggleBtn.textContent = isText ? "👁" : "🙈";
})