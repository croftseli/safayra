import { useEffect, useRef } from "react";

/**
 * Robust history + scroll restore for SPA tabs.
 * - Push on user nav
 * - Restore on back/forward
 * - Skip exactly one push after a popstate (prevents “stuck on page”)
 */
export default function useScrollHistory({
  activeTab,
  setActiveTab,
  activeDetailPage,
}) {
  const suppressNextPushRef = useRef(false); // skip one push after popstate
  const hasInitRef = useRef(false);

  // Helper: replace current entry with latest state
  const replaceWith = (extra = {}) => {
    const s = history.state || {};
    history.replaceState(
      {
        __spa: true,
        tab: activeTab,
        detail: activeDetailPage,
        scrollY: window.scrollY,
        ...s,
        ...extra,
      },
      ""
    );
  };

  // INIT: stamp first entry with our state
  useEffect(() => {
    if (!history.state || !history.state.__spa) {
      history.replaceState(
        {
          __spa: true,
          tab: activeTab,
          detail: activeDetailPage,
          scrollY: window.scrollY,
        },
        ""
      );
    }
    hasInitRef.current = true;

    const onPop = (e) => {
      const next = e.state || {};
      suppressNextPushRef.current = true; // <- critical: skip next push
      // restore tab/detail first (this triggers a render)
      if (next.tab && next.tab !== activeTab) setActiveTab(next.tab);

      // after paint, restore scroll
      requestAnimationFrame(() => {
        const y = typeof next.scrollY === "number" ? next.scrollY : 0;
        window.scrollTo(0, y);
        // also ensure current entry reflects actual scroll
        replaceWith({
          scrollY: y,
          tab: next.tab ?? activeTab,
          detail: next.detail ?? activeDetailPage,
        });
      });
    };

    window.addEventListener("popstate", onPop);
    return () => window.removeEventListener("popstate", onPop);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // PUSH on in-app navigation (tab/detail changes)
  useEffect(() => {
    if (!hasInitRef.current) return;
    if (suppressNextPushRef.current) {
      // We arrived here due to a back/forward. Do NOT push.
      suppressNextPushRef.current = false; // consume the guard once
      // keep current entry updated with latest state
      replaceWith();
      return;
    }

    // User initiated navigation -> push a new entry
    history.pushState(
      {
        __spa: true,
        tab: activeTab,
        detail: activeDetailPage,
        scrollY: 0,
      },
      ""
    );
    // start “new page” at top
    window.scrollTo({ top: 0, behavior: "auto" });
    // also ensure the pushed entry stays current if user leaves immediately
    replaceWith({ scrollY: 0 });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeTab, activeDetailPage]);

  // TRACK SCROLL: keep current entry’s scrollY fresh
  useEffect(() => {
    const onScroll = () => replaceWith();
    const onBeforeUnload = () => replaceWith();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("beforeunload", onBeforeUnload);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("beforeunload", onBeforeUnload);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeTab, activeDetailPage]);
}
