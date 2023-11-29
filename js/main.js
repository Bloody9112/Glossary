document.addEventListener('DOMContentLoaded', function () {
  function hideLoader() {
    document.querySelector('.loader-wrapper').style.display = 'none';
  }
  
  document.querySelector('.logo img').classList.add('animation-start');
  document.querySelector('.header_left').classList.add('animation-start');

  setTimeout(hideLoader, 3800);
});
