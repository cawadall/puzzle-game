//AÑADIR UN PAR DE IMÁGENES MAS

var selected = false;
var images = ["img1.png", "img2.png", "img3.png", "img4.png", "img5.png", "img6.png"]
var image1_slices = ["img1_1.png", "img1_2.png", "img1_3.png", "img1_4.png", "img1_5.png", "img1_6.png", "img1_7.png", "img1_8.png", "img1_9.png"];
var image2_slices = ["img2_1.png", "img2_2.png", "img2_3.png", "img2_4.png", "img2_5.png", "img2_6.png", "img2_7.png", "img2_8.png", "img2_9.png"];
var image3_slices = ["img3_1.png", "img3_2.png", "img3_3.png", "img3_4.png", "img3_5.png", "img3_6.png", "img3_7.png", "img3_8.png", "img3_9.png"];
var image4_slices = ["img4_1.png", "img4_2.png", "img4_3.png", "img4_4.png", "img4_5.png", "img4_6.png", "img4_7.png", "img4_8.png", "img4_9.png"];
var image5_slices = ["img5_1.png", "img5_2.png", "img5_3.png", "img5_4.png", "img5_5.png", "img5_6.png", "img5_7.png", "img5_8.png", "img5_9.png"];
var image6_slices = ["img6_1.png", "img6_2.png", "img6_3.png", "img6_4.png", "img6_5.png", "img6_6.png", "img6_7.png", "img6_8.png", "img6_9.png"];
var gameover = ["go1.jpg", "go2.jpg", "go3.jpg", "go4.jpg", "go5.jpg", "go6.jpg", "go7.jpg", "go8.jpg", "go9.jpg"];
var length = 0;
var td, interval,interval2, starthour;

function chooseImage() {
    // Get the modal
    var modal = document.getElementById('myModal');

    // Get the button that opens the modal
    var btn = document.getElementById("myBtn");
    var images = modal.getElementsByTagName("img");
    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];
    modal.style.display = "block";

    // When the user clicks on the button, open the modal
    btn.onclick = function() {
        modal.style.display = "block";
    }

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        modal.style.display = "none";
    }
   // TIENE QUE HABER OTRA FORMA DE HACER ESTO
    images[0].onclick = function() {
        modal.style.display = "none";
        startGame(images[0]);
    };
    images[1].onclick = function() {
            modal.style.display = "none";
            startGame(images[1]);
        };
    images[2].onclick = function() {
            modal.style.display = "none";
            startGame(images[2]);
        };
    images[3].onclick = function() {
            modal.style.display = "none";
            startGame(images[3]);
        };
    images[4].onclick = function() {
            modal.style.display = "none";
            startGame(images[4]);
        };
    images[5].onclick = function() {
            modal.style.display = "none";
            startGame(images[5]);
        };
    //////////////////////////////////////////////////////////
    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
    clearInterval(interval2);
    interval2 = setInterval(opacity, 6000);
    clearInterval(interval);
    interval = setInterval(carousel, 8000);
}

function opacity() {
    var elements = document.getElementById("carousel");
    elements = elements.getElementsByTagName("img");
    for (var i=0; i<elements.length; i++) {
        elements[i].style.opacity = 0;
    }
    clearInterval(interval2);
    interval2 = setInterval(opacity, 8000);
}

function carousel() {
    var car = images;
    var elements = document.getElementById("carousel");
    elements = elements.getElementsByTagName("img");

    length = (length+elements.length >= images.length) ? 0: length + elements.length;
    for (var i=0; i<elements.length; i++) {
        elements[i].style.opacity = 1;
        elements[i].src = car[i+length];
    }
}


function styleReset(id1, id2) {

    document.getElementById(id1).style = "border: 1px solid black";
    document.getElementById(id2).style = "border: 1px solid black";
}

function isWhiteSpace(src1, src2) {
    src1 = src1.split("/")
    src1 = src1[src1.length-1];
    src2 = src2.split("/")
    src2 = src2[src2.length-1];
    if (src1 != "white.png" && src2 != "white.png")
    {
        alert("You can only swap with the white space");
        return false;
    } else {
        return true;
    }
}

function validMovement(tag1, tag2) {

    if (tag1 == "pos1" && tag2 == "pos2" || tag1 == "pos1" && tag2 == "pos4")
        {return true;}
    else if (tag1 == "pos2" && tag2 == "pos1" || tag1 == "pos2" && tag2 == "pos3" || tag1 == "pos2" && tag2 == "pos5")
        {return true;}
    else if (tag1 == "pos3" && tag2 == "pos2" || tag1 == "pos3" && tag2 == "pos6")
        {return true;}
    else if (tag1 == "pos4" && tag2 == "pos1" || tag1 == "pos4" && tag2 == "pos5" || tag1 == "pos4" && tag2 == "pos7")
        {return true;}
    else if (tag1 == "pos5" && tag2 == "pos2" || tag1 == "pos5" && tag2 == "pos4" || tag1 == "pos5" && tag2 == "pos6" || tag1 == "pos5" && tag2 == "pos8")
        {return true;}
    else if (tag1 == "pos6" && tag2 == "pos3" || tag1 == "pos6" && tag2 == "pos5" || tag1 == "pos6" && tag2 == "pos9")
        {return true;}
    else if (tag1 == "pos7" && tag2 == "pos4" || tag1 == "pos7" && tag2 == "pos8")
        {return true;}
    else if (tag1 == "pos8" && tag2 == "pos5" || tag1 == "pos8" && tag2 == "pos7" || tag1 == "pos8" && tag2 == "pos9")
        {return true;}
    else if (tag1 == "pos9" && tag2 == "pos6" || tag1 == "pos9" && tag2 == "pos8")
        {return true;}
    else {return false;}
}

function change(e) {
    var done = true;
    if (! selected)
    {
        tag_id1 = e.id;
        document.getElementById(tag_id1).style = "border: 3px solid orange";
        img1 = document.getElementById(tag_id1).src;
        selected = true;

    } else {
	    tag_id2 = e.id;
        img2 = document.getElementById(tag_id2).src;
        if (isWhiteSpace(img1, img2))
        {
            if (validMovement(tag_id1, tag_id2))
            {
                document.getElementById(tag_id2).style = "border: 3px solid orange";
                document.getElementById(tag_id1).src = img2;
                document.getElementById(tag_id2).src = img1;
            } else {
                alert("Invalid movement. You can only swap pieces which there is a border in common with the white space.");
            }
        }
        selected = false;
        styleReset(tag_id1, tag_id2);
    }
    var done = [];
    for (var i=0; i<td.length; i++) {
        if (i != 8)
        {
            img = td[i].src.split("/");
            done.push(img[img.length-1]);
        }
    }
    var compare = new Array();
    var slices = [image1_slices, image2_slices, image3_slices, image4_slices, image5_slices, image6_slices];
    for (var j=0; j<slices.length; j++) {
        var won = true;
        compare = slices[j];
        for (var i=0; i<8; i++) {
            if (compare[i] != done[i])
            {
                won = false;
            }
        }
        if (won)
        {
            td[8].src = compare[8];
            alert("You win! Choose another puzzle");
            chooseImage();
        }

    }

}

function lose() {
  td = document.getElementById("game");
  td = td.getElementsByTagName("img");
  console.log("entro");
  for (var i=0; i<td.length; i++) {
    td[i].src = gameover[i];
  }

}


function startGame(tag) {

    starthour = new Date();

    var img = tag.src;
    img = img.split("/");
    img = img[img.length-1];
    document.getElementById("solve").src = img;

    var slices = [];
    switch(img) {
    case "img1.png":
        for (var i=0; i<image1_slices.length; i++) {
            slices[i] = image1_slices[i];
        }
        break;
    case "img2.png":
        for (var i=0; i<image2_slices.length; i++) {
            slices[i] = image2_slices[i];
        }
        break;
    case "img3.png":
        for (var i=0; i<image3_slices.length; i++) {
            slices[i] = image3_slices[i];
        }
        break;
    case "img4.png":
        for (var i=0; i<image4_slices.length; i++) {
            slices[i] = image4_slices[i];
        }
        break;
    case "img5.png":
        for (var i=0; i<image5_slices.length; i++) {
            slices[i] = image5_slices[i];
        }
        break;
    case "img6.png":
        for (var i=0; i<image6_slices.length; i++) {
            slices[i] = image6_slices[i];
        }
        break;
    default:
        console.log("Q a pasao");
    }
    var stop = slices.length;
    td = document.getElementById("game");
    td = td.getElementsByTagName("img");
    for (var i=0; i<stop; i++) {
        if (i != 8)
        {
            var index = Math.round(Math.random()*(slices.length-2));
            console.log(index);
            td[i].src = slices[index];
            //meter en la posición de la tabla
            slices.splice(index,1);
        } else {
            td[i].src = "white.png";
        }
    }
    setInterval(gameTime, 1000);
}


function gameTime() {
    var msecPerMinute = 1000 * 60;
    var msecPerHour = msecPerMinute * 60;
    var dateMsec = starthour.getTime();

    var actual = new Date();
    var diference = actual.getTime() - dateMsec;
    // Calculate the hours, minutes, and seconds.
    var hours = Math.floor(diference / msecPerHour );
    diference= diference - (hours * msecPerHour );

    var minutes = Math.floor(diference / msecPerMinute );
    diference = diference - (minutes * msecPerMinute );

    var seconds = Math.floor(diference / 1000 );

    // Display the result.
    var hour = hours + " : " + minutes + " : " + seconds;
    document.getElementById("timing").innerHTML = hour;
    if (minutes>20)
    {
        lose();
        chooseImage();
    }


}
