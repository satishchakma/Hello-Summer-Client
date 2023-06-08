import React from "react";

const Errorpage = () => {
  return (
    <div className="flex my-24 items-center container mx-auto">
      <div className="w-1/2 ">
        <h1 className="text-6xl my-6">404 PAGE NOT FOUND</h1>
        <h2>
          Check that you typed the address correctly, go back to your previous
          page or try using our site search to find something specific.
        </h2>
      </div>
      <div className="w-1/2 flex justify-end">
        <img
          src="https://cdn.marvel.com/content/u/open-html-assets/marvel-error-pages/captain-america-char.3e42c62f.png"
          alt=""
        />
      </div>
      <img
        style={{ transform: "translate(-50%, 50%)" }}
        className="dynamic-glitch absolute bottom-[50%] left-[50%]"
        src="https://cdn.marvel.com/content/u/open-html-assets/marvel-error-pages/captain-america-glitch-3.7ae1f7ee.png"
        alt=""
      />
    </div>
  );
};

export default Errorpage;
