let bookmarks = [
	{
		title: "work",
		links: [
			{ name: "notion", url: "notion.so" },
			{ name: "github", url: "github.com" },
			{ name: "gmail", url: "gmail.com" },
			{ name: "drive", url: "drive.google.com" },
			{ name: "homework", url: "satchelone.com/todos/upcoming" },
		]
	},

	{
		title: "media",
		links: [
			{ name: "youtube", url: "youtube.com" },
			{ name: "twitch", url: "twitch.tv" },
			{ name: "soundcloud", url: "soundcloud.com" },
			{ name: "netflix", url: "netflix.com" },
		]
	},

	{
		title:"games",
		links: [
			{ name: "d&d 5e wiki", url: "dnd5e.wikidot.com" },
			{ name: "r/bardmains", url: "reddit.com/r/bardmains" },
			{ name: "r/guiltygear", url: "reddit.com/r/guiltygear" },
			{ name: "dustloop", url: "dustloop.com/wiki/index.php?title=GGST" },
		]
	},

	{
		title: "computing",
		links: [
			{ name: "r/programming", url: "reddit.com/r/programming" },
			{ name: "r/transprogrammer", url: "reddit.com/r/transprogrammer" },
			{ name: "r/unixporn", url: "reddit.com/r/unixporn" },
			{ name: "r/battlestations", url: "reddit.com/r/battlestations" },
			{ name: "r/mk", url: "reddit.com/r/mechanicalkeyboards" },
		]
	},
];

//			{ name: "", url: "reddit.com/r/" },

let container = document.getElementById("bookmarks");

let html = [];

for (i = 0; i < bookmarks.length; i++) {
	html.push("<div class='category'>");
	html.push("<div class='links'>");
	html.push("<li class='title'>" + bookmarks[i].title + "</li>")
	for (j = 0; j < bookmarks[i].links.length; j++) {
		html.push("<li><a href='" + bookmarks[i].links[j].url + "'>" + bookmarks[i].links[j].name + "</a></li>")
	}
	html.push("</div></div>")
}

container.innerHTML = html.join("");
