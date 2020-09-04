---
id: section
title: section
---

## Schema

```json
Section {
  name: string;
  subject: string
  course: string;
  section: string;
  status: string; 
  activity: Enum<{
      'Full',
      'Restricted',
      'Available',
      'Blocked'
  }>;
  term: string;
  schedule: Array<{
    day: string; 
    start_time: string; 
    end_time: string;
    term: string;
    building?: string;
    room?: string;
  }>
  interval: string;
  comments: string;
  link: string;
  endpoint: string;
  lastUpdated: Date;
}
```

## Example
```json
{    
    name: "CPSC 221 L1B",
    subject: "CPSC",
    course: "221",
    section: "L1B",
    status: "Full",
    activity: "Laboratory",
    term: "1"
    endpoint: "/sectionInfo/CPSC/221/L1B",
    schedule: [
        {
            day: "Wed",
            term: "1",
            start_time: "9:00",
            end_time: "11:00"
        }
    ],
    comments: "",
    interval: "",
    link: "https://courses.students.ubc.ca/cs/courseschedule?pname=subjarea&tname=subj-section&dept=CPSC&course=221&section=L1B",
    lastUpdated: "2020-09-03T05:15:44.549Z",
}
```

## Endpoints

### GET /section/:subject/:course

return all course sections in a specific course eg. (CPSC 210)

#### Optional Parameter

`realtime`: if this is equal to 1, the response will provide data freshly scraped from the ssc site

**examples** :
<div class="code"><a target="_blank" href="https://api.ubccourses.com/section/CPSC/210/">https://api.ubccourses.com/section/CPSC/210/</a></div>
<div class="code"><a target="_blank" href="https://api.ubccourses.com/section/CPSC/210/?realtime=1">https://api.ubccourses.com/section/CPSC/210/?realtime=1</a></div>

#### Success Response

**Code** : `200 OK`

**Content examples**

For a specific course given department code and number, return all sections

eg CPSC 221

```json
{
    "sections": [
       {
            "status": "Restricted",
            "term": "1",
            "name": "CPSC 221 101",
            "course": "221",
            "section": "101",
            "subject": "CPSC",
            "activity": "Web-Oriented Course",
            "comments": "If all the lab and/or tutorial seats are full the department will ensure that there are enough lab/tutorial seats available for the number of students registered in the course by either adding additional lab/tutorial sections or expenadind the number of seats in the activity once we know how many extra students we will need to accommodate. However, there is no guarantee that these seats will fit your preferred time.  You may need to change your registration in other courses to get access to a lab/tutorial where there are available seats.",
            "schedule": [
                {
                    "day": "Mon",
                    "term": "1",
                    "start_time": "14:00",
                    "end_time": "15:00"
                },
                {
                    "day": "Wed",
                    "term": "1",
                    "start_time": "14:00",
                    "end_time": "15:00"
                },
                {
                    "day": "Fri",
                    "term": "1",
                    "start_time": "14:00",
                    "end_time": "15:00"
                }
            ],
            "endpoint": "/sectionInfo/CPSC/221/101",
            "interval": "",
            "lastUpdated": "2020-08-05T00:41:12.428Z",
            "link": "https://courses.students.ubc.ca/cs/courseschedule?pname=subjarea&tname=subj-section&dept=CPSC&course=221&section=101",
        },
        {
            "status": "Full",
            "term": "1",
            "name": "CPSC 221 L1A",
            "schedule": [
                {
                    "_id": "5f2a0028bb3a6d967b957b48",
                    "day": "Tue",
                    "term": "1",
                    "start_time": "11:00",
                    "end_time": "13:00"
                }
            ],
            "course": "221",
            "section": "L1A",
            "subject": "CPSC",
            "activity": "Laboratory",
            "comments": "",
            "endpoint": "/sectionInfo/CPSC/221/L1A",
            "interval": "",
            "lastUpdated": "2020-08-05T00:41:12.428Z",
            "link": "https://courses.students.ubc.ca/cs/courseschedule?pname=subjarea&tname=subj-section&dept=CPSC&course=221&section=L1A",
        },
    ]
}
```

#### Error Responses

**Condition** : If the departmentCode or course is not found

**Code** : `404 NOT FOUND`

**Content** :
```json
{
  "error": "Course Not Found"
}
```

#### Notes

* None