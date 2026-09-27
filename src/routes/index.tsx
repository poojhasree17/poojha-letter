import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Happy Birthday, Mom — A Letter With Love" },
      { name: "description", content: "An intimate birthday note made especially for Mom." },
      { property: "og:title", content: "Happy Birthday, Mom — A Letter With Love" },
      { property: "og:description", content: "An intimate birthday note made especially for Mom." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: BirthdayExperience,
});

const happyLetters = ["H", "A", "P", "P", "Y"];
const birthdayLetters = ["B", "I", "R", "T", "H", "D", "A", "Y"];

function OutlineHeart({ className }: { className: string }) {
  return (
    <svg className={className} viewBox="0 0 100 90" aria-hidden="true">
      <path d="M50 79C40 68 11 50 11 28C11 12 31 6 50 26C69 6 89 12 89 28C89 50 60 68 50 79Z" />
    </svg>
  );
}

function RansomWord({ letters, label }: { letters: string[]; label: string }) {
  return (
    <div className={`ransom ransom-${label.toLowerCase()}`} aria-label={label}>
      {letters.map((letter, index) => (
        <span key={`${letter}-${index}`} aria-hidden="true">{letter}</span>
      ))}
    </div>
  );
}

function BirthdayExperience() {
  const [screen, setScreen] = useState<1 | 2 | 3>(1);
  const [leaving, setLeaving] = useState(false);
  const [opening, setOpening] = useState(false);

  useEffect(() => {
    if (!leaving) return;
    const timer = window.setTimeout(() => {
      setScreen(2);
      setLeaving(false);
    }, 520);
    return () => window.clearTimeout(timer);
  }, [leaving]);

  const openEnvelope = () => {
    if (opening) return;
    setOpening(true);
    window.setTimeout(() => setScreen(3), 1150);
  };

  return (
    <main className="birthday-app">
      {screen === 1 && (
        <button className={`screen cover-screen ${leaving ? "is-leaving" : ""}`} onClick={() => setLeaving(true)} type="button" aria-label="Continue to your birthday envelope">
          <OutlineHeart className="corner-heart heart-top" />
          <OutlineHeart className="corner-heart heart-bottom" />
          <div className="cover-content">
            <p className="dear-line">dear <strong>MOM</strong></p>
            <div className="ransom-title">
              <RansomWord letters={happyLetters} label="Happy" />
              <RansomWord letters={birthdayLetters} label="Birthday" />
            </div>
            <div className="cover-notes">
              <p>[Without I'm nothing]</p>
              <p>[from your loving child]</p>
            </div>
          </div>
          <span className="continue-hint">tap anywhere to continue <span aria-hidden="true">→</span></span>
        </button>
      )}

      {screen === 2 && (
        <section className={`screen envelope-screen ${opening ? "is-opening" : ""}`} aria-label="A sealed birthday envelope">
          <div className="love-envelope-line">
            <span className="love-letter" aria-hidden="true">I</span>
            <button className="envelope-button" type="button" onClick={openEnvelope} aria-label="Open the envelope">
              <span className="envelope-shadow" />
              <span className="envelope-back" />
              <span className="envelope-letter" />
              <span className="envelope-front" />
              <span className="envelope-flap" />
              <span className="wax-seal" aria-hidden="true">♥</span>
            </button>
            <span className="love-letter" aria-hidden="true">U</span>
          </div>
          <p className="open-hint">tap to open</p>
          <div className="paper-flash" />
        </section>
      )}

      {screen === 3 && (
        <section className="screen letter-screen" aria-label="Birthday letter">
          <article className="letter-page">
            <span className="tape tape-gold" aria-hidden="true" />
            <span className="tape tape-red" aria-hidden="true" />
            <span className="doodle star star-one" aria-hidden="true">✦</span>
            <span className="doodle star star-two" aria-hidden="true">★</span>
            <OutlineHeart className="doodle-heart" />
            <svg className="squiggle" viewBox="0 0 150 35" aria-hidden="true"><path d="M3 23c13-25 25 17 39-3s24 15 39-2 23 15 35-1 21 4 31-9" /></svg>
            <header className="letter-heading">
              <p className="birthday-kicker">happy birthday</p>
              <h1>[Mom's Name]</h1>
              <p className="letter-date">28 September 2026</p>
            </header>
            <div className="letter-body">
              <p>[Write your birthday letter here...]</p>
            </div>
            <p className="sign-off">with all my love</p>
          </article>
        </section>
      )}
    </main>
  );
}
