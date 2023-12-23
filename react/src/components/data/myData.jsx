const data = [
    {
        "name": "Web Development Fundamentals",
        "speaker": "Alice Carter",
        "location": "Los Angeles",
        "date": "2023-03-21",
        "isNew": true
    },
    {
        "name": "Java Essentials",
        "speaker": "Bob Johnson",
        "location": "Chicago",
        "date": "2023-08-26",
        "isNew": true
    },
    {
        "name": "UI/UX Design Principles",
        "speaker": "Eva Williams",
        "location": "New York",
        "date": "2023-08-23",
        "isNew": true
    },
    {
        "name": "Responsive Web Design",
        "speaker": "Daniel Moore",
        "location": "San Francisco",
        "date": "2023-11-03",
        "isNew": true
    },
    {
        "name": "Advanced Java Programming",
        "speaker": "Grace Davis",
        "location": "Boston",
        "date": "2023-11-10",
        "isNew": true
    },
    {
        "name": "Graphic Design Fundamentals",
        "speaker": "Oliver Taylor",
        "location": "Atlanta",
        "date": "2023-09-22",
        "isNew": true
    },
    {
        "name": "Frontend Development Workshop",
        "speaker": "Sophia Clark",
        "location": "Seattle",
        "date": "2023-04-15",
        "isNew": false
    },
    {
        "name": "Java Spring Framework",
        "speaker": "Liam Martinez",
        "location": "Miami",
        "date": "2023-06-18",
        "isNew": true
    },
    {
        "name": "User-Centered Design",
        "speaker": "Ava Adams",
        "location": "Dallas",
        "date": "2023-07-09",
        "isNew": true
    },
    {
        "name": "Backend Development with Java",
        "speaker": "Noah Garcia",
        "location": "Denver",
        "date": "2023-09-30",
        "isNew": false
    },
    {
        "name": "Python for Web Development",
        "speaker": "Emma Wilson",
        "location": "Las Vegas",
        "date": "2023-12-05",
        "isNew": true
    },
    {
        "name": "Cascading Style Sheets (CSS)",
        "speaker": "Mia Thompson",
        "location": "Phoenix",
        "date": "2023-05-30",
        "isNew": true
    },
    {
        "name": "JavaScript Advanced Techniques",
        "speaker": "Jack Lewis",
        "location": "Denver",
        "date": "2023-08-08",
        "isNew": true
    },
    {
        "name": "Software Engineering Principles",
        "speaker": "Sophie Wright",
        "location": "Philadelphia",
        "date": "2023-09-12",
        "isNew": false
    },
    {
        "name": "UI Prototyping with Figma",
        "speaker": "Ethan Clark",
        "location": "Orlando",
        "date": "2023-10-25",
        "isNew": true
    },
    {
        "name": "Mobile App Design",
        "speaker": "Chloe Baker",
        "location": "Portland",
        "date": "2023-11-28",
        "isNew": true
    },
    {
        "name": "Vue.js Fundamentals",
        "speaker": "Jacob Turner",
        "location": "Austin",
        "date": "2023-12-15",
        "isNew": false
    },
    {
        "name": "Database Management with SQL",
        "speaker": "Harper Rodriguez",
        "location": "Chicago",
        "date": "2023-01-10",
        "isNew": true
    },
    {
        "name": "PHP Web Development",
        "speaker": "Lucy Hernandez",
        "location": "Los Angeles",
        "date": "2023-02-05",
        "isNew": false
    },
    {
        "name": "Ethical Hacking Workshop",
        "speaker": "Owen Coleman",
        "location": "New York",
        "date": "2023-03-12",
        "isNew": true
    },
    {
        "name": "React Native Development",
        "speaker": "Isabella Flores",
        "location": "San Francisco",
        "date": "2023-04-09",
        "isNew": true
    },
    {
        "name": "Cloud Computing Essentials",
        "speaker": "Mason Reed",
        "location": "Miami",
        "date": "2023-05-24",
        "isNew": false
    },
    {
        "name": "Angular Fundamentals",
        "speaker": "Zoe Ward",
        "location": "Seattle",
        "date": "2023-06-17",
        "isNew": true
    },
    {
        "name": "Databases and SQL",
        "speaker": "Mason Reed",
        "location": "Dallas",
        "date": "2023-07-20",
        "isNew": false
    },
    {
        "name": "Rapid Prototyping with Figma",
        "speaker": "Aria Bennett",
        "location": "Boston",
        "date": "2023-08-14",
        "isNew": true
    },
    {
        "name": "Blockchain Fundamentals",
        "speaker": "Carter Turner",
        "location": "Atlanta",
        "date": "2023-09-18",
        "isNew": true
    },
    {
        "name": "ASP.NET Core Development",
        "speaker": "Hannah Turner",
        "location": "Las Vegas",
        "date": "2023-10-22",
        "isNew": false
    },
    {
        "name": "Data Science with R",
        "speaker": "Nora Foster",
        "location": "Phoenix",
        "date": "2023-11-25",
        "isNew": true
    },
    {
        "name": "Swift Programming for iOS",
        "speaker": "Olivia Powell",
        "location": "Denver",
        "date": "2023-12-30",
        "isNew": false
    },
    {
        "name": "UI/UX Design Workshop",
        "speaker": "Ethan Perry",
        "location": "Philadelphia",
        "date": "2024-01-05",
        "isNew": true
    },
    {
        "name": "Full Stack Development Bootcamp",
        "speaker": "Mia Henderson",
        "location": "Orlando",
        "date": "2024-02-09",
        "isNew": true
    },
    {
        "name": "Linux System Administration",
        "speaker": "Leo Cooper",
        "location": "Portland",
        "date": "2024-03-15",
        "isNew": true
    },
    {
        "name": "Kotlin for Android Development",
        "speaker": "Luna Ramirez",
        "location": "Austin",
        "date": "2024-04-21",
        "isNew": false
    },
    {
        "name": "Game Development with Unity",
        "speaker": "Oscar Flores",
        "location": "Chicago",
        "date": "2024-05-25",
        "isNew": true
    },
    {
        "name": "Vue.js Advanced Techniques",
        "speaker": "Zachary Griffin",
        "location": "Los Angeles",
        "date": "2024-06-30",
        "isNew": false
    },
    {
        "name": "Data Analysis with Pandas",
        "speaker": "Nathan Murray",
        "location": "New York",
        "date": "2024-07-08",
        "isNew": true
    },
    {
        "name": "Cybersecurity Threats and Defense",
        "speaker": "Penelope Diaz",
        "location": "San Francisco",
        "date": "2024-08-12",
        "isNew": true
    },
    {
        "name": "Agile Methodologies",
        "speaker": "Quinn Sanders",
        "location": "Miami",
        "date": "2024-09-18",
        "isNew": false
    },
    {
        "name": "Big Data Analytics",
        "speaker": "Ruby Evans",
        "location": "Seattle",
        "date": "2024-10-22",
        "isNew": true
    },
    {
        "name": "Software Testing Techniques",
        "speaker": "Samuel Phillips",
        "location": "Dallas",
        "date": "2024-11-25",
        "isNew": true
    },
    {
        "name": "UX Research and Prototyping",
        "speaker": "Tessa Bryant",
        "location": "Boston",
        "date": "2024-12-30",
        "isNew": false
    }
];

export default data;
