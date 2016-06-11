
$(document).ready(function(){

  $("#shade").height($("#home").height());

  //Show/Hide

  $("#close").show();
  $("#open").hide();

  $("#close, #open").click(function(){
    console.log("clicked to hide");

    
    $(".carousel").toggle();
    $("#close").toggle();
    $("#open").toggle();
    $("#prev").toggle();
    $("#next").toggle();

    
    if ($("#close").is(":visible") == true){
      console.log("close eyes");
    }
    else if($("#open").is(":visible") == true){
      

      $("#recipe").css("margin-top", "0px");
      console.log("picture");
    }
  });


  //Image Slider

  var currentIndex=0,
    items = $('.carousel div'),
    itemAmt = items.length;
    items.hide();
    $('.active').show();

  function cycleItems(){
    var item = $('.carousel div').eq(currentIndex);
    items.hide();
    item.css('display', 'inline-block');
  }

  var autoSlide = setInterval(function(){
    currentIndex +=1;
    if(currentIndex > itemAmt -1){
      currentIndex=0;
    }
    cycleItems();
  }, 30000);

  $('#next').click(function(){
    clearInterval(autoSlide);
    currentIndex += 1;
    if(currentIndex > itemAmt -1){
      currentIndex=0;
    }
    cycleItems();
  });

  $('#prev').click(function(){
    clearInterval(autoSlide);
    currentIndex -= 1;
    if(currentIndex < 0){
      currentIndex= itemAmt -1;
    }
    cycleItems();
  });

  //Tabs

  $('#ingredients').show();
  $('#directions').hide();
  $("#ingredients_tab").css("color", "#78B400");
  $("#directions_tab").css("color", "#c0c0c0");
 

  $("#ingredients_tab").click(function(){
    console.log("cshow ingredient");
    $("#ingredients_tab").css("color", "#78B400");
    $("#directions_tab").css("color", "#c0c0c0");
    $("#ingredients").show();
    $("#directions").hide();

  });

  $("#directions_tab").click(function(){
    console.log("show direction");
    $("#ingredients_tab").css("color", "#c0c0c0");
    $("#directions_tab").css("color", "#78B400");
    $("#ingredients").hide();
    $("#directions").show();
  });

  $('#directions li').hover(function(){
    console.log("change font size");
    $(this).css("font-size", "30px");
    },function(){
    $(this).css("font-size", "18px");
  });

});

