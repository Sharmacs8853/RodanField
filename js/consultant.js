window.onscroll = function () {
    myFunction();
  };

  var navlist = document.querySelector(".header");
  var sticky = navlist.offsetTop;

  /* Function to stick the nav bar */
  function myFunction() {
    if (window.pageYOffset >= sticky) {
      navlist.classList.add("sticky");
    } else {
      navlist.classList.remove("sticky");
    }
  }