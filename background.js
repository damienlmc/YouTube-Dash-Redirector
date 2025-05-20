chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.status === "complete" && tab.url) {
    const url = tab.url;

    if (url.includes("www.youtube.com/watch")) {
      const newUrl = url.replace("www.youtube.com", "www.yout-ube.com");

      // Empêche les redirections en boucle (si on revient sur yout-ube.com)
      if (!url.includes("yout-ube.com")) {
        chrome.tabs.create({ url: newUrl }, () => {
          // Ferme l'onglet original une fois que le nouveau est ouvert
        chrome.tabs.update(tabId, { url: "https://www.youtube.com" });
        });
      }
    }
  }
});

