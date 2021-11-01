import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const tableSkeletonLoading = () => {
  return (
    <div>
      Loading ...
      <div>
        <Skeleton count={20} />
      </div>
    </div>
  );
};

export default tableSkeletonLoading;
