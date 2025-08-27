// hooks/useHashNavigation.jsx
import { useEffect, useRef } from "react";

/**
 * Hash-based navigation + per-tab scroll restore.
 * - URL is #home, #about, etc.
 * - Back/forward works natively (hashchange)
 * - Saves/restores scroll per tab
 */
export default function useHashNavigation(activeTab, setActiveTab) {
  const savingRef = useRef(false);

  // Read initial hash on mount
  useEffect(() => {
    const initial = (window.location.hash || "#home").slice(1);
    if (initial !== activeTab) setActiveTab(initial);
    // restore scroll for initial tab (if any)
    const y = Number(sessionStorage.getItem(`scroll:${initial}`));
    if (!Number.isNaN(y)) requestAnimationFrame(() => window.scrollTo(0, y));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Keep scroll saved for current tab
  useEffect(() => {
    const onScroll = () => {
      savingRef.current = true;
      sessionStorage.setItem(`scroll:${activeTab}`, String(window.scrollY));
      savingRef.current = false;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [activeTab]);

  // When the hash changes (user pressed back/forward or clicked a link)
  useEffect(() => {
    const onHashChange = () => {
      const next = (window.location.hash || "#home").slice(1);
      if (next !== activeTab) {
        setActiveTab(next);
        const y = Number(sessionStorage.getItem(`scroll:${next}`));
        requestAnimationFrame(() => {
          window.scrollTo(0, Number.isNaN(y) ? 0 : y);
        });
      }
    };
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, [activeTab, setActiveTab]);

  // When your app changes activeTab, update the hash (this creates history)
  useEffect(() => {
    const wanted = `#${activeTab}`;
    if (window.location.hash !== wanted) {
      // Save current tab’s scroll before leaving (defensive)
      if (!savingRef.current) {
        sessionStorage.setItem(`scroll:${activeTab}`, String(window.scrollY));
      }
      // Update the hash -> adds a history entry, so back works
      window.location.hash = wanted;
    }
  }, [activeTab]);
}
