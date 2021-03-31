var canvas = new fabric.Canvas("my_canvas");

player_x = 10;
player_y = 10;

block_image_width = 30;
block_image_height = 30;

var player_image = "";
var block_image = "";

function player_update(){
    fabric.Image.fromURL("player.jpg", function(Img){
        player_image = Img;
        player_image.scaleToWidth(150);
        player_image.scaleToHeight(140);
        player_image.set({
        top:player_y, left:player_x});
        canvas.add(player_image);
    });
}

function new_image(get_image) {
    fabric.Image.fromURL( get_image, function(Img){
    block_image = Img;
    block_image.scaleToWidth(block_image_width);
    block_image.scaleToHeight(block_image_height);
    block_image.set({
    top:player_y, left:player_x});
    canvas.add(block_image);
});
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e) {
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if(e.shiftKey == true && keyPressed == '80') {
        console.log("p and shift pressed together");
        block_image_width = block_image_width + 10;
        block_image_height = block_image_height + 10;
        document.getElementById("current_width").innerHTML = block_image_width;
        document.getElementById("current_height").innerHTML = block_image_height;
    }
    if(e.shiftKey == true && keyPressed == '77') {
        console.log("m and shift pressed together");
        block_image_width = block_image_width - 10;
        block_image_height = block_image_height - 10;
        document.getElementById("current_width").innerHTML = block_image_width;
        document.getElementById("current_height").innerHTML = block_image_height;
    }
    if(keyPressed = '38'){
        up();
        console.log("up"); 
    }
    if(keyPressed = '40'){
        down();
        console.log("down"); 
    }
    if(keyPressed = '37'){
        left();
        console.log("left"); 
    }
    if(keyPressed = '39'){
        right();
        console.log("right"); 
    }
    if(keyPressed = '66'){
        new_image("brick.jpg");
        console.log("b"); 
    }
    if(keyPressed = '68'){
        new_image("dark_green.png");
        console.log("d"); 
    }
    if(keyPressed = '79'){
        new_image("glowstone.png");
        console.log("o"); 
    }
    if(keyPressed = '71'){
        new_image("grass.png");
        console.log("g"); 
    }
    if(keyPressed = '73'){
        new_image("light_green.png");
        console.log("i"); 
    }
    if(keyPressed = '76'){
        new_image("log.jpg");
        console.log("l"); 
    }
    if(keyPressed = '78'){
        new_image("netherrack.jpg");
        console.log("n"); 
    }
    if(keyPressed = '83'){
        new_image("stone.jpg");
        console.log("s"); 
    }
    if(keyPressed = '89'){
        new_image("yellow_brick.png");
        console.log("y"); 
    }
}

function up(){
    if(player_y >=0){
    console.log("block image height = " + block_image_height);
    console.log("When Up arrow key is pressed, X = " + player_x + " , Y = "+player_y);
    canvas.remove(player_image);
    player_update();
    }
}
function down(){
    if(player_y <=450){
    console.log("block image height = " + block_image_height);
    console.log("When Down arrow key is pressed, X = " + player_x + " , Y = "+player_y);
    canvas.remove(player_image);
    player_update();
    }
}
function left(){
    if(player_x >=0){
    console.log("block image width = " + block_image_width);
    console.log("When Left arrow key is pressed, X = " + player_x + " , Y = "+player_y);
    canvas.remove(player_image);
    player_update();
    }
}
function left(){
    if(player_x <=850){
    console.log("block image width = " + block_image_width);
    console.log("When Right arrow key is pressed, X = " + player_x + " , Y = "+player_y);
    canvas.remove(player_image);
    player_update();
    }
}