//ไปยังนามบัตร
/*
const scrollDownBtn = document.getElementById('scroll-down-btn');

scrollDownBtn.addEventListener('click', function () {
    window.scrollBy({
        top: 2150,
        behavior: 'smooth'
    });
});*/


//ไปยังข้างบนสุด
const scrollUpBtn = document.getElementById('scrollUp');

window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollUpBtn.style.display = "block";
    } else {
        scrollUpBtn.style.display = "none";
    }
}

function topFunction() {
    const scrollStep = -window.scrollY / (60 / 1); // ms to reach top
    const scrollInterval = setInterval(() => {
        if (window.scrollY > 0) {
            window.scrollBy(0, scrollStep,
                {
                    behavior: 'smooth'
                });
        } else {
            clearInterval(scrollInterval);
        }
    }, 1); // ms per frame
}

function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}