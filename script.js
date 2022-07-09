// OOP: Nesne Tabanlı Programlama


const next_question = $('#next_question');
const option_list = document.querySelector('.option_list');

const correctIcon = '<div class="icon"><i class="fas fa-check"></i></div>';
const incorrectIcon = '<div class="icon"><i class="fas fa-times"></i></div>'

function Soru(soruMetni, cevapSecenekleri, dogruCevap) {
    this.soruMetni = soruMetni;
    this.cevapSecenekleri = cevapSecenekleri;
    this.dogruCevap = dogruCevap;
}

Soru.prototype.cevabiKontrolEt = function(cevap) {
    return cevap === this.dogruCevap
}

let sorular = [
    new Soru("1-Hangisi javascript paket yönetim uygulasıdır?", { a: "gf.js", b: "Typescript", c: "Npm" }, "c"),
    new Soru("2-Hangisi node paket yönetim uygulasıdır?", { a: "gf.js", b: "ff", c: "fg" }, "c"),
    new Soru("3-Hangisi c# paket yönetim uygulasıdır?", { a: "fd.js", b: "react", c: "gfs" }, "c"),
    new Soru("4-Hangisi python paket yönetim uygulasıdır?", { a: "Node.js", b: "vue", c: "react" }, "c")
];

function Quiz(sorular) {
    this.sorular = sorular;
    this.soruIndex = 0;
}

Quiz.prototype.soruGetir = function() {
    return this.sorular[this.soruIndex];
}

const quiz = new Quiz(sorular);



//quiz start
document.querySelector(".btn_start").addEventListener("click", function() {
    if (quiz.sorular.length != quiz.soruIndex) {
        //document.querySelector(".quiz_box").classList.add("active");
        next_question.attr("style", "display:none")
        $('.quiz_box').addClass('active');

        $('.cd-popup').removeClass('is-visible');

        let soru = quiz.soruGetir();
        soruGoster(soru);
        soruSayisiGoster(quiz.soruIndex+1,quiz.sorular.length);

    } else {
        console.log("quiz bitti");
    }
})

function soruSayisiGoster(soruSirasi,toplamSoru){

    let tag = `<span class="btn btn-warning" style="pointer-events: none;cursor: none;">${soruSirasi}/${toplamSoru}</span>`;
    document.querySelector('.question_index').innerHTML = tag;
}

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
        soruSayisiGoster(quiz.soruIndex+1,quiz.sorular.length);
        next_question.attr("style", "display:none")

        soruGoster(soru);

    } else {
        console.log("quiz bitti");
    }
})


//soruların ekrana basılması
function soruGoster(soru){
    //gelen soruyu ekrana basıyoruz
    let question = `<span>${soru.soruMetni}</span>`;


    //şıkları for ile key value şeklinde çekiyoruz
    let options = "";

    for(let cevap in soru.cevapSecenekleri){
        options +=`<div class="option">
                    <span> <b>${cevap}</b>: ${soru.cevapSecenekleri[cevap]}</span>
                  </div>`;

    }




    $('.question_text').html(question);
    option_list.innerHTML = options;


    const option = option_list.querySelectorAll('.option');

    for(let opt of option){
        opt.setAttribute('onclick','optionSelected(this)')
    }
}


//seçilen seçenek içerisindeki bilgilere ulaşabiliyoruz
function optionSelected(option){
    let cevap = option.querySelector('span b').textContent;
    let soru = quiz.soruGetir();


    if(soru.cevabiKontrolEt(cevap)){
           next_question.attr("style", "display:block;")
           next_question.addClass('transition');
           option.classList.add('correct');
           option.insertAdjacentHTML('beforeend',correctIcon);

    }else{
        option.classList.add('incorrect');
        next_question.attr("style", "display:block");
        next_question.addClass('transition');
        option.insertAdjacentHTML('beforeend',incorrectIcon);
    }

    for(let i=0;i<option_list.children.length;i++){
        option_list.children[i].classList.add('disabled')
    }
}







