var dog = 56
var cat = 40;
var cow = 44;
var goat = 66;
var ox = 30;
var monkey = 75;
var names = [dog, cat, cow, goat, ox, monkey];
var animalNumbers = names.length;
var above50 = [];
var under50 = [];
var i = 0
while (i <= animalNumbers) {
    if (names[i] > 50) {
        console.log(above50.push(names[i]))
    }
    else if (names[i] < 50) {
        console.log(under50.push(names[i]))
    }
    i++
}
console.log("above50 " + above50)
console.log("under50 " + under50)
