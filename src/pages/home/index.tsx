import Header from "../../components/layout/header/index";
import Navbar from "../../components/layout/navbar";
const Home = () => {
  return (
    <div className="w-full h-screen px-[50px] py-[20px] bg-[#CFD4E2] flex items-center justify-center">
      <div className="w-full h-full bg-[#fff] rounded-[10px]">
        <Header />
        <div className="flex w-full h-[calc(100vh-130px)] ">
          <Navbar />
        </div>
      </div>
    </div>
  );
};
export default Home;
