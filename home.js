window.onload = function() {   
    var input1 = document.querySelector('.input1');
    var input = document.querySelector('.input');
    var calc = document.querySelector('.calc');
    var green = calc.querySelector('.greencalc');
    var red = calc.querySelector('.redcalc');
    green.style.height = input.value + 'px';
    var discount = calculator(input.value);
    red.style.height = discount + 'px';
    

    input.addEventListener('change', function(ev) {
        input1.value = this.value;
        green.style.height = this.value + 'px';
        var val = calculator(this.value);
        red.style.height = val + 'px';

    });
    input1.addEventListener('change', function(ev){
        input.value = this.value;
        green.style.height = this.value + 'px';
        var val = calculator(this.value);
        red.style.height = val + 'px';
});

function calculator(val) {
    var dis = +val;
    if (dis < 20) { 
        dis = dis / 100 * 2; 
    }
    else { 
        if (dis >= 20 && dis < 50 ) {
            dis = dis / 100 * 4; 
        } else {
            if (dis >= 50 && dis < 75) {
                dis = dis / 100 * 6; 
            } else {
                dis = dis / 100 * 8;
            }
        }
    }
    return dis;
}
}