const pageInner = document.querySelector('.wrapper');

function addThemeCheckers(targetEl) {
  targetEl.insertAdjacentHTML(
    'afterbegin',
    `
  <div class="checkers">
    Тема сайту
    <div class="checkers-group">
      <button class="checker theme-pink" title="Рожева тема">
        <span>Рожева тема</span>
      </button>
      <button class="checker theme-gold" title="Золота тема">
        <span>Золота тема</span>
      </button>
      <button class="checker theme-dark" title="Темна тема">
        <span>Темна тема</span>
      </button>
    </div>
  </div>
  `
  );
}

addThemeCheckers(pageInner);
