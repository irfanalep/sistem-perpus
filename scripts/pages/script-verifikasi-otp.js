const form = document.getElementById("form-otp");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const otp = form.otp.value.trim();

  if (otp) {
    // Simpan data dummy (simulasi pendaftaran)
    localStorage.setItem("userData", JSON.stringify({ otp }));

    // alert("Pendaftaran berhasil! Selamat datang, " + username);
    window.location.href = "reset-password.html";
  } else {
    alert("Harap isi semua data dengan benar.");
  }
});
const otpInput = document.getElementById("otp");
otpInput.addEventListener("input", function () {
  this.value = this.value.replace(/\D/g, "").slice(0, 6);
});
