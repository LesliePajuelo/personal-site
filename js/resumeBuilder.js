//Biography
var bio = {
    "name": "Leslie Pajuelo",
    "role": "Software Engineer",
    "contacts": {
        "email": "LeslieLPajuelo@gmail.com",
        "blog": " /blog</a>",
        "blogURL": "http://LesliePajuelo.com/blog",
        "github": "Github</a>",
        "githubURL": "https://github.com/LesliePajuelo",
        "linkedIn": "Linkedin",
        "linkedInURL": "https:www.linkedin.com/in/LesliePajuelo",
        "location": "San Diego, CA"
    },
    "picture": "images/headshot.JPG",
    "skills": ["images/js.png", 
               "images/angular.png",
               "images/nodejs_logo.png",
               "images/react.png",
               "images/backbone.png"]
};

bio.display = function() {
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    $("#header").prepend(formattedRole).prepend(formattedName);

    var formattedHTMLbioPic = HTMLbioPic.replace("%data%", bio.picture);
    $("#header").append(formattedHTMLbioPic)

    if (bio.skills.length > 0) {
        $("#header").append(HTMLskillsStart);
        for (var skill in bio.skills) {
            if (bio.skills[skill]) {
                var formattedHTMLskills = HTMLskills.replace("%data%", bio.skills[skill]);
                $("#skills").append(formattedHTMLskills);
            }
        }
    }

    var formattedHTMLblog = HTMLblog.replace("#", bio.contacts.blogURL).replace("%data%", bio.contacts.blog);
    $("#topContacts,#footerContacts").append(formattedHTMLblog);

    var formattedHTMLemail = HTMLemail.replace("#", bio.contacts.email).replace("%data%", bio.contacts.email);
    $("#topContacts,#footerContacts").append(formattedHTMLemail);

    var formattedHTMLgithub = HTMLgithub.replace("#", bio.contacts.githubURL).replace("%data%", bio.contacts.github);
    $("#topContacts,#footerContacts").append(formattedHTMLgithub);

    var formattedHTMLlinkedIn = HTMLlinkedIn.replace("#", bio.contacts.linkedInURL).replace("%data%", bio.contacts.linkedIn);
    $("#topContacts,#footerContacts").append(formattedHTMLlinkedIn);
};



//Projects
var projectData = {
    "projects": [{
        "title": "Numeral Net <span class=subTitle>- numeral-net.herokuapp.com</span>",
        "url" : "https://numeral-net.herokuapp.com/",
        "tagline": "Javascript Neural network which recognizes handwritten digits. Built in plain\
        Javascript",
        "description": "Machine learning is normally the realm of python, however, with advances to" +
        "the javascript compilers, namely V8, it's now possible to train forward feeding neural networks" +
        "in javascript. ",
        "images": ["images/NumeralNet.png"]
    }, {
        "title": "Envision <span class=subTitle>- envisionapp.herokuapp.com</span>",
        "url" : "https://envisionapp.herokuapp.com/",
        "tagline": "11/15/2015",
        "description": "Gives an affordability rating for software engineers who want to live close" +
         "to home. Built with Angular.",
        "images": ["images/envisionApp.png"]
    }]
};

projectData.display = function() {
    $("#projects").append(HTMLprojectStart);
    for (var project in projectData.projects) {
        if (projectData.projects[project]) {
            var formattedProjTitle = HTMLprojectTitle.replace("#", projectData.projects[project].url)
            .replace("%data%", projectData.projects[project].title);
            $(".project-entry:last").append(formattedProjTitle);

            var formattedProjTagline = HTMLprojectTagline.replace("%data%", projectData.projects[project].tagline);
            $(".project-entry:last").append(formattedProjTagline);

            var formattedProjDescription = HTMLprojectDescription.replace("%data%", projectData.projects[project].description);
            $(".project-entry:last").append(formattedProjDescription);

            if (projectData.projects[project].images.length > 0) {
                for (var image in projectData.projects[project].images) {
                    if (projectData.projects[project]) {
                        var formattedProjImg = HTMLprojectImage.replace("#", projectData.projects[project].url)
                        .replace("%data%", projectData.projects[project].images[image]);
                        $(".project-entry:last").append(formattedProjImg);
                    }
                }
            }
        }
    }
};

//Education
var education = {
    "schools": [{
        "name": "National University",
        "city": "San Diego, California",
        "degree": "BS",
        "major": "Natural Sciences: Earth Science",
        "dates": "2010-2013",
        "url": "http://www.nu.edu"
    }, {
        "name": "Bakersfield College",
        "city": "Bakersfield, California",
        "degree": "GIS Certificate",
        "dates": "2010",
        "url": "http://www.bakersfieldcollege.edu"
    }
     ],

    "onlineCourses": [{
        "schoolUrl": "https://www.hackreactor.com/",
        "title": "Advanced software engineering immersion program",
        "school": "Hack Reactor Remote",
        "dates": "2015-2016",

    }, {
        "schoolUrl": "https://extension.ucdavis.edu",
        "title": "CEQA: A Step-by-Step Approach",
        "school": "UC Davis extension",
        "dates": "2014",
        "courseUrl": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
    }]
};

education.display = function() {
    $("#education").append(HTMLschoolStart);
    for (var school in education.schools) {
        if (education.schools[school]) {
            var formattedSchoolName = HTMLschoolName.replace("#", education.schools[school].url).replace("%data%", education.schools[school].name);
            $(".education-entry:last").append(formattedSchoolName);

            var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
            $(".education-entry:last").append(formattedDegree);

            var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
            $(".education-entry:last").append(formattedSchoolDates);

            var formattedSchoolCity = HTMLschoolLocation.replace("%data%", education.schools[school].city);
            $(".education-entry:last").append(formattedSchoolCity);

            if (education.schools[school].major) {
                var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].major);
                $(".education-entry:last").append(formattedMajor);
            }

            if (education.schools[school].minor) {
                var formattedMinor = HTMLschoolMinor.replace("%data%", education.schools[school].minor);
                $(".education-entry:last").append(formattedMinor);
            }
        }
    }

    $("#education").append(HTMLonlineClasses);
    for (var course in education.onlineCourses) {
        if (education.onlineCourses[course]) {
            var formattedHTMLonlineTitle = HTMLonlineTitle.replace("#", education.onlineCourses[course].schoolUrl).replace("%data%", education.onlineCourses[course].title);
            var formattedHTMLonlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);
            var formattedTitleSchool = formattedHTMLonlineTitle + formattedHTMLonlineSchool;
            $(".education-entry:last").append(formattedTitleSchool);

            var formattedHTMLonlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[course].dates);
            $(".education-entry:last").append(formattedHTMLonlineDates);

            var formattedHTMLonlineURL = HTMLonlineURL.replace("#", education.onlineCourses[course].courseUrl).replace("%data%", education.onlineCourses[course].courseUrl);
            $(".education-entry:last").append(formattedHTMLonlineURL);
        }
    }
};

bio.display();
projectData.display();
education.display();

