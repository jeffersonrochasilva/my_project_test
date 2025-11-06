import Header from "../../components/layout/header/index";
const Home = () => {
  // const container = {
  //   width: "100%",
  //   height: "100vh",
  //   background: "red",
  // };
  return (
    <div className="w-full h-screen px-[50px] py-[20px] bg-[#CFD4E2] flex items-center justify-center">
      {/* <span className="text-4xl font-bold text-white">Home</span> */}
      <div className="w-full h-full bg-[#fff] rounded-[10px]">
        <Header />
      </div>
    </div>
  );
};
export default Home;
