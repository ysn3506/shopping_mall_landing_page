import { getAssets } from "../service/apis";
import { addError, addLogo, addSliderPhotos } from "../storage/redux/actions";
import { store } from "../storage/store";

const loadLogo = () =>
  getAssets("logo")
    .then((res) => store.dispatch(addLogo(res)))
    .catch((err) => console.log(err));

const loadSliderPhotos = () =>
  getAssets("sliderPhotos")
    .then((res) => store.dispatch(addSliderPhotos(res.sliderphotos)))
    .catch((err) => console.log(err));

const loader = () =>
  Promise.all([loadLogo(), loadSliderPhotos()]).catch(() => addError());

export default loader;
