on(window, 'load', function () {
    var view = new View();
    var game = new Game();
    game.init(view);
    event(game);
});

const howtoplay=document.getElementsByClassName("subtitle")[0];
const how=document.getElementById("how");
console.log(how);
how.style.display="none";
console.log(howtoplay);

howtoplay.addEventListener("click",()=>{
    how.style.display="block";

})