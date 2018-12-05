//var myHeading = document.querySelector('h1');
//myHeading.textContent = 'Hello world!';
//
////alert('hello!');
//
//document.querySelector('html').onclick = function(){
//    alert('Ouch! Stop poking me!');
//}

var myImage = document.querySelector('img');

myImage.onclick = function () {
    var mySrc = myImage.getAttribute('src');
    if (mySrc === 'image/WechatIMG797.png') {
        myImage.setAttribute('src', 'image/WechatIMG800.png');
    } else {
        myImage.setAttribute('src', 'image/WechatIMG797.png');
    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName(){
    var myName = prompt('Please enter your name.');
    localStorage.setItem('name',myName);
    myHeading.textContent ='Me is cool ' + myName;
}

if(!localStorage.getItem('name')){
    setUserName();
}else{
    var storedName = localStorage.getItem('name');
    myHeading.textContent = 'Me is cool '+ storedName;
}

myButton.onclick = function(){
    setUserName();
}