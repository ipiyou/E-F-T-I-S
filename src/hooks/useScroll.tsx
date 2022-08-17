import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { SliceNextItem } from "../module/ItemListSlice";

function useScroll() {
  const [lastIntersectingImage, setLastIntersectingImage] =
    useState<HTMLDivElement | null>(null);
  const dispatch = useDispatch();

  const onIntersect: IntersectionObserverCallback = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        dispatch(SliceNextItem(20));
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
