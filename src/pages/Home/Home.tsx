import Subscribe from "../../components/Subscribe/Subscribe";
import usePageTitle from "../../hooks/usePageTitle";
import HomeBestSellers from "./HomeBestSellers/HomeBestSellers";
import HomeComments from "./HomeComments/HomeComments";
import HomeGuide from "./HomeGuide/HomeGuide";
import HomeSearch from "./HomeSearch/HomeSearch";
import HomeSpecialDeals from "./HomeSpecialDeals/HomeSpecialDeals";

const Home = () => {
  usePageTitle("Supplement.group | Home");
  return (
    <>
      <HomeSearch />
      <HomeSpecialDeals />
      <HomeBestSellers />
      <HomeGuide />
      <HomeComments />
      <Subscribe />
    </>
  );
};

export default Home;
