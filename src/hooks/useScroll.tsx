import { useEffect, useState } from "react";

function useScroll(BottomTouch: (sliceCount: number) => void) {
  const [lastIntersectingImage, setLastIntersectingImage] =
    useState<HTMLDivElement | null>(null);

  const onIntersect: IntersectionObserverCallback = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        BottomTouch(20);
        observer.unobserve(entry.target);
      }
    });
  };

  ///바닥을 확인하면 이전 옵저버를 해제하고 새로운 옵저버를 만듬
  useEffect(() => {
    let observer: IntersectionObserver;
    if (lastIntersectingImage) {
      observer = new IntersectionObserver(onIntersect, { threshold: 0.5 });
      observer.observe(lastIntersectingImage);
    }
    return () => observer && observer.disconnect();
  }, [lastIntersectingImage]);
  return setLastIntersectingImage;
}

export default useScroll;
