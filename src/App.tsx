import { useCallback, useEffect, useState } from "react";
import words from "./wordList.json";
import { HangmanDrawing } from "./HangmanDrawing";
import { HangmanWord } from "./HangmanWord";
import { Keyboard } from "./Keyboard";
import Modal from "./Modal"; // Import the Modal component

function getWord() {
  return words[Math.floor(Math.random() * words.length)];
}

function App() {
  const [wordToGuess, setWordToGuess] = useState<string>(getWord);
  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);

  const incorrectLetters = guessedLetters.filter(
    (letter) => !wordToGuess.includes(letter)
  );

  const isLoser = incorrectLetters.length >= 6;
  const isWinner = wordToGuess
    .split("")
    .every((letter) => guessedLetters.includes(letter));

  const addGuessedLetter = useCallback((letter: string) => {
    if (guessedLetters.includes(letter) || isLoser || isWinner) return;

    setGuessedLetters((currentLetters) => [...currentLetters, letter]);
  }, [guessedLetters, isWinner, isLoser]);

  const restartGame = () => {
    setGuessedLetters([]);
    setWordToGuess(getWord());
    setIsModalVisible(false);
  };

  useEffect(() => {
    // Show the modal when the game is won or lost
    if (isLoser || isWinner) {
      setIsModalVisible(true);
    }
  }, [isLoser, isWinner]);

  return (
    <div
      style={{
        maxWidth: "700px",
        display: "flex",
        flexDirection: "column",
        gap: "2rem",
        margin: "0 auto",
        alignItems: "center",
      }}
    >
      {/* Modal component */}
      <Modal
        isVisible={isModalVisible}
        isWinner={isWinner}
        onRestart={restartGame}
      />

      <HangmanDrawing numberOfGuesses={incorrectLetters.length} />
      <HangmanWord
        reveal={isLoser}
        guessedLetters={guessedLetters}
        wordToGuess={wordToGuess}
      />
      <div style={{ alignSelf: "stretch" }}>
        <Keyboard
          disabled={isWinner || isLoser}
          activeLetters={guessedLetters.filter((letter) =>
            wordToGuess.includes(letter)
          )}
          inactiveLetters={incorrectLetters}
          addGuessedLetter={addGuessedLetter}
        />
      </div>
    </div>
  );
}

export default App;
