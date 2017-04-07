<?php
function isNum ($value)
{
	if(gettype($value)==gettype("string")){
		$value = preg_replace("/[^0-9]/", '', $value);
		echo ($value) . "<br>";
	}else{
    if (is_numeric($value)) {
        echo ($value) . "<br>";
    } else {
        echo 'false';
    }}
}
$testNum = array("12", 9.75, 11, "IgorHeal03");
foreach ($testNum as $value)
{
isNum($value);
}