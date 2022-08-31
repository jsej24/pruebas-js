function fEcha (){
    var a; 
var b; 

    a= parseInt(prompt("por favor digite su edad"));

    b=2022-a;

    alert("su año de nacimiento es" +b);
}

function cApital(){
    var a;
    var e;
    var b;
    var c;
    var d;

    a=parseInt(prompt("por favor digite la cantidad de dinero"));
    e=parseInt(prompt("por favor digite la cantidad de años a evaluar las ganancias"));

    b= (a/100)*2;
    c= b*12;
    d=c*e;

    alert("la ganacia que tendra en la cantidad de " +e+"años es de "+d);

}
function Colegio(){
    var a;
    var e;
    var b;
    var c;
    var d;
    var f;

    a=parseFloat(prompt("digite la nota del estudiante"));
    b=parseFloat(prompt("digite la siguite nota del estudiante"));
    c=parseFloat(prompt("digite la siguite nota del estudiante"));
    d=parseFloat(prompt("digite la siguite nota del estudiante"));
    e=parseFloat(prompt("digite la siguite nota del estudiante"));

f= (a+b+c+d+e)/5;

if(f>5 || f<1){
    alert("las notas no son validas");
}
     if(f>=1 && f<=2.9)
{
    alert("el estiante no aprobo con promedio de: "+f );
}
else{
    alert("el estudiante aprobo con un promedio de:"+f );
}
}

function Kilos(){
    var a;
var c=4500;
var d;
    a= parseInt(prompt("Digite la cantidad de kilos "));

    if(a<0){
alert("cantidad de kilos erroneo");
    }
    else if(a>=0 && a<=2){
        alert("No se le aplica descuento, por tal el total a pagar es: "+c);
    }
    else if(a>=3 && a<=5){
        var b;
        var e;
        e=c*a;
        b= (e*10)/100;
        d= e-b;

        alert("Se le aplica descuento del 10%, por tal el total a pagar es: "+d);
    }
    else if(a>=6 && a<=10){
        var b;
        var e;
        e=c*a;
        b= (e*15)/100;
        d= e-b;

        alert("Se le aplica descuento del 15%, por tal el total a pagar es: "+d);
    }
    else{
        var b;
        var e;
        e=c*a;
        b= (e*20)/100;
        d= e-b;

        alert("Se le aplica descuento del 20%, por tal el total a pagar es: "+d);
    }
}
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