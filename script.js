function Soru(soruMetni, cevapSecenekleri, dogruCevap){
    this.soruMetni = soruMetni;
    this.cevapSecenekleri = cevapSecenekleri;
    this.dogruCevap = dogruCevap;
}


Soru.prototype.cevabiKontrolEt = function (cevap){
    return cevap === this.dogruCevap;
}


let sorular = [
    new Soru("1-soru 1",{a:'şık a',b: 'şık b', c: 'şık c'},'a'),
    new Soru("2-soru 1",{a:'şık a',b: 'şık b', c: 'şık c'},'b'),
    new Soru("3-soru 1",{a:'şık a',b: 'şık b', c: 'şık c'},'c'),
    new Soru("4-soru 1",{a:'şık a',b: 'şık b', c: 'şık c'},'a')
]


function Quiz(sorular){
    this.sorular = sorular;
    this.soruIndex = 0;
}

Quiz.prototype.soruGetir  =function (){
    return this.sorular[this.soruIndex];
}

const quiz = new Quiz(sorular);




document.querySelector('.btn-start').addEventListener('click',function (e){
    if(quiz.sorular.length != quiz.soruIndex){
        console.log(quiz.soruGetir());
        quiz.soruIndex +=1;
    }else{
        console.log("sorular bitmiştir");
    }

})

