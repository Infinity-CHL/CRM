export const createPreloader = content => {
  const wrapper = document.createElement('div'),
        loader = document.createElement('img');


  loader.setAttribute('src', './img/load.svg');
  wrapper.classList.add('preloader');
  loader.classList.add('loader');

  wrapper.append(loader);

  content.append(wrapper);
}
