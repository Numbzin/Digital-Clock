const $ = (selector) => document.querySelector(selector);

const hour = $(".hour");
const dot = $(".dot");
const min = $(".min");
const week = $(".week");
let showDot = true;

function update() {
  const now = new Date();

  showDot = !showDot;
  dot.classList.toggle("invisible", !showDot);

  hour.textContent = String(now.getHours()).padStart(2, "0");
  min.textContent = String(now.getMinutes()).padStart(2, "0");

  Array.from(week.children).forEach((day, index) => {
    day.classList.toggle("active", index === now.getDay());
  });
}

setInterval(update, 500);

update();
