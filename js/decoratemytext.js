function onButtonClick() {
  const textArea = document.getElementById("textArea");
  setTimeout(() => {
    const currentTextSize =
      parseInt(
        window.getComputedStyle(textArea).getPropertyValue("font-size")
      ) - 4;
    const newCurrentTextSize = currentTextSize + 2;
    textArea.style.fontSize = newCurrentTextSize + "pt";
  }, 500);
}

function onLatinClick() {
  const textArea = document.getElementById("textArea");
  const text = textArea.value.split(" ");
  const vowels = ["a", "e", "i", "o", "u"];
  const consonant = [
    "b",
    "c",
    "d",
    "f",
    "g",
    "h",
    "j",
    "k",
    "l",
    "m",
    "n",
    "p",
    "q",
    "r",
    "s",
    "t",
    "v",
    "w",
    "y",
    "z",
  ];
  let newText = "";
  text.forEach((element) => {
    if (vowels.includes(element.toLowerCase()[0])) {
      newText += element + "ay ";
    } else {
      let consonantLetters = "";
      let word = "";
      for (let i = 0; i < element.length; i++) {
        if (consonant.includes(element.toLowerCase()[i])) {
          consonantLetters += element[i];
        } else {
          word += element.slice(i);
          break;
        }
      }
      newText += word + consonantLetters + "ay ";
    }
  });
  textArea.value = newText;
}

function onMalkovitchClick() {
  const textArea = document.getElementById("textArea");
  const text = textArea.value.split(" ");
  let newText = "";
  text.forEach((element) => {
    if (element.length >= 5) {
      newText += "Malkovich ";
    } else {
      newText += element + " ";
    }
  });
  textArea.value = newText;
}

function handleCheckBox() {
  const textArea = document.getElementById("textArea");
  const checkBox = document.getElementById("blingCheckBox");
  if (checkBox.checked) {
    textArea.style.fontWeight = "bold";
    textArea.style.color = "green";
    textArea.style.textDecoration = "underline";
    document.body.style.backgroundImage =
      "url('https://static.vecteezy.com/system/resources/previews/002/037/924/original/abstract-blue-background-with-beautiful-fluid-shapes-free-vector.jpg')";
    document.body.style.backgroundSize = "cover";
    return;
  }
  textArea.style.fontWeight = "normal";
  textArea.style.color = "black";
  textArea.style.textDecoration = "none";
  document.body.style.backgroundImage = "none";
}
