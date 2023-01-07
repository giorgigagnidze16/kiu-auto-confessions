import React, { useState } from "react";
import "./App.css";

function random(min: number, max: number) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
const INPUT_PLACEHOLDERS = [
  "FOP დამაწერინეთ ვინმემ",
  "nini miyvarxar",
  "პირველი წლის შემდეგ მართლა შემიძლია 10,000₾ - იანი სამუშაოს შოვნა?",
  "მეხუთედ ვიჭრები და რა ამ დროს რა ხდება??",
  "მწვანეში რა ხდება დამაძინეთ ხალხი არ ხართ?",
  "ისევ შენზე ფიქრში გადის ღამე...",
  "დღეს კაფეტერიაში გოგო რომ იყო რა ერქვა?",
  "software engineeringshi რა ენებს სწავლობთ?",
  "Kutaisi International University and other hilarious jokes you can tell yourself.",
  "I have a crush on a guy from 3XX...",
  "აღარ მინდა კიუ",
  "Admin sad xar",
  "Valoranti metamashet",
  "What color is your bugatti",
  "Anakomi > doshiraki",
  "tsushi vin modixart",
];

function TextInputWithTypewriterAnimation(props: {
  onChange: (e: string) => void;
  value: string | undefined;
}) {
  const [placeholderIndex, setPlaceholderIndex] = useState(
    random(0, INPUT_PLACEHOLDERS.length)
  );
  const [typing, setTyping] = useState(true);
  const [deleting, setDeleting] = useState(false);
  const [placeholder, setPlaceholder] = useState("");
  const [cursor, setCursor] = useState(true);

  const typingSpeed = 100;
  const deletingSpeed = 70;
  const cursorBlinkSpeed = 1000;

  function animatePlaceholder() {
    if (typing) {
      setPlaceholder((prevPlaceholder) => {
        if (
          prevPlaceholder.length === INPUT_PLACEHOLDERS[placeholderIndex].length
        ) {
          setTyping(false);
          setDeleting(true);
          return prevPlaceholder;
        }
        return INPUT_PLACEHOLDERS[placeholderIndex].slice(
          0,
          prevPlaceholder.length + 1
        );
      });
    } else if (deleting) {
      setPlaceholder((prevPlaceholder) => {
        if (prevPlaceholder.length === 0) {
          setDeleting(false);
          setPlaceholderIndex(
            (prevIndex) => (prevIndex + 1) % INPUT_PLACEHOLDERS.length
          );
          setTyping(true);
          return "";
        }
        return prevPlaceholder.slice(0, prevPlaceholder.length - 1);
      });
    }
  }

  function animateCursor() {
    setCursor((prevCursor) => !prevCursor);
  }

  React.useEffect(() => {
    const intervalId = setInterval(
      animatePlaceholder,
      typing ? typingSpeed : deletingSpeed
    );
    return () => clearInterval(intervalId);
  }, [typing, deleting]);

  React.useEffect(() => {
    const intervalId = setInterval(animateCursor, cursorBlinkSpeed);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <textarea
      className={"confessionsBox"}
      value={props.value}
      onChange={(e) => props.onChange(e.target.value)}
      // placeholder={`${placeholder}${cursor ? "" : ""}`}
    />
  );
}

export default TextInputWithTypewriterAnimation;
