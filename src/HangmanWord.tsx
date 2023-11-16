// HangmanWord.tsx


import styles from "./HangmanWord.module.css";

type HangmanWordProps = {
  guessedLetters: string[];
  wordToGuess: string;
  reveal?: boolean;
};

export function HangmanWord({ guessedLetters, wordToGuess, reveal = false }: HangmanWordProps) {
  return (
    <div className={styles.hangmanWord}>
      {wordToGuess.split("").map((letter, index) => (
        <span style={{ borderBottom: ".1em solid #AE445A" }} key={index}>
          <span
            style={{
              visibility: guessedLetters.includes(letter) || reveal ? "visible" : "hidden",
              color: !guessedLetters.includes(letter) && reveal ? "red" : "#E8BCB9",
            }}
          >
            {letter}
          </span>
        </span>
      ))}
    </div>
  );
}
