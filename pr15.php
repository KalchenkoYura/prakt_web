<?php
function isNum ($value)
{
    if (is_numeric($value)) {
        echo gettype($value) . "<br>";
    } else {
        echo 'false';
    }
}
$testNum = array("12", 9.75, 11, "IgorHeal03");
foreach ($testNum as $value)
{
isNum($value);
}