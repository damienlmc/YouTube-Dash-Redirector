chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.status === "complete" && tab.url) {
    const url = new URL(tab.url);

    // Étape 1 : mémoriser la recherche si présente
    if (url.pathname === "/results" && url.searchParams.has("search_query")) {
      chrome.storage.local.set({ lastSearchQuery: url.searchParams.get("search_query") });
    }

    chrome.storage.local.get(["enabled", "lastSearchQuery"], (data) => {
      if (!data.enabled) return;

      const isWatch = url.hostname === "www.youtube.com" && url.pathname === "/watch";
      const isRedirected = url.hostname === "www.yout-ube.com";

      if (isWatch && !isRedirected) {
        const redirectedUrl = tab.url.replace("www.youtube.com", "www.yout-ube.com");

        chrome.tabs.create({ url: redirectedUrl }, () => {
          const search = data.lastSearchQuery || "";
          const returnUrl = `https://www.youtube.com/results?search_query=${encodeURIComponent(search)}`;
          chrome.tabs.update(tabId, { url: returnUrl });
        });
      }
    });
  }
});
