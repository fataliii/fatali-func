let btn = document.getElementById('btn')
let a = document.getElementById('a')

btn.onclick = () =>{
    let n1 = parseFloat(document.getElementById('n1').value);
    let n2 = document.getElementById('n2').value;

let sum = 0;
if (isNaN(n1) || isNaN(n2)) {
    a.innerHTML = 'Enter number!'
}
else {
    for ( x = n1; x <= n2; x++) {
        sum += x;
        
    }
    a.innerHTML = sum
}
}

let on = document.getElementById('on');
  let b = 120;
  let c = 80;

on.onclick = () => {
    b += 50;
    c += 25;
    on.style.width = `${b}px`
    on.style.height = `${c}px`
}
