/* Client-side blog search and category filtering. All article content remains in HTML for indexing. */
(() => {
  const cards = [...document.querySelectorAll(".article-card")];
  const searchInput = document.querySelector("#blog-search-input");
  const filterButtons = [...document.querySelectorAll(".filter-chip")];
  const emptyState = document.querySelector("#no-articles");
  let activeCategory = "all";

  if (!cards.length) return;

  const applyFilters = () => {
    const query = (searchInput?.value || "").trim().toLowerCase();
    let visibleCount = 0;

    cards.forEach((card) => {
      const categoryList = (card.dataset.category || "").split("|").filter(Boolean);
      const categoryMatches = activeCategory === "all" || categoryList.includes(activeCategory);
      const searchableText = `${card.dataset.title || ""} ${card.dataset.description || ""} ${card.textContent || ""}`.toLowerCase();
      const searchMatches = !query || searchableText.includes(query);
      const visible = categoryMatches && searchMatches;
      card.hidden = !visible;
      if (visible) visibleCount += 1;
    });

    if (emptyState) emptyState.hidden = visibleCount !== 0;
  };

  searchInput?.addEventListener("input", applyFilters);

  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      activeCategory = button.dataset.category || "all";
      filterButtons.forEach((item) => {
        const selected = item === button;
        item.classList.toggle("is-active", selected);
        item.setAttribute("aria-pressed", String(selected));
      });
      applyFilters();
    });
  });
})();
