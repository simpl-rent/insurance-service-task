"use client";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1 className="mb-3">Insurance Admin Panel</h1>
      <form className="flex gap-4 mb-6">
        <input className="py-2 px-4 rounded" placeholder="Policy Number" />
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Submit
        </button>
      </form>
      <div className="mb-32 grid text-center lg:mb-0 lg:grid-cols-4 lg:text-left gap-4">
        <div className="flex flex-col gap-2 items-start rounded-lg border px-5 py-4 transition-colors border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
          <span className="flex rounded-full bg-green-500 uppercase px-2 py-1 text-xs font-bold w-unset">
            Insured
          </span>
          <h2 className={`text-lg font-semibold`}>TXW0031221</h2>
          <button className="mt-1 bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-4 rounded">
            Cancel
          </button>
        </div>
      </div>
    </main>
  );
}
