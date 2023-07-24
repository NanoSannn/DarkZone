document.getElementById("interact-btn").onclick = function () { interactCommand() };
//document.getElementById("interact-box").onkeyup = function () { interactSerch() };
document.getElementById("interact-box").addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        event.preventDefault();
        document.getElementById("interact-btn").click();
    }
});

document.getElementById("interact-box").placeholder = "ค้นหาสมาชิก";

function interactCommand() {
    Swal.fire({
        html: `<b class="copyText-dialog-font" style="font-size: 2rem;"><span style="font-size: 1.5rem;">อย่าซน</span><br>ไอ้สันขวาน<br><span style="font-size: 1.5rem;">ไม่ต้องเล่น</span></b>`,
        showConfirmButton: true,
        confirmButtonText: '<b class="copyText-dialog-font" style="font-size: 1rem;">ขอโทษ</b>',
        confirmButtonColor: 'red',
        background: '#333',
        allowOutsideClick: false,
    });

    document.getElementById("interact-box").style = 'display: none;'
    document.getElementById("interact-btn").style = 'display: none;'
}

const searchBar = document.getElementById("interact-box");
searchBar.addEventListener("keyup", function () {
    const searchValue = searchBar.value.toLowerCase().trim();
    const sections = document.getElementsByTagName("section");
    const name = document.getElementsByTagName("h4");
    for (let i = 0; i < name.length; i++) {
        const innerHTML = name[i].innerHTML.toLowerCase();
        if (innerHTML.includes(searchValue)) {
            sections[i].style.display = "";
        } else {
            sections[i].style.display = "none";
        }
    }
});