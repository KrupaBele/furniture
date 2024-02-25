import Slider from "../components/Slider";

const Editions = () => {
  return (
    <>
      <header className="relative bg-black">
        <figure className="h-screen w-screen bg-editions bg-center bg-cover"></figure>

        {/* Navbar */}
        {/* <NavbarEditions /> */}

        {/* Heading */}
        <section className="absolute h-fit w-fit top-0 bottom-0 my-auto left-0 right-0 mx-auto text-center text-white font-serif">
          <h1 className="text-5xl sm:text-8xl mb-5">Traveller Collection</h1>
          <button className="bg-black px-5 py-2 rounded-lg text-lg hover:bg-slate-700 duration-300">
            Discover it
          </button>
        </section>
      </header>

      <section className="mt-10 mb-12">
        <Slider />
      </section>

      <section className="h-[calc(100vh-5rem)] bg-slate-300">
        <video
          autoPlay
          muted
          loop
          className="h-[calc(100vh-5rem)] w-screen object-cover"
        >
          <source
            src="https://player.vimeo.com/progressive_redirect/playback/790507692/rendition/720p/file.mp4?loc=external&signature=1024e2ed30b5c90a1177ab702c17037cc848ceb94d2c91ba383bf7fa3d9398e3"
            type="video/mp4"
          />
        </video>
      </section>

      <section className="h-[calc(100vh-5rem)] flex flex-col-reverse xl:flex-row items-center justify-center gap-10">
        <img
          className="h-auto sm:h-[300px] xl:h-[75vh] rounded-none sm:rounded-xl"
          src="https://static.natuzzi.com/production/0114345_harmony_makers_3.jpeg"
          alt="harmony-makers"
        />
        <div className="w-auto sm:w-[550px] mx-5 sm:mx-0 text-center xl:text-start">
          <h1 className="text-3xl xl:text-5xl mb-2 text-black leading-[1.1] font-serif">
            Reinventing comfort, since 1959
          </h1>
          <p className="text-base mb-3 sm:mb-7 text-black leading-tight sm:leading-normal">
            A continuous research driven by total design solutions that pursue
            harmony in every product and space we create.
          </p>
          <button className="bg-black px-5 py-2 rounded-lg text-lg hover:bg-slate-700 duration-300 font-serif text-white">
            Discover more
          </button>
        </div>
      </section>

      <section className="relative h-[calc(100vh-5rem)] w-screen bg-[url(https://static.natuzzi.com/production/0114307_catalogo_1920x822.jpeg)] bg-center bg-cover">
        <div className="absolute h-fit w-auto sm:w-[400px] px-7 sm:px-0 top-0 bottom-0 my-auto left-0 sm:left-10 right-0 sm:right-auto mx-auto sm:mx-0 text-center sm:text-start font-serif bg-white/25 sm:bg-transparent">
          <h1 className="text-5xl font-semibold mb-7">
            Every page, many ideas
          </h1>
          <button className="bg-black px-5 py-2 rounded-lg text-lg hover:bg-slate-700 duration-300 text-white">
            Be inspired
          </button>
        </div>
      </section>

      <section className="h-[calc(100vh-5rem)] flex flex-col-reverse xl:flex-row-reverse items-center justify-center gap-10">
        <img
          className="h-auto sm:h-[300px] xl:h-[75vh] rounded-none sm:rounded-xl"
          src="https://static.natuzzi.com/production/0114354_MicrosoftTeams-image_(1).png"
          alt="outlets"
        />
        <div className="w-auto sm:w-[550px] mx-5 sm:mx-0 text-center xl:text-start">
          <h1 className="text-3xl xl:text-5xl mb-2 text-black leading-[1.2] font-serif">
            Touch the difference, come visit us
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
    </>
  );
};

export default Editions;
