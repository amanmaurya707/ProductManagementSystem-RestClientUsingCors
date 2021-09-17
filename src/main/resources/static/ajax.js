$(document).ready(function(){
$.ajax({url:"http://localhost:8080/PMS/product/1005"}).then(function(data,status,xhr){
var obj=JSON.parse(JSON.stringify(data));

$("#id1").html(obj.productId);
$("#id2").html(obj.productName);
$("#id3").html(obj.price);
$("#id4").html(obj.manufacturer);
});



});