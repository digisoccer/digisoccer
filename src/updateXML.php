<?php

$xml = simplexml_load_file("data.xml");

// Update the XML data
$xml->player[0]->name = $_POST["name"];
$xml->player[0]->club = $_POST["club"];
$xml->player[0]->age = $_POST["age"];
$xml->player[0]->height = $_POST["height"];
$xml->player[0]->position = $_POST["position"];

// Save the updated XML data to the file
$xml->asXML("data.xml");

?>