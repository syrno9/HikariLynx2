document.addEventListener("DOMContentLoaded", function() {
  const params = new URLSearchParams(window.location.search);
  const banData = JSON.parse(decodeURIComponent(params.get('data')));

  let message;

  if (banData.range) {
    message = 'Your IP range ' + banData.range + ' has been banned from <b>' + banData.board + '</b>';
  } else if (banData.asn) {
    message = 'Your ASN ' + banData.asn + ' has been banned from <b>' + banData.board + '</b>';
  } else if (banData.warning) {
    message = 'You have been warned on <b>' + banData.board + '</b>';
  } else {
    message = 'You have been banned from <b>' + banData.board + '</b>';
  }

  if (banData.reason) {
    message += ' for the following reason: <br><br><b>"' + banData.reason + '"</b>';
  }

  if (banData.expiration) {
    message += '<br><br>This ban will expire at <b>' + new Date(banData.expiration).toString() + '</b>.';
  } else {
    message += '<br><br>This ban will not expire.';
  }

  message += '<br><br>Your ban ID: ' + banData.banId + '.';

  document.getElementById('ban-details').innerHTML = message;

  if (banData.appealed) {
    document.getElementById('appeal-form').style.display = 'none';
  } else {
    document.getElementById('submit-appeal').addEventListener('click', function() {
      const appealText = document.getElementById('appeal-text').value;
      if (appealText) {
        api.formApiRequest('appealBan', {
          appeal: appealText,
          banId: banData.banId
        }, function appealed(status, data) {
          if (status !== 'ok') {
            alert(data);
          } else {
            alert('Ban appealed');
            document.getElementById('appeal-form').style.display = 'none';
          }
        });
      } else {
        alert('Please write your appeal before submitting.');
      }
    });
  }
});
