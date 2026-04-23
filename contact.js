(() => {
  const note = document.querySelector("[data-interest-note]");
  if (!note) return;

  const params = new URLSearchParams(window.location.search);
  const item = params.get("item");
  if (!item) return;

  note.textContent = `Selected listing: ${item}. Mention this title when you contact me so I can route you faster.`;
})();
