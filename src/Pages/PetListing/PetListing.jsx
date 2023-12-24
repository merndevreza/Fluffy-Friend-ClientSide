import { useState } from "react";
import { useEffect } from "react";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import Pets from "../Shared/Pets/Pets";

const PetListing = () => {
  const [displayPets, setDisplayPets] = useState([]);
  const [pets, setPets] = useState([]);
  const axiosPublic = useAxiosPublic();
  useEffect(() => {
    axiosPublic.get("/pets?_limits=9&_page=2").then((res) => {
      setPets(res.data);
      setDisplayPets(res.data);
    });
  }, [axiosPublic]);
  //====================
  //filter by category
  //====================
  const cats = pets.filter((item) => item.category === "cats");
  const handleCatsFilter = () => {
    setDisplayPets(cats);
  };
  const dogs = pets.filter((item) => item.category === "dogs");
  const handleDogsFilter = () => {
    setDisplayPets(dogs);
  };
  const rabbits = pets.filter((item) => item.category === "rabbits");
  const handleRabbitsFilter = () => {
    setDisplayPets(rabbits);
  };
  const fishes = pets.filter((item) => item.category === "fishes");
  const handleFishesFilter = () => {
    setDisplayPets(fishes);
  };
  const birds = pets.filter((item) => item.category === "birds");
  const handleBirdsFilter = () => {
    setDisplayPets(birds);
  };
  //============
  //search
  //============
  const handleSearch = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const search = form.get("search");
    const filtered = pets.filter(
      (item) => item.name.toLowerCase() === search.toLowerCase()
    );
    setDisplayPets(filtered);
  };

  return (
    <div className="shape-bg bg-fixed relative py-14 md:py-24 lg:py-28">
      <div className="absolute left-0 top-0 w-full h-full bg-theme-black dark:opacity-90 opacity-0"></div>
      <div className="border-b-2 border-theme-yellow  mb-8 pb-3 container mx-auto relative z-40 flex justify-between gap-2 flex-col-reverse  md:flex-row">
        <div className="lg:w-1/2">
          <form onSubmit={handleSearch} className="flex">
            <input
              className="w-full rounded-full  pl-4 py-2 bg-transparent  dark:placeholder:text-[#fff] placeholder:text-theme-black dark:text-white text-theme-black  border-2"
              type="search"
              name="search"
              placeholder="Search Here"
              id="search"
            />
            <input
              className="btn bg-theme-yellow border-none text-xl rounded-full hover:text-theme-yellow text-theme-black ml-2"
              type="submit"
              value="search"
            />
          </form>
        </div>
        <div>
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn bg-theme-yellow border-none text-xl rounded-full hover:text-theme-yellow text-theme-black m-1"
            >
              Filter By Category
            </div>
            <ul className="dropdown-content z-[1] menu p-2 shadow rounded-box w-52  bg-theme-black text-xl font-semibold">
              <li>
                <button onClick={handleCatsFilter}>Cats</button>
              </li>
              <li>
                <button onClick={handleDogsFilter}>Dogs</button>
              </li>
              <li>
                <button onClick={handleRabbitsFilter}>Rabbits</button>
              </li>
              <li>
                <button onClick={handleFishesFilter}>Fishes</button>
              </li>
              <li>
                <button onClick={handleBirdsFilter}>Birds</button>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Pets pets={displayPets}></Pets>
    </div>
  );
};

export default PetListing;
