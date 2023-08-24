import { memberCount, UidXtLink } from "https://cdn.jsdelivr.net/gh/NanoSannn/DarkZone/js/data.js";

let generatedHtml = "";
for (let i = 1; i <= memberCount; i++) {
  const sectionId = `u${i.toString().padStart(3, "0")}`;

  let externalLink = "";
  if (UidXtLink.includes(sectionId)) {
    externalLink = `<a class="member-social-icon member-external-icon align-right" id="${sectionId}_xt_link" target="_blank"></a>`;
  }

  const sectionHtml = `
    <section class="section-${i}" id="${sectionId}">
      <div class="item-sheet">
        <div class="item-content">
          <div class="member-profile-block">
            <div class="member-profile-inner">
              <div class="member-profile" id="${sectionId}_profile">
              </div>
              <div class="member-profile-detail">
                <p class="member-profile-detail-text" id="${sectionId}_detail"></p>
              </div>
            </div>
          </div>
          <h4 class="align-center member-name" id="${sectionId}_name"></h4>
          <p class="align-left member-info"><span id="${sectionId}_info"></span>
            <span class="member-info-text" id="${sectionId}_info_1"></span>
          </p>
          <p class=" align-left member-contact"><span id="${sectionId}_contact"></span>
            <a class="member-social-icon member-facebook-icon" id="${sectionId}_fb_link" target="_blank"></a>
            <a class="member-social-icon member-instragram-icon" id="${sectionId}_ig_link" target="_blank"></a>
            <button class="member-social-icon member-discord-icon" data-clipboard-action="copy"
              data-clipboard-target="#${sectionId}_dc_name" id="${sectionId}_dc_copy">
              <input class="member-discord-name" id="${sectionId}_dc_name" readonly>
            </button>
            ${externalLink}
          </p>
        </div>
      </div>
    </section>
  `;
  generatedHtml += sectionHtml;
}

document.getElementById("generator").innerHTML += generatedHtml;
