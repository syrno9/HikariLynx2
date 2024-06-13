<?php
$images = [
    '<a href="/aca" target="_blank"><img src="/.static/banners/aca.png" width="468" height="60"></a>',
    '<a href="/aca" target="_blank"><img src="/.static/banners/aca2.gif" width="468" height="60"></a>',
    '<a href="/en" target="_blank"><img src="/.static/banners/en.gif" width="468" height="60"></a>',
    '<a href="/f" target="_blank"><img src="/.static/banners/f.png" width="468" height="60"></a>',
    '<a href="/" target="_blank"><img src="/.static/banners/home.gif" width="468" height="60"></a>',
    '<a href="/irc" target="_blank"><img src="/.static/banners/irc.png" width="468" height="60"></a>',
    '<a href="/jp" target="_blank"><img src="/.static/banners/jp.png" width="468" height="60"></a>',
    '<a href="/rules" target="_blank"><img src="/.static/banners/rules.png" width="468" height="60"></a>',
    '<a href="/rules2" target="_blank"><img src="/.static/banners/rules2.png" width="468" height="60"></a>',
    '<a href="/t" target="_blank"><img src="/.static/banners/t.png" width="468" height="60"></a>',
    '<a href="/t" target="_blank"><img src="/.static/banners/t2.png" width="468" height="60"></a>',
    '<a href="/t" target="_blank"><img src="/.static/banners/t3.png" width="468" height="60"></a>',
    '<a href="/v" target="_blank"><img src="/.static/banners/v2.gif" width="468" height="60"></a>',
    '<a href="http://www.animegalleries.net" target="_blank"><img src="/.static/banners/agb.gif" width="468" height="60"></a>'
];

$randomImage = $images[array_rand($images)];
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="margin: 0;">
        <?php echo $randomImage; ?>
</body>
</html>
