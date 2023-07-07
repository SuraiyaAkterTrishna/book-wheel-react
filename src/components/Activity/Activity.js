
import Break from "../Break/Break";
import Profile from "../Profile/Profile";

const style = {
  backgroundColor: "rgb(242, 244, 250)",
};

const Activity = ({ totalTime }) => {
  const breakTimes = [10, 20, 30, 40, 50];
  return (
    <div>
      <Profile></Profile>
      {/* Break */}
      <div>
      <h1 className="text-3xl font-semibold ps-5 py-6">Add a break</h1>
      <div
        style={style}
        className="grid grid-cols-5 gap-2 ms-4 me-6 pe-6 border-0 rounded-xl"
      >   
      {
        breakTimes.map(time => <Break key={time} time = {time}></Break>)
      }
      </div>
    </div>
      {/* Study details */}
      <div>
        <h1 className="text-3xl font-semibold ps-5 py-6">Study details</h1>
        <div
          style={style}
          className=" ms-4 me-6 pe-6 border-0 rounded-xl py-3 px-2 flex justify-between"
        >
          <p className="font-bold">Reading Time</p>
          <p className=" text-gray-500">{totalTime} seconds</p>
        </div>
        <div
          style={style}
          className=" ms-4 me-6 pe-6 border-0 rounded-xl py-3 px-2 flex justify-between my-4"
        >
          <p className="font-bold">Break Time</p>
          <p className=" text-gray-500">15 seconds</p>
        </div>
      </div>
      {/* Complete Button */}
      <div className="text-center">
        <button className="btn btn-primary w-3/4 my-6">
          Activity Completed
        </button>
      </div>
    </div>
  );
};

export default Activity;
