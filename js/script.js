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
  console.log("Click", id);
}
