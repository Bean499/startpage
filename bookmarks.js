let bookmarks = [
	{
		title: "work",
		links: [
			{ name: "notion", url: "https://www.notion.so" },
			{ name: "github", url: "https://www.github.com" },
			{ name: "gmail", url: "https://www.gmail.com" },
			{ name: "drive", url: "https://www.drive.google.com" },
			{ name: "homework", url: "https://www.satchelone.com/todos/upcoming" },
		]
	},

	{
		title: "media",
		links: [
			{ name: "youtube", url: "https://www.youtube.com" },
			{ name: "yt music", url: "https://music.youtube.com" },
			{ name: "twitch", url: "https://www.twitch.tv" },
			{ name: "soundcloud", url: "https://www.soundcloud.com" },
			{ name: "netflix", url: "https://www.netflix.com" },
		]
	},

	{
		title: "games",
		links: [
			{ name: "d&d 5e wiki", url: "http://www.dnd5e.wikidot.com" },
			{ name: "5etools", url: "http://5e.tools" },
			{ name: "r/bardmains", url: "https://www.reddit.com/r/bardmains" },
			{ name: "r/guiltygear", url: "https://www.reddit.com/r/guiltygear" },
			{ name: "dustloop", url: "https://www.dustloop.com/wiki/index.php?title=Guilty_Gear_-Strive-" },
		]
	},

	{
		title: "computing",
		links: [
			{ name: "arch wiki", url: "https://wiki.archlinux.org/" },
			{ name: "/g/", url: "https://boards.4channel.org/g/" },
			{ name: "r/transprogrammer", url: "https://www.reddit.com/r/transprogrammer" },
			{ name: "r/unixporn", url: "https://www.reddit.com/r/unixporn" },
			{ name: "r/battlestations", url: "https://www.reddit.com/r/battlestations" },
		]
	},
];

let special = { name: "summer spreadsheet", icon: "🌞", url: "https://docs.google.com/spreadsheets/d/1jhm-1ib7uQZaTQgNzjc6OsfLbzqHu1XOfcnA-Cu2R-o/edit#" }

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

let specialContainer = document.getElementById("special");

specialContainer.innerHTML = ("<a href='" + special.url + "'><span class='blinking'>" + special.icon + " </span>" + special.name + "</a>");
