let thrivingList = [];
let strugglingList = [];

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
  console.log(selected);

  selected.classList.remove("btn");
  selected.classList.add("bg-black", "text-white");
}

mainContainer.addEventListener("click", function (event) {
  if (event.target.classList.contains("thriving-btn")) {
    const parentNode = event.target.parentNode.parentNode;

    const plantName = parentNode.querySelector(".plantName").innerText;
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

    renderThriving();
  }
});

//
function renderThriving() {
  filteradSection.innerHTML = "";

  for (let thrive of thrivingList) {
    let div = document.createElement("div");
    div.className = `flex justify-between p-8 border rounded-md mb-8`;
    div.innerHTML = `
        // <!-- main par 1 -->
          <div class="card">
            <div class="space-y-5">
              <div>
                <h2 class="plantName text-4xl font-semibold">Plant name 1</h2>
                <h2 class="latinName text-xl font-medium">Latin name</h2>
              </div>
              <div class="flex gap-5">
                <p class="light btn btn-soft">Bright Indicat</p>
                <p class="water btn btn-soft">Weekly</p>
              </div>
              <h2 class="statu btn btn-soft btn-outline text-xl">
                NO Applicable
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
          // <!-- main par 2 -->
          <div>
            <button class="delet-btn btn btn-soft btn-secondary btn-lg">
              Deleat
            </button>
          </div>
      `;
  }
}
