let thrivingList = [];
let strugglingList = [];
let CurrentStatu = "all";

// count section
let total = document.getElementById("total");
let thriveCount = document.getElementById("thriveCount");
let strugglingCount = document.getElementById("strugglingCount");

// all btn
const allFilterBtn = document.getElementById("all-filter-btn");
const thrivingFilterBtn = document.getElementById("thriving-filter-btn");
const sturgglingFilterBtn = document.getElementById("sturggling-filter-btn");

// section container
const allCardsSection = document.getElementById("allCards");
const mainContainer = document.querySelector("main");
const filteradSection = document.getElementById("filterad-Section");

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
  CurrentStatu = id;

  selected.classList.remove("btn");
  selected.classList.add("bg-black", "text-white");

  if (id == "thriving-filter-btn") {
    allCardsSection.classList.add("hidden");
    filteradSection.classList.remove("hidden");
    renderThriving();
  } else if (id == "all-filter-btn") {
    allCardsSection.classList.remove("hidden");
    filteradSection.classList.add("hidden");
  } else if (id == "sturggling-filter-btn") {
    allCardsSection.classList.add("hidden");
    filteradSection.classList.remove("hidden");
    renderStruggling();
  }
}

mainContainer.addEventListener("click", function (event) {
  if (event.target.classList.contains("thriving-btn")) {
    const parentNode = event.target.parentNode.parentNode;

    const plantName = parentNode.querySelector(".plantName").innerText;
    const light = parentNode.querySelector(".light").innerText;
    const water = parentNode.querySelector(".water").innerText;
    const statu = parentNode.querySelector(".statu").innerText;
    const notes = parentNode.querySelector(".notes").innerText;

    parentNode.querySelector(".statu").innerText = "thrive";

    const cardInfo = {
      plantName,
      light,
      water,
      statu: "thrive",
      notes,
    };
    console.log(cardInfo);

    const plantExist = thrivingList.find(
      (item) => item.plantName == cardInfo.plantName,
    );

    if (!plantExist) {
      thrivingList.push(cardInfo);
    }

    strugglingList = strugglingList.filter(
      (item) => item.plantName != cardInfo.plantName,
    );

    if (CurrentStatu == "struggling-filter-btn") {
      renderStruggling();
    }

    calculateCount();
  } else if (event.target.classList.contains("struggling-btn")) {
    const parentNode = event.target.parentNode.parentNode;

    const plantName = parentNode.querySelector(".plantName").innerText;
    const light = parentNode.querySelector(".light").innerText;
    const water = parentNode.querySelector(".water").innerText;
    const statu = parentNode.querySelector(".statu").innerText;
    const notes = parentNode.querySelector(".notes").innerText;

    parentNode.querySelector(".statu").innerText = "struggling";

    const cardInfo = {
      plantName,
      light,
      water,
      statu: "struggling",
      notes,
    };
    console.log(cardInfo);

    const plantExist = strugglingList.find(
      (item) => item.plantName == cardInfo.plantName,
    );

    if (!plantExist) {
      strugglingList.push(cardInfo);
    }

    thrivingList = thrivingList.filter(
      (item) => item.plantName != cardInfo.plantName,
    );

    if (CurrentStatu == "thriving-filter-btn") {
      renderThriving();
    }

    calculateCount();
  }
});

// thrivingList
function renderThriving() {
  filteradSection.innerHTML = "";

  for (let thrive of thrivingList) {
    let div = document.createElement("div");
    div.className = `flex justify-between p-8 border rounded-md mb-8`;
    div.innerHTML = `
          <div class="card">
            <div class="space-y-5">
              <div>
                <h2 class="plantName text-4xl font-semibold">${thrive.plantName}</h2>
                <h2 class="latinName text-xl font-medium">Latin name</h2>
              </div>
              <div class="flex gap-5">
                <p class="light btn btn-soft">Bright Indicat</p>
                <p class="water btn btn-soft">Weekly</p>
              </div>
              <h2 class="statu btn btn-soft btn-outline text-xl">
                ${thrive.statu}
              </h2>
              <p class="notes">New leaf unfurling by the east window</p>
              <div class="flex gap-5">
                <button class="thriving-btn btn btn-outline btn-secondary">
                  Thriving
                </button>
                <button class="struggling-btn btn btn-outline btn-success">
                  Struggling
                </button>
              </div>
            </div>
          </div>

          <div>
            <button class="delet-btn btn btn-soft btn-secondary btn-lg">
              Deleat
            </button>
          </div>
      `;
    filteradSection.appendChild(div);
  }
}

// strugglingList
function renderStruggling() {
  filteradSection.innerHTML = "";

  for (let sturggling of strugglingList) {
    let div = document.createElement("div");
    div.className = `flex justify-between p-8 border rounded-md mb-8`;
    div.innerHTML = `
          <div class="card">
            <div class="space-y-5">
              <div>
                <h2 class="plantName text-4xl font-semibold">${sturggling.plantName}</h2>
                <h2 class="latinName text-xl font-medium">Latin name</h2>
              </div>
              <div class="flex gap-5">
                <p class="light btn btn-soft">Bright Indicat</p>
                <p class="water btn btn-soft">Weekly</p>
              </div>
              <h2 class="statu btn btn-soft btn-outline text-xl">
                ${sturggling.statu}
              </h2>
              <p class="notes">New leaf unfurling by the east window</p>
              <div class="flex gap-5">
                <button class="thriving-btn btn btn-outline btn-secondary">
                  Thriving
                </button>
                <button class="struggling-btn btn btn-outline btn-success">
                  Struggling
                </button>
              </div>
            </div>
          </div>

          <div>
            <button class="delet-btn btn btn-soft btn-secondary btn-lg">
              Deleat
            </button>
          </div>
      `;
    filteradSection.appendChild(div);
  }
}
