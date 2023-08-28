import "assets/styles/loader.scss";
import { useSelector } from "react-redux";
import { IStore } from "types";
export const AppLoader = () => {
  const { isFetching } = useSelector((state: IStore) => state.auth);
  return isFetching ? (
    <div className="loader-container">
      <span className="loader"></span>
    </div>
  ) : null;
};
