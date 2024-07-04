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
  let nama = document.getElementById("nama").value;
  let tglLahir = document.getElementById("tgl").value;
  let kelamin = document.querySelector(".kelamin:checked").value;
  let pesan = document.getElementById("pesan").value;

  document.getElementById("sender-nama").innerText = nama;
  document.getElementById("sender-tglLahir").innerText = tglLahir;
  document.getElementById("sender-pesan").innerText = pesan;
  document.getElementById("sender-gender").innerText = kelamin;

  //   invalid input
  if (nama == "" || tglLahir == "" || kelamin == null || pesan == "") {
    alert("Input tidak boleh kosong");
  }
  if (document.querySelector("input").value == null) {
    alert("input tidak boleh kosong");
  }

  // menambahkan waktu

  arrbulan = [
    "Januari",
    "Februari",
    "Maret",
    "April",
    "Mei",
    "Juni",
    "Juli",
    "Agustus",
    "September",
    "Oktober",
    "November",
    "Desember",
  ];
  date = new Date();
  millisecond = date.getMilliseconds();
  detik = date.getSeconds();
  menit = date.getMinutes();
  jam = date.getHours();
  hari = date.getDay();
  tanggal = date.getDate();
  bulan = date.getMonth();
  tahun = date.getFullYear();

  document.querySelector("#sender-time").innerText =
    tanggal +
    "-" +
    arrbulan[bulan] +
    "-" +
    tahun +
    "  " +
    jam +
    " : " +
    menit +
    " : " +
    detik +
    "." +
    millisecond;
}

// fungsi slideshow
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs((slideIndex += n));
}
//slideshow untuk bikin slider di hero section homepage
function showDivs(n) {
  var i;
  var imgList = document.getElementsByClassName("img-slideshow");
  if (n > imgList.length) slideIndex = 1;
  // slide index value 3, karena imglist.length = slideIndex
  else if (n < 1) slideIndex = imgList.length;

  for (i = 0; i < imgList.length; i++) {
    imgList[i].style.display = "none";
  }

  imgList[slideIndex - 1].style.display = "block";
}

setInterval(() => {
  plusDivs(1);
}, 3000);
