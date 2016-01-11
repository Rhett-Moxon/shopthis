

$(function() {



  $("#submit").on( "click", function() {

    if( $("input").val().trim().length === 0 ) {

      $("#error").show();

      $("input").val("");

    }



    else {

      $("ul").append("<li class='group'> <button class='button_done'>Done</button> " + $("input").val() + "<button class='button_remove'>X</button></li>");

      $("input").val("");

      $('#error').hide();

    }

  });



  $("ul").on("click", ".button_done", function() {

    $(this).closest("li").toggleClass("list_item_done");

    $(this).remove();

  });


  $("ul").on("click", ".button_remove", function() {
    $(this).parent().remove();

  });



});
