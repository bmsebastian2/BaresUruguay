
import { apiStates, locationPosition } from "./locationPosition";

const PostList = () => {
  const { state, error, district, city, countryName } = locationPosition();

  switch (state) {
    case apiStates.ERROR:
      return error;
    case apiStates.SUCCESS:
      return district ? district : city ? city : countryName;
    case apiStates.LOADING:
      return "Loading...";
  }
};
export default PostList;

