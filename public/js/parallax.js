document.addEventListener("DOMContentLoaded", function() {
    var elems = document.querySelector(".parallax");
    var instances = M.Parallax.init(elems);
    console.log(instances);
});

document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll(".sidenav");
    M.Sidenav.init();
});