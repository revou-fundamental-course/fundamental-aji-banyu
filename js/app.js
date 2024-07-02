// fungsi toggle navbar
const navbar = document.querySelector(".text-nav");
// Ketika humberger menu di klik
document.querySelector("#hamburger-menu").onclick = () => {
  navbar.classList.toggle("active");
};
// klik diluar sidebar untuk menghilangkan hamburger menu
const hamburger = document.querySelector("#hamburger-menu");
document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbar.contains(e.target)) {
    navbar.classList.remove("active");
  }
});

//        fungsi untuk validasi form
function formValue() {
  const nama = document.getElementById("nama").value;
  const pesan = document.getElementById("pesan").value;
  const tglLahir = document.getElementById("tgl").value;
  const kelamin = document.querySelector(".kelamin").value;

  document.getElementById("sender-nama").innerText = nama;
  document.getElementById("sender-tglLahir").innerText = tglLahir;
  document.getElementById("sender-gender").innerText = kelamin;
  document.getElementById("sender-pesan").innerText = pesan;

  console.log(nama);
}
