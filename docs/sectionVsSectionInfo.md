---
id: sectionVsSectionInfo
title: What's the difference between Section vs SectionInfo
---

... That's a really good question. There's actually two ways to scrape section data from the ssc.

1. By scraping each row in the table by going to a course page.
2. By directly going to the ssc page for a specific section

The first method is **faster**, but contains **less information**. To get all section data for a specific course, our scraper visits the course site on the ssc, and just parses each table row into a section. From the time you submitted a realtime request, you'll only have to wait for our scraper to access one page.

The second method is **slower**, but contains **more information**. To get all section data for a specific course, our scraper needs to visit the course site on the ssc, and then needs to visit the page for every section. From the time you submitted a realtime request, you'll have to wait for our scraper to access many, many pages.

#### So here comes the real question... which one am I supposed to use?

If you're not using the [realtime flag](gettingStarted#how-to-get-realtime-data), then use sectionInfo. it contains way more useful data. However, if you need realtime data to determine if you can register in any section within a course, use section.