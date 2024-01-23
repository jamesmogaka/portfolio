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
            className=" h-dvh snap-center flex flex-col pt-[10%] gap-6 justify-center items-center sm:flex-row sm:justify-center sm:items-center sm:pt-[5%]"
        >
            <img
                src={profile}
                alt="My picture"
                className=" sm:max-w-full max-w-[60%] h-[50%] md:h-auto object-cover rounded-[50%] transition-all duration-300 ease-in-out transform hover:scale-110 left-44 "
            />

            <div className=" flex-grow w-full ">
                <h3>Hello,</h3>
                <h1 className=" text-3xl">
                    I'm
                    <span className="typing text-blue-700 inline-block relative align-middle">
                        &nbsp;James Mogaka.
                    </span>
                </h1>
                <h1 className="cursor text-3xl ml-[70px] border-r-4 border-solid border-black mb-2">
                    a digital craftsman.
                </h1>
                <h1 className="cursor  text-3xl ml-[70px] border-r-4 border-solid border-black mb-2">
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
