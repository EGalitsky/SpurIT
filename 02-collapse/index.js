const button = document.querySelector("button");
const text = document.getElementsByClassName("collapsible__content")[0];
const hideTextButton = document.getElementsByClassName(
  "collapsible__action--visible"
)[0];
const showTextButton = document.getElementsByClassName(
  "collapsible__action--hidden"
)[0];

hideTextButton.style.display = "none";
text.style.display = "none";

const animation = document.querySelector("div").animate(
  {
    color: ["rgba(0, 0, 0, 0.000001)", "rgba(0, 0, 0, 1)"],
  },
  { duration: 1500, fill: "both", easing: "ease-out" }
);

const textShowHide = () => {
  if (showTextButton.style.display == "none") {
    hideTextButton.style.display = "none";
    showTextButton.style.display = "";
  } else {
    hideTextButton.style.display = "";
    text.style.display = "";
    showTextButton.style.display = "none";
  }

  animation.onfinish = (evt) => {
    if (evt.currentTime === 0) text.style.display = "none";
  };
};

animation.pause();

button.addEventListener("click", () => {
  console.log(animation.playState);
  if (animation.playState === "paused") {
    animation.play();
  } else {
    animation.reverse();
  }
  textShowHide();
});
