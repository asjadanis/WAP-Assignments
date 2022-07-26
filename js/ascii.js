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
