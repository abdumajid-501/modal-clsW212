const showBtn = document.getElementById("show-btn");
const modalEl = document.getElementById("modal");
const closeBtn = document.getElementById("close-btn");
const overlayEl = document.getElementById("overlay");


const addHidden = () => {
  modalEl.classList.add("hidden");
  overlayEl.classList.add("hidden");
};

showBtn.addEventListener("click", () => {
  modalEl.classList.remove("hidden");
  overlayEl.classList.remove("hidden");
});

closeBtn.addEventListener("click", () => {
  addHidden();
});

overlayEl.addEventListener("click", () => {
  addHidden();
});

document.addEventListener("keydown", (e) => {
  if (e.key == "Escape") {
    addHidden();
  }
});

console,console.log(Salom);
