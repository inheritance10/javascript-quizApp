// OOP: Nesne Tabanlı Programlama
const quiz = new Quiz(sorular);
const ui = new UI();


const next_question = $('#next_question');






//quiz start
ui.btn_start.addEventListener("click", function() {
    if (quiz.sorular.length != quiz.soruIndex) {
        //document.querySelector(".quiz_box").classList.add("active");
        startTimer(10);
        next_question.attr("style", "display:none")
        $('.quiz_box').addClass('active');

        $('.cd-popup').removeClass('is-visible');

        let soru = quiz.soruGetir();
        ui.soruGoster(soru);
        ui.soruSayisiGoster(quiz.soruIndex+1,quiz.sorular.length);

    } else {
        console.log("quiz bitti");
    }
})



//çıkış için confirm
$('#yes').on('click' , function (){
    event.preventDefault();
    $('.quiz_box').removeClass('active');
    quiz.soruIndex = 0;
    next_question.attr("style", "display:none")

})

$('#no').on('click', function (){
    event.preventDefault();
    $('.cd-popup').removeClass('is-visible');
});


//sırada ki soru geçiş
next_question.on('click',function (){
    if (quiz.sorular.length != quiz.soruIndex + 1) {
        quiz.soruIndex += 1;
        let soru = quiz.soruGetir();
        ui.soruSayisiGoster(quiz.soruIndex+1,quiz.sorular.length);
        next_question.attr("style", "display:none");

        ui.soruGoster(soru);

    } else {
        ui.skoruGoster(quiz.sorular.length,quiz.dogruCevapSayisi);
        ui.score_box.addClass('active');
        $('.quiz_box').removeClass('active');
    }
})


//testi bitir buton
ui.btn_quit.on('click',function (){
    location.reload();
})
//yeniden başlat buton
ui.btn_replay.on('click',function (){
    quiz.soruIndex = 0;
    quiz.dogruCevapSayisi = 0;
    ui.btn_start.click();
    ui.score_box.removeClass('active');
})



//seçilen seçenek içerisindeki bilgilere ulaşabiliyoruz
function optionSelected(option){
    let cevap = option.querySelector('span b').textContent;
    let soru = quiz.soruGetir();




    if(soru.cevabiKontrolEt(cevap)){
           quiz.dogruCevapSayisi += 1;
           next_question.attr("style", "display:block;")
           next_question.addClass('transition');
           option.classList.add('correct');
           option.insertAdjacentHTML('beforeend',ui.correctIcon);

    }else{
        option.classList.add('incorrect');
        next_question.attr("style", "display:block");
        next_question.addClass('transition');
        option.insertAdjacentHTML('beforeend',ui.incorrectIcon);
    }

    for(let i=0;i<ui.option_list.children.length;i++){
        ui.option_list.children[i].classList.add('disabled')
    }
}


let counter;
function startTimer(time){
    setInterval(timer,1000);

    function timer(){
        ui.time_second.text(time);
        time--;
        if(time < 0){
            clearInterval(counter);
        }
    }
}







