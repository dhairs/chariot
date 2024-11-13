export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-black bg-cover">
      <div
        className="bg-cover"
        // style="background-image: url('...'); height: 400px"
      ></div>
      <div className="bg-purple-800 border-purple-300 border-b-8 p-16 m-4 -translate-x-80 -translate-y-40">
        <h2 className="text-4xl text-purple-300 font-bold">
          Chariots for <br />
          <span className="text-4xl text-white font-bold">
            Short Distances.{" "}
          </span>
        </h2>
      </div>
      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]"></div>
    </main>
  );
}
