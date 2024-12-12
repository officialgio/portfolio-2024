import gsap from "gsap";
import { RefObject } from "react";
import $ from "jquery";

/**
 * Add pinning to a component based on its start and end position.
 */
export function pinComponent(
  pinContainerRef: RefObject<HTMLDivElement>,
  start: string,
  end?: string
): void {
  if (isDesktop()) {
    pinSection(pinContainerRef, start, end);
  }

  function isDesktop(): boolean {
    return window.innerWidth > 540;
  }
}

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
      // markers: true,
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

/**
 * Triggers a one-time animation on elements with the class `.once-in`.
 *
 * This function uses GSAP to animate the `y` position of targeted elements
 * depending on the viewport width:
 * - For widths greater than 540px, the initial position is set to `50vh`.
 * - For widths 540px or smaller, the initial position is set to `10vh`.
 *
 * The animation moves the elements to `0vh` with a smooth easing effect and applies
 * a staggered delay for sequential animations.
 *
 * @returns {void} This function does not return any value.
 */
export function onceInAnimation(): void {
  var tl = gsap.timeline();

  if (window.innerWidth > 540) {
    tl.set(".main .once-in", {
      y: "50vh", // up illusion
    });
  } else {
    tl.set(".main .once-in", {
      y: "10vh",
    });
  }

  tl.to(".main .once-in", {
    duration: 1.5,
    y: "0vh",
    stagger: 0.07,
    ease: "Expo.easeOut",
    clearProps: true,
  });
}

/**
 * Initializes scroll-triggered animations for text elements within specific sections.
 *
 * This function searches for elements with the `.span-lines.animate` class inside two sections:
 * - `.home-intro` (intro section)
 * - `.description` (description section)
 *
 * If both sections and a target `.span-lines.animate` element are found, it applies GSAP animations
 * to inner text elements (`.span-line-inner`) based on the user's viewport width:
 * - Desktop (width > 540px) uses one set of scroll trigger start/end points.
 * - Mobile/tablet (width <= 540px) uses another set.
 *
 * Each matched `.span-lines.animate` element is processed to stagger text animation:
 * characters/words initially slide in from `y: 100%` and animate into view with a smooth easing.
 *
 * @returns {void} No return value. Updates the DOM and attaches GSAP timelines and ScrollTriggers.
 */
export function initScrolltriggerAnimations(): void {
  const spanLine = document.querySelector(".span-lines.animate"); // <h4 class="span-lines animate fs-500">
  const homeSection = document.querySelector(".home-intro"); // <h4 class="span-lines animate fs-500">
  const descriptionSection = document.querySelector(".description");

  // For Intro and Description Section
  if (spanLine && homeSection && descriptionSection) {
    $(".home-intro .span-lines.animate").each(function (index) {
      let triggerElement = $(this);
      let targetElement = $(".home-intro .span-lines.animate .span-line-inner");

      let tl;

      runGsapWordAnimations(triggerElement, targetElement, tl);
    });

    $(".description .span-lines.animate").each(function (index) {
      let triggerElement = $(this);
      let targetElement = $(
        ".description .span-lines.animate .span-line-inner"
      );
      let tl;

      runGsapWordAnimations(triggerElement, targetElement, tl);
    });
  }

  function runGsapWordAnimations(
    triggerElement: JQuery<HTMLElement>,
    targetElement: JQuery<HTMLElement>,
    tl: any
  ): void {
    if (($(window).width() as number) > 540) {
      // Desktop Animation
      tl = gsap.timeline({
        scrollTrigger: {
          trigger: triggerElement,
          toggleActions: "play none none reverse",
          start: "-20% 20% ",
          end: "10% 0%",
          // markers: true,
        },
      });
    } else {
      tl = gsap.timeline({
        scrollTrigger: {
          trigger: triggerElement,
          toggleActions: "play none none reverse",
          start: "-69% 10% ",
          end: "10% 0%",
          // markers: true,
        },
      });
    }

    if (targetElement) {
      tl.from(targetElement, {
        y: "100%", // set visible
        stagger: 0.01,
        ease: "power3.out",
        duration: 1,
        delay: 0,
      });
    }
  }
}
