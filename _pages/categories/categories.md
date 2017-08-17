---
layout: page
title:  "Categories"
permalink: "/categories/"
---

<ul>
	{% assign categories = site.categories | sort %}
	{% for category in categories %}
	  <li>
	  	<a href="{{ category | first | slugify }}">
	    	{{ category[0] | capitalize | replace:'-', ' ' }} ({{ category | last | size }})
	    </a>
	  </li>
	{% endfor %}
</ul>