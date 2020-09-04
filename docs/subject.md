---
id: subject
title: subject
---

## Schema

```json
Subject {
  subject: string;
  title: string;
  faculty: string;
  endpoint: string;
  link: string;
  hasCourses: boolean;
  lastUpdated: Date;
}
```

## Example
```json
{
  subject: "CPSC",
  title: "Computer Science"
  faculty: "Faculty of Science",
  endpoint: "/course/CPSC",
  link: "https://courses.students.ubc.ca/cs/courseschedule?pname=subjarea&tname=subj-department&dept=CPSC",
  hasCourses: true,
  lastUpdated: "2020-08-05T02:57:27.738Z",
}
```

## Endpoints

### GET /subject

Gets all subject codes in UBC

**example** : <div class="code"><a target="_blank" href="https://api.ubccourses.com/subject">https://api.ubccourses.com/subject</a></div>

#### Success Response

**Code** : `200 OK`

**Content examples** 

returns all subjects in UBC in an array in json format

example
```json
{
  "subjects": [
    {
      "subject" : "AANB",
      "title": "Applied Animal Biology",
      "faculty": "Faculty of Land and Food Systems",
      "endpoint": "/course/AANB",
      "link": "/cs/courseschedule?pname=subjarea&tname=subj-department&dept=AANB",
      "hasCourses": true
    },
    {
      "subject": "CPSC",
      "title": "Computer Science",
      "faculty": "Faculty of Science",
      "endpoint": "/course/CPSC",
      "link": "/cs/courseschedule?pname=subjarea&tname=subj-department&dept=CPSC",
      "hasCourses": true
    }
  ]
  ...
}
```

#### Error Responses
* None

#### Notes

* None