import React from "react";

const NoInternet = () => {
  return (
    <div
      className={`bg-cover bg-center h-screen flex flex-col items-center justify-center`}
      //   style={{
      //     backgroundImage: `url('./images/notFound.png')`,
      //   }}
    >
      <div>
        <img
          src="./images/notFound.png"
          alt=""
          className="w-full h-auto
        "
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
