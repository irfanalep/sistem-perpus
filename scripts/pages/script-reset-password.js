const form = document.getElementById("form-reset");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const password = form.password.value.trim();
  const newPassword = document.getElementById("new-password").value.trim();
  const confirmPassword = document
    .getElementById("confirm-password")
    .value.trim();

  if (newPassword === "" || confirmPassword === "") {
    alert("Semua kolom wajib diisi!");
    return;
  }

  if (newPassword !== confirmPassword) {
    alert("Password dan konfirmasi password tidak cocok!");
    return;
  }

  const strongPasswordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;

  if (!strongPasswordRegex.test(newPassword)) {
    alert(
      "Password harus minimal 8 karakter dan mengandung huruf besar, huruf kecil, angka, dan simbol."
    );
    return;
  }

  if (password) {
    // Simpan data dummy (simulasi pendaftaran)
    localStorage.setItem("userData", JSON.stringify({ password }));

    // alert("Pendaftaran berhasil! Selamat datang, " + username);
    window.location.href = "index.html";
  } else {
    alert("Harap isi semua data dengan benar.");
  }
});
