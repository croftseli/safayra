import { useEffect, useRef } from "react";

/**
 * Hash-based navigation + per-tab scroll handling.
 * Options:
 *   - scrollOnHashChange: "restore" | "top"  (default: "restore")
 */
export default function useHashNavigation(
  activeTab,
  setActiveTab,
  { scrollOnHashChange = "restore" } = {}
) {
  const savingRef = useRef(false);

  // Read initial hash on mount
  useEffect(() => {
    const initial = (window.location.hash || "#home").slice(1);
    if (initial !== activeTab) setActiveTab(initial);

    // Initial load: keep old behavior (restore) so refresh feels natural.
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
        requestAnimationFrame(() => {
          if (scrollOnHashChange === "top") {
            window.scrollTo(0, 0);
          } else {
            const y = Number(sessionStorage.getItem(`scroll:${next}`));
            window.scrollTo(0, Number.isNaN(y) ? 0 : y);
          }
        });
      }
    };
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, [activeTab, setActiveTab, scrollOnHashChange]);

  // When your app changes activeTab, update the hash (creates history)
  useEffect(() => {
    const wanted = `#${activeTab}`;
    if (window.location.hash !== wanted) {
      if (!savingRef.current) {
        sessionStorage.setItem(`scroll:${activeTab}`, String(window.scrollY));
      }
      window.location.hash = wanted;
    }
  }, [activeTab]);
}
