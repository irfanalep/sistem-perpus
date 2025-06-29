const form = document.getElementById("form-forgot");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const username = form.username.value.trim();

  if (username) {
    // Simpan data dummy (simulasi pendaftaran)
    localStorage.setItem("userData", JSON.stringify({ username }));

    // alert("Pendaftaran berhasil! Selamat datang, " + username);
    window.location.href = "verifikasi-otp.html";
  } else {
    alert("Harap isi semua data dengan benar.");
  }
});
