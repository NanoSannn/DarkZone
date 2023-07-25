document.getElementById("interact-btn").onclick = function () {
  interactCommand();
};
function interactCommand() {
  Swal.fire({
    html: `<b class="copyText-dialog-font" style="font-size: 2rem;"><span style="font-size: 1.5rem;">อย่าซน</span><br>ไอ้สันขวาน<br><span style="font-size: 1.5rem;">ไม่ต้องเล่น</span></b>`,
    showConfirmButton: true,
    confirmButtonText:
      '<b class="copyText-dialog-font" style="font-size: 1rem;">ขอโทษ</b>',
    confirmButtonColor: "red",
    background: "#333",
    allowOutsideClick: false,
  });

  document.getElementById("interact-box").style = "display: none;";
  document.getElementById("interact-btn").style = "display: none;";
}

const interactBox = document.getElementById("interact-box");

interactBox.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    interactCommand();
  }
});

interactBox.placeholder = "ค้นหาชื่อสมาชิก";

interactBox.addEventListener("input", function () {
  const searchValue = interactBox.value.toLowerCase().trim();
  const sections = document.getElementsByTagName("section");
  const sectionNames = document.getElementsByTagName("h4");

  for (let i = 0; i < sections.length; i++) {
    const sectionName = sectionNames[i].textContent.toLowerCase();
    const section = sections[i];

    if (sectionName.includes(searchValue)) {
      section.style.display = "";
    } else {
      section.style.display = "none";
    }
  }
});

document.addEventListener("DOMContentLoaded", function () {
  function startSearch() {
    var hashValue = window.location.hash.substring(1);
    interactBox.value = decodeURIComponent(hashValue);
    interactBox.dispatchEvent(new Event("input"));
  }

  startSearch();
  window.addEventListener("hashchange", startSearch);
});
