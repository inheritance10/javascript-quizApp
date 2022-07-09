function UI(){
    this.btn_start = document.querySelector(".btn_start"),
    this.option_list = document.querySelector('.option_list'),
    this.correctIcon = '<div class="icon"><i class="fas fa-check"></i></div>',
    this.incorrectIcon = '<div class="icon"><i class="fas fa-times"></i></div>'
}

//soruların ekrana basılması
UI.prototype.soruGoster = function (soru){
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
    this.option_list.innerHTML = options;


    const option = this.option_list.querySelectorAll('.option');

    for(let opt of option){
        opt.setAttribute('onclick','optionSelected(this)')
    }
}


//soru sayısı göster
UI.prototype.soruSayisiGoster = function (soruSirasi,toplamSoru){

    let tag = `<span class="btn btn-warning" style="pointer-events: none;cursor: none;">${soruSirasi}/${toplamSoru}</span>`;
    document.querySelector('.question_index').innerHTML = tag;
}
