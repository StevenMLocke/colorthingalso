$(document).ready(function() {
	var $color = 000000;
  var $red = 00;
  var $green = 00;
  var $blue = 00;
  var $divider = 0;
  var $height = $(window).height() -20;
  var $width = $(window).width();

  $("body").append('<div class="triggerBar"></div>');
  
  $(".triggerBar").css({"width":$width,
                        "top":"0px",
                        "height":"0px",
                        "position":"fixed"
                       });

  $(".triggerBar").append('<div class="buttonHolder"></div>');
  
  $(".buttonHolder").css({"margin":"-35px auto",
                          "width":"200px",
                          "border":"1px solid red",
                          "border-radius":"0 0 20px 20px",
                          "background-color":"yellow",
                          "text-align":"center",
                          "padding":"3px"
                       });
  
  $(".buttonHolder").append('<button class="btn btn-primary">Reset</button>');
  
  $(".buttonHolder").mouseenter(function(){
      $(this).animate({marginTop:"0px"});
  });
  
  $(".buttonHolder").mouseleave(function(){
      $(this).animate({marginTop:"-35px"});
  });

  $("body").append("<div class='contain'></div>");
  $(".contain").height($height);
  $(".contain").width($height + 2);
  $(".contain").css({"margin":"8px auto",
                     "border":"1px solid black",
                     "background-color":"lightGray",
                     "overflow":"hidden",
                     "padding":"0px 0px 0px 0px"
                    });
  
  while ($divider < 2 || $divider > 64) {
	$divider = prompt("pick a number from 2 to 64");
	}
	
	var $divDim = ($height)/$divider;

  for (var i = 0; i < $divider; i++) {
    $('.contain').append("<div class='aRow'></div>");
    $(".aRow").last().height($divDim);
    $(".aRow").last().width($(".contain").width());
    for (var j = 0; j < $divider; j++) {
      $('.aRow').last().append("<div class='aDiv'></div>");
      $('.aDiv').last().height($divDim);
      $('.aDiv').last().width($divDim);
    };
  }


  $("button").click(function(){
    location.reload(true);
  });

  $(".aDiv").mouseenter(function() {
    $red = $red + 1;
    $blue = $blue + 2;
    $green = $green + 1;
    if ($red > 255) {
      $red = $red - 255;
    }
    if ($blue > 255) {
      $blue = $blue - 255;
    }
    if ($green > 255) {
      $green = $green - 255;
    }
    $(this).css("background-color", "rgb(" + $red + "," + $green + "," + $blue + ")");
  })
})