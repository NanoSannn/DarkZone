import { memberCount } from "./data.js";

new ClipboardJS('.member-discord-icon');

var ids = [];

for (var i = 0; i <= memberCount; i++) {
    var id = "u" + ("000" + i).slice(-3) + "_dc_copy";
    ids.push(id);
}

for (var i = 0; i < ids.length; i++) {
    document.getElementById(ids[i]).addEventListener("click", function () {
        var id = this.id.replace("_copy", "_name");
        Swal.fire({
            title: '<b class="copyText-dialog-font">คัดลอกชื่อดิสคอร์ดแล้ว</b>',
            html: `<b class="copyText-dialog-font">${document.getElementById(id).value}</b>`,
            showConfirmButton: true,
            confirmButtonText: '<b class="copyText-dialog-font" style="font-size: 0.8rem;">ยืนยัน</b>',
            background: '#333',
            //timer: 3000,
            timerProgressBar: true,
            allowOutsideClick: false,
        });
    });
}
