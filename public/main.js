const loginForm = document.getElementById("loginForm");
if (loginForm) {
  loginForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (email === "yo@gmail.com" && password === "333") {
      localStorage.setItem("isLoggedIn", "true");
      window.location.href = "upload.html";
    } else {
      alert("Email atau password salah!");
    }
  });
}

if (document.getElementById("profile-picture")) {
  if (localStorage.getItem("isLoggedIn") !== "true") {
    alert("Kamu belum login. Kembali ke login page.");
    window.location.href = "index.html";
  }
}


const inputFile = document.getElementById("input-file");
const profilePicture = document.getElementById("profile-picture");

if (inputFile && profilePicture) {
  inputFile.onchange = function () {
    profilePicture.src = URL.createObjectURL(inputFile.files[0]);
  };
}

function logout() {
  localStorage.removeItem("isLoggedIn");
  window.location.href = "index.html";
}
