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
		title: "reddit",
		links: [
			{ name: "programming", url: "reddit.com/r/programming" },
			{ name: "transprogrammer", url: "reddit.com/r/transprogrammer" },
			{ name: "unixporn", url: "reddit.com/r/unixporn" },
			{ name: "battlestations", url: "reddit.com/r/battlestations" },
			{ name: "mk", url: "reddit.com/r/mechanicalkeyboards" },
		]
	},
];

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
