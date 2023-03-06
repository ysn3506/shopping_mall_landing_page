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

export const addFeaturePhotos = (item) => ({
  type: CONSTANTS.SET_FEATURE_PHOTOS,
  payload: item,
});

export const addTestimonialBg = (item) => ({
  type: CONSTANTS.SET_TESTIMONIAL_BACKGROUND,
  payload: item,
});

export const setLoadingStatus = (item) => ({
    type: CONSTANTS.SET_LOADING,
    payload:item,
})