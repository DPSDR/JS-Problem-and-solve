var alia  = 95; var dalia = 66; var salia = 80; var malia = 59; var lilia = 47; 
var jalia = 77; var studentNames = ["alia", "dalia", "salia", "malia", "lilia", "jalia"];
var marks = [alia, dalia, salia, malia, lilia, jalia];
var runTime = marks.length;

var i = 0;
while (i < runTime) {
    if (marks[i] < 50) {
        console.log(studentNames[i] + " " + "Grade is F")
    }
    else if (marks[i] >= 50 && marks[i] < 60) {
        console.log(studentNames[i] + " " + "Grade is D")
    }
    else if (marks[i] >= 60 && marks[i] < 70) {
        console.log(studentNames[i] + " " + "Grade is C")
    }
    else if (marks[i] >= 70 && marks[i] < 80) {
        console.log(studentNames[i] + " " + "Grade is B")
    }
    else if (marks[i] >= 80 && marks[i] < 90) {
        console.log(studentNames[i] + " " + "Grade is A")
    }
    else if (marks[i] >= 90) {
        console.log(studentNames[i] + " " + "Grade is A+")
    }
    i++
}

