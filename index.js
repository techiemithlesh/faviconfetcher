var inputBox = document.querySelector('#url_input');
var icon = document.querySelector('#icon');

inputBox.addEventListener("keydown", () => {
  const favicons = `https://previous-lime-frog.faviconkit.com/${inputBox.value}+/${128}`;
  icon.src = favicons;
  console.log(favicons.valueOf);
})