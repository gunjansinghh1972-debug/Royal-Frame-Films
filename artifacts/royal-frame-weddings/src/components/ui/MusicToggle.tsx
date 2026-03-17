import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const MUSIC_URL = "https://assets.mixkit.co/music/preview/mixkit-serene-view-443.mp3";

export function MusicToggle() {
  const [playing, setPlaying] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const audio = new Audio(MUSIC_URL);
    audio.loop = true;
    audio.volume = 0.35;
    audio.preload = "auto";
    audio.addEventListener("canplaythrough", () => setLoaded(true));
    audioRef.current = audio;

    return () => {
      audio.pause();
      audio.src = "";
    };
  }, []);

  const toggle = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (playing) {
      audio.pause();
      setPlaying(false);
    } else {
      audio.play().then(() => setPlaying(true)).catch(() => {});
    }
  };

  return (
    <div className="fixed bottom-8 left-8 z-50 flex flex-col items-center gap-2">
      {/* Tooltip */}
      <AnimatePresence>
        {!playing && loaded && (
          <motion.div
            key="tooltip"
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 6 }}
            transition={{ duration: 0.3 }}
            className="bg-black/80 text-[#D4AF37] text-[10px] tracking-[0.18em] uppercase font-sans px-3 py-1.5 whitespace-nowrap pointer-events-none"
            style={{ borderRadius: "1px", border: "1px solid rgba(212,175,55,0.2)" }}
          >
            Play Music
          </motion.div>
        )}
      </AnimatePresence>

      {/* Button */}
      <motion.button
        onClick={toggle}
        aria-label={playing ? "Pause background music" : "Play background music"}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.93 }}
        className="relative w-12 h-12 flex items-center justify-center transition-all duration-300"
        style={{
          background: playing ? "rgba(212,175,55,0.12)" : "rgba(10,10,10,0.75)",
          border: `1px solid ${playing ? "rgba(212,175,55,0.55)" : "rgba(212,175,55,0.25)"}`,
          borderRadius: "2px",
          backdropFilter: "blur(12px)",
          boxShadow: playing
            ? "0 0 20px rgba(212,175,55,0.18), 0 4px 16px rgba(0,0,0,0.4)"
            : "0 4px 16px rgba(0,0,0,0.3)",
        }}
      >
        {/* Pulse ring when playing */}
        {playing && (
          <>
            <motion.span
              className="absolute inset-0 rounded-sm"
              style={{ border: "1px solid rgba(212,175,55,0.35)", borderRadius: "2px" }}
              animate={{ scale: [1, 1.55], opacity: [0.6, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeOut" }}
            />
            <motion.span
              className="absolute inset-0 rounded-sm"
              style={{ border: "1px solid rgba(212,175,55,0.2)", borderRadius: "2px" }}
              animate={{ scale: [1, 1.9], opacity: [0.4, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeOut", delay: 0.5 }}
            />
          </>
        )}

        {/* Music icon — animated bars when playing, static note when paused */}
        {playing ? (
          <MusicBars />
        ) : (
          <MusicNote />
        )}
      </motion.button>
    </div>
  );
}

function MusicBars() {
  return (
    <span className="flex items-end gap-[3px] h-5">
      {[0, 0.2, 0.1, 0.3].map((delay, i) => (
        <motion.span
          key={i}
          className="w-[3px] rounded-full"
          style={{ background: "#D4AF37" }}
          animate={{ height: ["6px", "16px", "8px", "14px", "6px"] }}
          transition={{ repeat: Infinity, duration: 1.2, delay, ease: "easeInOut" }}
        />
      ))}
    </span>
  );
}

function MusicNote() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="rgba(212,175,55,0.8)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 18V5l12-2v13" />
      <circle cx="6" cy="18" r="3" />
      <circle cx="18" cy="16" r="3" />
    </svg>
  );
}
