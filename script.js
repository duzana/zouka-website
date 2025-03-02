// Language Selector (Google Translate)
document.getElementById('language-select').addEventListener('change', function () {
    const selectedLanguage = this.value;
    if (selectedLanguage === 'ja') {
      window.location.href = 'https://translate.google.com/translate?hl=en&sl=en&tl=ja&u=' + encodeURIComponent(window.location.href);
    } else {
      window.location.href = window.location.href.split('?')[0]; // Reset to English
    }
  });