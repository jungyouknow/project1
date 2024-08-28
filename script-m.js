//모바일 헤더 열고 닫기

const nav = document.getElementById("nav");

function openMenu() {
    nav.style.width = '289px';
}

function closeMenu() {
    nav.style.width = '0px';
}

function validateEmail() {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let emailInput = document.getElementById("email").value;

    if (emailInput === "") {
        alert("이메일을 입력하세요.");
    } else if (!emailPattern.test(emailInput)) {
        alert("유효한 이메일 형식을 입력하세요.");
    } else {
        modalOn();
    }
}

