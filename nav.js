// CoffeeFairs.com — navigation dropdown handler
// Reliable on both desktop (click) and mobile (tap)
(function () {
  document.addEventListener('DOMContentLoaded', function () {
    var dropdowns = document.querySelectorAll('.nav-dropdown');

    dropdowns.forEach(function (dd) {
      var trigger = dd.querySelector('a');
      if (!trigger) return;

      trigger.addEventListener('click', function (e) {
        e.preventDefault();
        e.stopPropagation();
        // Close other open dropdowns
        dropdowns.forEach(function (other) {
          if (other !== dd) other.classList.remove('open');
        });
        dd.classList.toggle('open');
      });
    });

    // Close dropdowns when clicking/tapping anywhere else
    document.addEventListener('click', function () {
      dropdowns.forEach(function (dd) { dd.classList.remove('open'); });
    });
  });
})();
