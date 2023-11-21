console.log("injection.js loaded");

const card1 = {
  abrv: "CSCI 4041",
  name: "Algorithms and Data Structures",
  color: "rgb(120, 1, 25)",
  url: "https://z.umn.edu/4041",
  semester: "2023 Fall (08/08/2023-01/06/2024)",
  pos: 2, // 0 index position
  announcements: "https://z.umn.edu/4041", //links for icon
  assignments: "https://www-users.cselabs.umn.edu/classes/Fall-2023/csci4041-010/index.php?page=Assignment_Calendar",
  discussions: "https://discord.com/channels/1149087365269291109/1149087366028464134",
  files: null, //use null for no icon
}

//more than 1 card can be added
const cards = [card1];

const WaitCreateButtonObject = () => {
  setTimeout(CreateButtonObject, 120)
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

  //Remove Image
  const imgCards = document.getElementsByClassName("ic-DashboardCard__header_image")
  for (let i = 0; i < imgCards.length; i++){
    card = imgCards[i]
    card.style = "" //remove image
    card.firstChild.style = "background-color: rgb(255, 210, 2);"
  }
};


window.addEventListener("load", WaitCreateButtonObject);


//Other Code

const waitToRun = () => {
  const start = new Date("09/05/2023");
const end = new Date("12/13/2023");
const percent = (new Date() - start) / (end - start) * 100;

console.log(`This semester is ${percent.toFixed(4)}% done!`)
}
setTimeout(waitToRun, 500);