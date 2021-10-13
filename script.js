var header = $('header'), cloneHeader = header.clone();
cloneHeader.addClass('header-fixed');
header.before(cloneHeader);
$(window).scroll(function(){
  if ($(window).scrollTop() > 70) {
    cloneHeader.addClass('header_is_show');
  }
});
