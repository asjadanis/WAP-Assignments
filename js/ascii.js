"use struct";

const NORMAL_ANIMATION_SPEED = 250;
const TURBO_ANIMATION_SPEED = 50;

let interval = null;
let intervalSpeed = NORMAL_ANIMATION_SPEED;
let currentFrames = [];

function handleChangeAnimation() {
  const animation = document.getElementById("animation").value;
  const textArea = document.getElementById("myTextArea");
  console.log(ANIMATIONS);
  textArea.value = ANIMATIONS[animation];
}

function handleSizeChange() {
  const size = document.getElementById("sizeDropdown").value;
  switch (size) {
    case "t":
      document.getElementById("myTextArea").style.fontSize = "7pt";
      break;
    case "s":
      document.getElementById("myTextArea").style.fontSize = "10pt";
      break;
    case "m":
      document.getElementById("myTextArea").style.fontSize = "12pt";
      break;
    case "l":
      document.getElementById("myTextArea").style.fontSize = "16pt";
      break;
    case "xl":
      document.getElementById("myTextArea").style.fontSize = "24pt";
      break;
    case "xxl":
      document.getElementById("myTextArea").style.fontSize = "32pt";
      break;
    default:
      return;
  }
}

function onStart() {
  const textArea = document.getElementById("myTextArea");
  document.getElementById("stopBtn").disabled = false;
  const animation = textArea.value;
  currentFrames = animation.split("=====\n");
  console.log(frames);
  if (interval) {
    clearInterval(interval);
  }
  document.getElementById("startBtn").disabled = true;
  document.getElementById("animation").disabled = true;
  interval = setInterval(dsiplayFrames, intervalSpeed);
}

function onStop() {
  document.getElementById("startBtn").disabled = false;
  document.getElementById("stopBtn").disabled = true;
  document.getElementById("animation").disabled = false;
  clearInterval(interval);
}

function onTurboClick() {
  const turbo = document.getElementById("turboCheckBox").checked;
  if (turbo) {
    intervalSpeed = TURBO_ANIMATION_SPEED;
  } else {
    intervalSpeed = NORMAL_ANIMATION_SPEED;
  }
  clearInterval(interval);
  interval = setInterval(dsiplayFrames, intervalSpeed);
}

/**
 *
 * @param {Array} frames
 */
function dsiplayFrames() {
  const textArea = document.getElementById("myTextArea");
  const currentFrame = currentFrames.shift();
  textArea.value = currentFrame;
  currentFrames.push(currentFrame);
}
