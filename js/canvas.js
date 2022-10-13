/*Canvas*/

var canvas = document.querySelector("#canvas");
var X, Y, W, H, r;
canvas.height = 250;
function inicializarCanvas() {
    if (canvas && canvas.getContext) {
        var ctx = canvas.getContext("2d");
        if (ctx) {
            var s = getComputedStyle(canvas);
            var w = s.width;
            var h = s.height;

            W = canvas.width = w.split("px")[0];
            H = canvas.height = h.split("px")[0];

            X = Math.floor(W / 2);
            Y = Math.floor(H / 2);
            r = Math.floor(W / 3);

            dibujarLineasPrincipales(ctx);
            for (let i = 0; i <= contadorErrores; i++) {
                dibujarAhorcado(i);
            }

            /* ctx.moveTo(150, 380);
             ctx.lineTo(150, 65);
             ctx.lineTo(300, 65);
             ctx.lineTo(300, 100);
             ctx.stroke();
             ctx.closePath();*/
        }
    }
}

function dibujarLineasPrincipales(ctx) {
    ctx.lineWidth = 5;//Ancho de linea
    ctx.lineCap = "round";//Forma de linea, valores butt,round/square
    ctx.strokeStyle = "#0A3871";

    ctx.beginPath();
    //Linea vertical grande |
    ctx.moveTo(40, 30);
    ctx.lineTo(40, H - 30);

    //linea horizontal pequeña -
    ctx.moveTo(40, 30);
    ctx.lineTo(W / 2, 30);
    //linea horizontal grande -
    ctx.moveTo(20, H - 30);
    ctx.lineTo(W - 50, H - 30)
    ctx.stroke();


   
}


function dibujarAhorcado(contador) {
    ctx.lineWidth = 5;//Ancho de linea
    ctx.lineCap = "round";//Forma de linea, valores butt,round/square
    ctx.strokeStyle = "#0A3871";

    ctx.beginPath();
    switch (contador) {
        case 1:
            //line vertical pequeña |
            ctx.moveTo(W / 2, 30);
            ctx.lineTo(W / 2, H / 4);
            ctx.stroke();
            break;
        case 2:
            //cabeza
            ctx.arc((W / 2), (H / 4) + 25, 25, 0, 2 * Math.PI); //El + 25 dependera del radio que se de al circulo
            ctx.stroke();
            break;
        case 3:
            //cuerpo
            ctx.moveTo(W / 2, (H / 4) + 50);
            ctx.lineTo(W / 2, H / 1.5);
            ctx.stroke();
            break;
        case 4:
            //Mano izquierda
            ctx.moveTo(W / 2, H / 2);
            ctx.lineTo((W / 1.65), (H / 1.7));
            ctx.stroke();
            break;
        case 5:
            //Mano derecha
            ctx.moveTo(W / 2, H / 2);
            ctx.lineTo((W / 2.5), (H / 1.7));
            ctx.stroke();
            break;
        case 6:
            //Pie izquierdo
            ctx.moveTo(W / 2, H / 1.5);
            ctx.lineTo((W / 1.65), (H / 1.3));
            ctx.stroke();
            break;
        case 7:
            //pie derecho
            ctx.moveTo(W / 2, H / 1.5);
            ctx.lineTo((W / 2.5), (H / 1.3));
            ctx.stroke();
            break;
        default:
            break;
    }
}
function dibujarEnElCanvas(ctx) {
    ctx.strokeStyle = "#006400";
    ctx.fillStyle = "#6ab155";
    ctx.lineWidth = 5;
    ctx.arc(X, Y, r, 0, 2 * Math.PI);
    ctx.fill();
    ctx.stroke();
}