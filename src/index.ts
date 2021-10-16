let altura: number = document.getElementById("altura");

let btn = document.getElementById("btn");
btn.addEventListener("click", () => {
  if (altura.value >= 130) {
    console.log("puede jugar a la montaña rusa");
  } else {
    console.log("no puede jugar a la montaña rusa");
  }
});
