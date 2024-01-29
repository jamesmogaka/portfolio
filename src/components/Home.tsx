// import CV from "../assets/CV (1).pdf";
import profile from '../assets/profile_bg.png';
import '../index.css';
//
//Create a home page for the entire portfolio
const Home = () => {
    return (
        //
        // The home section that displays the home page
        <div
            id="home"
            className="h-screen snap-center pt-[10%] flex flex-col gap-6 justify-center items-center overflow-hidden sm:flex-row sm:gap-3 sm:pt-[5%]"
        >
            <img
                src={profile}
                alt="My picture"
                className="max-w-[60%] rounded-[50%] object-cover transition-all duration-300 ease-in-out transform hover:scale-110 left-44 sm:max-w-[40%]"
            />

            <div className="w-full text margin sm:ml-[10%] flex-grow lg:ml-[15%]">
                <h3>Hello,</h3>
                <h1 className=" sm:text-3xl text-[2.25rem] md:leading-[3rem]">
                    I'm
                    <span className="typing text-blue-700 inline-block relative align-middle">
                        &nbsp;James Mogaka.
                    </span>
                </h1>
                <h1 className="cursor  ml-[50px] border-r-4 border-solid border-black mb-2 text-[2.25rem] sm:text-3xl md:mb-2 md:leading-[3rem]">
                    a digital craftsman.
                </h1>
                <h1 className="cursor ml-[50px] border-r-4 border-solid border-black mb-2 text-[2.25rem] sm:text-3xl md:mb-2 md:leading-[3rem]">
                    a software engineer.
                </h1>

                <button className=" bg-[#007bff] text-white p-2 px-4 border-none rounded-md cursor-pointer mt-2 ml-[40%]">
                    <a href="#" className="btn">
                        Resume
                    </a>
                </button>
            </div>
        </div>
    );
};

export default Home;
