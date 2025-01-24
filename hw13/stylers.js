function addStylers(targetEl) {
  targetEl.insertAdjacentHTML(
    'afterbegin',
    `
  <div class="stylers">
    Фон сайту
    <div class="stylers-group">
      <button class="styler styler-80" title="80-ті">
        <span>80-ті</span>
      </button>
      <button class="styler styler-90" title="90-ті">
        <span>90-ті</span>
      </button>
      <button class="styler styler-00" title="нульові">
        <span>нульові</span>
      </button>
    </div>
  </div>
  `
  );
}
addStylers(pageInner);
