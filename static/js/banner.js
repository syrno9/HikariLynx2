    var bannerImage = document.getElementById('bannerImage');

    bannerImage.addEventListener('click', function() {
      var currentSrc = bannerImage.src;

      var newSrc = currentSrc + '?timestamp=' + new Date().getTime();

      bannerImage.src = newSrc;
    });