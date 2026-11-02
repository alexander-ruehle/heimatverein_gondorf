const toggle = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#site-navigation');

if (toggle && navigation) {
  toggle.addEventListener('click', () => {
    const expanded = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', String(!expanded));
    navigation.classList.toggle('is-open', !expanded);
  });
}
