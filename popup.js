document.addEventListener("DOMContentLoaded", () => {
  const toggleButton = document.getElementById("toggle");

  chrome.storage.local.get("enabled", (data) => {
    toggleButton.textContent = data.enabled ? "Désactiver" : "Activer";
  });

  toggleButton.addEventListener("click", () => {
    chrome.storage.local.get("enabled", (data) => {
      const newStatus = !data.enabled;
      chrome.storage.local.set({ enabled: newStatus }, () => {
        toggleButton.textContent = newStatus ? "Désactiver" : "Activer";
      });
    });
  });
});
