import { cookie } from "./cookie.js";
//Function enableDarkMode() & disableDarkMode() ใช้ในการเรียกใช้ Dark Mode
//DarkMode.
const darkModeToggle = document.querySelector("#dark-mode-toggle");

let theme = {
  enableDarkMode: function () {
    // สำหรับ Dark Mode
    document.body.classList.toggle("darkmode"); //เรียกใช้ Style darkmode
    cookie.setCookie("darkMode", "enabled", 30);
  },

  disableDarkMode: function () {
    // สำหรับ Light Mode
    document.body.classList.toggle("darkmode"); //เรียกใช้ Style darkmode
    cookie.setCookie("darkMode", "disable", 30);
  }
};

//เมื่อเรา Click ปุ่มจะทำเปิด-ปิด DarkMode
darkModeToggle.addEventListener("click", toggleSwitch);
function toggleSwitch() {
  let darkMode = cookie.getCookie("darkMode");
  darkMode !== 'enabled' ? theme.enableDarkMode() : theme.disableDarkMode()
}


function loadTheme() {
  // สำหรับ Load พื้นหลังกลับมาเมื่อเข้าใช้หน้าเว็บ
  let darkMode = cookie.getCookie("darkMode"); // เรียก Cookie กลับมา
  if (darkMode === "enabled") {
    // ถ้า DarkMode เปิดอยู่ให้แสดง DarkMode
    theme.enableDarkMode();
  }
}
loadTheme();




// // ---------Code เก่า----------------
// function enableDarkMode() {
//   // สำหรับ Dark Mode
//   document.body.classList.add('darkmode');
//   getBody.setAttribute('style',
//   'background-color: rgba(0, 0, 0, 0.8)');
//   getHead.setAttribute('style',
//   'text-align: center; color : white;margin-top: -1em; transition : 1200ms ease-in-out');
//   getLabel.setAttribute('style','color : white; transition : 1200ms ease-in-out')
//   let cookieText = `${encodeURIComponent('darkMode')}=${encodeURIComponent('enabled')};expires=${new Date('January 1, 2022')}`
//   document.cookie = cookieText; // สร้าง Cookie สร้าง text เพื่อใช้กำหนด Cookie โดยให้ darkmode = enabled
// }

// // ---------Code เก่า----------------
// function disableDarkMode() {
//   // สำหรับ Light Mode
//   document.body.classList.remove('darkmode');
//   getBody.setAttribute('style',
//   'background-color: rgba(255, 255, 255, 0.8);transition : 1200ms ease-in-out')
//   getHead.setAttribute('style',
//   'text-align: center; color : black;margin-top: -1em; transition : 1200ms ease-in-out');
//   getLabel.setAttribute('style','color : black; transition : 1200ms ease-in-out')
//   let cookieText = `${encodeURIComponent('darkMode')}=${encodeURIComponent('disable')};expires=${new Date('January 1, 2022')}`
//   document.cookie = cookieText;  // สร้าง Cookie สร้าง text เพื่อใช้กำหนด Cookie โดยให้ darkmode = enabled
// }

// -------- Code เก่า -----------
// function toggle() {
//   let darkMode = getCookie("darkMode");
//   if (darkMode !== "enabled") {
//     enableDarkMode();
//   } else {
//     disableDarkMode();
//   }
// }
