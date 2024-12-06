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

/**
 * Initializes tricks for words by wrapping each word in elements with the class `.span-lines`
 * into nested `<span>` elements. This is typically used for animating individual words or letters.
 *
 * Each word within the elements is wrapped as follows:
 * - `<span class="span-line"><span class="span-line-inner">word</span></span>`
 *
 * @returns {void} This function does not return any value.
 */
export function initTricksWords(): void {
  // Select all elements with the class `.span-lines`
  const spanWords = document.getElementsByClassName("span-lines");

  for (let i = 0; i < spanWords.length; i++) {
    const wordWrap = spanWords.item(i);

    if (wordWrap && wordWrap.innerHTML) {
      // Check if already processed by looking for `class="span-line-inner"`
      if (wordWrap.innerHTML.indexOf('class="span-line-inner"') !== -1) {
        // Already processed, skip to avoid corruption
        continue;
      }

      // Replace each word with the nested <span> structure only on original text
      wordWrap.innerHTML = wordWrap.innerHTML.replace(
        /(^|<\/?[^>]+>|\s+)([^\s<]+)/g,
        (match, leading, word) => {
          const safeLeading = leading || "";
          return `${safeLeading}<span class="span-line"><span class="span-line-inner">${word}</span></span>`;
        }
      );
    }
  }
}
