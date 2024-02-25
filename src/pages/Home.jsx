const Home = () => {
  return (
    <>
      <main className="flex flex-col xl:flex-row justify-center items-center gap-[120px] md:gap-10 xl:gap-52 mt-[200px] md:mt-[120px] xl:mt-20 mb-10 xl:mb-0 h-auto xl:h-[calc(100vh-5rem)]">
        <section className="group relative">
          <div className="w-80 h-[410px] md:h-[492px] md:w-96 overflow-hidden rounded bg-slate-300">
            <img
              className="group-hover:scale-110 duration-500"
              src="https://static.natuzzi.com/production/0108883_Italia.png"
              alt="wolf_italia"
            />
          </div>
          <div className="absolute -top-[84px] md:top-auto md:bottom-40 md:-left-40 md:group-hover:-left-48 duration-500">
            <img
              src="https://static.natuzzi.com/production/natuzzi/public/assets/natuzzi_italia.svg"
              alt="wolf_italia_logo"
            />
            <h1 className="font-serif text-3xl w-52">
              made in italy luxury design
            </h1>
          </div>
        </section>
        <section className="group relative">
          <div className="w-80 h-[410px] md:h-[492px] md:w-96 overflow-hidden rounded bg-slate-300">
            <img
              className="group-hover:scale-110 duration-500"
              src="https://static.natuzzi.com/production/0108883_Italia.png"
              alt="wolf_italia"
            />
          </div>
          <div className="absolute -top-[84px] md:top-auto -right-[30px] md:bottom-40 md:-right-[11.3rem] md:group-hover:-right-52 duration-500">
            <img
              className="ml-[9.75rem]"
              src="https://static.natuzzi.com/production/natuzzi/public/assets/natuzzi_editions.svg"
              alt="wolf_editions_logo"
            />
            <h1 className="font-serif text-3xl w-72">
              best contemporary design for everyone
            </h1>
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
