
// Dice Roller

function rollDice(){
    const numOfDice = document.getElementById("numOfDice");
    const diceResult = document.getElementById("diceResult");
    const diceImages = document.getElementById("diceImages");

    const values = [];
    const images = [];
    
    for(let i= 0; i <numOfDice.value ; i++){
        const value = Math.floor(Math.random()*6) + 1;

        values.push(value);
        images.push(`<img src="Dice Images/Dice${value}.png">`);
    }

    diceResult.textContent = values;
    diceImages.innerHTML = images.join("");
}