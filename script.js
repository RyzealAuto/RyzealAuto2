// ซ่อนหน้า Intro หลังจาก 8 วินาที
setTimeout(() => {
  document.getElementById("intro-screen").style.display = "none";
  document.getElementById("main-content").style.display = "block";
}, 8000);

// ปุ่ม Skip Intro
function skipIntro() {
  document.getElementById("intro-screen").style.display = "none";
  document.getElementById("main-content").style.display = "block";
}

// ฟังก์ชันเปลี่ยนหน้า
function showPage(pageId) {
  const pages = document.querySelectorAll('.page');
  pages.forEach(page => page.classList.add('hidden'));

  document.getElementById(pageId).classList.remove('hidden');
}

// เริ่มต้นที่หน้า Home
showPage('home');
