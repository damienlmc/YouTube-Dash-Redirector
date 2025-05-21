setInterval(() => {
  const bodyText = document.body.innerText || "";
  if (bodyText.includes("Cette vidéo n'est pas disponible")) {
    location.reload();
  }
}, 3000);
