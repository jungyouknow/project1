//모바일 헤더 열고 닫기

const nav = document.getElementById("nav");

function openMenu() {
    nav.style.width = '289px';
}

function closeMenu() {
    nav.style.width = '0px';
}


//이메일 구독
document.getElementById('subscribe-btn').addEventListener('click', function() {
    const emailInput = document.getElementById('email');
    const email = emailInput.value;

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
        alert("이메일을 입력해 주세요.");
    } else if (!emailPattern.test(email)) {
        alert("유효한 이메일 형식이 아닙니다.");
    } else {
        document.getElementById('modal').style.display = 'flex';
    }
});

document.getElementById('close-btn').addEventListener('click', function() {
    alert("폼이 제출되었습니다!");
    document.getElementById('modal').style.display = 'none';
    document.getElementById('email').value = '';
});

const scrollTopBtn = document.getElementById('scroll-top-btn');
