var intro   = document.querySelector('.intro'),
    btn     = document.querySelector('.continue'),
    home    = document.querySelector('.home');

btn.addEventListener('click', function(){
    intro.style.display = 'none'; // hide the intro section
    home.style.display = 'block'; // Show the home page
});
