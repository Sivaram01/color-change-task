

let index = 0;
const colors = ["Blue" , "green" , "red" ,"teal"];
const colorBox = document.querySelector(".color-box")


let colorIntervel;
function start(){

  colorIntervel = setInterval(()=> {
    if(index=== colors.length){
      index = 0;
    }
    colorBox.style.backgroundColor = colors[index];
    console.log(index , colors[index]);
    index++
  }, 1000 * 2);
}

function stop(){
  console.log("stopping" , colorIntervel)
  clearInterval(colorIntervel);
}