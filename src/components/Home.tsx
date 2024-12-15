// import CV from "../assets/CV (1).pdf";

import profile from '../assets/profile_bg.png';

import '../index.css';

//

// Create home component to display the home section

const Home = () => {
    return (
        <div
            id="home"
            className="h-screen pt-5 sm:pt-10 flex flex-col sm:flex-row sm:gap-10 items-center justify-center overflow-hidden md:scroll-snap-align-start"
        >
            {/* Image Section */}

            <div className="w-full sm:w-1/2 flex justify-center sm:justify-end mb-8 sm:mb-0">
                <img
                    src={profile}
                    alt="My picture"
                    className="w-[85%] max-w-sm rounded-full object-cover transition-transform duration-300 ease-in-out transform hover:scale-110 sm:w-[50%] sm:max-w-md"
                />
            </div>

            {/* Text Section */}

            <div className="w-full sm:w-1/2 px-4 flex flex-col  items-center sm:px-10 sm:ml-10 mt-4 sm:mt-0">
                <h3 className="text-lg font-medium text-gray-700 w-full text-center">Hello,</h3>

                <div className="flex flex-col">
                    <span className="text-2xl sm:text-3xl font-bold">I'm</span>

                    <h1 className="text-blue-700 typing text-2xl sm:text-3xl font-bold -mt-8 ml-[4ch]">
                        James Mogaka.
                    </h1>

                    <h2 className="typing text-lg sm:text-xl ml-[5ch] sm:ml-[6ch] -mt-1">a digital craftsman.</h2>

                    <h2 className="cursor text-lg sm:text-xl ml-[5ch] sm:ml-[6ch] -mt-1">a software engineer.</h2>
                </div>

                <div className="mt-6 flex justify-center">
                    <a
                        href="https://drive.google.com/file/d/1KjSpjgg7r0Pjm2IsCmqFafplaHuWys7C/view?usp=drive_link"
                        target="_blank"
                        className="inline-block bg-blue-600 text-white text-sm sm:text-base font-medium py-2 px-4 rounded-md shadow hover:bg-blue-700 transition"
                    >
                        Resume
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Home;
