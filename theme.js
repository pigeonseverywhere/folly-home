(function () {
  var s = localStorage.getItem('folly-theme');
  var d = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  if (s === 'dark' || (s === null && d)) document.documentElement.classList.add('dark');

  document.addEventListener('DOMContentLoaded', function () {
    var btn = document.getElementById('theme-toggle');
    if (!btn) return;
    btn.addEventListener('click', function () {
      var dark = document.documentElement.classList.toggle('dark');
      localStorage.setItem('folly-theme', dark ? 'dark' : 'light');
    });
  });
}());
