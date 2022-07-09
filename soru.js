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

