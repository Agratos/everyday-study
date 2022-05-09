import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// 페이지 이동시 스크롤 초기화
const ScrollRestoration = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default ScrollRestoration;