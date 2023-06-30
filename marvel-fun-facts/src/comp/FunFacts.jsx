export default function FunFacts(){
    const ironManFacts = [
        "Iron Man made his first appearance in the Marvel Cinematic Universe (MCU) with the film 'Iron Man' released in 2008.",
        "Tony Stark, the alter ego of Iron Man, is portrayed by actor Robert Downey Jr., who brought the character to life with his charismatic performance.",
        "Iron Man's suit, known as the Mark III, made its debut in the first 'Iron Man' film and has since undergone multiple upgrades and iterations throughout the MCU.",
        "Tony Stark is the founder of Stark Industries, a fictional technology company that plays a significant role in the MCU.",
        "Iron Man played a pivotal role in the formation of the Avengers, bringing together a team of superheroes to combat threats in the MCU.",
        "The famous line 'I am Iron Man' spoken by Tony Stark in the first 'Iron Man' film became an iconic moment and set the tone for the interconnected Marvel Cinematic Universe.",
        "Iron Man's sacrifice in 'Avengers: Endgame' marked the end of Tony Stark's journey, leaving a lasting impact on the MCU and its characters."
      ];
    
    const ironList = ironManFacts.map(el => <li key={el}>{el}</li>)

    return (
        <div className="fun-facts">
            <h1 id="logo">
                FUN FACTS OF IRON MAN
            </h1>
            <ul>
                {ironList}
            </ul>
        </div>
    )
}