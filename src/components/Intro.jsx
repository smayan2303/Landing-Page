import vid1 from '../assets/video1.mp4';
import vid2 from '../assets/video2.mp4';
const HeroSection = () => {
  return (
    <div className='flex flex-col items-center mt-6 lg:mt-20'>
        <h1 className='text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide '>
            Company Goal and 
            
            <span className='bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text'>{" "}Motto</span>
        </h1>
        <p className='mt-10  text-lg text-center text-neutral-500 max-w-4xl'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore 
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
        <div className='flex justify-center my-10'>
            <a href='#' className='bg-gradient-to-r from-orange-500 to-orange-800 py-3 px-4 mx-3 rounded-md'>Start for Free</a>
            <a href="#" className='py-3 px-4 rounded-md border mx-3'>Documentation</a>
        </div>
            <div className='flex justify-center mt-10'>
                <video autoPlay loop muted className='rounded-lg w-1/2 border border-orange-700 shadow-orange-400 mx-2 my-4'>
                    <source src ={vid1} type="video/mp4"/>
                    Your browser does not support the video tag.
                </video>

                <video autoPlay loop muted className='rounded-lg w-1/2 border border-orange-700 shadow-orange-400 mx-2 my-4'>
                    <source src ={vid2} type="video/mp4"/>
                    Your browser does not support the video tag.
                </video>
            </div>
    </div>
  );
};

export default HeroSection