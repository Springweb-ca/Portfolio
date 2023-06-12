document.querySelector(".navbar-toggle").addEventListener("click", function () {
    var links = document.querySelectorAll(".navbar-links");
    for (var i = 0; i < links.length; i++) {
      links[i].classList.toggle("active");
      console.log("menu toggled");
    }
  });

function onSubmit(token) {
    document.getElementById("demo-form").submit();
  }

const form = document.querySelector('form');
form.addEventListener('submit', function(event){
    event.preventDefault();

    const name = document.querySelector('#name').value;
    const email = document.querySelector('#email').value;
    const phone = document.querySelector('#phone').value; 

    console.log('Name', name);
    console.log('Email:', email);
    console.log('phone Number:', phone);

    form.reset();
})