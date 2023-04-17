
const game={
        status : "in progress",
        scoreHistory: [3,3,52,1]
}

Object.defineProperty(game,'completed',{
    set(value){
        
    }
})

console.log(game.highscore);
game.scoreHistory.push(110);

// console.log(game);










