//This should be a list of the files in ./img
let images = [
	"cat.gif",
	"faust.png",
	"faust-office.png",
	"taric.png",
	"sin.png"
];

num = images.length;
image = images[Math.floor(Math.random() * num)];

let imageHTML = document.getElementById("image");
imageHTML.innerHTML = "<img src='./art/" + image + "'/>";
