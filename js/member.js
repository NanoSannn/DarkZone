import { text, member, memberCount } from "./data.js";

for (let i = 0; i <= memberCount; i++) {
  const memberId = `u${i.toString().padStart(3, "0")}`;
  const currentMember = member[i.toString()];

  const updateElement = (elementId, content) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.innerHTML = content;
    }
  };

  updateElement(`${memberId}_name`, currentMember.name);
  updateElement(`${memberId}_contact`, text.contact);
  updateElement(`${memberId}_info`, text.info);
  updateElement(`${memberId}_info_1`, currentMember.info1);
  updateElement(`${memberId}_info_2`, currentMember.info2);
  updateElement(`${memberId}_info_3`, currentMember.info3);
  updateElement(`${memberId}_detail`, currentMember.detail);

  const updateLink = (elementId, href, style) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.href = href;
      element.style = style;
    }
  };

  updateLink(`${memberId}_fb_link`, currentMember.fblink);
  updateLink(`${memberId}_ig_link`, currentMember.iglink);
  updateLink(`${memberId}_xt_link`, currentMember.xtlink, currentMember.xticon);
}
