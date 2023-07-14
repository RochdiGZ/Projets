document.body.onload=function() {
    imagesNumber=13;
    position=0;
    container=document.getElementById("container");
    left=document.getElementById("left");
    right=document.getElementById("right");
    container.style.width=(1000*imagesNumber) + "px";
    for(i=1;i<=imagesNumber;i++) {
        div=document.createElement("div");
        div.className="photo";
        div.style.backgroundImage="url('images/project" + i + ".png')";
        container.appendChild(div);
    }
    hiddenArrow();
}

left.onclick=function() {
    if (position > 1 - imagesNumber)
        position--;
    container.style.transform="translate(" + position*1000 + "px)";
    container.style.transition="all 0.5s ease";
    hiddenArrow();
}

right.onclick=function() {
    if (position < 0)
        position++;
    container.style.transform="translate(" + position*1000 + "px)";
    container.style.transition="all 0.5s ease";
    hiddenArrow();
}

function hiddenArrow() {
    if (position == 1 - imagesNumber)
        left.style.visibility="hidden";
    else
        left.style.visibility="visible";
    if (position == 0)
        right.style.visibility="hidden";
    else
        right.style.visibility="visible";
}
