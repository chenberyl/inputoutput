function createInfo() {
  myFunction();
  myFunction2();
  myFunction3();
  myFunction4();
  myFunction5();
  myFunction6();
  myFunction7();
}

function myFunction() {
  var x = document.getElementById("name1").value;
  var cardFnameInfo = document.getElementsByClassName("firstname");
  cardFnameInfo[0].innerHTML = x;
  cardFnameInfo[1].innerHTML = x;
  cardFnameInfo[2].innerHTML = x;

  var signature = document.getElementsByClassName("sign");
  signature[0].innerHTML = x;
  signature[1].innerHTML = x;
  signature[2].innerHTML = x;
}

function myFunction2() {
  var x = document.getElementById("name2").value;
  var cardLnameInfo = document.getElementsByClassName("lastname");
  cardLnameInfo[0].innerHTML = x;
  cardLnameInfo[1].innerHTML = x;
  cardLnameInfo[2].innerHTML = x;
}

function myFunction3() {
  var x = document.getElementById("bday").value;
  var birthdayInfo = document.getElementsByClassName("birth");
  birthdayInfo[0].innerHTML = x;
  birthdayInfo[1].innerHTML = x;
  birthdayInfo[2].innerHTML = x;
}

function myFunction4() {
  var x = document.getElementById("addr").value;
  var addressInfo = document.getElementsByClassName("addy");
  addressInfo[0].innerHTML = x;
  addressInfo[1].innerHTML = x;
  addressInfo[2].innerHTML = x;
}

function myFunction5() {
  var x = document.getElementById("sex").value;
  var sexInfo = document.getElementsByClassName("sex1");
  sexInfo[0].innerHTML = x;
  sexInfo[1].innerHTML = x;
  sexInfo[2].innerHTML = x;
}

function myFunction6() {
  var x = document.getElementById("eye").value;
  var eyeInfo = document.getElementsByClassName("eyeco");
  eyeInfo[0].innerHTML = x;
  eyeInfo[1].innerHTML = x;
  eyeInfo[2].innerHTML = x;
}

function myFunction7() {
  var x = document.getElementById("height").value;
  var heightInfo = document.getElementsByClassName("height1");
  heightInfo[0].innerHTML = x;
  heightInfo[1].innerHTML = x;
  heightInfo[2].innerHTML = x;
}

document.querySelector('button').addEventListener("click", showCard);

function showCard(){
  document.querySelector(".calicard").style.display = 'inline';
  document.querySelector(".cali").style.display = 'inline';
  document.querySelector(".ny").style.display = 'inline';
  document.querySelector(".hawaii").style.display = 'inline';
  document.getElementById("form").style.display = 'none';
}

document.querySelector(".cali").addEventListener("click", showCali);
  function showCali(){
    document.querySelector(".nycard").style.display = 'none';
    document.querySelector(".hawaiicard").style.display = 'none';
    document.querySelector(".calicard").style.display = 'inline';
  }

  document.querySelector(".ny").addEventListener("click", showNy);
    function showNy(){
      let children = document.querySelector('.nycard').children;
      var childrenArr = [].slice.call(children);
      childrenArr.forEach(child => {
        child.style.color = "#fff8cf";
      });

      document.querySelector(".nycard").style.color = 'white';
      document.querySelector(".calicard").style.display = 'none';
      document.querySelector(".hawaiicard").style.display = 'none';
      document.querySelector(".nycard").style.display = 'inline';
    }

    document.querySelector(".hawaii").addEventListener("click", showHawaii);

      function showHawaii(){
        let children = document.querySelector('.hawaiicard').children;
        var childrenArr = [].slice.call(children);
        childrenArr.forEach(child => {
          child.style.color = "#8500a9";
        });

        document.querySelector(".nycard").style.color = 'black';
        document.querySelector(".calicard").style.display = 'none';
        document.querySelector(".hawaiicard").style.display = 'inline';
        document.querySelector(".nycard").style.display = 'none';
      }

var loadFile = function(event) {
	var image = document.getElementsByClassName('output');
  var image2 = document.getElementsByClassName('output2');
	image[0].src = URL.createObjectURL(event.target.files[0]);
  image[1].src = URL.createObjectURL(event.target.files[0]);
  image[2].src = URL.createObjectURL(event.target.files[0]);
  image2[0].src = URL.createObjectURL(event.target.files[0]);
  image2[1].src = URL.createObjectURL(event.target.files[0]);
  image2[2].src = URL.createObjectURL(event.target.files[0]);
};
