import constants from "./constants";

const INITIAL_STATE = {
  logo: { name: "", url: "", alt: "" },
  sliderPhotos: [],
  featurePhotos: [],
  error: false,
  testimonialBackground: { name: "", url: "", alt: "" },
  loading: false,
};

const reducer = (state = INITIAL_STATE, action = {}) => {
  switch (action.type) {
    case constants.SET_LOGO:
      return {
        ...state,
        logo: action.payload,
      };
    case constants.SET_SLIDER_PHOTOS:
      return {
        ...state,
        sliderPhotos: action.payload,
      };
    case constants.SET_TESTIMONIAL_BACKGROUND:
      return {
        ...state,
        testimonialBackground: action.payload,
      };
    case constants.SET_FEATURE_PHOTOS:
      return {
        ...state,
        featurePhotos: action.payload,
      };
    case constants.SET_LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    case constants.SET_ERROR:
      return {
        ...state,
        error: true,
      };
    default:
      return state;
  }
};

export default reducer;
