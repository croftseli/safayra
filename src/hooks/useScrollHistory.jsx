import { useEffect, useRef } from "react";

/**
 * Keeps browser history in sync with your SPA tab state,
 * and restores scroll position on back/forward.
 */
export default function useScrollHistory({
  activeTab,
  setActiveTab,
  activeDetailPage,
}) {
  const isPoppingRef = useRef(false); // true while handling popstate

  // Initialize first history entry with current state + scroll
  useEffect(() => {
    if (!history.state) {
      history.replaceState(
        { tab: activeTab, detail: activeDetailPage, scrollY: window.scrollY },
        ""
      );
    }
    // restore on back/forward
    const onPop = (event) => {
      isPoppingRef.current = true;
      const s = event.state || {};
      // restore tab/detail first
      if (s.tab && s.tab !== activeTab) setActiveTab(s.tab);
      // allow layout to paint, then restore scroll
      requestAnimationFrame(() => {
        window.scrollTo(0, typeof s.scrollY === "number" ? s.scrollY : 0);
        // small delay to avoid immediate push on the effect below
        setTimeout(() => (isPoppingRef.current = false), 0);
      });
    };
    window.addEventListener("popstate", onPop);
    return () => window.removeEventListener("popstate", onPop);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // When your app "navigates" (tab/detail changes), push a new entry and scroll to top.
  useEffect(() => {
    if (isPoppingRef.current) return; // don't push while restoring
    history.pushState(
      { tab: activeTab, detail: activeDetailPage, scrollY: 0 },
      ""
    );
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [activeTab, activeDetailPage]);

  // Save latest scroll whenever it changes tab/detail *or* before unload
  useEffect(() => {
    const saveScroll = () => {
      const s = history.state || {};
      history.replaceState(
        {
          ...s,
          tab: activeTab,
          detail: activeDetailPage,
          scrollY: window.scrollY,
        },
        ""
      );
    };
    const onScroll = () => saveScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("beforeunload", saveScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("beforeunload", saveScroll);
    };
  }, [activeTab, activeDetailPage]);
}
