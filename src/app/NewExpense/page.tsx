'use client'
import Nav from "../nav";

export default function Home() {
  return (
    <main className="flex flex-col bg-base-100" style={{minHeight: "100vh"}}>
      <Nav />
      <p className="text-3xl ml-24 mt-5 mb-12">Add New Offering</p>
      <label className="flex items-center gap-2 flex-col">
        <input type="text" placeholder="Date" className="input input-bordered w-full max-w-xs" />
        <select className="select select-bordered w-full max-w-xs">
          <option>Bank Monthly Fee</option>
          <option>Placeholder</option>
          <option>Other Expense </option>

        </select>
        <input type="number" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
        <button className="btn w-full max-w-xs">Save</button>
      </label>
    </main>
  );
}
