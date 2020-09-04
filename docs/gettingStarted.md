---
id: gettingStarted
title: Getting Started
---

All data is provided in json parsable format.

### Resources & Endpoints

<div class="code"><a href="/docs/subject">subject</a></div>

* [retrieve all subject codes](subject#get-subject) : `GET /subject`

<div class="code"><a href="/docs/course">course</a></div>

* [retrieve all courses at UBC](course/index.md) : `GET /course`
* [retrieve all courses in a subject](course/{subject}.md) : `GET /course/{subject}`

<div class="code"><a href="/docs/section">section</a></div>

* [retrieve sections in a course with only basic data](section/{subject}{number}.md) : `GET /section/{subject}/{number}`

<div class="code"><a href="/docs/sectionInfo">sectionInfo</a></div>

* [retrieve all sections at UBC](sectionInfo/index.md) : `GET /sectionInfo`
* [retrieve all sections for a subject](sectionInfo/{subject}.md) : `GET /sectionInfo/{subject}`
* [retrieve all sections for a course](sectionInfo/{subject}{number}.md) : `GET /sectionInfo/{subject}/{number}`
* [retrieve section for a specified section](sectionInfo/{subject}{number}{section}.md) : `GET /sectionInfo/{subject}/{number}/{section}`

---

### How to get realtime data
All endpoints by default provide cached data.

If you want to obtain realtime data, specify a query parameter `realtime`. Set this equal to 1 and we will scrape the data for you.

example: <div class="code"><a target="_blank" href="https://api.ubccourses.com/sectionInfo/CPSC/221/101?realtime=1">https://api.ubccourses.com/sectionInfo/CPSC/221/101?realtime=1</a></div>

---

### Terminology for Request Parameters

```subject``` - subject/department code. ie ```CPSC```

```course``` - course number. ie ```221``` in CPSC 221

```section``` - section number or lab number. ie ```L1A``` in CPSC 221 L1A