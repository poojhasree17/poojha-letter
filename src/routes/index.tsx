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
              <p>[I'm nothing without your love]</p>
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
              <h1>MAA</h1>
              <p className="letter-date">28 September 2026</p>
            </header>
            <div className="letter-body">
              <p>Happy Birthday Maa. Let's hope you stay long as much as I stay in this world. Not to make you sad, but it's true that I'm living because I don't know how you gonna make it alive without me. Don't be sad.</p>
              <p>I don't know what to speak but one thing is sure even though I'm not expressive person like Thamizh, but I still love you too. Maybe not more than her, but I do. Yeah, I love you❤️ in my own way. I love you in a way I can't express to the world. And then, what can I say? It kinda feels weird to open up to you by a letter. I know I should have done it before but like I said I don't know how to talk with you and daddy without stressing myself for a week before.</p>
              <p>I'm struck by lot of things happening in my life but I'm still fighting because Thendral Prakash raised no coward. Maybe, some days I may feel lost but I'm still loved by you guys forever. So that forever feels more important than that some days.</p>
              <p>I don't know if anyone told you this, but I'm telling you that I'm so proud of the way you fought against this world, work hard to make us shine on this dark society. I know half of the credits goes to daddy, but still you did your part very awesome.</p>
              <p>And don't stress over yourself for me, I'm struggling but I'm gonna live great in a way I ever dreamt of. So don't worry about me. I know that for sure. Also a big thanks for giving birth to this two girls who are gonna turn into a fine woman one day! A big sorry for the things I didn't mean to do so.</p>
              <p>Every day will turn into a fine day, everything will turn into the things we worked for. Even in the other parts of the universe, I would still want to be the daughter of you and daddy. Be happy as much you can because you also gonna live once. So live for yourself more than you do for others. Nothing gonna hurt us.</p>
              <p>Maybe, I'm not a good daughter but I'm glad I'm still <em>Your Daughter</em>. Once again, Love you and Happy birthday Maa! Let's live happy!</p>
            </div>
            <p className="sign-off">with love from Poojha🤎</p>
          </article>
        </section>
      )}
    </main>
  );
}
