export const useSmoothScroll = () => {
  const scrollToSection = (id: string, offset = 80) => {
    const targetId = id.startsWith('#') ? id : `#${id}`;
    const element = document.querySelector(targetId);

    if (element) {
      const targetPosition = element.getBoundingClientRect().top + window.pageYOffset - offset;
      const startPosition = window.pageYOffset;
      const distance = targetPosition - startPosition;
      const duration = 1000;
      let start: number | null = null;

      const easeInOutQuart = (t: number, b: number, c: number, d: number) => {
        t /= d / 2;
        if (t < 1) return (c / 2) * t * t * t * t + b;
        t -= 2;
        return (-c / 2) * (t * t * t * t - 2) + b;
      };

      const animation = (currentTime: number) => {
        if (start === null) start = currentTime;
        const timeElapsed = currentTime - start;
        const run = easeInOutQuart(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0, run);
        if (timeElapsed < duration) {
          requestAnimationFrame(animation);
        } else {
          window.scrollTo(0, targetPosition);
          history.pushState(null, '', targetId);
        }
      };

      requestAnimationFrame(animation);
    }
  };

  return {
    scrollToSection
  };
};
