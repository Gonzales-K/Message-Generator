const heads = ['turkey', 'hippo', 'giraffe'];
const bodies = ['zebra', 'cow', 'dog'];
const tails = ['peacock', 'horse', 'pig'];
const creatureButton = document.getElementById("creatureButton");
const output = document.getElementById("output");

const randNumber = function(){
    return Math.floor(Math.random()*3);
}

function generateCreature(){
    const head = heads[randNumber()];
    const body = bodies[randNumber()];
    const tail = tails[randNumber()];
    return `Your creature has the head of a ${head}, body of a ${body}, and tail of a ${tail}.`
}

creatureButton.addEventListener("click", function(){
    let creature = generateCreature();
    output.innerHTML = creature;
})