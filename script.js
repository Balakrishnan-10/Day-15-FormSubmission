
var head = document.createElement("h2")
head.innerHTML = "Form Submission:"

var form = document.createElement("form");

function label_create(tagname,attrname,attrvalue,content){
    var ele = document.createElement(tagname);
    ele.setAttribute(attrname,attrvalue);
    ele.innerHTML = content;
    return ele;
}
function break_create(){
    var br = document.createElement("br");
    return br;
}
function input_create(tagname,attr1name,attr1value,attr2name,attr2value,attr3name,attr3value,){
    var ele1 = document.createElement(tagname);
    ele1.setAttribute(attr1name,attr1value);
    ele1.setAttribute(attr2name,attr2value);
    ele1.setAttribute(attr3name,attr3value);
    return ele1;
}
var first_label = label_create("label","for","fname","Firstname");
first_label.placeholder = "Firstname"
var br1 = break_create();
var first_input = input_create("input","type","text","id","fname","placeholder","Firstname");
var br2 = break_create();

var last_label = label_create("label","for","lastname","Lastname");
var br3 = break_create();
var last_input = input_create("input","type","text","id","lastname","placeholder","Lastname");
var br4 = break_create();

var addin1 = label_create("label","for","Address1","Address Line 2:");
var br5 = break_create();
var addout1 = input_create("input","type","text","id","Address1","placeholder","Address Line 1");
var br6 = break_create();

var addin2 = label_create("label","for","Address2","Address Line 2:");
var br7 = break_create();
var addout2 = input_create("input","type","text","id","Address2","placeholder","Address Line 2");
var br8 = break_create();

var pin1 = label_create("label","for","pin","Pincode");
var br9 = break_create();
var pin2 = input_create("input","type","text","id","pin","placeholder","Pincode");
var br10 = break_create();

var gen = document.createElement("label")
gen.innerHTML = "Gender:"
var br11 = break_create();

var genin1 = document.createElement("label")
genin1.innerHTML = "Male"
var genin2 = input_create("input","type","radio","name","gender","value","Male");
genin2.id = "gender"

var genin3 = document.createElement("label")
genin3.innerHTML = "Female"
var genin4 = input_create("input","type","radio","name","gender","value","Female");
genin4.id = "gender1"
var br12 = break_create();


var food = document.createElement("label")
food.innerHTML = "Choice of food(must choose atleast 2 out of 5 options)";
var br13 = break_create();

var food01 = document.createElement("label")
food01.innerHTML = "North Indian"
var food1 = input_create("input","type","checkbox","id","box1","value","Northindian");
var br14 = break_create();

var food02 = document.createElement("label")
food02.innerHTML = "South Indian"
var food2 = input_create("input","type","checkbox","id","box2","value","southindian");
var br15 = break_create();

var food03 = document.createElement("label")
food03.innerHTML = "Chinese"
var food3 = input_create("input","type","checkbox","id","box3","value","chinese");
var br16 = break_create();

var food04 = document.createElement("label")
food04.innerHTML = "Japanese"
var food4 = input_create("input","type","checkbox","id","box4","value","japanese");
var br17 = break_create();

var food05 = document.createElement("label")
food05.innerHTML = "Sea Food";
var food5 = input_create("input","type","checkbox","id","box5","value","sea food");
var br18 = break_create();


var state = label_create("label","for","State","State");
var br19 = break_create();
var state1 = input_create("input","type","text","id","State","placeholder","State");
var br20 = break_create();

var country = label_create("label","for","country","Country");
var br21 = break_create();
var country1 = input_create("input","type","text","id","country","placeholder","Country");
var br22 = break_create();
var br23 = break_create();
var button = document.createElement("button");
button.setAttribute("type","button");
button.setAttribute("onclick","foo()");
button.innerHTML = "Submit";

form.append(head)
form.append(first_label,br1,first_input,br2,last_label,br3,last_input,br4,addin1,br5,addout1,br6,addin2,br7,addout2,br8,pin1,br9,pin2,br10,gen,br11,genin2,genin1,genin4,genin3,br12,food,br13,food1,food01,br14,food2,food02,br15,food3,food03,br16,food4,food04,br17,food5,food05,br18,state,br19,state1,br20,country,br21,country1,br22,br23,button);

document.body.append(form);


var table= document.createElement("table");
table.className = "table";
table.id = "main";

var thead = document.createElement("thead")
thead.className = "thead-dark"

function create_tr(){
    var tr = document.createElement("tr");
    return tr; 
}
function create_th(tagname,attrname,attrvalue,content){
var ele = document.createElement(tagname);
ele.setAttribute(attrname,attrvalue);
ele.innerHTML=content;
return ele;
}

function create_td(tagname,content){
var ele = document.createElement(tagname);
ele.innerHTML = content;
return ele;
}



var thead_tr = create_tr();

var th1 = create_th("th","scope","col","First Name");
var th2 = create_th("th","scope","col","Last Name");
var th3  = create_th("th","scope","col","Address");
var th4 = create_th("th","scope","col","Pincode");
var th5 = create_th("th","scope","col","Gender");
var th6 = create_th("th","scope","col","Food");
var th7 = create_th("th","scope","col","State");
var th8 = create_th("th","scope","col","Country");

thead_tr.append(th1,th2,th3,th4,th5,th6,th7,th8)
thead.append(thead_tr)

var div = document.createElement("div");

var head = document.createElement("h2")
head.innerHTML = "Temporary Database"
div.append(head);
div.append(table);
table.append(thead)
document.body.append(div)

var list = [];
var list1 = [];
var list2 = [];
var list3 = [];
var list4 = [];
var list5 = [];
var list6 = [];
var list7 = [];
 
var a = 1;
var b = 0;
 
function foo(){
var Addrown = document.getElementById("main");
   NewRow = Addrown.insertRow(a);

 list[b] = document.getElementById("fname").value;
 list1[b] = document.getElementById("lastname").value;
 list2[b] = document.getElementById("Address1","Address2").value;
 list3[b] = document.getElementById("pin").value;
 list4[b] = document.getElementById("gender","gender1").value;
 list5[b] = document.getElementById("box1","box2","box3","box4","box5").value;
 list6[b] = document.getElementById("State").value;
 list7[b] = document.getElementById("country").value;

 cel1 = NewRow.insertCell(0);
 cel2 = NewRow.insertCell(1);
 cel3 = NewRow.insertCell(2);
 cel4 = NewRow.insertCell(3);
 cel5 = NewRow.insertCell(4);
 cel6 = NewRow.insertCell(5);
 cel7 = NewRow.insertCell(6);
 cel8 = NewRow.insertCell(7);

 cel1.innerHTML = list[b];
 cel2.innerHTML = list1[b];
 cel3.innerHTML = list2[b];
 cel4.innerHTML = list3[b];
 cel5.innerHTML = list4[b];
 cel6.innerHTML = list5[b];
 cel7.innerHTML = list6[b];
 cel8.innerHTML = list7[b];

 a++;
 b++;
}




























