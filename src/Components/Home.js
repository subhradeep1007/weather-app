import { React, useState, useEffect } from "react";
import axios from "axios";
import Clouds from "../Images/Delhi2.png";
import Kolkata from "../Images/Kolkata.png"
import Chennai from "../Images/Chennai.jpg"
import Jaipur from "../Images/Jaipur.jpg"
import Mumbai from "../Images/Mumbai.png"
import Hyderabad from "../Images/Hyderabad.png"
import Banglore from "../Images/Banglore.png"
import Ahmedabad from "../Images/Ahmedabad.jpg"
import Srinagar from "../Images/Srinagar.jpg"
import { BiCloudLightRain } from 'react-icons/bi';
import { Link } from "react-router-dom";

// import { BsCloud } from 'react-icons/bs';
// import { FiSun} from 'react-icons/fi';
// import { IoIosSnow} from 'react-icons/io';



export default function Home() {
    const style={
        backgroundImage : `url(${Clouds})`,
        backgroundSize: "200px 170px",
        
        backgroundColor: "rgba(0, 0, 0, 0.4)"
    }
    const [i, seti] = useState(0)
    const [city, setcity] = useState();
    const [long, setlong] = useState();
    const [lat, setlat] = useState();
    const [s, settemp] = useState();
    const [temp1, settemp1] = useState();
    const [temp2, settemp2] = useState();
    const [temp3, settemp3] = useState();
    const [temp4, settemp4] = useState();
    const [temp5, settemp5] = useState();
    const [temp6, settemp6] = useState();
    const [temp7, settemp7] = useState();
    const [temp8, settemp8] = useState();
    const [temp9, settemp9] = useState();

    // const api_key = "fe38115269e1c0fe62204650f7acaec4";
    const api_key="81d81d43df7ba4aed9c8d16035226ec8"
    function exactSearch(event) {
        const searchItem = event.target.value;
        setcity(searchItem);
    }

    function onChangeHandler() {
        // console.log("city",city)
        localStorage.setItem("city",city);
        console.log("clicked")

          
        
         
           
          

        
    }


    useEffect(() => {
        
        console.log("value ka value",localStorage.getItem("value"))
        if(localStorage.getItem("value")==null)
        {
            console.log("rendering");
        }

        localStorage.setItem("value",1);
        
        
        
        axios
            .post(
                `https://api.openweathermap.org/data/2.5/onecall?lat=28.6667&lon=77.2167&exclude=hourly,minutely&units=metric&appid=${api_key}`
            )
            .then((res) => {
                
                settemp1(res.data.current.temp);
            });

        axios
            .post(
                `https://api.openweathermap.org/data/2.5/onecall?lat=22.5697&lon=88.3697&exclude=hourly,minutely&units=metric&appid=${api_key}`
            )
            .then((res) => {
              
                settemp2(res.data.current.temp);
            });
        
            axios
            .post(
                `https://api.openweathermap.org/data/2.5/onecall?lat=19.0144&lon=72.8479&exclude=hourly,minutely&units=metric&appid=${api_key}`
            )
            .then((res) => {
             
                settemp3(res.data.current.temp);
            });
        
            axios
            .post(
                `https://api.openweathermap.org/data/2.5/onecall?lat=13.0878&lon=80.2785&exclude=hourly,minutely&units=metric&appid=${api_key}`
            )
            .then((res) => {
             
                settemp4(res.data.current.temp);
            });
        
            axios
            .post(
                `https://api.openweathermap.org/data/2.5/onecall?lat=12.9762&lon=77.6033&exclude=hourly,minutely&units=metric&appid=${api_key}`
            )
            .then((res) => {
                
                settemp5(res.data.current.temp);
            });
        
            axios
            .post(
                `https://api.openweathermap.org/data/2.5/onecall?lat=17.3753&lon=78.4744&exclude=hourly,minutely&units=metric&appid=${api_key}`
            )
            .then((res) => {
                
                settemp6(res.data.current.temp);
            });
        
            axios
            .post(
                `https://api.openweathermap.org/data/2.5/onecall?lat=23.0333&lon=72.6167&exclude=hourly,minutely&units=metric&appid=${api_key}`
            )
            .then((res) => {
              
                settemp7(res.data.current.temp);
            });
        
            axios
            .post(
                `https://api.openweathermap.org/data/2.5/onecall?lat=26.9167&lon=75.8167&exclude=hourly,minutely&units=metric&appid=${api_key}`
            )
            .then((res) => {
                
                settemp8(res.data.current.temp);
            });
        
            axios
            .post(
                `https://api.openweathermap.org/data/2.5/onecall?lat=34.0833&lon=74.8167&exclude=hourly,minutely&units=metric&appid=${api_key}`
            )
            .then((res) => {
                
                settemp9(res.data.current.temp);
            });

    }, []);

    return (
        <div>
            <div className="googlefont1   bg-green-100  bg-gradient-to-t b   h-screen  flex w-screen ">
                <div className="w-full font-bold   bg-gradient-to-t p-2  from-green-400 to-blue-200 h-full">

                    <div className="">

                    
                    
                        <input
                            className="bg-white  border-2  mt-4 border-gray-300 rounded-full w-4/5 ml-20 py-4 px-6 text-gray-900 leading-tight focus:outline-none inline-block"
                            type="text"
                            value={city}
                            onChange={exactSearch}
                            placeholder="Search any city and press search.."
                            onKeyDown={(e) => {
                                if (e.key === "Enter") {
                                    onChangeHandler();
                                }
                            }}
                        />
                        

                        <Link
                      to="/next"
                      onClick={()=>{onChangeHandler()}}
                      className="inline-block no-underline py-2 px-4 "
                    >
                        <button className=" transform  hover:scale-105 -ml-3 rounded-xl   border-2 border-gray-300    px-2 py-2 bg-blue-100 "
                        >
                            Search
                        </button>
                       
                        </Link>

                    
                    
                        <Link
                      to="/next"
                      onClick={()=>{localStorage.setItem("city","Delhi")}}
                    >
                        <button className="text-gray-300 w-64  mt-4 transform  hover:scale-105 bg-white shadow-xl   bg-cover bg-no-repeat z-10    rounded-xl ml-20  mb-4   text-xl mr-2  "
                        
                        >   
                           <img src={Clouds} alt="" className="w-full rounded-t-xl h-52" />
                            <div className="text-4xl mx-2  font-bold  text-gray-900  block  text-left">
                                {Math.round(temp1)}°C 
                                <div className="inline-block ml-4 ">
                                     <BiCloudLightRain size="1em"/>
                                </div>
                            </div>
                            <div className="float-left mx-2 mb-2 font-extrabold  text-blue-800 text-lg  block">
                                New Delhi 
                                
                            </div>
                        </button>
                        </Link>
                      
                        <Link
                      to="/next"
                      onClick={()=>{localStorage.setItem("city","Kolkata")}}
                    >
                        <button className="text-gray-300 w-64  mt-4 transform  hover:scale-105 bg-green-500 shadow-xl   bg-cover bg-no-repeat z-10    rounded-xl ml-2  m-4  text-xl mr-2  "
                        
                        >   
                           <img src={Kolkata} alt="" className="w-full rounded-t-xl h-52" />
                            <div className="text-4xl mx-2  font-bold  text-gray-50  block  text-left">
                                {Math.round(temp2)}°C 
                                <div className="inline-block ml-4 ">
                                     <BiCloudLightRain size="1em"/>
                                </div>
                            </div>
                            <div className="float-left mx-2 mb-2 font-extrabold  text-blue-50 text-lg  block">
                                Kolkata
                                
                            </div>
                        </button>
                        </Link>
                        
                        <Link
                      to="/next"
                      onClick={()=>{localStorage.setItem("city","Mumbai")}}
                    >
                        <button className="text-gray-300 w-64  mt-4 transform  hover:scale-105 bg-white shadow-xl   bg-cover bg-no-repeat z-10    rounded-xl ml-2  m-4  text-xl mr-2  "
                        
                        >   
                           <img src={Mumbai} alt="" className="rounded-t-xl h-52 w-full " />
                            <div className="text-4xl  mx-2  font-bold  text-gray-900  block  text-left">
                                {Math.round(temp3)}°C 
                                <div className="inline-block ml-4 ">
                                     <BiCloudLightRain size="1em"/>
                                </div>
                            </div>
                            <div className="float-left mx-2 mb-2 font-extrabold  text-blue-800 text-lg  block">
                                Mumbai
                                
                            </div>
                        </button>
                        </Link>
                        
                        <Link
                      to="/next"
                      onClick={()=>{localStorage.setItem("city","Chennai")}}
                    >
                        <button className="text-gray-300 w-64  mt-4 transform  hover:scale-105 bg-gray-100 shadow-xl   bg-cover bg-no-repeat z-10    rounded-xl ml-2  m-4  text-xl mr-2  "
                        
                        >   
                           <img src={Chennai} alt="" className="rounded-t-xl h-52 w-full " />
                            <div className="text-4xl  mx-2  font-bold  text-gray-900  block  text-left">
                                {Math.round(temp4)}°C 
                                <div className="inline-block ml-4 ">
                                     <BiCloudLightRain size="1em"/>
                                </div>
                            </div>
                            <div className="float-left mx-2 mb-2 font-extrabold  text-blue-900 text-lg  block">
                                Chennai
                                
                            </div>
                        </button>
                        </Link>
                       
                       





                        <Link
                      to="/next"
                      onClick={()=>{localStorage.setItem("city","Bangalore")}}
                    >
                        <button className="text-gray-300 w-64  mt-4 transform  hover:scale-105 bg-green-600 shadow-xl   bg-cover bg-no-repeat z-10    rounded-xl ml-2  m-4  text-xl mr-2  "
                        
                        >   
                           <img src={Banglore} alt="" className="rounded-t-xl h-52 w-full " />
                            <div className="text-4xl  mx-2  font-bold  text-gray-100  block  text-left">
                                {Math.round(temp5)}°C 
                                <div className="inline-block ml-4 ">
                                     <BiCloudLightRain size="1em"/>
                                </div>
                            </div>
                            <div className="float-left mx-2 mb-2 font-extrabold  text-blue-100 text-lg  block">
                                Banglore
                                
                            </div>
                        </button>
                     </Link>
                       
                       
                     <Link
                      to="/next"
                      onClick={()=>{localStorage.setItem("city","Hyderabad")}}
                    >
                        <button className="text-gray-300 w-64  mt-4 transform  hover:scale-105 bg-white shadow-xl   bg-cover bg-no-repeat z-10    rounded-xl ml-52  m-4  text-xl mr-2  "
                        
                        >   
                           <img src={Hyderabad} alt="" className="rounded-t-xl h-52 w-full " />
                            <div className="text-4xl  mx-2  font-bold  text-gray-900  block  text-left">
                                {Math.round(temp6)}°C 
                                <div className="inline-block ml-4 ">
                                     <BiCloudLightRain size="1em"/>
                                </div>
                            </div>
                            <div className="float-left mx-2 mb-2 font-extrabold  text-blue-800 text-lg  block">
                                Hyderabad
                                
                            </div>
                        </button>
                        </Link>


                        <Link
                      to="/next"
                      onClick={()=>{localStorage.setItem("city","Ahmedabad")}}
                    >
                        <button className="text-gray-300 w-64  mt-4 transform  hover:scale-105 bg-yellow-50 shadow-xl   bg-cover bg-no-repeat z-10    rounded-xl ml-2  m-4  text-xl mr-2  "
                        
                        >   
                           <img src={Ahmedabad} alt="" className="rounded-t-xl h-52 w-full " />
                            <div className="text-4xl  mx-2  font-bold  text-gray-900  block  text-left">
                                {Math.round(temp7)}°C 
                                <div className="inline-block ml-4 ">
                                     <BiCloudLightRain size="1em"/>
                                </div>
                            </div>
                            <div className="float-left mx-2 mb-2 font-extrabold  text-blue-900 text-lg  block">
                                Ahmedabad
                                
                            </div>
                        </button>
                        </Link>

                        <Link
                      to="/next"
                      onClick={()=>{localStorage.setItem("city","Jaipur")}}
                    >
                        <button className="text-gray-300 w-64  mt-4 transform  hover:scale-105 bg-green-600 shadow-xl   bg-cover bg-no-repeat z-10    rounded-xl ml-2  m-4  text-xl mr-2  "
                        
                        >   
                           <img src={Jaipur} alt="" className="rounded-t-xl h-52 w-full " />
                            <div className="text-4xl  mx-2  font-bold  text-gray-100  block  text-left">
                                {Math.round(temp8)}°C 
                                <div className="inline-block ml-4 ">
                                     <BiCloudLightRain size="1em"/>
                                </div>
                            </div>
                            <div className="float-left mx-2 mb-2 font-extrabold  text-blue-100 text-lg  block">
                                Jaipur
                                
                            </div>
                        </button>
                        </Link>
                        
                        <Link
                      to="/next"
                      onClick={()=>{localStorage.setItem("city","Srinagar")}}
                    >
                        <button className="text-gray-300 w-64  mt-4 transform  hover:scale-105 bg-blue-500  shadow-xl   bg-cover bg-no-repeat z-10    rounded-xl ml-2  m-4  text-xl mr-2  "
                        
                        >   
                           <img src={Srinagar} alt="" className="rounded-t-xl h-52 w-full " />
                            <div className="text-4xl  mx-2  font-bold  text-gray-100  block  text-left">
                            {Math.round(temp9)}°C 
                                <div className="inline-block ml-4 ">
                                     <BiCloudLightRain size="1em"/>
                                </div>
                            </div>
                            <div className="float-left mx-2 mb-2 font-extrabold  text-blue-100 text-lg  block">
                                Srinagar
                                
                            </div>
                        </button>
                        </Link>

                    </div>

                    {/* <img src={Clouds} className="bg-black" alt="" /> */}

                    <div className=" font-thin hidden  text-8xl text-gray-100  absolute bottom-44 left-36">
                        <div className=" text-10xl mr-4 inline-block ">{Math.round(s)}°C</div>

                        <div className="text-8xl   relative top-6 inline-block text-gray-100 ">
                            Mumbai
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className=" inline-block h-12 w-12 ml-4"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                                />
                            </svg>
                            <br />
                            <div className=" text-2xl ml-1">10:59 Tuesday 10/08/2020</div>
                        </div>
                    </div>
                </div>
                <div className="w-1/3 hidden h-full    bg-gradient-to-t  from-gray-800 to-gray-700 p-10 pl-16">
                    <div className=" w-full">


                        <hr className="text-gray-500" />



                        <hr className="text-gray-500" />
                    </div>

                    <div className="text-gray-400 text-xl mt-4">Weather Details</div>

                    <div>
                        <div className="inline-block w-2/5 mr-8 ml-0 mt-8 bg-gray-500 p-4 rounded-xl ">
                            <div className="text-5xl text-gray-200">96%</div>
                            <div className=" text-xl text-gray-400">Humidity</div>
                        </div>
                        <div className="inline-block w-2/5 ml-0 mt-8 bg-gray-500 p-4 rounded-xl ">
                            <div className="text-5xl text-gray-200">1
                                <div className="inline-block text-3xl">
                                    Km/h
                                </div>
                            </div>
                            <div className=" text-xl text-gray-400">Wind</div>
                        </div>
                    </div>
                    <div>
                        <div className="inline-block w-2/5 mr-8 ml-0 mt-8 bg-gray-500 p-4 rounded-xl ">
                            <div className="text-5xl text-gray-200">
                                6:20
                                <div className="inline-block ml-1 text-xl">
                                    AM
                                </div></div>
                            <div className=" text-xl text-gray-400">Sunrise</div>
                        </div>
                        <div className="inline-block w-2/5 ml-0 mt-8 bg-gray-500 p-4 rounded-xl ">
                            <div className="text-5xl text-gray-200">7:20
                                <div className="inline-block ml-1 text-xl">
                                    PM
                                </div>
                            </div>
                            <div className=" text-xl text-gray-400">Sunset</div>
                        </div>
                    </div>
                </div>
             
                {/* <div className=" ml-40 mt-2  text-xl text-gray-800 ">
                Find Location
            </div>
            <input
                  className="bg-white border-2 mt-2 border-gray-300 rounded-full w-4/5 mx-auto py-4 px-6 text-gray-900 leading-tight focus:outline-none block"
                  type="text"
                  value={city}
                  onChange={exactSearch}
                  placeholder="Search any city.."
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      onChangeHandler();
                    }
                  }}
                />
            {
                lat?(
                    <div className=" mt-1 p-2 bg-blue-100 inline-block mx-40 rounded-sm border-2 border-blue-200 text-blue-800">
                        <div className="inline-block p-1 mr-2 bg-blue-300">
                        {lat}
                        </div>
                     Lattitude ye hai lawde 
                    <div>
                    <div className="inline-block p-1 mt-1 mr-2 bg-blue-300">
                      {Math.round(Math.round(temp))}°C
                    </div>
                     Le bhosdike temperature
                    </div>
                     
                    </div>
                ):""
                
               
            }
              */}
            </div>
        </div>
    );
}
