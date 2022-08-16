const menuItens = document.querySelectorAll('.topo a')

menuItens.forEach(item => {item.addEventListener('click', scrollNav)})

function scrollNav(ev) {
  ev.preventDefault();
  const to = getByHref(ev.target)

  window.scroll({
    top: to,
    behavior: "smooth"
  });
}

function getByHref(element) {
  const id = element.getAttribute('href');
 return document.querySelector(id).offsetTop;
}