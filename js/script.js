//   (1) start    Hide Placeholder On Input Focus

var MyInput_1 = document.getElementById("input_1");

MyInput_1.onfocus = function () {
  "use strict";
  MyInput_1.setAttribute("placeBackup", MyInput_1.getAttribute("placeholder"));
  MyInput_1.setAttribute("placeholder", "");
};

MyInput_1.onblur = function () {
  "use strict";
  MyInput_1.setAttribute("placeholder", MyInput_1.getAttribute("PlaceBackup"));
  MyInput_1.setAttribute("PlaceBackup", "");
};

//   (1) End    Hide Placeholder On Input Focus

//   (2) Start   Make Type Writer Effects On Text
var MyP_1 = document.getElementById("p_1");
var MyButton_1 = document.getElementById("button_1");
var MyText_1 =
  "Hello this is the text from JS by test of (Make Type Writer Effects On Text) ";
var i = 0;

MyButton_1.onclick = function () {
  "use strict";
  var MyInterval_1 = setInterval(function () {
    MyP_1.textContent += MyText_1[i];
    i = i + 1;
    if (i > MyText_1.length - 1) {
      clearInterval(MyInterval_1);
    }
  }, 100);
};
//   (2) End     Make Type Writer Effects On Text

//   (3) Start     Show _ Hide Password On Input Field
var MyInput_2 = document.getElementById("input_2");
var MyButton_2 = document.getElementById("button_2");

MyButton_2.onclick = function () {
  "use strict";
  if (MyInput_2.type == "password") {
    MyInput_2.type = "text";
    MyButton_2.textContent = "Hide";
  } else {
    MyInput_2.type = "password";
    MyButton_2.textContent = "Show";
  }
};
//   (3) End     Show _ Hide Password On Input Field

//   (4) Start    Scroll To Top Button
var goup_but = document.getElementById("but_goup");

window.onscroll = function () {
  "use strict";
  if (window.pageYOffset >= 700) {
    goup_but.style.display = "block";
  } else {
    goup_but.style.display = "none";
  }
};

goup_but.onclick = function () {
  "use strict";
  window.scrollTo(0, 0);
};

//   (4) End    Scroll To Top Button

//   (5) Start  Random Class For Body On Refresh
var myp_3 = document.getElementById("p_3"),
  myp_4 = document.getElementById("p_4"),
  classList_1 = ["myp_c_1", "myp_c_2", "myp_c_3", "myp_c_4"];

var MyRandomNum_1 = Math.floor(Math.random() * classList_1.length),
  MyRandomNum_2 = Math.floor(Math.random() * classList_1.length);

myp_3.setAttribute("class", classList_1[MyRandomNum_1]);
myp_4.setAttribute("class", classList_1[MyRandomNum_2]);
//   (5) End Random Class For Body On Refresh

//   (6) Start  Edit Text Live On Input
var myp_5 = document.getElementById("p_5");
var MyInput_3 = document.getElementById("input_3");

MyInput_3.onkeyup = function () {
  "use strict";
  myp_5.textContent = this.value;
};
//   (6) End    Edit Text Live On Input

//   (7) Start  Disable Mouse Right Click On page
document.addEventListener("contextmenu", function (e) {
  "use strict";
  e.preventDefault();
});
//   (7) End    Disable Mouse Right Click On page

//   (8) Start   Create Simple Dynamic Clock

function showTime() {
  "use strict";
  var myp_66 = document.getElementById("p_66");
  var now = new Date();
  var hours = now.getHours(),
    minutes = now.getMinutes(),
    second = now.getSeconds();

  if (hours < 10) {
    hours = "0" + hours;
  }
  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  if (second < 10) {
    second = "0" + second;
  }

  myp_66.textContent = hours + ":" + minutes + ":" + second;
}

setInterval(showTime, 100);

//   (8) End     Create Simple Dynamic Clock

//   (9) Start     Calculate Textarea Characters Like Twitter
var mytextarea = document.getElementById("textarea"),
  mysp_1 = document.getElementById("sp_1");

mytextarea.onkeyup = function () {
  "use strict";
  mysp_1.textContent = 50 - mytextarea.value.length;
  var myspcolor =
    mysp_1.textContent < 0
      ? (mysp_1.style.color = "#f00")
      : (mysp_1.style.color = "#0043FF");
  myspcolor();
};
//   (9) End       Calculate Textarea Characters Like Twitter

//   (10) Start    Show Random Image Every X Seconds
let Ex10_photo1 = document.getElementById("Ex10_photo1");
let myImgList = [
  "images/b1.jpg",
  "images/b2.jpg",
  "images/b3.jpg",
  "images/b4.jpg",
  "images/b5.jpg",
  "images/b6.jpg",
];

setInterval(function () {
  "use strict";
  Ex10_photo1.src = myImgList[Math.floor(Math.random() * myImgList.length)];
}, 1000);
//   (10) End      Show Random Image Every X Seconds

//   (11) Start    Check If Url Hash Contains String
var myp_8 = document.getElementById("p_8");

window.onload = function () {
  "use strict";
  if (window.location.hash) {
    if (window.location.hash.indexOf("A7A") === 1) {
      // 0 === #;
      myp_8.textContent =
        "yes the hash " + window.location.hash.substring(1) + " is here";
    }
  } else {
    myp_8.textContent = "there is no hash in link";
  }
};
//   (11) End      Check If Url Hash Contains String

//   (12) Start    Make Redirect Function with Parameter
var MyButton_3 = document.getElementById("but_3"),
  MyButton_4 = document.getElementById("but_4");

MyButton_3.onclick = function () {
  "use strict";
  if (location.href !== "") {
    window.location.href = "https://www.youtube.com";
  }
};

function RedirectMe(url) {
  "use strict";
  if (url !== "") {
    window.location = url;
  }
}
//   (12) End      Make Redirect Function with Parameter

//   (13) Start    Generate Random Serial Number
var myp_9 = document.getElementById("p_9"),
  MyButton_5 = document.getElementById("but_5"),
  Chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

MyButton_5.onclick = function () {
  "use strict";
  var MyRandomNum_4,
    serial_Length = 10,
    serial_Num = "",
    i;

  for (i = 0; i < serial_Length; i++) {
    MyRandomNum_4 = Math.floor(Math.random() * Chars.length);
    serial_Num += Chars.substring(MyRandomNum_4, MyRandomNum_4 + 1);
  }
  myp_9.textContent = serial_Num;
};
//   (13) End      Generate Random Serial Number

//   (14) Start     Clear Input Placeholder On Focus
var MyInput_4 = document.getElementById("input_4");
MyInput_4.onfocus = function () {
  "use strict";
  if (MyInput_4.placeholder === "inter your Email") {
    MyInput_4.placeholder = "";
  }
};
MyInput_4.onblur = function () {
  "use strict";
  if (MyInput_4.placeholder === "") {
    MyInput_4.placeholder = "inter your Email";
  }
};
//   (14) End       Clear Input Placeholder On Focus

//   (15) Start      Create Countdown Timer
var myp_10 = document.getElementById("p_10"),
  timee = 67,
  countDown_fun,
  countDown_val;

countDown_val = setInterval(function () {
  "use strict";
  countDown_fun();
}, 1000);

function countDown_fun() {
  "use strict";

  var Minutes = Math.floor(timee / 60),
    Seconds = timee % 60;

  if (Seconds < 10) {
    Seconds = "0" + Seconds;
  }
  if (Minutes < 10) {
    Minutes = "0" + Minutes;
  }

  if (timee > 0) {
    timee -= 1;
  } else {
    clearInterval(countDown_val);
  }

  myp_10.textContent = Minutes + ":" + Seconds;
}
//   (15) End        Create Countdown Timer

//   (16) Start      Capitalize Words Function
var myp_11 = document.getElementById("p_11");

function ToUppwr(string) {
  "use strict";
  var oldArray = string.split(" "),
    newArray = [];

  for (var i = 0; i < oldArray.length; i++) {
    newArray.push(oldArray[i].charAt(0).toUpperCase() + oldArray[i].slice(1));
  }
  return newArray.join(" ");
}

myp_11.textContent = ToUppwr("ahmed ismail mohamed hussain");

//   (16) END      Capitalize Words Function

//   (17) Start   Change Website Colors & Save With Local Storage
var project = document.getElementById("ex_17"),
    element = document.querySelectorAll(".color-switcher li"),
    classesColorList = [];

// Add Default Local Storage Class On Main Div
project.classList.add(localStorage.getItem("pageColor") || "red");

// Loop On Elements
for (var i = 0; i < element.length; i++) {
  // Get Class list
  classesColorList.push(element[i].getAttribute("data-color"));

  element[i].addEventListener(
    "click",
    function () {
      "use strict";
      // Remove All old Classes from body
      project.classList.remove(...classesColorList);
      // Add Current Class From li Data Attribute
      project.classList.add(this.getAttribute("data-color"));

      // Add Data To Local Storage
      localStorage.setItem("pageColor", this.getAttribute("data-color"));
    },
    false
  );
}
//   (17) END     Change Website Colors & Save With Local Storage





//   *****:-:-:-:-:-:  (18) Start  Creat JS Slider     :-:-:-:-:-:*****

//  01 Catch All Elements at The Page  
  //  Get slider box number
  var slidrImagesBox = document.querySelector("#slider_number");
  // Get Slider Items | Array.from [ES6 Feature]
  var slidrImages = document.querySelectorAll("#slider_container img");
  // Get Number Of Slides
  var slidesCount = slidrImages.length;
  // Set current slide
  var currentSlide = 1;
  // previous and Next Buttons
  var prev_but = document.getElementById("prev_button");
  var next_but = document.getElementById("next_button");
  //  Get Indicators Box
  var indicators_box = document.getElementById("indicators");


//  02 Creat The Pagination List And Set ID & Add Class Active  
  //  Creat The Pagination Element &  Put Id    
  var paginationElment = document.createElement("ul");
      paginationElment.setAttribute("id", "pagination_ul"); 
  //  Creat The Pagination Item &   Put Id &   Set Text
  for(let i=1; i<=slidesCount; i++){
    var paginationItem = document.createElement("li");
    paginationItem.setAttribute("data-index", i);
    paginationItem.appendChild(document.createTextNode(i));
    //  Set The Pagination Items Inside The Pagination Element
    paginationElment.appendChild(paginationItem);
  }
  // Add The Pagination To The Indicators Box 
  indicators_box.appendChild(paginationElment);

  // Get The pagination ul
  var paginationCreatedUL = document.getElementById('pagination_ul');
  // Get The pagination li Items
  var paginationsBullets = Array.from(document.querySelectorAll("#pagination_ul li"));
  for(let i=0; i<paginationsBullets.length; i++){
    paginationsBullets[i].onclick = function(){
      currentSlide = parseInt(this.getAttribute("data-index"));
      checkerFun();
    };
  };


// 03- Remove All Active Classes From Images and Pagination Bullets 
    function removeAllClasses () {
      "use strict";
      // Loop Through Images
      slidrImages.forEach(function(image){
        image.classList.remove("active");
      });
      // Loop Through Pagination Bullets 
      paginationsBullets.forEach(function(bullet){
        bullet.classList.remove("active");
      });
    };


//  04  Create The Next & The Prev Slide Function 
  prev_but.onclick = prevSlide;
  next_but.onclick = nextSlide;
    function prevSlide(){
      "use strict";
      if(currentSlide == 1){  return false; }
      else {  currentSlide--;   checkerFun(); }
    };
    function nextSlide(){
      "use strict";
      if(currentSlide == slidesCount){  return false; }
      else {  currentSlide++;   checkerFun(); }    
    };


//  05  Craete The Checker Function  
  function checkerFun() {
    "use strict";
    // Set The Slide Number
    slidrImagesBox.textContent = "slide # " + (currentSlide) + " of " +(slidesCount);
    //  Remove All Active Classes From Imaes and Pagination Bullets  
    removeAllClasses ();
    //  Set Active Class on Current Slide
    slidrImages[currentSlide -1].classList.add("active");
    // Set Active Class on Current Pagination Item 
    //paginationsBullets[currentSlide -1].classList.add("active");
    paginationCreatedUL.children[currentSlide -1].classList.add("active");
    
    // Check If Current Slide Is The First or Last
    if(currentSlide == 1){
      prev_but.classList.add("disabled");
      next_but.classList.remove("disabled");
    }
    else if(currentSlide == slidesCount){
      next_but.classList.add("disabled");
      prev_but.classList.remove("disabled");
    }
    else{
      prev_but.classList.remove("disabled");
      next_but.classList.remove("disabled");
    }
      
  }
  checkerFun();


  // 06   Make Slider Run Automatic
function GoImage() {
    setInterval(function(){
    if(currentSlide < 5){  currentSlide++; }
    else if(currentSlide == slidesCount){  currentSlide = 1; }
    else { return false; }
    checkerFun();
    },3000); 
 } 
GoImage();

//   *****:-:-:-:-:-:   (18) END   Creat JS Slider     :-:-:-:-:-:*****





//   *****:-:-:-:-:-:  (19) Start  To-Do List     :-:-:-:-:-:*****
  //  Seting UP Variables 
  var TaskInput   = document.querySelector(".tasks_add input"),
      TaskAddBut  = document.querySelector(".tasks_add .plus"),
      TaskContent  = document.querySelector(".tasks_content"),
      NoTaskMessage  = document.querySelector(".no_tasks_message"),
      TaskCount  = document.querySelector(".tasks_count span"),
      TaskCompleted  = document.querySelector(".tasks_completed span");
      
  var MainNoteBox  = document.querySelector(".task_box"),   
      DeleteBut  = document.querySelector(".delete");
    
      
  //  1:- Focus On Input Field
  window.onload = () => {
    "use strict";
    TaskInput.focus();
    
    GetNotes();
  };


  //  2:- Adding The Task
  TaskAddBut.onclick = AddingTask;
  
  function AddingTask(){
    "use strict";
    if(TaskInput.value === ""){ alert("NOo Task To Add"); }
    else{
      // A:- Remove NO Task Message
      let NoTaskMessage  = document.querySelector(".no_tasks_message");
      if(document.body.contains(NoTaskMessage)){ NoTaskMessage.remove(); }

      // B:- Create Main Element Element
      var MainNoteBox = document.createElement("span");
          MainNoteBox.className = "task_box";
      var NoteText = document.createTextNode(TaskInput.value);
      
      // C:- Create Delete Element
      var DeleteBut = document.createElement("span");
          DeleteBut.className = "delete";
      var DeleteText = document.createTextNode("delete");
      
      // D:- Add task Box To The Tasks Container
      DeleteBut.appendChild(DeleteText);
      MainNoteBox.appendChild(NoteText);
      MainNoteBox.appendChild(DeleteBut);
      TaskContent.appendChild(MainNoteBox);

      // Save In Local Storage
      localStorage.setItem(TaskInput.value,TaskInput.value);

      // E:- Make The Input Empty 
      TaskInput.value = "";
      
      CountTasks();
      
    }
  };
  
  
  //  3:- Toggle Finished To Note & Delete The Cuurent Note
  document.addEventListener('click', function(e){
    "use strict";
    //  Add Toggle Class  Finished
    if(e.target.classList.contains("task_box")){
      e.target.classList.toggle("finished");
    }
    // Remove Curent Task
    if(e.target.className == "delete"){
      e.target.parentNode.remove();
      
      var MainNoteBox = document.querySelectorAll(".task_box");
      if (localStorage.getItem(e.target.parentNode.textContent)) {
        localStorage.removeItem(e.target.parentNode.textContent); 
      }

      //  Create No Tasks Message
      if(TaskContent.childElementCount == 0){
        var MsgSpan = document.createElement("span");
            MsgSpan.classList.add("no_tasks_message");
        var MsgText = document.createTextNode("NOo  Tasks To Show");
        
        MsgSpan.appendChild(MsgText);
        TaskContent.appendChild(MsgSpan);
      }
    }
    
    CountTasks(); 
  });
  
  //  4:-  Function To Create No Tasks Message
  
  
  //  5:-  Count The Number Of Normal Tasks -&- Completed Tasks
  function CountTasks(){
    "use strict";
    TaskCount.innerHTML = document.querySelectorAll(".tasks_content .task_box").length;
    
    TaskCompleted.textContent = document.querySelectorAll(".tasks_content .finished").length;
  }
  

  //  6:- Get Notes From LocalStorage 
  function GetNotes(){
    "use strict";
    if (localStorage.length) {
      TaskContent.innerHTML = "";
      for (const [k] of Object.entries(localStorage)) {
        // B:- Create Main Element Element
      var MainNoteBox = document.createElement("span");
          MainNoteBox.className = "task_box";
      var NoteText = document.createTextNode(k);
      
      // C:- Create Delete Element
      var DeleteBut = document.createElement("span");
          DeleteBut.className = "delete";
      var DeleteText = document.createTextNode("delete");
      
      // D:- Add task Box To The Tasks Container
      DeleteBut.appendChild(DeleteText);
      MainNoteBox.appendChild(NoteText);
      MainNoteBox.appendChild(DeleteBut);
      TaskContent.appendChild(MainNoteBox);
      
      // E:- Make The Input Empty 
      TaskInput.value = "";
      
      CountTasks();
      }
    }
    else{
      return false;
    }
  }  



//   *****:-:-:-:-:-:  (19) End    To-Do List    :-:-:-:-:-:*****





//   *****:-:-:-:-:-:  (20) Start  Start Control Local Storage      :-:-:-:-:-:*****

// Select Elements
let TheInput  = document.getElementById("search_input");
let allSpans  = document.querySelectorAll("#buttons span");
let results   = document.querySelector(".results > span");


//  1:-  Loop on The All Buttons 
allSpans.forEach(span => {
  span.addEventListener("click", (e) => {
    if(e.target.classList.contains("check_item")){
      CheckItem();
    }
    if(e.target.classList.contains("add_item")){
      AddItem();
    }
    if(e.target.classList.contains("delete_item")){
      DeleteItem();
    }
    if(e.target.classList.contains("show_item")){
      ShowItem();
    }
  })
});

  
//  2:-  The Check Function
function CheckItem(){
  if(TheInput.value  !== ""){
    if(localStorage.getItem(TheInput.value)){
      results.innerHTML = `Found Local Item Called <span> ${TheInput.value} </span>`;
    }else{
      results.innerHTML = `No Local Item Called <span> ${TheInput.value} </span>`;
    }
    
  }else{
    results.innerHTML = "Input Cant Be Empty";
  }
};

//  3:- The Add Function
function AddItem(){
  if (TheInput.value  !== "") {
    localStorage.setItem(TheInput.value, TheInput.value);
    results.innerHTML = ` Local Storage Item <span> ${TheInput.value} </span> Added `;
    TheInput.value = "";
  }else{
    results.innerHTML = "Input Cant Be Empty";
  }
};

//  4:- The Delete Function
function DeleteItem(){
  if (TheInput.value  !== "") {
    if (localStorage.getItem(TheInput.value)) {
      localStorage.removeItem(TheInput.value);
      results.innerHTML = ` The Local Storage Item <span> ${TheInput.value} </span> Is Delelted `;
    }else{
      results.innerHTML =  ` No Local Storage Item With The Name <span> ${TheInput.value} </span> `;
    }; 
    TheInput.value = "";
  }
  else{
    results.innerHTML = "Input Cant Be Empty";
  }  
};

//  5:- The Show Function
function ShowItem(){
  if (localStorage.length) {
    results.innerHTML = "";
    for (const [k,v] of Object.entries(localStorage)) {
      results.innerHTML += `<span>  The ${k} => Is ${v} , </span>`;
    }
    TheInput.value = "";
  }
  else{
    results.innerHTML = "No Item To Show";
  }
};


//   *****:-:-:-:-:-:  (20) END    Start Control Local Storage      :-:-:-:-:-:*****


  








//   *****:-:-:-:-:-:  (100) Start       :-:-:-:-:-:*****

//   *****:-:-:-:-:-:  (100) END        :-:-:-:-:-:*****








