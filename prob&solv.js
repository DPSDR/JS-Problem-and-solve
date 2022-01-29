// ক্লাস সেভেন এর ফাইনাল এক্সাম এ তুমি ফার্স্ট হয়েছো। তোমার বন্ধু আলিয়া, ডালিয়া, সালিয়া, মালিয়া, লিলিয়া আর জ্বালাইয়া - তাদের grade তুমি জানো না। তবে তাদের নম্বর জানো. আলিয়া 95 পেয়েছে, ডালিয়া 66 পেয়েছে, সালিয়া 80 পেয়েছে, মালিয়া পেয়েছে 59, লিলিয়া পেয়েছে 47, জ্বালাইয়া পেয়েছে 77। তুমি JS code দিয়ে তাদের grade বের করে দিতে পারবে?
// ১) যারা ৫০ এর নিচে পেয়েছে, তাদের grade F.
// ২) যারা ৫০ বা তার উপরে পেয়েছে, অথবা ৬০ এর নিচে পেয়েছে, তাদের grade D.
// ৩) যারা ৬০ বা তার উপরে পেয়েছে, অথবা ৭০ এর নিচে পেয়েছে, তাদের grade C.
// ৪) যারা ৭০ বা তার উপরে পেয়েছে, অথবা ৮০ এর নিচে পেয়েছে, তাদের grade B.
// ৫) যারা ৮০ বা তার উপরে পেয়েছে, অথবা ৯০ এর নিচে পেয়েছে, তাদের grade A.
// ৬) যারা ৯০ বা তার উপরে পেয়েছে, তাদের grade A+
// SOLVE by Dipta

var alia  = 95; 
var dalia = 66; 
var salia = 80; 
var malia = 59; 
var lilia = 47; 
var jalia = 77; 
var studentNames = ["alia", "dalia", "salia", "malia", "lilia", "jalia"];
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
