---
id: gettingStarted
title: Getting Started
---

All data is provided in json parsable format.

### Resources & Endpoints

<div class="code"><a href="/docs/subject">subject</a></div>

* [retrieve all subject codes](subject#get-subject) : `GET /subject`

<div class="code"><a href="/docs/course">course</a></div>

* [retrieve all courses at UBC](course#get-coursesubject) : `GET /course`
* [retrieve all courses in a subject](course#get-course) : `GET /course/{subject}`

<div class="code"><a href="/docs/section">section</a></div>

* [retrieve sections in a course with only basic data](section#get-sectionsubjectcourse) : `GET /section/{subject}/{course}`

<div class="code"><a href="/docs/sectionInfo">sectionInfo</a></div>

* [retrieve all sections at UBC](sectionInfo#get-sectioninfo) : `GET /sectionInfo`
* [retrieve all sections for a subject](sectionInfo#get-sectioninfosubject) : `GET /sectionInfo/{subject}`
* [retrieve all sections for a course](sectionInfo#get-sectioninfosubjectcourse) : `GET /sectionInfo/{subject}/{course}`
* [retrieve section for a specified section](sectionInfo#get-sectioninfosubjectcoursesection) : `GET /sectionInfo/{subject}/{course}/{section}`

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