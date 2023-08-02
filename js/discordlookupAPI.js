import { member, memberCount } from "./data.js";

const discordlookupAPI = "http://aniabt.ddns.net:3000/v1/user/";
const avatarSize = "?size=512";

for (let i = 0; i <= memberCount; i++) {
  const memberId = `u${i.toString().padStart(3, "0")}`;

  const discordlookupURL = `${discordlookupAPI}${
    member[i.toString()].discordUserID
  }`;

  fetch(discordlookupURL)
    .then((response) => response.json())
    .then((data) => {
      const profileElement = document.getElementById(`${memberId}_profile`);
      const dcNameElement = document.getElementById(`${memberId}_dc_name`);

      profileElement.style.backgroundImage = `url("${data.avatar.link}${avatarSize}")`;
      dcNameElement.value = data.username;
    })
    .catch((error) => console.error(error));
}
