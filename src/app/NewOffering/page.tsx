'use client'
import Nav from "../nav";

export default function Home() {
  return (
    <main className="flex flex-col bg-base-100" style={{minHeight: "100vh"}}>
      <Nav />
      <p className="text-3xl ml-24 mt-5 mb-12">Add New Offering</p>
      <label className="flex items-center gap-2 flex-col">
        <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
        <select className="select select-bordered w-full max-w-xs">
          <option>General Offering</option>
          <option>Offering Type 2</option>
          <option>Offering Type 3</option>
          <option>Offering Type 4</option>          
        </select>
        <select className="select select-bordered w-full max-w-xs">
          <option disabled selected>Donator</option>
          <option>Donator 1</option>
          <option>Donator 2</option>
          <option>Donator 3</option>
          <option>Donator 4</option>
          <option>Donator 5</option>
          <option>Donator 6</option>
          <option>Donator 7</option>
          <option>Donator 8</option>
          <option>Donator 9</option>
          <option>Donator 10</option>
          <option>Donator 11</option>
          <option>Donator 12</option>
          <option>Donator 13</option>
          <option>Donator 14</option>
          <option>Donator 15</option>
          <option>Donator 16</option>
          <option>Donator 17</option>
          <option>Donator 18</option>
          <option>Donator 19</option>
          <option>Donator 20</option>
          {/* Get using a API call, This is a place holder. Rewrite later to add search names */}
        </select>
        <input type="number" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
        <button className="btn w-full max-w-xs">Save</button>
      </label>
    </main>
  );
}