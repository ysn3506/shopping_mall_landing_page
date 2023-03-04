import constants from "./constants";

const INITIAL_STATE = {
    logo:{name:"", url:"", alt:""},
    sliderPhotos: [],
    error:false
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