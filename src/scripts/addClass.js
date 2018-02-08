function addClass(selector) {
  const rootElement = document.querySelector(selector);
  const button = rootElement.querySelector('.btn');
  const modal = rootElement.querySelector('.addClass');

  function addClass() {
    modal.classList.toggle('showed');
  }

  button.addEventListener('click', function () {
    addClass();
  });
}

export default addClass;