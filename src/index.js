import differenceInSeconds from 'date-fns/differenceInSeconds' ;
import addDays from 'date-fns/addDays'

const timeCards= document.querySelector('.time-cards');

class Countdown{
    constructor(){
        this.start = new Date();
        this.end = addDays(this.start,14);
    }
    calc(){
        this.start= new Date();
        this.result = differenceInSeconds(this.end, this.start)

        const days= Math.floor(this.result / 86400);
        const hours = Math.floor((this.result % 86400) / 3600);
        const minutes = Math.floor(((this.result % 86400)%3600) /60);
        const seconds = Math.floor(((this.result % 86400)%3600) %60);
        this.data = [days, hours, minutes, seconds];
""
        // adding "0" to single digits 
        this.data.forEach((value,index) => {
                if (value.toString().length<2){
                        value= ("0" + value.toString());
                        this.data[index]= value;
                }
        })
    }

    init(){
        //html template
        const html = 
        `<div class="days">
            <div class="values">${this.data[0]}</div>
            <div class="bottom"></div>
            <p class="my-2">Days</p>
        </div>
        <div class="hours">
            <div class="values">${this.data[1]}</div>
            <div class="bottom"></div>
            <p class="my-2">Hours</p>
        </div>
        <div class="minutes">
            <div class="values">${this.data[2]}</div>
            <div class="bottom"></div>
            <p class="my-2">Minutes</p>
        </div>
        <div class="seconds">
            <div class="values">${this.data[3]}</div>
            <div class="bottom"></div>
            <p class="my-2">Seconds</p>
        </div>` ;

        timeCards.innerHTML = html ;
    }
}
const deneme = new Countdown();

const app= setInterval(()=>{
        deneme.calc();
        deneme.init();
}, 1000);
app();
