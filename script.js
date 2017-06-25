$(document).ready(function(){

  var topDiv = document.querySelector('#top-div');
  var readMore = document.querySelector('#read-more');
  if(topDiv){
    var height = window.innerHeight -19;
    var margin = height -465;
    if(height < 1200){
      topDiv.style.height = height + 'px';
      readMore.style.marginTop = margin + 'px';
    } else {
      topDiv.style.height = '640px';
      readMore.style.marginTop = '250px';
    }
  }



  $(document).scroll(function() {
    var y = $(this).scrollTop();
    if (y > 200) {
      $('#menu').css('background-color', 'rgba(255, 152, 0, 1)');
      $('#menu-logo').css('opacity', 1);
    } else {
      $('#menu').css('background-color', 'rgba(255, 152, 0, 0)');
      $('#menu-logo').css('opacity', 0);
    }
  });

  // Find a new way to change URL and scroll down on the page
  $("#about-button-pages").click(function() {
       window.location.replace('index.html#about');
  });

  // Scroll down with read me button
  $("#read-more").click(function() {
      $('html, body').animate({
          scrollTop: $("#left").offset().top -65
      }, 2000);
  });

  // scroll down from MENU ABOUT BUTTON
  $("#about-button").click(function() {
      $('html, body').animate({
          scrollTop: $("#about").offset().top -65
      }, 2000);
  });



      var token = '2276372973.1677ed0.d290fcf0d07f47d7a489bb55708a4a5f',
          num_photos = 10;

      $.ajax({
          url: 'https://api.instagram.com/v1/users/self/media/recent',
          dataType: 'jsonp',
          type: 'GET',
          data: {access_token: token, count: num_photos},
          success: function(data){
              console.log(data);
                for( x in data.data ){
                    $('ul').append('<li><img id="' + data.data[x].link + '" src="'+data.data[x].images.low_resolution.url+'"></li>');
                }
          },
          error: function(data){
              console.log('error');
          }
      });

      $('.pic').click(function() {
        var id = $(this).attr('id');
        window.location.replace(id);
        console.log(id);
      });




console.log('hello');

});


// var feed = new Instafeed({
//     get: 'popular',
//     clientId: '36171b32209b4a4397766a3ed868f03f',
//     accessToken: '2276372973.1677ed0.d290fcf0d07f47d7a489bb55708a4a5f'
// });
// feed.run();
