import { useEffect, useState } from "react";

export default function useTypewriter(words) {
  const [text, setText] = useState("");

  useEffect(() => {
    let ri = 0, ci = 0, deleting = false, timer;
    const tick = () => {
      const w = words[ri];
      ci += deleting ? -1 : 1;
      setText(w.slice(0, ci));
      let delay = deleting ? 35 : 70;
      if (!deleting && ci === w.length) { deleting = true; delay = 1400; }
      else if (deleting && ci === 0) { deleting = false; ri = (ri + 1) % words.length; delay = 400; }
      timer = setTimeout(tick, delay);
    };
    tick();
    return () => clearTimeout(timer);
  }, [words]);

  return text;
}
