function suma() {
    var a;
    var b;
    var suma;
    
    a = parseInt(prompt("Por favor ingresar el primer valor"));
    b = parseInt(prompt("Por favor ingresar el segundo valor"));
    
    suma = a+b;
    
    alert("el resultado de la suma es:" + suma);
}
function opBasicas() {
    var a;
    var b;
    var suma;
    var resta;
    var multiplicacion;
    var division;
    
    a = parseInt(prompt("Por favor ingresar el primer valor"));
    b = parseInt(prompt("Por favor ingresar el segundo valor"));
    
    suma = a+b;
    resta = a-b;
    multiplicacion=a*b;
    division=a/b;
    
    alert("el resultado de la suma es:" + suma);
    alert("el resultado de la resta es:" + resta);
    alert("el resultado de la multiplicacion es:" + multiplicacion);
    alert("el resultado de la division es:" + division);
}

function nMayor(){
    var a;
    var b;
    
    a = parseInt(prompt("Por favor ingresar el primer valor a comparar"));
    b = parseInt(prompt("Por favor ingresar el segundo valor a comparar"));
    
    if(a==b){
        alert("los valores son iguales");
    }
    else if(a>b){
            alert("el valor " + a + " es el mayor " );
        }
        else{
            alert("el valor " + b +" es el mayor  " );
        }
}
function nMenor(){
    var a;
    var b;
    var c;

    a = parseInt(prompt("Por favor ingresar el primer valor a comparar"));
    b = parseInt(prompt("Por favor ingresar el segundo valor a comparar"));
    c = parseInt(prompt("Por favor ingresar el tercer valor a comparar"));

if(a==b && a==c){
    alert("los valores son iguales");
}
else if(a<b && a<c){
    alert("el valor " + a + " es el menor " );
}
else if(b<a && b<c){
    alert("el valor " + b + " es el menor " );
}
else{
    alert("el valor " + c + " es el menor " );
}
}

function Pimpar(){
    var a;
    var parono;

    a = parseInt(prompt("Por favor ingresar el valor a evaluar"));

    parono= a%2;

    if(parono == 0){
        alert("el valor " + a + " es par " );
    }
    else{
        alert("el valor " + a + "  es impar " );
    }
}

function Cuadra(){
    var a;
    var b;

    a = parseInt(prompt("Por favor ingresar el valor a evaluar"));

    b=a*a;

    alert("el valor al cuadrado de:" + a + " es " +b);
}

function Tri(){
    var a;
    var b;
    var c;
    a = parseInt(prompt("Por favor ingresar la base del triangulo"));
    b = parseInt(prompt("Por favor ingresar la altura del triangulo"));

    c= (a*b)/2;

    alert("el ares del triagulo es de: " + c +"m²"  );

}

function Metro(){
    var a;
    var b;

    a = parseInt(prompt("Por favor ingresar el valor a convertir"));

    b=a*100;

    alert("el valor en centimetros es" + b);
}