<?php 
include "connect.php";
// header('Access-Control-Allow-Origin: *');
// header('Access-Control-Allow-Credentials: true');
// header("Access-Control-Allow-Methods: PUT, GET, POST, DELETE, OPTIONS");
// header("Access-Control-Allow-Headers: Origin, Content-Type, Authorization, Accept, X-Requested-With, x-xsrf-token");
// header("Content-Type: application/json; charset=utf-8");
$input = file_get_contents("php//input");
$data = json_decode($input,true);
$message = array();
$platenumber=$data['vehicleID'];
$vmodel=$data['vehicleModel'];
$vcolor=$data['vehicleColor'];
$vtype=$data['vehicleType'];

// $platenumber=$data['platenumber'];
// $vmodel=$data['vmodel'];
// $vcolor=$data['vcolor'];
// $vtype=$data['vtype'];

$q = mysqli_query($conn, "INSERT INTO `tb_vehicle`(`vehicleID`,`vehicleModel`,`vehicleColor`,`vehicleType`) VALUES ('$platenumber','$vmodel','$vcolor','$vtype')");

if($q){
    http_response_code(201);
    $message['status'] = "Success";
}else{
    http_response_code(422);
    $message['status'] = "Error";
}

echo json_encode($message);
echo mysqli_error($conn);
?>