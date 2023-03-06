//eslint-disable

import { useState, useEffect, useCallback } from "react";

export const ORIENTATION_TYPES = {
  PORTRAIT: "PORTRAIT",
  LANDSCAPE: "LANDSCAPE",
};

const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
    isMobileScreen: undefined,
    isTabletScreen: undefined,
    orientation: undefined,
  });

  const getScreenOrientation = useCallback(({ width, height }) => {
    if (width < height) return ORIENTATION_TYPES.PORTRAIT;
    if (width > height) return ORIENTATION_TYPES.LANDSCAPE;
  }, []);

  const handleResize = useCallback(() => {
    const windowSize = {
      width: window.innerWidth,
      height: window.innerHeight,
    };
    const isMobileScreen = checkMobileScreen(windowSize.width);
    const isTabletScreen = checkTabletScreen(windowSize.width);

    setWindowSize({
      ...windowSize,
      isMobileScreen,
      isTabletScreen,
      orientation: getScreenOrientation(windowSize),
    });
  }, [getScreenOrientation]);

  const checkMobileScreen = useCallback((width) => {
    return width <= 768;
  }, []);

  const checkTabletScreen = useCallback((width) => {
    return width > 768 && width <= 1024;
  });

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    // Call handler right away so state gets updated with initial window size
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, [handleResize]);

  return windowSize;
};

export default useWindowSize;
