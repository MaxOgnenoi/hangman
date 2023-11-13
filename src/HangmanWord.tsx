type HangmanDrawingProps = {
    guessedLetters: string[]
    wordToGuess: string
    reveal?: boolean
}

export function HangmanWord({ guessedLetters, wordToGuess, reveal = false }: HangmanDrawingProps) {

    return <div style={{
        display: "flex", gap: ".25em", fontSize: "6rem", fontWeight: "bold", textTransform: "uppercase", fontFamily: "monospace"
    }}>
        {wordToGuess.split("").map((letter, index) => (
            <span style={{ borderBottom: ".1em solid #AE445A" }} key={index}>
                <span
                    style={{
                        visibility: guessedLetters.includes(letter) || reveal ? "visible" : "hidden",
                        color:
                            !guessedLetters.includes(letter) && reveal ? "red" : "#E8BCB9",
                    }}>
                    {letter}
                </span>
            </span>
        ))}
    </div>
}