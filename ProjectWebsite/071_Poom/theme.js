function setCookie(colorTheme) { 
    let date = new Date();
    date.setTime(date.getTime() + (1 * 60 * 1000)); //เอาวันปัจจุนัน + เวลา
    let expires = "expires="+date.toUTCString(); //ทำให้เป็น toUTCString
    document.cookie = "theme=" + colorTheme + ";" + expires + "; path=/"; //set cookie
}

function getCookie(theme) {
    let name = theme + "=";
    // console.log(name);
    let decodedCookie = decodeURIComponent(document.cookie); //ถอดรหัสของ cookie
    // console.log(decodedCookie);
    let ca = decodedCookie.split(';'); //แยก cookie
    // console.log(ca);
    for(let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
    }
      if(c.indexOf(name) == 0) { //ถ้า index ของ name('theme') = 0
        // console.log(c.indexOf(name));
        // console.log(c.substring(name.length, c.length))
        return c.substring(name.length, c.length); //อันนี้ได้ชื่อ theme
    }
    }
    return "";
}

function checkCookie() {
    let theme = getCookie("theme"); //ไปเอา cookie ที่ชื่อ theme
    if (theme == "default") { //check ชื่อ theme
      body.className = ""; //เปลิ่ยนชื่อ class ใน html
    }
    if (theme == "dark") {
      body.className = "dark";
    }  
}

const body = document.querySelector("body"),
goDefault = function () {
  body.className = ""; //เปลิ่ยนชื่อ class ใน html
  setCookie("default"); //set cookie แล้วใส่ parameter เป็น theme ที่กำหนด
},
goDark = function () {
  body.className = "";
  body.classList.add("dark");
  // console.log(body.classList);
  setCookie("dark");
};

document.querySelector('.theme1').addEventListener('click', goDefault, false);
document.querySelector('.theme2').addEventListener('click', goDark, false);

checkCookie();


//https://www.sitepoint.com/community/t/how-to-properly-use-a-cookie-in-a-javascript-theme-switcher/347612