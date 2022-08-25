
let option = prompt(`Elija una opcion:
1: Tabla de multiplicar
2: Serie Fibonacci
3: Numeros Pares
`);


switch (option) {
    case "1":
            let w = prompt("ingrese la tabla de multiplicar que desea");
            let h = 1;
            let rta = 0;
            while(h<=10){
                rta=h*w;
                console.log(w + " x " + h + " = 1" +  rta);
                h++;
            }
        break;
        case "2":
            let x = prompt("ingrese variable x");
            let y = prompt("ingrese variable y");
            function GenerateFibonacci(number){
    
                var fibonacci = [];
                fibonacci[0] = x;
                fibonacci[1] = y;
                for (var i = 2; i < number; i++) {
                  fibonacci[i] = fibonacci[i - 2] + fibonacci[i - 1];
                }
                return fibonacci;
                }
                var f = GenerateFibonacci(10);
                console.log(f);
            break;
            case "3":
                let t = prompt("Cuantas series deseas?");
                let z = 1;
                let k = 2;
                let rta2 = 0;
                do {
                    rta2=k*z;
                    console.log(z + ": " + rta2);
                    z++;
                  } while (z <= t);
            break;

    default:
        break;
}
