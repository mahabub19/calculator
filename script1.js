let screen = document.getElementById('input_field');
let buttons = document.querySelectorAll('button');

let buttonarray = Array.from(buttons);

let s = ""
screen.value = s;
let fg = 0;

buttonarray.forEach(element => {
    element.addEventListener('click', (e) => {

        let c = e.target.innerHTML;
        if (c == "DEL") {
            s = s.substring(0, s.length - 1);
        }
        else if (c == "AC") {
            s = "";
        }
        else if (c == "=") {
            s = eval(s);
            fg = 1;
        }
        else {
            if (fg == 1) {
                s = "";
                fg = 0;
            }
            s += e.target.innerHTML;
        }
        screen.value = s;
    });
});