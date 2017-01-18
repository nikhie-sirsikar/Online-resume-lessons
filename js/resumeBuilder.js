/*
This is empty on purpose! Your code to build the resume will go here.
 */


 var bio = {
 	"name" : "Nikhita sirsikar",
 	"role" : "System Engineer",
 	"contacts" : {
 		"mobile" : "+91809 527 1234",
 		"email" : "nikhitasirsikar701@gmail.com",
 		"github" : "nikhie-sirsikar",
 		"location" : "Karnataka India"''
 	},
 	"welcomeMessage" : "Hello.",
 	"skills" : [
 	"Good leader", "soft skills", 
 	],
 	"bioPic" : "images/me.jpg"

 }

$ ("#main").append(bio.name);
$ ("#main").append(bio.role);
$ ("#main").append(bio.contacts);
$ ("#main").append(bio.welcomeMessage);
$ ("#main").append(bio.bioPic);
$ ("#main").append(bio.name);
$ ("#main").append(bio.name);
$ ("#main").append(bio.name);
$ ("#main").append(bio.name);

var formattedName = HTMLheaderName.replace("%data%", name);
var role = "Web Developer";
var formattedRole = HTMLheaderRole.replace("%data%", role);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);