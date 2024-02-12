function createGame(){
    
    let score = 0;

    function ptInc(points){
        score = points++;
        console.log(`+${points} pts`);
        
    }
    
    function ptDec(points){
        score -= points;
        console.log(`-${points} pts`);
    }
    
    function getScore(){
        return score;
        }
    
        return{ptDec, ptInc, getScore}
   

}
const game = createGame();

game.ptInc(11);
game.ptDec(5);
game.ptInc(10);
console.log(`The current score is ${game.getScore()} pts`);