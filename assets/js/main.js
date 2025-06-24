const text = "Top-Rated MOD APK Hub";
let i = 0;
function typeWriter() {
  if (i < text.length) {
    document.getElementById("animated-title").innerHTML +=
      `<span style="color:hsl(${i * 15},100%,70%)">${text[i]}</span>`;
    i++;
    setTimeout(typeWriter, 100);
}
}
typeWriter();

fetch("apk-links.json")
.then(res => res.json())
.then(data => {
    const search = document.getElementById("searchBar");
    const result = document.getElementById("searchResults");

    if (search) {
      search.addEventListener("input", e => {
        const q = e.target.value.toLowerCase();
        const matches = data.filter(app => app.name.toLowerCase().includes(q));
        result.innerHTML = matches.map(app =>
          `<li><a href="download.html?id=${app.id}">${app.name}</a></li>`
).join("");
});
}

    const params = new URLSearchParams(window.location.search);
    const appId = params.get("id⁽¹⁾

