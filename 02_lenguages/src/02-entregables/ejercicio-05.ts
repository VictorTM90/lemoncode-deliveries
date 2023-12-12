console.log("************** DELIVERABLE 05 *********************");
class SlotMachine {
  coins: number; 
  constructor(){
    this.coins = 0; 
  };
  private insertCoins () :  void {
    this.coins++;
  }
  private resetCoins () : void {
    this.coins = 0;
  }
  private randomBool (): boolean {
    return Math.random() >= 0.5
  }
  private combination (): boolean[]{
    return [this.randomBool(), this.randomBool(), this.randomBool()]
  }
  private isWinnerPlay() : boolean{
    return this.combination().every(combination => combination === true)
  }
  private messageToWinner () :string{
    return `Congrats! Yo win ${this.coins}€`;
  }
  private messageToLoser () :string{
    return "Good luck next time!!"
  }
  private playerLose () :void{
    console.log(this.messageToLoser());
  }
  private playerWins () : void{
    console.log(this.messageToWinner());
    this.resetCoins();
  }
  public play (): void{
    this.insertCoins()
    this.isWinnerPlay() ? this.playerWins() : this.playerLose();
  }; 
}
const player1 = new SlotMachine()
player1.play()
player1.play()
player1.play()