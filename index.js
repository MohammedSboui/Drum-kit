var numberOfDrumbuttons = document.querySelectorAll(".drum").length;  

for(var i = 0; i< numberOfDrumbuttons;i++ ){

document.querySelectorAll(".drum")[i].addEventListener("click",function handeClick(){
    alert("I got clicked");
});
}
