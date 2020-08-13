var images=["resource/newyear1.jpeg",
            "resource/newyear1.jpeg",
            "resource/newyear1.jpeg",
            "resource/newyear1.jpeg",
            "resource/newyear1.jpeg",
];
var i=0;

function slides(){

    document.getElementsById("images").src = images[i];

    if(i<(images.length-1))
        i++;
        else
        i=0;

}
setInterval (slides,2000)


