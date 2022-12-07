'use strict';

// const modal = document.querySelector('.modal');
// const overlay = document.querySelector('.overlay');
// const btnOpen = document.querySelectorAll('.show-modal');
// const btnClose = document.querySelector('.close-modal');
// console.log(btnOpen);

//use loop statement
// for(let i = 0; i < btnOpen.length; i++){//use lenght of the button
    // btnOpen[i].addEventListener('click', function() {
    //     console.log('button click');
    //     modal.classList.remove('hidden');
    //     //using bacgrond blour
    //     overlay.classList.remove('hidden');
        // display: none to block
    // });
    //when a click to close button
    // btnClose.addEventListener('click', function(){
    //     overlay.classList.add('hidden');
    //     modal.classList.add('hidden');
    // });
    // overlay.addEventListener('click', function(){
    //     overlay.classList.add('hidden');
    //     modal.classList.add('hidden');
    // });


    // method 2
  // useing less Code
    const modal = document.querySelector('.modal');
    const overlay = document.querySelector('.overlay');
    const btnOpen = document.querySelectorAll('.show-modal');
    const btnClose = document.querySelector('.close-modal');

  for (let i = 0; i < btnOpen.length; i++){
    const openModel = function(){
        modal.classList.remove('hidden');
        overlay.classList.remove('hidden');
    };
    const closeModel = function(){
        overlay.classList.add('hidden');
        modal.classList.add('hidden');
    };
    btnOpen[i].addEventListener('click', openModel);
    btnClose.addEventListener('click', closeModel);
    overlay.addEventListener('click', closeModel);

    // Esc Key Use function

  document.addEventListener('keydown', function(e){
  console.log(e.key);

    // frist method useing esc button
    if (e.key === 'Escape'){
      if(!modal.classList.contains('hidden')){
        closeModel();
      };
    };
    
    // second method 
    // if(e.key === 'Escape' && !modal.classList.contains('hidden')){
    //   closeModel();
    // };
  });
};


