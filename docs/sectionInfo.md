---
id: sectionInfo
title: sectionInfo
---

## Schema

```json
SectionInfo {
    status: string,
    activity : string,
    name: string,
    subject: string,
    course: string,
    section: string,
    textbooks: Array<string>;
    prof: string; 
    term: string;
    year: string;
    schedule: Array<{
      day: string; 
      start_time: string; 
      end_time: string;
      term: string;
      building?: string;
      room?: string;
    }>;
    total_seats_remaining: number;
    currently_registered: number;
    general_seats_remaining: number;
    restricted_seats_remaining: number;
    seats_reserved_for: Array<string>;
    credits: string;
    link: string;
    lastUpdated: Date;
}
```

## Example
```json
{
  status: "restricted",
  activity: "Web-Oriented Course",
  name: "CPSC 221 101 (Web-Oriented Course)",
  subject: "CPSC",
  course: "221",
  section: "101",
  textbooks: [
  "Data Abstraction & Problem Solving With C++ 7/E",
  "Etext Rental : Data Abstraction & Problem Solving With C++ 7/E"
  ],
  prof: "HEEREN, CINDA",
  term: "1",
  year: "2020",
  schedule: [
    {
      day: "Mon",
      term: "1",
      start_time: "14:00",
      end_time: "15:00",
      building: "",
      room: ""
    },
    {
      day: "Wed",
      term: "1",
      start_time: "14:00",
      end_time: "15:00",
      building: "",
      room: ""
    },
    {
      day: "Fri",
      term: "1",
      start_time: "14:00",
      end_time: "15:00",
      building: "",
      room: ""
    }
  ],
  total_seats_remaining: 56,
  currently_registered: 135,
  general_seats_remaining: 0,
  restricted_seats_remaining: 56,
  seats_reserved_for: [
  "with one of these specializations: ****BUCC,****BUCS",
  "with one of these specializations: ****COMI",
  "with one of these specializations: MAJ CPSC,CMJ CPSC,HON CPSC,CHN CPSC",
  "in one of these programs: BCS",
  "with one of these specializations: MAJ MASC"
  ],
  course_avg: 0,
  credits: "4",
  link: "https://courses.students.ubc.ca/cs/courseschedule?pname=subjarea&tname=subj-section&dept=CPSC&course=221&section=101",
  lastUpdated: "2020-09-04T10:13:13.805Z"
}
```

## Endpoints

### GET /sectionInfo/:subject/:course/:section

Get the details of the courses' section with the given academic year, subject, number, and section.

#### Optional Parameter

`realtime`: if this is equal to 1, the response will provide data freshly scraped from the ssc site

**examples** :
<div class="code"><a target="_blank" href="https://api.ubccourses.com/sectionInfo/CPSC/221/101">https://api.ubccourses.com/sectionInfo/CPSC/221/101</a></div>
<div class="code"><a target="_blank" href="https://api.ubccourses.com/sectionInfo/CPSC/221/101?realtime=1">https://api.ubccourses.com/sectionInfo/CPSC/221/101?realtime=1</a></div>

#### Success Response

**Code** : `200 OK`

**Content examples** 

For a specific course given department code, number, and section, return the info for that section.

eg CPSC 221 101

```json
{
  "name": "CPSC 221 101 (Web-Oriented Course)",
  "status": "restricted",
  "activity": "Web-Oriented Course",
  "subject": "CPSC",
  "course": "221",
  "section": "101",
  "textbooks": [
    "Algorithms and Data Structures expensive book"
  ],
  "prof": "HEEREN, CINDA",
  "term": "1",
  "year": "2020",
  "schedule": [
    {
      "day": "Mon",
      "term": "1",
      "start_time": "14:00",
      "end_time": "15:00",
      "building": "",
      "room": ""
    },
    {
      "day": "Wed",
      "term": "1",
      "start_time": "14:00",
      "end_time": "15:00",
      "building": "",
      "room": ""
    },
    {
      "day": "Fri",
      "term": "1",
      "start_time": "14:00",
      "end_time": "15:00",
      "building": "",
      "room": ""
    }
  ],
  "total_seats_remaining": 56,
  "currently_registered": 135,
  "general_seats_remaining": 0,
  "restricted_seats_remaining": 56,
  "seats_reserved_for": [
    "with one of these specializations: ****BUCC,****BUCS",
    "with one of these specializations: ****COMI",
    "with one of these specializations: MAJ CPSC,CMJ CPSC,HON CPSC,CHN CPSC",
    "in one of these programs: BCS",
    "with one of these specializations: MAJ MASC"
  ],
  "credits": "4",
  "link": "https://courses.students.ubc.ca/cs/courseschedule?pname=subjarea&tname=subj-section&dept=CPSC&course=221&section=101",
  "course_avg": 76.55,
  "prof_rating": null
}
```

#### Error Responses

**Condition** : If the section is not found

**Code** : `404 NOT FOUND`

**Content** :
```json
{
  "error": "section not found"
}
```

#### Notes

* None

---

### GET /sectionInfo/:subject/:course

Get the details of all sections under the given academic year, subject, and course number

#### Optional Parameter

`realtime`: if this is equal to 1, the response will provide data freshly scraped from the ssc site

**examples** :
<div class="code"><a target="_blank" href="https://api.ubccourses.com/sectionInfo/CPSC/221">https://api.ubccourses.com/sectionInfo/CPSC/221</a></div>
<div class="code"><a target="_blank" href="https://api.ubccourses.com/sectionInfo/CPSC/221?realtime=1">https://api.ubccourses.com/sectionInfo/CPSC/221?realtime=1</a></div>

#### Success Response

**Code** : `200 OK`

**Content examples**

For a specific course given department code, course, return the info for all sections within that course in a list

eg CPSC 221

```json
[
  {
    // section info here
  },
  {
    // another section info here
  },
]
```

see [GET sectionInfo/:subject/:course/:section](#get-sectioninfosubjectcoursesection)

#### Error Responses

**Condition** : If the course is not found

**Code** : `404 NOT FOUND`

**Content** :
```json
{
  "error": "Course Not Found"
}
```

#### Notes

* None

---

### GET /sectionInfo/:subject/

Get all sections from a subject

#### Optional Parameter

`realtime`: if this is equal to 1, the response will provide data freshly scraped from the ssc site

**examples** :
<div class="code"><a target="_blank" href="https://api.ubccourses.com/sectionInfo/CPSC">https://api.ubccourses.com/sectionInfo/CPSC</a></div>
<div class="code"><a target="_blank" href="https://api.ubccourses.com/sectionInfo/CPSC?realtime=1">https://api.ubccourses.com/sectionInfo/CPSC?realtime=1</a></div>

#### Success Response

**Code** : `200 OK`

**Content examples**

For a specificsubject return the info for all sections within that subject in a list

eg CPSC

```json
[
  {
    // section info here
  },
  {
    // another section info here
  },
]
```

see [GET sectionInfo/:subject/:course/:section](#get-sectioninfosubjectcoursesection)

#### Error Responses

**Condition** : If the course is not found

**Code** : `404 NOT FOUND`

**Content** :
```json
{
  "error": "Subject Not Found"
}
```

#### Notes

* None

---

### GET /sectionInfo/

Get all sections at UBC

**example** :
<div class="code"><a target="_blank" href="https://api.ubccourses.com/sectionInfo">https://api.ubccourses.com/sectionInfo</a></div>

#### Success Response

**Code** : `200 OK`

**Content examples**

```json
[
  {
    // section info here
  },
  {
    // another section info here
  },
]
```

see [GET sectionInfo/:subject/:course/:section](#get-sectioninfosubjectcoursesection)

#### Error Responses

* None

#### Notes

* None