export const removeForm = (wrapper, form) => {
  if (wrapper) {
    document.addEventListener('keydown', e => {
      if (e.keyCode === 27) {
        wrapper.classList.remove('active');
      };
    });
  }

  if (wrapper.classList.contains('edit-wrapper')){
    document.addEventListener('keydown', e => {
      if (e.keyCode === 27) {
        wrapper.remove();
      };
    });
  }
};
