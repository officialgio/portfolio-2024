import gsap from "gsap";
import { RefObject } from "react";

/**
 * Creates a pinned section animation using GSAP's ScrollTrigger.
 *
 * This utility function pins a section of the page based on the provided container reference,
 * start position, and optional end position. If `end` is not provided, pinning occurs without
 * spacing adjustments.
 *
 * @param {RefObject<HTMLDivElement>} pinContainerRef - A React ref to the container element to be pinned.
 * @param {string} start - The scroll position where pinning should start (e.g., "top center").
 * @param {string} [end] - The optional scroll position where pinning should end (e.g., "bottom center").
 * If omitted, the section will be pinned indefinitely with no spacing.
 *
 * @returns {void}
 */
export function pinSection(
  pinContainerRef: RefObject<HTMLDivElement>,
  start: string,
  end?: string
): void {
  if (start && end) {
    const pinSection = gsap.timeline({
      scrollTrigger: {
        trigger: pinContainerRef.current,
        pin: true,
        start: start,
        end: end,
      },
    });
  }

  if (!end) {
    const pinSectionWithoutEnd = gsap.timeline({
      scrollTrigger: {
        trigger: pinContainerRef.current,
        start: start,
        pin: true,
        pinSpacing: false,
      },
    });
  }
}

/**
 * Create a GSAP timeline that animates elements with the .highlight class based on scroll position.
 * Start slightly before the next page. Each .highlight needs to transition to clear light color and then reset (tlHRemove).
 * Ensure that each of these highlights go 1 by 1 (i.e stagger)
 */
export function highlightWordsSection(
  sectionName: RefObject<HTMLDivElement>
): void {
  const tlH = gsap.timeline({
    scrollTrigger: {
      trigger: sectionName.current,
      markers: true,
      scrub: true,
      start: "-48%",
      end: "48%",
    },
  });

  tlH.fromTo(
    ".highlight",
    { color: "rgba(255, 255, 255, 0.4)" },
    { color: "rgba(255, 255, 255, 1)", stagger: 1 }
  );
}
