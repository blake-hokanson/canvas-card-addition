console.log("injection.js loaded");

const card1 = {
  abrv: "CSCI 4041",
  name: "Algorithms and Data Structures",
  color: "rgb(120, 1, 25)",
  url: "https://z.umn.edu/4041",
  semester: "2023 Fall (08/08/2023-01/06/2024)",
  pos: 2,
  announcements: "https://z.umn.edu/4041",
  assignments: "https://www-users.cselabs.umn.edu/classes/Fall-2023/csci4041-010/index.php?page=Assignment_Calendar",
  discussions: "https://discord.com/channels/1149087365269291109/1149087366028464134",
  files: null,
}

const cards = [card1];

const WaitCreateButtonObject = () => {
  setTimeout(CreateButtonObject, 100)
}

//adds 1 card (can be looped later)
const CreateButtonObject = () => {
  const wrapper = document.getElementsByClassName("ic-DashboardCard__box__container")[0];

  if (wrapper == null) {
    console.log("wrapper not found");
    WaitCreateButtonObject();
    return;
  }

  cards.forEach( (info) => {
    const copy = cardFormat(info);
    copy.childNodes[1].childNodes[1].addEventListener('click', () => window.location.href = info.url);

    wrapper.insertBefore(copy, wrapper.childNodes[info.pos]);

    console.log("cards loaded");
  })
};


window.addEventListener("load", WaitCreateButtonObject);
