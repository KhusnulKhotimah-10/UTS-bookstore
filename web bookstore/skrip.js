document.addEventListener("DOMContentLoaded", () => {
  const loginBtn = document.getElementById("btnLogin");
  if (loginBtn) {
    loginBtn.addEventListener("click", () => {
      const emailInput = document.getElementById("loginEmail");
      const passInput = document.getElementById("loginPass");

      if (!emailInput || !passInput) {
        alert("Elemen input tidak ditemukan!");
        return;
      }

      const email = emailInput.value.trim().toLowerCase();
      const password = passInput.value.trim();

      if (!email || !password) {
        alert("Isi email dan password terlebih dahulu!");
        return;
      }

      // Ambil data dari window.users
      const allUsers = window.users || [];
      console.log("User data ditemukan:", allUsers);

      const user = allUsers.find(
        (u) => u.email.toLowerCase() === email && u.password === password
      );

      if (user) {
        alert("Login berhasil! Selamat datang, " + user.name);
        localStorage.setItem("userLogged", JSON.stringify(user));
        if (user.role === "admin") {
          window.location.href = "admin.html";
        } else {
          window.location.href = "dashboard.html";
        }
      } else {
        alert("Email atau password salah!");
      }
    });
  }
});
