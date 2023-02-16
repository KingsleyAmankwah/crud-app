import notFound from "../images/NotFound.png";
const NoInternet = () => {
  return (
    <div
      className={`bg-cover bg-center h-screen flex flex-col items-center justify-center`}
    >
      <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
        <img
          src={notFound}
          alt="not Found"
          className="object-cover object-center rounded"
        />
      </div>
      <h1 className="text-3xl text-black font-bold mb-4">
        Oops! No internet connection.
      </h1>
      <p className="text-xl text-black">
        Please check your network settings and try again.
      </p>
    </div>
  );
};

export default NoInternet;
