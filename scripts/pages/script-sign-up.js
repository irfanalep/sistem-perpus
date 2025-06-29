const form = document.getElementById("sign-up-form");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const username = form.username.value.trim();
  const email = form.email.value.trim();
  const password = form.password.value.trim();
  const newPassword = document.getElementById("password").value.trim();

  const strongPasswordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;

  if (!strongPasswordRegex.test(newPassword)) {
    alert(
      "Password harus minimal 8 karakter dan mengandung huruf besar, huruf kecil, angka, dan simbol."
    );
    return;
  }

  if (username && email && password) {
    // Simpan data dummy (simulasi pendaftaran)
    localStorage.setItem("userData", JSON.stringify({ username, email }));

    alert("Pendaftaran berhasil! Selamat datang, " + username);
    window.location.href = "home.html"; // Redirect ke halaman utama
  } else {
    alert("Harap isi semua data dengan benar.");
  }
});
