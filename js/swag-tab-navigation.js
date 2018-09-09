$(function(){
  var tabs = $('.navigation-wrap ul li');
  var line = $('.navigation-wrap .line');

    /* moving line function */
    function tabActive(wrapselector, ff){
        indexNo = $( wrapselector +'.'+ff).attr('data-element-number');
        width = $( wrapselector +'.'+ff).attr('data-length');
        leftspace = $( wrapselector +'.'+ff).attr('data-left-space');
        line.css('left', leftspace + 'px');
        line.css('width', width + 'px');
    }

    $(window).scroll(function(){
        tabActive('.navigation-wrap li','active');
    }

  /* initial */
  setAttributes();
  tabActive('.navigation-wrap li','active');

  /* on resize initialise again */
  $( window ).resize(function() {
    setAttributes();
    tabActive('.navigation-wrap li','active');
  });


  /* Set active-state */
  tabs.click(function(){
    tabs.removeClass('.navigation-wrap li','active');
    $(this).addClass('.navigation-wrap li','active');
  });

  /* Class at hover */
  tabs.hover(
    function(){
      $(this).addClass('hover')
      tabActive('.navigation-wrap li','hover');
    },
    function(){
      $(this).removeClass('hover')
      tabActive('.navigation-wrap li','active');
    }
  )

  /* set Attributes */
  function setAttributes(){
    var i = 0;
    
    tabs.each(function(){
      i++;
      var el = $(this);
      var positionLeft = el.position();
      var elementWidth = el.outerWidth();
      
      el.attr('data-element-number', i);
      el.attr('data-left-space', positionLeft.left);
      el.attr('data-length', elementWidth);
    });
  }
});
