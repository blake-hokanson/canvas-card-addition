console.log("injection.js loaded");

let notAdded = true;

const info = {
  abrv: "CSCI 4041",
  name: "Algorithms and Data Structures",
  color: "rgb(120, 1, 25)",
  url: "https://z.umn.edu/4041",
  pos: 2,
}

//adds card (can be looped later)
const CreateButtonObject = (wrapper) => {
  const cardTemplate = document.getElementsByClassName("ic-DashboardCard")[0];
  const copy = cardTemplate.cloneNode(true);

  copy.ariaLabel = "TEST";
  copy.draggable = false;

  copy.childNodes[0].childNodes[0].innerHTML = `Course card color region for ${info.abrv} ${info.name}`;
  copy.childNodes[0].childNodes[1].style.backgroundColor = info.color; 
  copy.childNodes[0].childNodes[1].addEventListener('click', () => window.location.href = info.url);
  copy.childNodes[0].childNodes[2].href = info.url;
  copy.childNodes[0].childNodes[2].childNodes[0].childNodes[0].firstChild.innerHTML = `${info.abrv} ${info.name}`;
  copy.childNodes[0].childNodes[2].childNodes[0].childNodes[1].innerHTML = `${info.abrv}`;

  //copy.childNodes[0].childNodes[3].textContent = "";//removes three dots
  copy.childNodes[1].textContent = "";
  
  wrapper.insertBefore(copy, wrapper.childNodes[info.pos]);
  console.log("DONE")
  
  notAdded = false;
};


//after class is found, wait and loop until it can be loaded
const AwaitButton = (n) => {
  const wrapper = document.getElementsByClassName("ic-DashboardCard__box__container");
  if (wrapper && wrapper[0] && notAdded) {
    CreateButtonObject(wrapper[0]);
    console.log("Button Found");
  }
  else {
    if (n > 0) setTimeout(() => AwaitButton(n - 1), 25);
    else if (notAdded) console.log("Not Loaded!!!");
  }
};

//checks for mutations to add button
const observer = new MutationObserver((mutations) => {
  if (document.querySelector(".ic-DashboardCard")) {
    AwaitButton(200);
  }
});
observer.observe(document.body, {
  childList: true,
  subtree: true,
});
