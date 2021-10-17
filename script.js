document.querySelectorAll('.anchor').forEach(link => {
  link.addEventListener('click', function (e){
    console.log('click')
    e.preventDefault()
    const href = this.getAttribute('href').substring(1)
    const scrollTarget = document.getElementById(href)
    const topOffset = 50
    const elementPosition = scrollTarget.getBoundingClientRect().top
    const offsetPosition = elementPosition - topOffset

    window.scrollBy ({
      top: offsetPosition,
      behavior: 'smooth',
    });
  });
});
$(document).ready(function(){
  $('.header_burger').click(function(event){
    $('.header_burger, .header_menu').toggleClass('active');
  });
});
