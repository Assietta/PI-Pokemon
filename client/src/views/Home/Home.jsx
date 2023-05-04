import Cards from "../../components/Cards/Cards";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getPokemons, getTypes } from "../../redux/actions";
import SearchBar from "../../components/components";


const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPokemons(), getTypes());
  }, [dispatch]);

  return (
    <>
      <div>
        <SearchBar/>
        <Cards />
      </div>
    </>
  );
};

export default Home;