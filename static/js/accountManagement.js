var accountManagement = {};

accountManagement.init = function() {

  if (typeof (DISABLE_JS) !== 'undefined' && DISABLE_JS) {
    return;
  }

  document.getElementById('deleteAccountJsButton').style.display = 'inline';
  document.getElementById('deleteAccountFormButton').style.display = 'none';

};

accountManagement.deleteAccount = function() {

  var confirmed = document.getElementById('confirmationCheckbox').checked;

  if (!confirmed) {
    alert('You must confirm that you wish to delete this account.');
  } else {

    api.apiRequest('deleteAccount', {
      confirmation : confirmed,
      account : document.getElementById('userIdentifier').value
    }, function requestComplete(status, data) {

      if (status === 'ok') {
        window.location = '/accounts.js';
      } else {
        alert(status + ': ' + JSON.stringify(data));
      }
    });

  }

};

accountManagement.init();