
import img from '../assets/images/user.png';

const Banner = () => {
    return (
        <div className="hero bg-purple-50 mt-7">
  <div className="hero-content  flex-col lg:flex-row-reverse gap-28">
    <img
      src={img}
      className="w-[450px] h-[430px] rounded-lg " />
    <div>
      <h1 className="text-7xl font-extrabold">One Step 
        <br /> 
        Closer To Your 
         <br /> 
        <span className="text-purple-400">Dream Job</span>
        </h1>
        <p className="font-medium text-[18px] text-gray-500 mt-6">
      Explore thousands of job opportunities with all the <br /> information you need. Its your future. Come find it. Manage all  <br />your job application from start to finish.
      </p>
      <button className="btn bg-purple-300 text-white mt-6">Get Started</button>
    </div>
  </div>
</div>
    );
};

export default Banner;