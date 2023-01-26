<?php
    // Get the HTML content from the POST request
    $htmlContent = $_POST['htmlContent'];

    // Open the file for writing
    $file = fopen('/src/test.html', 'w');

    // Write the new HTML content to the file
    fwrite($file, $htmlContent);

    // Close the file
    fclose($file);

    echo 'File successfully updated';
?>
