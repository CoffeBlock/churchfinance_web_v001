'use client'
import Nav from "../nav";

export default function Home() {
  return (
    <main className="flex flex-col bg-base-100" style={{minHeight: "100vh"}}>
      <Nav />
      <p className="text-3xl ml-24 mt-5">Add New Offering</p>
      <label className="input input-bordered flex items-center gap-2">
        <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
        <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
        <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
      </label>
    </main>
  );
}
