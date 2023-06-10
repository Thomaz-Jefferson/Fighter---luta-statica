//guerreiro ou mago
//mostro grande ou monstro pequeno
class Avatar{
    
    _life=1;
    maxlife=1;
    attack=0;
    defense=0;

    constructor (name){
        this.name=name;


    }

    get life(){
        return this._life;
    }
    set life(newlife){
        this._life=newlife <0 ? 0: newlife;

    }
}

class Guerreiro extends Avatar{
    constructor(name){
        super(name);
        this.life=100;
        this.attack=5;
        this.defense=3;
        this.maxlife=this.life;
    }

}

class Mago extends Avatar{
    constructor(name){
        super(name);
        this.life=80;
        this.attack=15;
        this.defense=15;
        this.maxlife=this.life;
    }
}
class monstropequeno extends Avatar{
    constructor(){
        super("Litter Monster");
        this.life=40;
        this.maxlife=this.life;
        this.attack=4;
        this.defense=4;
        
    }
}

class monstrogrande extends Avatar{
    constructor(){
        super("Big Monster");
        this.life=120;
        this.maxlife=this.life;
        this.attack=16;
        this.defense=6;

    }
}
class Stage{
    constructor(fighter1,fighter2,fighter1El,fighter2El,logObject){
        this.fighter1=fighter1;
        this.fighter2=fighter2;
        this.fighter1El=fighter1El;
        this.fighter2El=fighter2El;
        this.log=logObject;
    }

    start(){

        //botao de atacar
        this.update();
        this.fighter1El.querySelector(".attackButton").addEventListener("click",()=> this.doAttack(this.fighter1,this.fighter2));
        this.fighter2El.querySelector(".attackButton").addEventListener("click",()=>this.doAttack(this.fighter2,this.fighter1));
        
    }
    update(){
        //fighter1
        this.fighter1El.querySelector(".name").innerHTML = `${this.fighter1.name} - ${this.fighter1.life.toFixed(1)}HP`;
        let f1Pct = (this.fighter1.life/this.fighter1.maxlife)*100;
        this.fighter1El.querySelector(".bar").style.width=`${f1Pct}%`
        
        this.fighter2El.querySelector(".name").innerHTML = `${this.fighter2.name} - ${this.fighter2.life.toFixed(1)}HP`;;
        let f2Pct = (this.fighter2.life/this.fighter2.maxlife)*100;
        this.fighter2El.querySelector(".bar").style.width=`${f2Pct}%`
    }
    doAttack(attacking, attacked){
        if (attacking.life <=0 || attacked.life <=0){
            this.log.addMesseger("ja morreu meu fi!")
            return;
        }
        let attackedFactor =(Math.random()*2).toFixed(2);
        let defenseFactor =(Math.random()*2).toFixed(2);
        
        let actualAttack=attacking.attack * attackedFactor;
        let actualDefense=attacked.defense * defenseFactor;
        
        if (actualAttack  > actualDefense){
            attacked.life -= actualAttack;
            

            this.log.addMesseger(`${attacking.name} causou ${actualAttack.toFixed(2)} de dano`)

        }else
        {
            this.log.addMesseger(`${attacked.name } conseguiu defender...`)
           
        }
        this.update();
    }
}
class Log{
    list=[];
    constructor(listEl){

        this.listEl = listEl;
    }
    addMesseger(msg){
        this.list.push(msg);
        this.render();

    }
    render(){
        this.listEl.innerHTML="";
        for( let i in this.list){
            this.listEl.innerHTML+=`<li>${this.list[i]}</li>`
        }

    }
}