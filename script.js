document.querySelectorAll('.toggle-answer').forEach(function(button) {
    button.addEventListener('click', function() {
      const answer = this.previousElementSibling;
      if (answer.style.display === 'none' || answer.style.display === '') {
        answer.style.display = 'block';
      } else {
        answer.style.display = 'none';
      }
    });
  });
  