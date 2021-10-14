var header = $('header'), cloneHeader = header.clone();
cloneHeader.addClass('header-fixed');
header.before(cloneHeader);
$(window).scroll(function(){
  if ($(window).scrollTop() > 70) {
    cloneHeader.addClass('header_is_show');
  }
});

document.querySelectorAll('.anchor').forEach(link => {
  link.addEventListener('click', function (e){
    console.log('click')
    e.preventDefault()
    const href = this.getAttribute('href').substring(1)
    const scrollTarget = document.getElementById(href)
    const topOffset = 70
    const elementPosition = scrollTarget.getBoundingClientRect().top
    const offsetPosition = elementPosition - topOffset

    window.scrollBy ({
      top: offsetPosition,
      behavior: 'smooth',
    })
  })
})
