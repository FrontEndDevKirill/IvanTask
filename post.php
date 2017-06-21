<?php
	$data = "begin| ".var_dump($_POST['id'])." |end";

	echo json_encode($data);
?>