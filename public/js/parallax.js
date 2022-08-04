document.addEventListener("DOMContentLoaded", function() {
    var elems = document.querySelectorAll(".parallax");
    var instances = M.AutoInit();
    console.log(instances);
});

document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.sidenav');
    M.Sidenav.init();
  });