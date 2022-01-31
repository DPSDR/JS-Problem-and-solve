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

// তাড়াহুড়া করে স্কুলের জন্য বের হচ্ছ কিন্তু রাস্তা পার হওয়ার সময় দেখলে, ট্রাফিক সিগন্যাল লাল রং। এই অবস্থায় যদি তুমি রাস্তা পার হওয়ার চেষ্টা কর, তাহলে ডেঞ্জার হতে পারে। যদি হলুদ রং হয় তাহলে তোমার থেমে যাওয়া উচিত। আর যদি ট্রাফিক সিগন্যাল গ্রিন হয় তাহলে তোমার রাস্তা পার হওয়া উচিত। তাই একটা কোড লিখে ফেলো। যেখানে আমরা signal নামে একটা ভেরিয়েবল থাকবে। সেটার মান green, yellow বা red হতে পারে। সেই অনুসারে ডিফারেন্ট ডিফারেন্ট কাজ হবে। তো, সেই কোড ফটাফট লিখে ফেলো। 

var signalName1 = "green";
var signalName2 = "yellow";
var signalName3 = "red";

var traficSignal = "red"

if (traficSignal == signalName1) {
    console.log("Safe")
}
else if (traficSignal == signalName2) {
    console.log("Wait")
}
else if (traficSignal == signalName3) {
    console.log("Danger! Stop.")
}


// প্রতিদিন তোমার কাজ কি? 
// ১) রাত ৮ টা বাজে মডিউল আনলক করো  
// ২) ফটাফট ভিডিও দেখে দেখে প্রাকটিস করো
// ৩) ভিডিও দেখতে দেখতে নোটস নাও 
// ৪) মডিউল শেষ হলে পুরা মডিউল নিজে নিজে প্রাকটিস করো 
// ৫) কোন কিছু বুঝতে না পারলে (চিন্তা করে দেখো এইখানে কিন্তু একটা শর্ত আছে ), সাপোর্ট সেশনে জয়েন করো 
// এখন তোমার কাজ হচ্ছে একটা for লুপ ১০ বার চালিয়ে উপরের জিনিসগুলা আউটপুট হিসেবে দেখানো। আবার একই জিনিস while লুপ চালিয়ে ১০ বার দেখানো।

var task1 = "Unlock the modules";
var task2 = "Quickly see the video";
var task3 = "Take Notes";
var task4 = "Practise again";
var task5 = "Not Understand"
var task6 = "Understand"
// solve with for loop
for (var i = 1; i <= 5; i++) {
    console.log(i)
    console.log(task1)
    console.log(task2)
    console.log(task3)
    console.log(task4)
    if (i == 1) {
        console.log("Don't understand!! Join the support session")
    }
    else {
        console.log(task6)
    }
    
}
// solve with while loop
var i = 1
while (i<=5) {
    console.log(i)
    console.log(task1)
    console.log(task2)
    console.log(task3)
    console.log(task4)
    if (i == 1) {
        console.log("Don't understand!! Join the support session")
    }
    else {
        console.log(task6)
    }
    i++
// check odd even numbers 
var nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9,];
var odd = [];
var even = [];
function checkOddEven(num) {
    if (num % 2 == 0) {
        return true // this conditin indicates even number
    }
    return false    // this conditin indicates odd number
}
for (var i = 0; i < nums.length; i++) {
    if (checkOddEven(nums[i])) {
        even.push(nums[i])
    }
    else {
        odd.push(nums[i])
    }
}
console.log(odd)
console.log(even)
}