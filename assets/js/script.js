
let log = new Log(document.querySelector(".log"));
let char = new Guerreiro("Thomaz");
let monster = new monstrogrande();


const stage = new Stage(
    char,
    monster,
    document.querySelector("#char"),
    document.querySelector("#monster"),
    log
    
    
);

stage.start();