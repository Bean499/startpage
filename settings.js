let themes = [
	{
		image: "cat.gif",
		icon: "🐱"
	},
	{
		image: "faust.png",
		icon: "💀"
	}
];

theme = themes[1];

let imageHTML = document.getElementById("image");
imageHTML.innerHTML = "<img src='./art/" + theme["image"] + "'/>"

let iconHTML = document.getElementById("icon");
iconHTML.innerHTML = theme["icon"];
