//base de datos local de preguntas
const bd_juego = [
    {
        id:0,
        pregunta:"¿Qué es la ecología?",
        op0:"La ciencia que estudia las relaciones entre los seres vivos y el medio ambiente",
        op1:"La ciencia que estudia la estructura y función de los ecosistemas",
        op2:"La ciencia que estudia la diversidad de los organismos en la naturaleza",
        op3:"Todas las anteriores",
        correcta:"3"
    },
    {
        id:1,
        pregunta:"¿Qué es un ecosistema?",
        op0:"Un conjunto de organismos que viven en un mismo lugar y se relacionan entre sí",
        op1:"Un conjunto de factores físicos y químicos que influyen en la vida de los organismos",
        op2:"Un conjunto de organismos y el medio ambiente donde viven y se relacionan",
        op3:"Ninguna de las anteriores",
        correcta:"2"
    },
    {
        id:2,
        pregunta:"¿Qué es una población? ",
        op0:"Un grupo de individuos de la misma especie que viven en un mismo lugar y tiempo",
        op1:"Un grupo de individuos de diferentes especies que viven en un mismo lugar y tiempo",
        op2:"Un grupo de individuos que comparten características genéticas similares",
        op3:"Un grupo de individuos que tienen la misma capacidad reproductiva",
        correcta:"0"
    },
    {
        id:3,
        pregunta:"¿Qué es una comunidad?",
        op0:"Un conjunto de poblaciones que viven en un mismo lugar y tiempo y se relacionan entre sí",
        op1:"Un conjunto de organismos que pertenecen al mismo nivel trófico",
        op2:"Un conjunto de organismos que tienen el mismo tipo de alimentación",
        op3:"Un conjunto de organismos que tienen el mismo origen evolutivo",
        correcta:"0"
    },
    {
        id:4,
        pregunta:"¿Qué es la biósfera?",
        op0:"La capa de la Tierra donde se desarrolla la vida",
        op1:"La capa de la atmósfera donde hay oxígeno y ozono",
        op2:"La capa del suelo donde hay materia orgánica e inorgánica",
        op3:"La capa del agua donde hay organismos acuáticos",
        correcta:"0"
    },
    {
        id:5,
        pregunta:"¿Qué son los factores abióticos?",
        op0:"Los componentes vivos de un ecosistema",
        op1:"Los componentes no vivos de un ecosistema",
        op2:"Los componentes químicos de un ecosistema",
        op3:"Los componentes físicos de un ecosistema",
        correcta:"1"
    },
    {
        id:6,
        pregunta:"¿Qué son los factores bióticos?",
        op0:"Los componentes vivos de un ecosistema",
        op1:"Los componentes no vivos de un ecosistema",
        op2:"Los componentes orgánicos de un ecosistema",
        op3:"Los componentes biológicos de un ecosistema",
        correcta:"0"
    },
    {
        id:7,
        pregunta:"¿Qué son los productores?",
        op0:"Los organismos que fabrican su propio alimento mediante la fotosíntesis o la quimiosíntesis",
        op1:"Los organismos que obtienen su alimento al consumir otros organismos o sus restos",
        op2:"Los organismos que transforman la materia orgánica en inorgánica mediante la respiración o la descomposición",
        op3:"Los organismos que regulan el flujo de energía y materia en un ecosistema mediante la depredación o el parasitismo",
        correcta:"0"
    },
    {
        id:8,
        pregunta:"¿Qué son los consumidores?",
        op0:"Los organismos que fabrican su propio alimento mediante la fotosíntesis o la quimiosíntesis",
        op1:"Los organismos que obtienen su alimento al consumir otros organismos o sus restos",
        op2:"Los organismos que transforman la materia orgánica en inorgánica mediante la respiración o la descomposición",
        op3:"Los organismos que regulan el flujo de energía y materia en un ecosistema mediante la depredación o el parasitismo",
        correcta:"1"
    },
    {
        id:9,
        pregunta:"¿Qué son los descomponedores?",
        op0:"Los organismos que fabrican su propio alimento mediante la fotosíntesis o la quimiosíntesis",
        op1:"Los organismos que obtienen su alimento al consumir otros organismos o sus restos",
        op2:"Los organismos que transforman la materia orgánica en inorgánica mediante la respiración o la descomposición",
        op3:"Los organismos que regulan el flujo de energía y materia en un ecosistema mediante la depredación o el parasitismo",
        correcta:"2"
    },
    {
        id:10,
        pregunta:"¿Qué es la cadena alimentaria?",
        op0:"Una secuencia lineal de organismos que se alimentan unos de otros y transfieren energía y materia",
        op1:"Una red compleja de organismos que se alimentan unos de otros y transfieren energía y materia",
        op2:"Una jerarquía de organismos que se clasifican según su nivel trófico y su función ecológica",
        op3:"Una medida de la cantidad de energía y materia que se pierde en cada nivel trófico de un ecosistema",
        correcta:"0"
    },
    {
        id:11,
        pregunta:"¿Qué es la red alimentaria?",
        op0:"Una secuencia lineal de organismos que se alimentan unos de otros y transfieren energía y materia",
        op1:"Una red compleja de organismos que se alimentan unos de otros y transfieren energía y materia",
        op2:"Una jerarquía de organismos que se clasifican según su nivel trófico y su función ecológica",
        op3:"Una medida de la cantidad de energía y materia que se pierde en cada nivel trófico de un ecosistema",
        correcta:"1"
    },
    {
        id:12,
        pregunta:"¿Qué es el nivel trófico?",
        op0:"La posición que ocupa un organismo en la cadena o red alimentaria según su tipo de alimentación",
        op1:"La cantidad de energía y materia que recibe un organismo por su tipo de alimentación",
        op2:"La proporción de biomasa que tiene un organismo en relación con los demás organismos de su tipo de alimentación",
        op3:"La eficiencia con la que un organismo aprovecha la energía y materia que recibe por su tipo de alimentación",
        correcta:"0"
    },
    {
        id:13,
        pregunta:"¿Qué es la pirámide ecológica?",
        op0:"Una representación gráfica de la distribución de los organismos en un ecosistema según su nivel trófico",
        op1:"Una representación gráfica de la variación de la energía, la materia o la biomasa en los diferentes niveles tróficos de un ecosistema",
        op2:"Una representación gráfica de la relación entre el número, el tamaño y el peso de los organismos en un ecosistema",
        op3:"Una representación gráfica de la influencia de los factores abióticos y bióticos en el funcionamiento de un ecosistema",
        correcta:"1"
    },
    {
        id:14,
        pregunta:"¿Qué es el ciclo biogeoquímico? ",
        op0:"El proceso por el cual los elementos químicos esenciales para la vida se reciclan entre los componentes bióticos y abióticos de un ecosistema",
        op1:"El proceso por el cual los organismos obtienen, transforman y liberan los elementos químicos esenciales para la vida en un ecosistema",
        op2:"El proceso por el cual los elementos químicos esenciales para la vida se almacenan en los componentes bióticos o abióticos de un ecosistema",
        op3:"El proceso por el cual los elementos químicos esenciales para la vida se intercambian entre los diferentes niveles tróficos de un ecosistema",
        correcta:"0"
    },
    {
        id:15,
        pregunta:"¿Qué es el ciclo del carbono?",
        op0:"El ciclo biogeoquímico que describe el movimiento del carbono entre la atmósfera, la biosfera, la hidrosfera y la litosfera",
        op1:"El ciclo biogeoquímico que describe el movimiento del carbono entre los productores, los consumidores y los descomponedores",
        op2:"El ciclo biogeoquímico que describe el movimiento del carbono entre las plantas, los animales y los microorganismos",
        op3:"El ciclo biogeoquímico que describe el movimiento del carbono entre los combustibles fósiles, las industrias y los vehículos",
        correcta:"0"
    },
    {
        id:16,
        pregunta:"¿Qué es el ciclo del nitrógeno?",
        op0:"El ciclo biogeoquímico que describe el movimiento del nitrógeno entre la atmósfera, el suelo, las plantas y los animales",
        op1:"El ciclo biogeoquímico que describe el movimiento del nitrógeno entre los fertilizantes, las cosechas, los animales y los desechos",
        op2:"El ciclo biogeoquímico que describe el movimiento del nitrógeno entre los organismos fijadores, los organismos consumidores y los organismos liberadores",
        op3:"El ciclo biogeoquímico que describe el movimiento del nitrógeno entre las formas orgánicas, las formas inorgánicas y las formas gaseosas",
        correcta:"3"
    },
    {
        id:17,
        pregunta:"¿Qué es el ciclo del agua?",
        op0:"El ciclo biogeoquímico que describe el movimiento del agua entre la atmósfera, la hidrosfera, la biosfera y la litosfera",
        op1:"El ciclo biogeoquímico que describe el movimiento del agua entre los estados sólido, líquido y gaseoso",
        op2:"El ciclo biogeoquímico que describe el movimiento del agua entre los procesos de evaporación, condensación, precipitación e infiltración",
        op3:"Todas las anteriores",
        correcta:"3"
    },
    {
        id:18,
        pregunta:"¿Qué es la biodiversidad?",
        op0:"La variedad de especies que habitan en un ecosistema o en una región geográfica",
        op1:"La variedad de genes que poseen los individuos de una población o de una especie",
        op2:"La variedad de ecosistemas que existen en la biosfera o en una región geográfica",
        op3:"Todas las anteriores",
        correcta:"3"
    },
    {
        id:19,
        pregunta:"¿Qué es la conservación ambiental?",
        op0:"El conjunto de acciones que se realizan para proteger y restaurar los recursos naturales y los ecosistemas",
        op1:"El conjunto de normas y leyes que se establecen para regular el uso y aprovechamiento de los recursos naturales y los ecosistemas",
        op2:"El conjunto de valores y actitudes que se promueven para fomentar el respeto y la responsabilidad hacia los recursos naturales y los ecosistemas",
        op3:"Todas las anteriores",
        correcta:"3"
    }

]

//para guardar las respuestas elegidas
let respuestas = [];
//cantidad correctas
let cantiCorrectas = 0;
//pregunta acutal que debe ser cargada
let numPregunta = 0;

//Cargo una pregunta del JSON
function cargarPreguntas(){
    //tomo la pregunta actual de la bd
    const pregunta = bd_juego[numPregunta];

    const contenedor = document.createElement("div");
    contenedor.className = "contenedor-pregunta";
    contenedor.id = pregunta.id;
    const h2 = document.createElement("h2");
    h2.textContent = pregunta.id + 1 + " - " + pregunta.pregunta;
    contenedor.appendChild(h2);
    const opciones = document.createElement("div");

    //vamos a crear los tres labels
    //Lo vamos a hacer mediante una funciòn.
    // A dicha función le envio el numero de label y la opcion
    // el texto, de dicho label
    const label1 = crearLabel("0",pregunta.op0);
    const label2 = crearLabel("1",pregunta.op1);
    const label3 = crearLabel("2",pregunta.op2);
    const label4 = crearLabel("3",pregunta.op3);


    //agrego los labels al contendor de las opciones
    opciones.appendChild(label1);
    opciones.appendChild(label2);
    opciones.appendChild(label3);
    opciones.appendChild(label4);

    //agrego las opciones al contenedor principal
    contenedor.appendChild(opciones);
    document.getElementById("juego").appendChild(contenedor);
}

//creo la funciòn que que retornará el label con todo su contenido
function crearLabel(num, txtOpcion){
    const label = document.createElement("label");
    label.id = "l" + numPregunta + num;
    const input = document.createElement("input");
    input.setAttribute("type", "radio");
    input.name = "p" + numPregunta;
    input.setAttribute("onclick", "seleccionar(" + numPregunta+","+num+")");
    const span = document.createElement("span");
    const correccion = document.createElement("span");
    correccion.id = "p" + numPregunta + num;
    span.textContent = txtOpcion;
    label.appendChild(input);
    label.appendChild(span);
    label.appendChild(correccion);

    return label;
}

//Mediante un for cargo todas las preguntas del JSON
for(i=0;i < bd_juego.length;i++){
    cargarPreguntas();
    //actualizo el numero de pregunta actual
    numPregunta++;
}

//Función que carga la opción elegida en el arreglo respuestas.
function seleccionar(pos, opElegida){
    respuestas[pos] = opElegida;
}

//botón corregir
let corregir = document.getElementById("corregir");
corregir.onclick = function(){
    //recorro el arreglo que tiene las respuestas y comparo
    for(i=0;i<bd_juego.length;i++){
        //cargo la pregunta
        const pregunta = bd_juego[i];
        if(pregunta.correcta == respuestas[i]){ //respuesta correcta
            cantiCorrectas++;
            let idCorreccion = "p" + i + pregunta.correcta;
            document.getElementById(i).className = "contenedor-pregunta correcta";
            document.getElementById(idCorreccion).innerHTML = "&check;";
            document.getElementById(idCorreccion).className = "acierto";
        
        }
    }

    //desabilitamos todos los inputs
    let inputs = document.getElementsByTagName("input");
    for(i=0;i<inputs.length;i++){
        inputs[i].disabled = true;
    }

    //hacemos un scroll hacia arriba
    window.scrollTo(0,0);
    //colocamos la cantidad que acertoy las que no acertó
    h2 = document.createElement("h2");
    h2.className = "resultado";
    h2.textContent = cantiCorrectas + " CORRECTAS - " + (20-cantiCorrectas) + " INCORRECTAS";
    document.getElementById("juego").appendChild(h2);
}