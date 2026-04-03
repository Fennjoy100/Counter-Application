import { useEffect, useRef, useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [audioError, setAudioError] = useState("");
  const audioRef = useRef(null);
  const maxVisualLevel = 10;
  const waterLevel = Math.min((count / maxVisualLevel) * 100, 100);
  const fireflies = [
    "rise-left",
    "fall-right",
    "rise-right",
    "fall-left",
    "rise-center",
    "fall-center",
    "rise-left-delayed",
    "fall-right-delayed",
    "rise-right-slow",
    "fall-left-slow",
    "rise-center-slow",
    "fall-center-delayed"
  ];

  const increment = () => {
    setCount((currentCount) => currentCount + 1);
  };

  const decrement = () => {
    setCount((currentCount) => (currentCount > 0 ? currentCount - 1 : 0));
  };

  const reset = () => {
    setCount(0);
  };

  useEffect(() => {
    if (!audioRef.current) {
      return;
    }

    audioRef.current.load();
  }, []);

  const toggleAudio = async () => {
    if (!audioRef.current) {
      return;
    }

    if (isPlayingAudio) {
      audioRef.current.pause();
      setIsPlayingAudio(false);
      setAudioError("");
      return;
    }

    try {
      await audioRef.current.play();
      setIsPlayingAudio(true);
      setAudioError("");
    } catch (error) {
      setIsPlayingAudio(false);
      setAudioError("Audio could not play on this device or browser.");
    }
  };

  return (
    <main className="app-shell">
      <audio
        ref={audioRef}
        preload="auto"
        loop
        onPause={() => setIsPlayingAudio(false)}
        onPlay={() => setIsPlayingAudio(true)}
        onError={() => setAudioError("Audio file failed to load. Please redeploy the latest version.")}
      >
        <source src="/forest-audio.mp4" type="audio/mp4" />
      </audio>

      <div className="forest-scene" aria-hidden="true">
        <div className="star-layer star-layer-one"></div>
        <div className="star-layer star-layer-two"></div>
        <div className="shooting-star shooting-star-one"></div>
        <div className="shooting-star shooting-star-two"></div>
        <div className="shooting-star shooting-star-three"></div>
        <div className="moon-glow"></div>
        <div className="mist mist-one"></div>
        <div className="mist mist-two"></div>
        <div className="forest-ground"></div>
        <div className="tree-line tree-back"></div>
        <div className="tree-line tree-mid"></div>
        <div className="tree-line tree-front"></div>
        <div className="pine-forest" aria-hidden="true">
          <div className="pine-tree pine-tree-one">
            <span className="trunk"></span>
            <span className="foliage foliage-low"></span>
            <span className="foliage foliage-mid"></span>
            <span className="foliage foliage-top"></span>
          </div>
          <div className="pine-tree pine-tree-two">
            <span className="trunk"></span>
            <span className="foliage foliage-low"></span>
            <span className="foliage foliage-mid"></span>
            <span className="foliage foliage-top"></span>
          </div>
          <div className="pine-tree pine-tree-three">
            <span className="trunk"></span>
            <span className="foliage foliage-low"></span>
            <span className="foliage foliage-mid"></span>
            <span className="foliage foliage-top"></span>
          </div>
          <div className="pine-tree pine-tree-four">
            <span className="trunk"></span>
            <span className="foliage foliage-low"></span>
            <span className="foliage foliage-mid"></span>
            <span className="foliage foliage-top"></span>
          </div>
        </div>
        <div className="firefly-field">
          {fireflies.map((motion, index) => (
            <span
              key={`${motion}-${index}`}
              className={`firefly ${motion}`}
            />
          ))}
        </div>
      </div>

      <section className="counter-card">
        <div className="top-bar">
          <button
            type="button"
            className={`music-toggle ${isPlayingAudio ? "active" : ""}`}
            onClick={toggleAudio}
          >
            {isPlayingAudio ? "Pause Music" : "Play Music"}
          </button>
        </div>
        {audioError ? <p className="audio-note">{audioError}</p> : null}
        <p className="eyebrow">FENNJOY FOREST</p>
        <h1>Counter Application</h1>
        <p className="description">
          Click the buttons below to update the counter value instantly.
        </p>

        <div className="count-display" aria-live="polite">
          <div
            className="water-fill"
            style={{ height: `${waterLevel}%` }}
            aria-hidden="true"
          >
            <span className="water-wave wave-one"></span>
            <span className="water-wave wave-two"></span>
            {waterLevel >= 100 ? (
              <span className="fish fish-swim" aria-hidden="true">
                <span className="fish-body"></span>
                <span className="fish-tail"></span>
                <span className="fish-eye"></span>
              </span>
            ) : null}
          </div>
          <span className="count-number">{count}</span>
        </div>

        <p className={`status-message ${count === 0 ? "visible" : ""}`}>
          {count === 0 ? "Minimum limit reached" : "Keep going"}
        </p>

        <div className="button-row">
          <button type="button" className="action-button" onClick={decrement}>
            Decrement
          </button>
          <button type="button" className="action-button primary" onClick={increment}>
            Increment
          </button>
          <button type="button" className="action-button subtle" onClick={reset}>
            Reset
          </button>
        </div>
      </section>
    </main>
  );
}
