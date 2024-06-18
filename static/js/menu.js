document.addEventListener('DOMContentLoaded', function() {
  const buttons = document.querySelectorAll('.plus');
  buttons.forEach(button => {
    button.addEventListener('click', function() {
      const targetId = this.getAttribute('data-target');
      const list = document.getElementById(targetId);
      if (list.classList.contains('hidden')) {
        list.classList.remove('hidden');
        this.textContent = '−';
      } else {
        list.classList.add('hidden');
        this.textContent = '+';
      }
    });
  });
});
