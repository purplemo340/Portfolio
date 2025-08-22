import projects from "../projects"
const list = [

    {
        "id": 1,
        "name": projects[0].name,
        "description": "This project inspired me to learn more about machine learning principles. I enjoyed trying analyzing the data in order to get better results. For this project the goal was to capture images that would be able to accurately show the user the number that is displayed on a piece of paper. The system could do the following:",
        "bullets": [
            "Image Capturing: The system integrated a Raspberry Pi camera that was used to capture images on a piece of paper.",
			"Image Analysis: Using python, machine learning is used to pinpoint the most important parts of the images to help determine what number is written in the image.",
			"Data Vizualization: After determining what the number in the image is, the number is displayed on the Raspberry Pi Sensehat."
        ],
        "media": 'handwriting.png',
        "skills":[
            "Python",
			"Pandas", 
			"Keras",
			"Machine Learning"
        ],
        "Improvements":[
            "Continue training the model."
        ]
    },
    {
        "id": 2,
        "name": projects[1].name,
        "description": "One of the requirements for my degree program was completing a senior design project that combined everything that I learned in from the program throughout the years. For two semesters, I worked in a group of four individuals where we created a system that could be implemented into present-day parking garages. We realized  that modern day parking garages, especially college parking garages, needed an upgrade. With our system we tried to prevent drivers from going to a parking garage and not being able to find adequate parking when needed.",
        "bullets": ["Data Collection: Using a series of sensors, cameras, pir sensors, and rfid, the system was able to detect when a car entered/exited a garage to determine the amount of cars and if there was essential parking. The data was sent to a raspberry pi, which then sent the data to AWS.",
        "Database Management: Data sent to AWS was used to determine if users had authorization to use the garage. ",
        "Machine Learning: Using the data collected, a machine learning model determined how many vehicles would be in the garage at a given time. "],
        "media": "data.jpg",
        "skills":[
            "Python",
            "AWS",

        ],
        "Improvements":[
            "No improvements at this time"
        ]
    },
    {
        "id": 3,
        "name": projects[2].name,
        "description": "In a team of three, we developed a device aimed at monitoring a user's sleep patterns. Our approach involved monitoring the user's heart rate to determine if it fell below a specific threshold.",
        "bullets":[
            "Data Collection: We set up a Raspberry Pi as a continuous data publisher, sending information to the broker without interruption. ",
            "Network Communication: We established a network using server and client configurations to create a system consisting of publishers, subscribers, and a broker. To transmit heart rate data to the broker, we utilized a Beaglebone Black. The broker not only collected this data but also awaited instructions from the subscribers.",
            "Interface Design: Using Microsoft Visual Studio, we designed an interface that allowed subscribers to interact with the broker."
        ],
        "media": "waterfall.png",
        "skills":["C#, Python", "MQTT", "Raspberry Pi", "Beaglebone Black"],
        "Improvements":[
            "The acutal design of the system could be improved. The device consisted of wires and the heart rate sensor which caused the data collection to be unreliable at times.",
            "The system could have had a more consistent interface. The interface was not user friendly and could have been improved to be more visually appealing.",
        ]
    },
    {
        "id": 4,
        "name": projects[3].name,
        "description": "This project is an Ultrasonic Sensor System endowed with the capability to scan a range of 180 degrees for the detection of obstacles. The core functionalities and features of this system encompass:",
        "bullets":["Continuous Range Detection: The system is equipped with an ultrasonic sensor that operates constantly to measure distances within its field of view.",
                "Joystick Control: The scan angle of the ultrasonic sensor is manipulated by a joystick module. This joystick control mechanism enables users to finely adjust the scanning direction within the specified angular range.",
                "Proximity Alert: Ensuring safety and awareness, the system employs a buzzer that triggers warning tones whenever it detects an object positioned within a proximity of less than 10 cm. This alert system helps prevent collisions and provides real-time feedback to the user.",
                "Distance Visualization: Simultaneously, a seven-segment display serves as a visual indicator of an obstacle's proximity."],
        "media": "detection_1.jpg",
        "skills":[
            "Microcontroller Programming: Arduino",
            "Circuit Design"
        ],
        "Improvements":[
            "No improvements at this time."
        ]
    },
    {
        "id": 5,
        "name": projects[4].name,
        "description": "Description 1",
        "bullets":[],
        "media": "website.png",
        "skills":[
            "Javascript",
            "React"
        ],
        "Improvements":[
            "Recently changed the website to include React to the website. ",
            "Add more of the projects that I have done. "
        ]
    },
    {
        "id": 6,
        "name": projects[5].name,
        "description": "Recently, I watched someone online play a higher or lower game where they were given the choice of two movies and had to guess which one had the higher rating. I believed with the skills that I have,  I could make something similar, so I picked up the challenge. ",
        "bullets":[],
        "media": "imdb.png",
        "skills":[
            "Python",
            "Selenium",
            "Pandas",
            "Tkinter",
            "Flask"
        ],
        "Improvements":[
            "Can update the user interface to be more visually appealing.",
            "Can add more features to the game.",
            
        ], 
        "Link": "https://idmb-game.onrender.com"
    },
    {
        "id": 7,
        "name": projects[6].name,
        "description": "Description 1",
        "bullets":[],
        "media": "language_learning.png",
        "skills":[
            "Javascript",
            "Skill 2"
        ],
        "Improvements":[
            "Add vocabulary to the quiz. ",
            "Improvement 2"
        ]
    },
    {
        "id": 8,
        "name": projects[7].name,
        "bullets":[],
        "description": "This project uses SQL queries to access a database of books. Users can click on each book link to see book logs that I made. If they have read the book as well, they can comment on the post. Users can also sign up and log in to see there own library of books where they can also add books to the database and add their own book logs.",
        "media": "books.jpg",
        "skills":[
            "Python",
            "SQL",
            "Flask", 
            "Bootstrap"
        ],
        "Improvements":[
            "Add images to each book added to the database using an API. ",
            "Make some interface changes to make the website easier to use."
        ]
    },
    {
        "id": 9,
        "name": projects[8].name,
        "description": "Description 1",
        "bullets":[],
        "media": "pomodoro_1.png",
        "skills":[
            "Skill 1",
            "Skill 2"
        ],
        "Improvements":[
            "Improvement 1",
            "Improvement 2"
        ]
    },
    {
        "id": 10,
        "name": projects[9].name,
        "description": "I have always loved the olympics growing up. Every four years I would be amazed by the athletes who prove hard work and dedication can lead to one achieving their dreams. I wanted to create a project that combines my love for the games and my love for coding while also learning new skills. This project involved the following: ",
        "bullets":["Web scraping using selenium: From the official Olympics website, I scraped data about the games and the medal count for each country. ",
            "Use pandas to clean and analyze the data.",
        ],
        "media": "olympics.png",
        "skills":[
            "Flask",
            "Pandas", 
            "Matplotlib",
            "Selenium"

        ],
        "Improvements":[
            "Eventually will transfer the project to Tableau.",
            "Improve the interface.", 
            "Use Tableau to analyze the results of each game."
        ], 
        "Link": "https://olympics-iszt.onrender.com"
    },
    {
        "id": 11,
        "name": projects[10].name,
        "description": "Using Spotify API's, I created a simple website that displays one of my favorite artist's, Stray Kids, discography. Once a user is logged in with their Spotify credentials, the user can see all of their albums. Clicking on one of the album names would then take the user to a list of the songs from said album. ",
        "bullets":[],
        "media": "strays.png",
        "skills":[
            "Javascript",
            "Node.js",
            "APIs"
        ],
        "Improvements":[
            "Updating the web interface. ",
            "Add more functionalities, such as a recommendation system"
        ],
        "Link": "https://strays.onrender.com"
    }
]

export default list