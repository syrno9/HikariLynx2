<?php
$ads = [
    '<a href="https://a.jlist.com/moe.php?id=3017_1_1_3" target="_blank" rel="nofollow"><img style="border:0px" src="https://a.jlist.com/media/banners/general--wide.jpg" width="600" height="74" alt="Visit J-List - Your Favorite Online Shop and Friend in Japan"></a>',
    '<a href="https://a.jlist.com/moe.php?id=3017_4_1_13" target="_blank" rel="nofollow"><img style="border:0px" src="https://a.jlist.com/media/banners/ecchi--wide.jpg" width="600" height="74" alt="Ecchi Products from Japan from J-List - Your Favorite Online Shop and Friend in Japan"></a>'
];

$randomAd = $ads[array_rand($ads)];
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ad Rotation Example</title>
    <style>
        .ad-container {
            width: 600px;
            margin: 20px auto;
            text-align: center;
        }
    </style>
</head>
<body>
    <div class="ad-container">
        <?php echo $randomAd; ?>
    </div>
</body>
</html>
