import { getAssets } from "../service/apis";
import {
  addError,
  addFeaturePhotos,
  addLogo,
  addSliderPhotos,
} from "../storage/redux/actions";
import { store } from "../storage/store";

const loadLogo = () =>
  getAssets("logo")
    .then((res) => store.dispatch(addLogo(res)))
    .catch((err) => console.log(err));

const loadSliderPhotos = () =>
  getAssets("sliderPhotos")
    .then((res) => store.dispatch(addSliderPhotos(res.sliderphotos)))
    .catch((err) => console.log(err));

const loadFeaturePhotos = () =>
  getAssets("featurePhotos")
        .then((res) => store.dispatch(addFeaturePhotos(res.featurePhotos)))
    .catch((err) => console.log(err));

const loader = () =>
  Promise.all([loadLogo(), loadSliderPhotos(), loadFeaturePhotos()]).catch(() => addError());

export default loader;
