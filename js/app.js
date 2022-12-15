var cl =console.log;
//  var ages = [12, 13, 14, 15, 2, 6, 36, 58, 59, 23, 45, 75, 8, 6];

//  ages.forEach( function(age){
//      cl(age)
//      })


var skills = ["HTML5", "CSS3", "javaScript", "TypeScript", "Angular"];

// skills.forEach(function(skill,i){
//      cl(i + 1 + " I love " + skill)
//  })

var skillsInfo = document.getElementById("skillsInfo");

var result = `<ul class="list-group">`;

skills.forEach(function(skill){
    result += `<li class= "list-group-item">I love ${skill}</li>`
})

result +=  `</ul>`

skillsInfo.innerHTML = result;


var eledetail = [
    {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
    {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
    {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
    {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
    {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
    {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
    {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
    {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
    {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
    {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
  ];

var eleInfoDiv = document.getElementById("eleInfo");
var result1 ='';
eledetail.forEach(function(ele,i){
    result1 +=`<tr>
                <td>${i+1}</td>
                <td>${ele.name}</td>
                <td>${ele.position}</td>
                <td>${ele.weight}</td>
                <td>${ele.symbol}</td>
             </tr>`
});

eleInfoDiv.innerHTML = result1

var stdArray = [{
    fname: "Tony",
    lname: 'Stark',
    nickName: 'Ironman',
    email: 'tony@stark.com'
},
{
    fname: "Peter",
    lname: 'Parkar',
    nickName: 'SpiderMan',
    email: 'peter@stark.com'
},
{
    fname: "Bruce",
    lname: 'Wayne',
    nickName: 'BatMan',
    email: 'bruce@wayne.com'
},
{
    fname: "Stephen",
    lname: 'Strange',
    nickName: 'Dr. Strange',
    email: 'dr@strange.com'
},
]
var stdInfoDiv = document.getElementById("stdInfo");
 var result2 = '';
stdArray.forEach(function(std,i){
    result2 += `<tr>
                <td>${i+1}</td>
                <td>${std.fname}</td>
                <td>${std.lname}</td>
                <td>${std.nickName}</td>
                <td>${std.email}</td>
                </tr>`

});
stdInfoDiv.innerHTML = result2