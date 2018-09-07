/* Retrieve the href/path to the current page*/
var href = document.location.href;
var seperatorst = "&nbsp; <img src=\"/static/images/breadcrumb/breadcrumb-separator.png \" /> ";
var elem = href.split("/");
var maxIdx = elem.length - 1;

function gettext(x) {
	return x;
}

function writebreadcrumb() {
	if (maxIdx == 3 && elem[maxIdx] == "") {
		return "<div class='breadcrumb'>" + gettext("Home") + "</div>";
	}

	/* Parse the link to the home page */
	path = "<div class='breadcrumb'><a href=\"" + href.substring(0, href.indexOf("/" + elem[2]) + elem[2].length + 1) + "/\">" + gettext("Home")  + "</a>";

	/* For landing pages of each section */
	if ((maxIdx == 3 && elem[3] != "") || (maxIdx == 4 && elem[maxIdx] == "index.html")
		|| (maxIdx == 4 && elem[maxIdx] == "")) {
		path += seperatorst + majorSectionName[elem[3]];
	} else if (maxIdx >= 4 && elem[3] != "" && elem[4] != "index.html") {

		path += seperatorst + "<a href=\"" + href.substring(0, href.indexOf("/" + elem[3]) + elem[3].length + 1)
				+ "/\">" + majorSectionName[elem[3]] + "</a>";

		/* Remove the pound sign as necessary */
		var pound_sign_pos = elem[4].indexOf("#");
		if (pound_sign_pos >= 0) {
			elem[4] = elem[4].substring(0, pound_sign_pos);
		}

		if (elem[3] == "voyage" && (elem[4] == "understanding-db")) {
			path += seperatorst + gettext("Understanding the Database");
        } else if (elem[3] == "voyage" && (elem[4] == "source")) {
            path += seperatorst + gettext("Understanding the Database");
		} else if (elem[3] == "assessment" && (elem[4] == "essays")) {
			path += seperatorst + gettext("Essays");
        } else if (elem[3] == "resources" && (elem[4] == "images")) {
		}else {
			/* Add successive elements and seperators */
			for (var i = 4; i < maxIdx; i++) {
				/*path += seperatorst + "<a href=\"" + href.substring(0, href.indexOf("/" + elem[i]) + elem[i].length + 1)
				+ "/\">" + elem[i] + "</a>";*/
				var prettyName = elem[i];
				prettyName = prettyName.replace('_', ' ');
				prettyName = prettyName.charAt(0).toUpperCase() + prettyName.slice(1);
				path += seperatorst + "<span>" + gettext(prettyName) + "</span>";
			}
		}

		if (elem[maxIdx] != "index.html") {
			/* The title of the index page to each section is never included more than once */
			path += seperatorst + "<span id=\"breadcrumb-lastelem\">" + document.title + "</span>";
		}
	}
	path += "</div>";
	/* Output the bread crumb */
	return path;
}


// Code for new UI
function prettyName(name) {
    // Replace underscores by spaces and captitalize the first letter.
    name = name || "";
    name = name.replace('_', ' ').replace('-', ' ');
    return name.charAt(0).toUpperCase() + name.slice(1);
}

function BreadCrumbs(labels, home, ulClass, liClass) {
    var self = this;
    self.labels = labels || {};
    self.home = home || "Home";
    self.ulClass = ulClass || "breadcrumb";
    self.liClass = liClass || "breadcrumb-item";

    var getItem = function(url, label) {
				// replace voyage with voyage/understanding-db, aka the about page
				if (url.indexOf("voyage", url.length - "voyage".length) !== -1) {
					url = url.concat("/understanding-db");
				}
        return '<li class="' + self.liClass + '"><a href="' + url + '">' + gettext(label) + '</a></li>';
    };

    self.getUI = function(url, title) {
        url = url || document.location.href;
        var levels = url.replace(/(^\w+:|^)\/\//, '').replace(/\/$/, '').split('/');
        if (levels.length <= 1) {
            return '<span class="debug-info">Error producing breadcrumbs!</span>';
        }
        var accUrl = url.match(/(^\w+:|^)\/\//)[0] + levels[0];
		var html = '<ol class="' + self.ulClass + '">' + getItem(accUrl, self.home);
		var maxLevel = title ? levels.length - 1 : levels.length;
        for (var i = 1; i < maxLevel; ++i) {
            var label = self.labels.hasOwnProperty(levels[i]) ? self.labels[levels[i]] : prettyName(levels[i]);
            accUrl += '/' + levels[i];
            html += getItem(i < levels.length - 1 ? accUrl : "#", label);
        }
        if (title) {
            html += getItem("#", gettext(title));
        }
        html += "</ol>";
        return html;
    };
}

var breadCrumbs = new BreadCrumbs({
    'voyage': 'Voyages Database',
    'assessment': 'Assessing the Slave Trade',
    'education': 'Educational Materials',
    'search': 'Search the Voyages Database',
		'download': 'Downloads',
		'understanding-db': 'Understanding the Database',
});