import { site, whatsappUrl } from './config.js';
const selectors = [...document.querySelectorAll('[data-location]')];
let selected = site.locations[0].name;
selectors.forEach(select => {
  site.locations.forEach(location => select.add(new Option(location.name, location.name)));
  select.addEventListener('change', () => { selected = select.value; render(); });
});
function render() {
  const location = site.locations.find(location => location.name === selected);
  selectors.forEach(select => { select.value = selected; });
  for (const [id, value] of Object.entries({ 'location-name': location.name, place: location.place, address: location.address, hours: location.hours })) document.getElementById(id).textContent = value;
  document.getElementById('map').href = location.map;
  const url = whatsappUrl(site.whatsapp, selected);
  document.querySelectorAll('[data-contact]').forEach(link => {
    link.textContent = url ? link.dataset.label : site.unavailable;
    if (url) { link.href = url; link.target = '_blank'; link.rel = 'noopener noreferrer'; link.removeAttribute('aria-disabled'); }
    else { link.removeAttribute('href'); link.removeAttribute('target'); link.setAttribute('aria-disabled', 'true'); }
  });
}
document.querySelectorAll('[data-note]').forEach(element => { element.textContent = site.appointmentNote; });
site.services.forEach(([title, description], index) => {
  const article = document.createElement('article');
  const number = document.createElement('span'); number.className = 'service-number'; number.textContent = String(index + 1).padStart(2, '0'); number.setAttribute('aria-hidden', 'true');
  const heading = document.createElement('h3'); heading.textContent = title;
  const paragraph = document.createElement('p'); paragraph.textContent = description;
  article.append(number, heading, paragraph); document.getElementById('service-list').append(article);
});
const menu = document.querySelector('.menu');
const navigation = document.getElementById('navigation');
function closeMenu() { menu.setAttribute('aria-expanded', 'false'); navigation.classList.remove('open'); }
menu.addEventListener('click', () => { const open = menu.getAttribute('aria-expanded') !== 'true'; menu.setAttribute('aria-expanded', String(open)); navigation.classList.toggle('open', open); });
navigation.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
document.addEventListener('keydown', event => { if (event.key === 'Escape' && menu.getAttribute('aria-expanded') === 'true') { closeMenu(); menu.focus(); } });
window.matchMedia('(min-width: 901px)').addEventListener('change', closeMenu);
render();
