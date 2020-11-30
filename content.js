var divs = document.querySelectorAll("div[href]");
for (div of divs) {
  div.outerHTML = div.outerHTML.replaceAll("div", "a");
}

