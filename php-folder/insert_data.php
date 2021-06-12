<?php 
include "connect.php";
$info = json_decode(file_get_contents("php://input"));
if(count($info)>0){
    $platenumber = mysqli_real_escape_string($conn,$info->platenumber);
    $vmodel = mysqli_real_escape_string($conn,$info->vmodel);
    $vcolor = mysqli_real_escape_string($conn,$info->vcolor);
    $vtype = mysqli_real_escape_string($conn,$info->vtype);

    $query = "INSERT INTO `tb_vehicle`(`vehicleID`,`vehicleModel`,`vehicleColor`,`vehicleType`) VALUES ('$platenumber','$vmodel','$vcolor','$vtype')";
    if(mysqli_query($conn,$query))
    {
        echo "Insert Data Successfully";
    }else{
        ehco "Failed";
    }

}

?>