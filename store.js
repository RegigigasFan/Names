(() => {
  const catalog = [
    {
      title: "Discord OGs",
      platform: "Discord",
      entries: 6,
      owners: "Nano",
      status: "In Stock",
      description: "Rare Discord usernames with clean history and premium OG potential.",
      href: "./social-discord.html",
      contact: "./contact.html?item=Discord%20OGs",
      cover: "linear-gradient(140deg, #5865f2 0%, #3e4ac7 62%, #232f8d 100%)",
      ownerGroup: "nano",
    },
    {
      title: "Email Handles",
      platform: "Email",
      entries: 4,
      owners: "Nano",
      status: "In Stock",
      description: "Fresh email identities tied to recognizable Pokemon labels.",
      href: "./social-email.html",
      contact: "./contact.html?item=Email%20Handles",
      cover: "linear-gradient(140deg, #f97316 0%, #ea580c 56%, #b45309 100%)",
      ownerGroup: "nano",
    },
    {
      title: "Instagram Names",
      platform: "Instagram",
      entries: 12,
      owners: "Nano",
      status: "In Stock",
      description: "Short and clean IG-ready names with active resale potential.",
      href: "./social-instagram.html",
      contact: "./contact.html?item=Instagram%20Names",
      cover: "linear-gradient(140deg, #f43f5e 0%, #d946ef 54%, #7c3aed 100%)",
      ownerGroup: "nano",
    },
    {
      title: "Kick Handles",
      platform: "Kick",
      entries: 3,
      owners: "Nano",
      status: "In Stock",
      description: "Compact set of Kick-friendly handles ready for creator branding.",
      href: "./social-kick.html",
      contact: "./contact.html?item=Kick%20Handles",
      cover: "linear-gradient(140deg, #22c55e 0%, #16a34a 54%, #166534 100%)",
      ownerGroup: "nano",
    },
    {
      title: "Linktree Collection",
      platform: "Linktree",
      entries: 308,
      owners: "Nano",
      status: "In Stock",
      description: "Largest active catalog with broad tier options across many generations.",
      href: "./social-linktree.html",
      contact: "./contact.html?item=Linktree%20Collection",
      cover: "linear-gradient(140deg, #34d399 0%, #14b8a6 54%, #0f766e 100%)",
      ownerGroup: "nano",
    },
    {
      title: "Pastebin Set",
      platform: "Pastebin",
      entries: 9,
      owners: "Nano",
      status: "In Stock",
      description: "Straightforward shortlist for fast claim and transfer conversations.",
      href: "./social-pastebin.html",
      contact: "./contact.html?item=Pastebin%20Set",
      cover: "linear-gradient(140deg, #60a5fa 0%, #2563eb 54%, #1e3a8a 100%)",
      ownerGroup: "nano",
    },
    {
      title: "Pinterest Names",
      platform: "Pinterest",
      entries: 5,
      owners: "Nano",
      status: "In Stock",
      description: "Clean Pinterest-ready labels with tight availability and easy browsing.",
      href: "./social-pinterest.html",
      contact: "./contact.html?item=Pinterest%20Names",
      cover: "linear-gradient(140deg, #ef4444 0%, #dc2626 54%, #991b1b 100%)",
      ownerGroup: "nano",
    },
    {
      title: "Snapchat List",
      platform: "Snapchat",
      entries: 35,
      owners: "Nano",
      status: "In Stock",
      description: "Mid-size Snapchat inventory with strong mix of casual and premium names.",
      href: "./social-snapchat.html",
      contact: "./contact.html?item=Snapchat%20List",
      cover: "linear-gradient(140deg, #eab308 0%, #facc15 54%, #ca8a04 100%)",
      ownerGroup: "nano",
    },
    {
      title: "solo.to Stock",
      platform: "solo.to",
      entries: 67,
      owners: "Nano",
      status: "In Stock",
      description: "High-volume solo.to handles suitable for profile hubs and redirects.",
      href: "./social-solo-to.html",
      contact: "./contact.html?item=solo.to%20Stock",
      cover: "linear-gradient(140deg, #38bdf8 0%, #0ea5e9 54%, #0369a1 100%)",
      ownerGroup: "nano",
    },
    {
      title: "SoundCloud Tags",
      platform: "SoundCloud",
      entries: 2,
      owners: "Nano",
      status: "In Stock",
      description: "Very limited SoundCloud names currently available for direct inquiry.",
      href: "./social-soundcloud.html",
      contact: "./contact.html?item=SoundCloud%20Tags",
      cover: "linear-gradient(140deg, #fb923c 0%, #f97316 56%, #c2410c 100%)",
      ownerGroup: "nano",
    },
    {
      title: "TikTok Inventory",
      platform: "TikTok",
      entries: 46,
      owners: "Nano + Karl",
      status: "In Stock",
      description: "Mixed inventory from Nano and Karl, ideal for creator and theme pages.",
      href: "./social-tiktok.html",
      contact: "./contact.html?item=TikTok%20Inventory",
      cover: "linear-gradient(140deg, #2dd4bf 0%, #14b8a6 54%, #0f766e 100%)",
      ownerGroup: "shared",
    },
    {
      title: "Twitch Handles",
      platform: "Twitch",
      entries: 15,
      owners: "Karl",
      status: "In Stock",
      description: "Karl-managed Twitch handles with streamer-first naming potential.",
      href: "./social-twitch.html",
      contact: "./contact.html?item=Twitch%20Handles",
      cover: "linear-gradient(140deg, #8b5cf6 0%, #7c3aed 54%, #4c1d95 100%)",
      ownerGroup: "karl",
    },
    {
      title: "Twitter Pair",
      platform: "Twitter",
      entries: 2,
      owners: "Karl",
      status: "In Stock",
      description: "Small Twitter pair available now with direct contact and quick transfer.",
      href: "./social-twitter.html",
      contact: "./contact.html?item=Twitter%20Pair",
      cover: "linear-gradient(140deg, #38bdf8 0%, #0ea5e9 54%, #0369a1 100%)",
      ownerGroup: "karl",
    },
    {
      title: "YouTube Names",
      platform: "YouTube",
      entries: 2,
      owners: "Nano",
      status: "In Stock",
      description: "Limited YouTube naming options currently listed under Nano proxies.",
      href: "./social-youtube.html",
      contact: "./contact.html?item=YouTube%20Names",
      cover: "linear-gradient(140deg, #ef4444 0%, #f43f5e 54%, #be123c 100%)",
      ownerGroup: "nano",
    },
  ];

  const grid = document.querySelector("[data-store-grid]");
  const chips = Array.from(document.querySelectorAll("[data-filter-chip]"));
  const visibleNode = document.querySelector("[data-visible-total]");
  const totalNode = document.querySelector("[data-catalog-total]");
  const emptyState = document.querySelector("[data-empty]");
  const modal = document.querySelector("[data-modal]");

  if (!grid || !modal) return;

  const modalTitle = modal.querySelector("[data-modal-title]");
  const modalCopy = modal.querySelector("[data-modal-copy]");
  const modalPlatform = modal.querySelector("[data-modal-platform]");
  const modalOwners = modal.querySelector("[data-modal-owners]");
  const modalEntries = modal.querySelector("[data-modal-entries]");
  const modalOpenListing = modal.querySelector("[data-modal-listing]");
  const modalContact = modal.querySelector("[data-modal-contact]");
  const modalCloseButtons = Array.from(modal.querySelectorAll("[data-close-modal]"));

  let activeFilter = "all";

  const render = () => {
    const filtered = catalog.filter((item) => activeFilter === "all" || item.ownerGroup === activeFilter);
    grid.innerHTML = filtered
      .map(
        (item, i) => `
        <article class="product-card" style="--cover:${item.cover}">
          <div class="card-media">
            <div class="media-gloss" aria-hidden="true"></div>
            <span class="media-count">${item.entries} names</span>
            <span class="media-platform">${item.platform}</span>
          </div>
          <div class="card-body">
            <div class="status-row">
              <span class="stock-pill">${item.status}</span>
              <span class="owner-tag">${item.owners}</span>
            </div>
            <h3 class="product-title">${item.title}</h3>
            <p class="product-copy">${item.description}</p>
            <div class="card-actions">
              <button type="button" class="btn ghost" data-view-index="${i}">View</button>
              <a class="btn primary" href="${item.contact}">Buy / Contact</a>
            </div>
          </div>
        </article>
      `
      )
      .join("");

    visibleNode.textContent = String(filtered.length);
    totalNode.textContent = String(catalog.length);
    emptyState.style.display = filtered.length ? "none" : "block";

    grid.querySelectorAll("[data-view-index]").forEach((button) => {
      button.addEventListener("click", () => {
        const item = catalog[Number(button.getAttribute("data-view-index"))];
        if (!item) return;

        modalTitle.textContent = item.title;
        modalCopy.textContent = item.description;
        modalPlatform.textContent = item.platform;
        modalOwners.textContent = item.owners;
        modalEntries.textContent = `${item.entries} names`;
        modalOpenListing.setAttribute("href", item.href);
        modalContact.setAttribute("href", item.contact);
        modal.removeAttribute("hidden");
        document.body.style.overflow = "hidden";
      });
    });
  };

  chips.forEach((chip) => {
    chip.addEventListener("click", () => {
      activeFilter = chip.getAttribute("data-filter-chip");
      chips.forEach((node) => node.classList.toggle("active", node === chip));
      render();
    });
  });

  const closeModal = () => {
    modal.setAttribute("hidden", "hidden");
    document.body.style.overflow = "";
  };

  modalCloseButtons.forEach((button) => button.addEventListener("click", closeModal));

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && !modal.hasAttribute("hidden")) closeModal();
  });

  render();
})();
