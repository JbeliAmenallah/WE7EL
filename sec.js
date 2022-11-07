gsap.from('.container', { duration: 5, ease: "elastic.out(1, 0.3)", y: -800 })
gsap.from('.container', { duration: 3, opacity: 0 })
gsap.from('.whr', { duration: 4, opacity: 0 })


function togglepw(){
  var password= document.querySelector('[name=pwd]');

  if (password.getAttribute('type')==='password'){
    password.setAttribute('type', 'text');
    document.getElementById("font").style.color='red';
  }
  else{
  password.setAttribute('type','password');
  document.getElementById("font").style.color='black';
  }
}


function show(){


      swal({
        title: "W E L C O M E!",
        text: "whether you new or old helper",
        icon: "info",
        showCancelButton: true,
        closeOnConfirm: false,
        animation: "slide-from-top",
        inputPlaceholder: "Write something"
      })

    
}