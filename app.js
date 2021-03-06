let liste = [];
let uzunluk = 0;
let tamamla = 0;
const listeUl = document.querySelector("#todo-ul");
// ekranda yazan liste ler
const listeInput = document.querySelector("#todo-input");
const listeButton = document.querySelector("#todo-button");

//? Add Buton is clicked.inputa veri girilip buton tıklandığında listes dizisine inputtaki value eklensin.
// sonra bunu showlistes() fonk gidip sayesinde ekrana bastır

document.querySelector("#todo-button").addEventListener("click", () => {
 
      if (!listeInput.value) {
    alert("Please Enter your listes");
  } else {
    liste.push(listeInput.value);
    console.log(liste);
    showListe();
    uzunluk += 1; 
    document.querySelector("#toplam").innerHTML = uzunluk;
    document.querySelector("#tamamlanan").innerHTML = tamamla;
  }
  listeInput.value="";
  listeInput.focus();

});
// enter'a basarak da liste girmek icin
listeInput.onkeydown=(tuslar)=>{
  //* eger 13 e tusuna (enter'a ) basildiysa
  if(tuslar.keyCode===13){
    document.querySelector("#todo-button").click();
  }
}

const showListe = () => {
  //! add e basıldığında hafızaya task eklenecek, ekrana basmak üzere buraya gelecek,
  //  geldiğinde,localStorage deki verileri (ul listesinde bulunan, ekranda duran) 
  //  baştan tekrar girmemesi için ul yi temizliyoruz
  

  listeUl.innerHTML += `
    <li>
      <i class="fa fa-check fa-lg"> </i>
      <p>${listeInput.value}</p>
      <i class="fa fa-trash fa-lg"></i>
    </li>`;

  createSilButon();

  createTikButon(); 


  listeInput.value ="";
  listeInput.focus();
};

const createSilButon = () => {
  // deleteBtns=nodelist=nesnedir, foreach olmaz
  const silButon = document.querySelectorAll(".fa-trash");
  silButon.forEach((sil) => {
    sil.onclick = () => {
      liste.splice(sil, 1); // backend kismi icin
      sil.parentNode.remove();  // parentElement de yazilabilir
      
      // total kisminin 1 er azalmasi icin
      uzunluk = uzunluk -1 ; 
      document.querySelector("#toplam").innerHTML = uzunluk;

      // checked kisminda da 1 azaltmak icin (eger varsa)
      if (sil.parentNode.classList.contains("checked")) {
        tamamla = tamamla - 1;
        document.querySelector("#tamamlanan").innerHTML = tamamla;
     }
    };
  });
};

createTikButon = () => {
  const TikButon = document.querySelectorAll(".fa-check");
  TikButon.forEach((Tik) => {
    Tik.onclick = () => {
      Tik.parentNode.classList.toggle("checked"); // tiklandiginda class"i ekle ve cikar. sirayla


      if (Tik.parentNode.classList.contains("checked")) {
         tamamla = tamamla + 1;
      } else {
        tamamla = tamamla - 1;
      }
      document.querySelector("#tamamlanan").innerHTML = tamamla; 
   
    };
  });
};





// document.getElementById("MyElement").classList.add('MyClass');

// document.getElementById("MyElement").classList.remove('MyClass');

// if ( document.getElementById("MyElement").classList.contains('MyClass') )

// And to toggle a class (remove if exists else add it):

// document.getElementById("MyElement").classList.toggle('MyClass');




// $('#MyElement').addClass('MyClass');

// $('#MyElement').removeClass('MyClass');

// if ( $('#MyElement').hasClass('MyClass') )
// In addition, jQuery provides a shortcut for adding a class if it doesn't apply, or removing a class that does:

// $('#MyElement').toggleClass('MyClass');
          

// //? Enter button is pressed (farkli bir yöntem)
// todoInput.addEventListener("keydown", (e) => {
//   if (e.key === "Enter") todoButton.click();
// });