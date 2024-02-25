import Slider from "../components/Slider";

const Italia = () => {
  return (
    <>
      <header className="relative bg-black">
        <figure className="bg-cover bg-italia bg-center h-screen w-screen"></figure>

        {/* Heading */}
        <div className="absolute h-fit w-fit top-0 bottom-0 my-auto left-0 right-0 mx-auto text-center font-serif">
          <h1 className="text-5xl sm:text-8xl mb-2 text-white">
            New Collection 2023
          </h1>
          <p className="text-5xl mb-7 text-white">Comfort is the new luxury</p>
          <button className="bg-black px-5 py-2 rounded-lg text-lg hover:bg-slate-700 duration-300 text-white">
            Take a look
          </button>
        </div>
      </header>

      <section className="mt-10 mb-12">
        <Slider />
      </section>

      <section className="relative h-[calc(100vh-5rem)] w-screen bg-[url(https://static.natuzzi.com/production/0114615_config_desk.jpeg)] bg-center bg-cover">
        <div className="absolute h-fit w-auto sm:w-96 px-7 sm:px-0 top-0 bottom-0 my-auto left-0 sm:left-10 right-0 sm:right-auto mx-auto sm:mx-0 text-center sm:text-start font-serif">
          <h1 className="text-5xl font-semibold mb-7 text-white">
            Every detail as you wish
          </h1>
          <button className="bg-black px-5 py-2 rounded-lg text-lg hover:bg-slate-700 duration-300 text-white">
            Start to costumize
          </button>
        </div>
      </section>

      <section className="h-[calc(100vh-5rem)] flex flex-col-reverse xl:flex-row items-center justify-center gap-10">
        <img
          className="h-auto sm:h-[300px] xl:h-[75vh] rounded-none sm:rounded-xl"
          src="https://static.natuzzi.com/production/0114345_harmony_makers_3.jpeg"
          alt="harmony-makers"
        />
        <div className="w-auto sm:w-[550px] mx-7 sm:mx-0 text-center xl:text-start">
          <h1 className="text-3xl xl:text-5xl mb-2 text-black leading-[1.1] font-serif">
            The harmony makers, since 1959
          </h1>
          <p className="text-base mb-3 sm:mb-7 text-black leading-tight sm:leading-normal">
            A continuous research driven by total design solutions that pursue
            harmony in every product and space we create.
          </p>
          <button className="bg-black px-5 py-2 rounded-lg text-lg hover:bg-slate-700 duration-300 font-serif text-white">
            Learn about our DNA
          </button>
        </div>
      </section>

      <section className="relative h-[calc(100vh-5rem)] w-screen bg-[url(https://static.natuzzi.com/production/0114344_catalogue.png)] bg-center bg-cover">
        <div className="absolute h-fit w-auto sm:w-[500px] px-7 sm:px-0 top-0 bottom-0 my-auto left-0 sm:left-10 right-0 sm:right-auto mx-auto sm:mx-0 text-center sm:text-start font-serif bg-white/25 sm:bg-transparent">
          <p>Harmony Index 2023</p>
          <h1 className="text-5xl font-semibold mb-7">
            Get inspired by the new catalogue
          </h1>
          <button className="bg-black px-5 py-2 rounded-lg text-lg hover:bg-slate-700 duration-300 text-white">
            Start to costumize
          </button>
        </div>
      </section>

      <section className="h-[calc(100vh-5rem)] flex flex-col-reverse xl:flex-row-reverse items-center justify-center gap-10">
        <img
          className="h-auto sm:h-[300px] xl:h-[75vh] rounded-none sm:rounded-xl"
          src="https://static.natuzzi.com/production/0119360_store-desktop.jpeg"
          alt="store-desktop"
        />
        <div className="w-auto sm:w-[550px] mx-5 sm:mx-0 text-center xl:text-start">
          <h1 className="text-3xl xl:text-5xl mb-2 font-normal text-black leading-[1.2] font-serif">
            A unique experience, come visit us
          </h1>
          <p className="text-base mb-3 sm:mb-7 text-black leading-tight sm:leading-normal">
            A continuous research driven by total design solutions that pursue
            harmony in every product and space we create.
          </p>
          <button className="bg-black px-5 py-2 rounded-lg text-lg hover:bg-slate-700 duration-300 font-serif text-white">
            Find your store
          </button>
        </div>
      </section>

      <section className="mb-0 h-[calc(100vh-5rem)] bg-slate-300">
        <video
          autoPlay
          muted
          loop
          className="h-[calc(100vh-5rem)] w-screen object-cover"
        >
          <source
            src="https://player.vimeo.com/progressive_redirect/playback/792156182/rendition/720p/file.mp4?loc=external&signature=128d8f95fc7df199b411a75ac7714f5c5acda3ff11fcbbacc2f7f361713c1c4c"
            type="video/mp4"
          />
        </video>
      </section>
    </>
  );
};

export default Italia;
