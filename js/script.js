let thrivingList = [];
let strugglingList = [];

// count section
let total = document.getElementById("total");
let thriveCount = document.getElementById("thriveCount");
let strugglingCount = document.getElementById("strugglingCount");

// section container
const allCardsSection = document.getElementById("allCards");
const mainContainer = document.querySelector("main");

// all btn
const allFilterBtn = document.getElementById("all-filter-btn");
const thrivingFilterBtn = document.getElementById("thriving-filter-btn");
const sturgglingFilterBtn = document.getElementById("sturggling-filter-btn");

function calculateCount() {
  total.innerText = allCardsSection.children.length;
  thriveCount.innerText = thrivingList.length;
  strugglingCount.innerText = strugglingList.length;
}

calculateCount();

function toggleStyle(id) {
  // remove color and text-color
  allFilterBtn.classList.remove("bg-black", "text-white");
  thrivingFilterBtn.classList.remove("bg-black", "text-white");
  sturgglingFilterBtn.classList.remove("bg-black", "text-white");

  // add btn and text
  allFilterBtn.classList.add("btn", "text-2xl");
  thrivingFilterBtn.classList.add("btn", "text-2xl");
  sturgglingFilterBtn.classList.add("btn", "text-2xl");

  const selected = document.getElementById(id);
  console.log(selected);

  selected.classList.remove("btn");
  selected.classList.add("bg-black", "text-white");
}

mainContainer.addEventListener("click", function (event) {
  // console.log(event.target.parentNode.parentNode);
  const parentNode = event.target.parentNode.parentNode;
  const plantName = parentNode.querySelector(".plantName").innerText;
  // const latinName = parentNode.querySelector(".latinName").innerText;

  const light = parentNode.querySelector(".light").innerText;
  const water = parentNode.querySelector(".water").innerText;
  const statu = parentNode.querySelector(".statu").innerText;
  const notes = parentNode.querySelector(".notes").innerText;

  const cardInfo = {
    plantName,
    light,
    water,
    statu,
    notes,
  };
  console.log(cardInfo);

  const plantExist = thrivingList.find(
    (item) => item.plantName == cardInfo.plantName,
  );

  if (!plantExist) {
    thrivingList.push(cardInfo);
  }
  console.log(thrivingList);
});
