var RollBox = document.getElementById("rollBox");
var NameBox = document.getElementById("nameBox");
var QuanBox = document.getElementById("quanBox");
var AddBox = document.getElementById("addBox");
var ConBox = document.getElementById("conBox");
var itemBox = document.getElementById("itemBox");
var MesBox = document.getElementById("mesBox");


// Button References

document.querySelectorAll(".btn1")[0].onclick = insertData1;

function insertData1(event) {
  event.preventDefault();
  readFormData1();
  clearFormData1();
}

// Read Data from Form
var rollV, nameV, quanV, addV,mesV,conV,itemV;

function readFormData1() {
  rollV = RollBox.value;
  nameV = NameBox.value;
  quanV = QuanBox.value;
  addV = AddBox.value;
  conV = ConBox.value;
  itemV = itemBox.value;
  mesV = MesBox.value;

  console.log(rollV, nameV, quanV, addV,conV,itemV,mesV);
}

// Clear Form after data Submission

function clearFormData1() {
  RollBox.value = "";
  NameBox.value = "";
  QuanBox.value = "";
  AddBox.value = "";
  ConBox.value = "";
  itemBox.value = "";
  MesBox.value = "";
}

var nameB = document.getElementById("name1");
var email = document.getElementById("email");
var number = document.getElementById("num");
var area = document.getElementById("area");

document.querySelectorAll(".contact-form-btn")[0].onclick = insertData;
function insertData(event) {
    event.preventDefault();
    readFormData();
    clearFormData();
  }

var NameV,emailV,numV,areaV;
function readFormData() {
    
    NameV = nameB.value;
    emailV = email.value;
    numV = number.value;
    areaV = area.value;
   
  
    console.log( NameV, emailV, numV,areaV);
  }

  function clearFormData() {
   
    nameB.value="";
    email.value="";
     number.value="";
     area.value="";
  }

  



