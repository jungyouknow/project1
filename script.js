//헤더 스크롤 시 고정

let header = document.querySelector(".header");
let headerHeight = header.offsetHeight;

window.onscroll = function() {
    let windowTop = window.scrollY;
    if (windowTop >= headerHeight) {
        header.classList.add("drop");
    }

    else {
        header.classList.remove("drop");
    }
};

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

// 스크롤 버튼
window.addEventListener('scroll', function () {

    if (window.scrollY > 0) {
        scrollTopBtn.style.display = "block";
    } else {
        scrollTopBtn.style.display = "none";
    }
});

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}
