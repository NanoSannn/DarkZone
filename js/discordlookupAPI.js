import { member, memberCount } from "./data.js";

const discordlookupAPI = "https://discordlookup.mesavirep.xyz/v1/user/";
const avatarSize = "?size=512";

const memberDiscordUserIDs = Array.from(
  { length: memberCount },
  (_, i) => `u${(i + 1).toString().padStart(3, "0")}`
);

memberDiscordUserIDs.forEach((memberDiscordUserID) => {
  const discordlookupURL = `${discordlookupAPI}${member[memberDiscordUserID].discordUserID}`;

  fetch(discordlookupURL)
    .then((response) => response.json())
    .then((data) => {
      const profileElement = document.getElementById(
        `${memberDiscordUserID}_profile`
      );
      const dcNameElement = document.getElementById(
        `${memberDiscordUserID}_dc_name`
      );

      profileElement.style.backgroundImage = `url("${data.avatar.link}${avatarSize}")`;
      dcNameElement.value =
        data.tag.slice(-2) === "#0" ? data.tag.slice(0, -2) : data.tag;
    })
    .catch((error) => console.error(error));
});
