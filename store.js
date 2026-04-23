(() => {
  const catalog = [
    {
      title: "Discord OGs",
      platform: "Discord",
      entries: 6,
      description: "Rare Discord usernames with clean history and premium OG potential.",
      href: "./social-discord.html",
      icon: "https://cdn.simpleicons.org/discord/cfd8ee",
    },
    {
      title: "Email Handles",
      platform: "Email",
      entries: 4,
      description: "Fresh email identities tied to recognizable Pokemon labels.",
      href: "./social-email.html",
      icon: "https://cdn.simpleicons.org/gmail/cfd8ee",
    },
    {
      title: "Instagram Names",
      platform: "Instagram",
      entries: 1,
      description: "Instagram-ready names listed in a clean platform directory.",
      href: "./social-instagram.html",
      icon: "https://cdn.simpleicons.org/instagram/cfd8ee",
    },
    {
      title: "Kick Handles",
      platform: "Kick",
      entries: 3,
      description: "Compact set of Kick-friendly handles ready for creator branding.",
      href: "./social-kick.html",
      icon: "https://cdn.simpleicons.org/kick/cfd8ee",
    },
    {
      title: "Linktree Collection",
      platform: "Linktree",
      entries: 309,
      description: "Large active catalog with broad tier options across many generations.",
      href: "./social-linktree.html",
      icon: "https://cdn.simpleicons.org/linktree/cfd8ee",
    },
    {
      title: "Pastebin Set",
      platform: "Pastebin",
      entries: 9,
      description: "Straightforward shortlist for fast claim and transfer conversations.",
      href: "./social-pastebin.html",
      icon: "https://cdn.simpleicons.org/pastebin/cfd8ee",
    },
    {
      title: "Pinterest Names",
      platform: "Pinterest",
      entries: 5,
      description: "Clean Pinterest-ready labels with tight availability and easy browsing.",
      href: "./social-pinterest.html",
      icon: "https://cdn.simpleicons.org/pinterest/cfd8ee",
    },
    {
      title: "Snapchat List",
      platform: "Snapchat",
      entries: 35,
      description: "Snapchat inventory in directory format for quick scanning.",
      href: "./social-snapchat.html",
      icon: "https://cdn.simpleicons.org/snapchat/cfd8ee",
    },
    {
      title: "Solo.to Stock",
      platform: "Solo.to",
      entries: 67,
      description: "Solo.to handles suitable for profile hubs and redirect naming.",
      href: "./social-solo-to.html",
      icon: "",
    },
    {
      title: "SoundCloud Tags",
      platform: "SoundCloud",
      entries: 2,
      description: "Limited SoundCloud names currently available for direct review.",
      href: "./social-soundcloud.html",
      icon: "https://cdn.simpleicons.org/soundcloud/cfd8ee",
    },
    {
      title: "Telegram Handles",
      platform: "Telegram",
      entries: 4,
      description: "Telegram naming set available in this imported inventory batch.",
      href: "./social-telegram.html",
      icon: "https://cdn.simpleicons.org/telegram/cfd8ee",
    },
    {
      title: "TikTok Inventory",
      platform: "TikTok",
      entries: 34,
      description: "TikTok inventory from current imported records.",
      href: "./social-tiktok.html",
      icon: "https://cdn.simpleicons.org/tiktok/cfd8ee",
    },
    {
      title: "Twitter Names",
      platform: "Twitter",
      entries: 4,
      description: "Twitter handles available in this current imported set.",
      href: "./social-twitter.html",
      icon: "https://cdn.simpleicons.org/x/cfd8ee",
    },
    {
      title: "YouTube Names",
      platform: "YouTube",
      entries: 2,
      description: "Limited YouTube naming options currently listed in inventory.",
      href: "./social-youtube.html",
      icon: "https://cdn.simpleicons.org/youtube/cfd8ee",
    }
  ];

  const grid = document.querySelector("[data-store-grid]");
  const totalNode = document.querySelector("[data-catalog-total]");
  if (!grid) return;

  if (totalNode) totalNode.textContent = String(catalog.length);

  grid.innerHTML = catalog
    .map(
      (item) => `
      <a class="product-card" href="${item.href}" aria-label="Open ${item.title} directory">
        <div class="card-head">
          <div class="icon-wrap">
            ${
              item.icon
                ? `<img class="platform-icon" src="${item.icon}" alt="${item.platform} icon" loading="lazy">`
                : `<span class="platform-fallback" aria-hidden="true">S</span>`
            }
          </div>
          <div class="head-copy">
            <p class="platform-label">${item.platform}</p>
            <h3 class="product-title">${item.title}</h3>
          </div>
          <span class="entry-count">${item.entries} names</span>
        </div>
        <p class="product-copy">${item.description}</p>
        <div class="card-actions">
          <span class="btn ghost">View</span>
        </div>
      </a>
    `
    )
    .join("");
})();
