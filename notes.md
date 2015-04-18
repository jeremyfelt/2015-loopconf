# Zen and the Art of Multisite Maintenance

30 minutes, should probably leave 5 minutes for questions.

## Introduction 00:00 - 02:00

### The history of multisite

Diagram covering the history from b2 -> b2++ -> WordPress Mu -> Merge with multisite.

### Context of existence.

Why it came to be. What original issues it solved.

* blogs at linux.ie was the original motivation for creating b2++
* The MU changelog is a great exploration in a sort of off the cuff coding expirement that turned into a more mature project. Som eplugins that may have been working for blogs.linux.ie were ditched, WP merges seemed painful, sometimes completely random commits came through. (98, 99). When considered in the context of what MU was being used for at first, it all kind of makes more sense. And that's what drove it.
* If you look at the original changesets once Donncha started to adapt WPMU for use with WordPress.com, you'll see the focus on Smarty templates. It really had a different ideology than WordPress and a bunch was shaved off quickly.
* Changesets 81/82 for multiDB.
* Changesets 84 for smarty removal


### Objectives of the talk.

* Walk through the structure of multisite—how it's built from the database schema to code.
* Cover the most important things you should be aware of while working in multisite.
* Explore useful ways to extend multisite and some common annoyances.
* A bit of the future of multisite and some questions.

## The structure of multisite 02:00 - 07:00

* Table schema
* Conceptual architecture
* Shared users, terms, other stuff.
* A painful UI.

### Database

* Table schema
* Transition from individual site to network of sites
* How to handle multiple networks

### Code

## Tricks 12:00 - 17:00

* switch_to_blog
* sunrise.php
	* Setting current_site, current_blog

## Extending multisite 17:00 - 22:00

### Plugins

* Domain Mapping / Mercator
* WP Multi Network
* WSUWP Platform

### Scaling multisite, server considerations

* HyperDB
* So many problems from 10 years ago are basically solved by hardware advancements. Now you can avoid sweating some of the small stuff just by having a fairly powerful server.
* Tie in the Corona book and horizontal scaling vs vertical scaling.
* Lyceum was an exploration of the vertical scaling model - same DB tables for all sites so that you could easily share information. Now we have technology like Elasticsearch, which makes it fairly cheap to send a bunch of data to one place for the sole purpose of remixing and pulling it. Ehh, not the sole purpose.

## Future of multisite 22:00 - 25:00

## Questions