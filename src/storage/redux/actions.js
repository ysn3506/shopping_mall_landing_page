import CONSTANTS from "./constants";

export const addLogo = (item) => ({
  type: CONSTANTS.SET_LOGO,
  payload: item,
});

export const addSliderPhotos = (item) => ({
  type: CONSTANTS.SET_SLIDER_PHOTOS,
  payload: item,
});

export const addError = () => ({
    type: CONSTANTS.SET_ERROR
})