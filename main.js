timer_counter = 0;
timer_check = "";
drawn_sketch = "";
answer_holder = "";
score = 0;

function setup() {
    canvas = createCanvas(280, 280);
    background("white");
}

function preload() {
    classifier = ml5.imageClassifier("DoodleNet");
}

function draw() {
    /* como mandar a llamar una funcion con nombre dentro de otra funcion */
    check_sketch();
    if (drawn_sketch == sketch) {
        answer_holder = "set";
        score ++;
        document.getElementById("points").innerHTML = "Puntuacion:" + score;
    }
}

function check_sketch(){
    timer_counter = (Math.floor(timer_check + 1)/*time_counter ++*/ );
    document.getElementById("time").innerHTML = "Tiempo:" + timer_counter;
    console.log(timer_counter);
    if (timer_counter > 400){
    timer_counter = 0;
    timer_check = completed;
    }
    if (timer_check == "completed" || answer_holder == "set"){
        timer_check = "";
        answer_holder = "";
        actualizarLienzo();
    }
}

function actualizarLienzo() {
    background("white");
    quick_draw_data_set = ['pez', 'reloj', 'manzana', 'lapiz'];
    na = Math.floor((Math.random() * quick_draw_data_set.length) + 1);
    Element_of_array = quick_draw_data_set[na];
    console.log(Element_of_array);
    sketch = Element_of_array;
    document.getElementById("reto").innerHTML = "Dibuja:" + sketch;
}