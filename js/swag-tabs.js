$(function(){
    var line = $('.li-wrapper .line');
    var tabs = $('.tab-items');
    var tabsContent = $('.tab-container-content .content')

    /* initial */
    setAttributes();
    tabActive('active');
    showActiveContent();

    /* on resize initialise again */
    $( window ).resize(function() {
      setAttributes();
      tabActive('active');
    });


    /* Set active-state */
    tabs.click(function(){
      tabs.removeClass('active');
      $(this).addClass('active');
      showActiveContent();
    });

    /* Class at hover */
    tabs.hover(
      function(){
        $(this).addClass('hover')
        tabActive('hover');
      },
      function(){
        $(this).removeClass('hover')
        tabActive('active');
      }
    )

    /* moving line function */
    function tabActive(ff){
      indexNo = $('.tab-items.'+ff).attr('data-element-number');
      width = $('.tab-items.'+ff).attr('data-length');
      leftspace = $('.tab-items.'+ff).attr('data-left-space');
      line.css('left', leftspace + 'px');
      line.css('width', width + 'px');
    }

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

    function showActiveContent(){
      var tabactive = $('.tab-items.active');
      var i = tabactive.attr('data-tab');

      tabsContent.removeClass('active');
      tabsContent.each(function(){
        el = $(this);
        if (i === el.attr('data-tab')){
          el.addClass('active');
        }
      });

    }
    
});
