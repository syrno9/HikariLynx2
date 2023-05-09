var bypass = {};

bypass.initImportExport = function() {

  document.getElementById('panelImportExport').classList.remove('hidden');

  document.getElementById('importButton').onclick = bypass.import;
  document.getElementById('exportButton').onclick = bypass.export;

  document.getElementById('importInput').onchange = function(event) {

    var file = this.files[0];

    if (file.size > 400) {
      return alert('Invalid file');
    }

    var reader = new FileReader();

    reader.addEventListener('load', function(e) {
      var expiration = new Date();

      expiration.setUTCFullYear(expiration.getUTCFullYear() + 5);
      document.cookie = 'bypass=' + e.target.result.trim()
          + '; path=/; expires=' + expiration.toString();
    });

    reader.readAsBinaryString(file);

  };

};

bypass.import = function() {
  document.getElementById('importInput').click();
};

bypass.export = function() {
  var element = document.createElement('a');
  element.setAttribute('href', 'data:text/plain;charset=utf-8,'
      + encodeURIComponent(api.getCookies().bypass));
  element.setAttribute('download', 'bypass.txt');

  element.style.display = 'none';
  document.body.appendChild(element);

  element.click();

  document.body.removeChild(element);
};

bypass.init = function() {

  bypass.initImportExport();

  if (!crypto.subtle || JSON.parse(localStorage.noJsValidation || 'false')) {
    return;
  }

  api.convertButton('bypassFormButton', bypass.blockBypass, 'bypassField');

  bypass.creationButton = document.getElementById('bypassFormButton');
  bypass.originalCreationText = bypass.creationButton.innerHTML;

  bypass.validationButton = document.getElementById("validationButton");
  if (!bypass.validationButton) {
    return;
  }

  document.getElementById('noJs').remove();

  bypass.originalText = bypass.validationButton.innerHTML;

  bypass.validationButton.className = "";

  var callback = function(status, data) {

    if (status === 'ok') {
      document.getElementById("indicatorNotValidated").remove();
    } else {
      alert(status + ': ' + JSON.stringify(data));
    }

  };

  callback.stop = function() {
    bypass.validationButton.innerHTML = bypass.originalText;
  };

  bypass.validationButton.onclick = function() {

    bypass.validationButton.innerHTML = "Please wait for validation";

    bypassUtils.runValidation(callback);

    return false;

  };

};

bypass.addIndicator = function() {

  if (document.getElementById('indicatorValidBypass')) {

    if (document.getElementById("indicatorNotValidated")) {
      document.getElementById("indicatorNotValidated").remove();
    }

    return;
  }

  var paragraph = document.getElementById('settingsFieldset');

  var div = document.createElement('div');
  div.innerHTML = 'You have a valid block bypass.';
  div.id = 'indicatorValidBypass';
  paragraph.insertBefore(div, paragraph.children[2]);

};

bypass.blockBypass = function() {

  var captchaField = document.getElementById('fieldCaptcha');

  var typedCaptcha = captchaField.value.trim();

  if (typedCaptcha.length !== 6 && typedCaptcha.length !== 112) {
    alert('Captchas are exactly 6 (112 if no cookies) characters long.');
    return;
  }

  api.formApiRequest('renewBypass', {
    captcha : typedCaptcha
  }, function requestComplete(status, data) {

    if (status === 'ok') {

      captchaUtils.reloadCaptcha();

      captchaField.value = '';

      if (api.getCookies().bypass.length <= 372) {

        bypass.addIndicator();
        return;

      }

      var callback = function(status, data) {

        if (status === 'ok') {
          bypass.addIndicator();
        } else {
          alert(status + ': ' + JSON.stringify(data));
        }

      };

      callback.stop = function() {
        bypass.creationButton.innerHTML = bypass.originalCreationText;
      };

      bypass.creationButton.innerHTML = "Please wait for validation";

      bypassUtils.runValidation(callback);

    } else {
      alert(status + ': ' + JSON.stringify(data));
    }
  });

};

bypass.init();
