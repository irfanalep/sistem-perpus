const form = document.getElementById("login-form");
form.addEventListener("submit", function (e) {
  e.preventDefault();
  const email = form.email.value.trim();
  const password = form.password.value.trim();

  // Dummy login check (ganti dengan validasi nyata jika ada backend)
  if (email === "admin@example.com" && password === "admin123") {
    alert("Login admin berhasil!");
    window.location.href = "admin.html";
  } else if (email === "user@example.com" && password === "123456") {
    alert("Login berhasil!");
    window.location.href = "home.html";
  } else {
    alert("Email atau password salah!");
  }
});
document.getElementById("signup-btn").addEventListener("click", function () {
  window.location.href = "sign-up.html";
});
