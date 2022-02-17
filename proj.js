var overlay = document.getElementById("overlay");
let ol = false;


function dwbutton() {
  ol = true;
  overlay.setAttribute("class", "proj_ol");
  overlay.setAttribute('id', 'overlay');
  thememode();

  let exit = document.createElement("button");
  exit.setAttribute("id", "exit_but");
  exit.setAttribute("class", "exit_button");
  exit.onclick = remove;
  overlay.appendChild(exit);


  let image = document.createElement("img");
  image.src ="data/exit.png";
  image.setAttribute("id", "exit_img");
  exit.appendChild(image);

  let header = document.createElement("h1");
  header.setAttribute("class", "title_text");
  header.setAttribute("id", "header");
  header.innerHTML = "Drink Water";
  overlay.appendChild(header);

  let pdiv = document.createElement("div");
  pdiv.setAttribute("id", "pdiv");
  pdiv.setAttribute("class", "pdiv");

  let paragraph = document.createElement("p");
  paragraph.setAttribute("id", "paragraph");
  paragraph.innerHTML =
    "◦Idea: Given by someone important and seemed like a medium task, at first thought. After starting working on it I saw<br> how hard it is to develop a desktop application. For more information about the project and all the difficulties I met check <a href='https://github.com/Yttrriium/Basic-Projects' class='a' id='a' target='_blank'>GitHub</a><br>◦Technologies: C# with the Windows Presentation Foundation ~ WPF<br>◦Usage: A simple reminder that rings from half to half a hour in order to make you<br> drink water<br>◦Tips: Open the application only from <i>drinkwater.exe</i>";
  pdiv.appendChild(paragraph);
  overlay.appendChild(pdiv);

  let butdiv = document.createElement('div');
  butdiv.setAttribute('id', 'butdiv');
  butdiv.setAttribute('class', 'butdiv');
  overlay.appendChild(butdiv);

  let downbut = document.createElement("button");
  downbut.setAttribute("id", "downbut");
  downbut.setAttribute("class", "downbut");
  let downimage = document.createElement("img");
  downimage.src ="data/down.png";
  downimage.setAttribute("id", "down_img");
  downbut.appendChild(downimage);
  var element = document.createElement("a");
  downbut.onclick = function () {
    element.setAttribute(
      "href",
      "data:Application/.exe;charset=utf-8," +
        encodeURIComponent(
          "data/DrinkWater.exe"
        )
    );
    element.setAttribute("download", "Drink Water");
    element.style.display = "none";
    downbut.appendChild(element);
    element.click();
    downbut.removeChild(element);
  };

  butdiv.appendChild(downbut);

  let sitebut = document.createElement("button");
  sitebut.setAttribute("id", "sitebut");
  sitebut.setAttribute("class", "sitebut");
  let siteimg = document.createElement("img");
  siteimg.src = "data/web.png";
  siteimg.setAttribute("id", "siteimg");
  sitebut.appendChild(siteimg);
  sitebut.onclick = function () {
    window.open("dw.html", '_blank');
  };
  butdiv.appendChild(sitebut);
}

function cppbutton() {
  ol = true;
  overlay.setAttribute("class", "proj_ol");
  overlay.setAttribute('id', 'overlay');
  thememode();

  let exit = document.createElement("button");
  exit.setAttribute("id", "exit_but");
  exit.setAttribute("class", "exit_button");
  exit.onclick = remove;
  overlay.appendChild(exit);


  let image = document.createElement("img");
  image.src ="data/exit.png";
  image.setAttribute("id", "exit_img");
  exit.appendChild(image);

  let header = document.createElement("h1");
  header.setAttribute("class", "title_text");
  header.setAttribute("id", "header");
  header.innerHTML = "C++'s Basics";
  overlay.appendChild(header);

  let pdiv = document.createElement("div");
  pdiv.setAttribute("id", "pdiv");
  pdiv.setAttribute("class", "pdiv");

  let paragraph = document.createElement("p");
  paragraph.setAttribute("id", "paragraph");
  paragraph.innerHTML =
    "◦Idea: It was the theme of the contest I have participated along with 2 more friends. We were required to do an <br>educational app in C++ or C#, whether it is a game or any other type of application.<br>◦Technologies: C++ with the long-gone supported library graphics.h<br>◦Usage: Works as a book with pages and a game that tests your knowledge after every chapter<br>◦Tips: Don't try to run it on a x64 compiler.";
  pdiv.appendChild(paragraph);
  overlay.appendChild(pdiv);

  let butdiv = document.createElement('div');
  butdiv.setAttribute('id', 'butdiv');
  butdiv.setAttribute('class', 'butdiv');
  overlay.appendChild(butdiv);

  let downbut = document.createElement("button");
  downbut.setAttribute("id", "downbut");
  downbut.setAttribute("class", "downbut");
  let downimage = document.createElement("img");
  downimage.src ="data/down.png";
  downimage.setAttribute("id", "down_img");
  downbut.appendChild(downimage);
  var element = document.createElement("a");
  downbut.onclick = function () {
    element.setAttribute(
      "href",
      "data:Application/.exe;charset=utf-8," +
        encodeURIComponent(
          "data/DrinkWater.exe"
        )
    );
    element.setAttribute("download", "Drink Water");
    element.style.display = "none";
    downbut.appendChild(element);
    element.click();
    downbut.removeChild(element);
  };

  butdiv.appendChild(downbut);

  
}

function remove() {
  ol = false;
  overlay.removeAttribute("class");
  overlay.removeChild(document.getElementById("header"));
  overlay.removeChild(document.getElementById("exit_but"));
  overlay.removeChild(document.getElementById("pdiv"));
  overlay.removeChild(document.getElementById("butdiv"));
}