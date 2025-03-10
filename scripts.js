document.querySelectorAll('.product-card a').forEach(link => {
  link.addEventListener('click', function(event) {
    window.location.href = link.getAttribute('href');
  });
});
