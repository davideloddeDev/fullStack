export function MouseClicker() {
  function handleButtonClick(event) {
    console.log(event.currentTarget.name);
  }

  return(
    <div>
        <button name="one" onClick={handleButtonClick}>Cliccami</button>
        <button name="two" onClick={handleButtonClick}>Cliccami</button>
    </div>
    
  ) 
}
