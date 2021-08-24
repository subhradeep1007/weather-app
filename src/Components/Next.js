import React, { useState, useEffect } from "react";
import Moment from "react-moment";
import { FaFeather } from "react-icons/fa";
import { BsFillDropletFill } from "react-icons/bs";
import { GiWhirlwind } from "react-icons/gi";
import { WiSunrise } from "react-icons/wi";
import { WiSunset } from "react-icons/wi";
import { AiFillHome, AiOutlineHome } from "react-icons/ai";
import { MdDateRange } from "react-icons/md";
import { MdWbSunny } from "react-icons/md";
import Clouds from "../Images/Delhi2.png";
import Kolkata from "../Images/Kolkata.png";
import Chennai from "../Images/Chennai.jpg";
import axios from "axios";
import Mumbai from "../Images/Mumbai.png";
import { Link } from "react-router-dom";
import { FcSearch } from "react-icons/fc";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export default function Next() {

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  const [CITY, setCITY] = useState()


  function exactSearch(event) {
    const searchItem = event.target.value;
    setCITY(searchItem);
  }

  function onChangeHandler() {
    // console.log("city",city)
    localStorage.setItem("city", CITY);
    console.log("clicked")
  }


  const city = localStorage.getItem("city");


  const [timeArray, settimeArray] = useState([]);

  const [data1, setdata1] = useState();
  const [data0, setdata0] = useState();

  const [data2, setdata2] = useState();
  const [data3, setdata3] = useState();
  const [data4, setdata4] = useState();
  const [data5, setdata5] = useState();
  const [data6, setdata6] = useState();
  const [data7, setdata7] = useState();
  const [data8, setdata8] = useState();

  const date = (time) => {
    let dateObj = new Date(time * 1000);
    console.log("date", dateObj);
    let hours = dateObj.getHours();
    if (hours > 12) {
      hours = hours - 12;
    }

    let minutes = (dateObj.getMinutes() < 10 ? "0" : "") + dateObj.getMinutes();
    console.log(minutes);

    let ans = hours.toString() + ":" + minutes;
    settimeArray((oldArray) => [...oldArray, ans]);
  };

  const [unixTimestamp, setunixTimestamp] = useState();
  const api_key = "81d81d43df7ba4aed9c8d16035226ec8";
  useEffect(() => {
    axios
      .post(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${api_key}`
      )
      .then((res) => {
        console.log(res.data);
        // console.log(res.data);
        // console.log(res.data.coord.lat)
        // console.log(res.data)
        // setlat(res.data.coord.lat);
        // localStorage.setItem("lat",res.data.coord.lat)
        // localStorage.setItem("long",res.data.coord.lon)
        // setlong(res.data.coord.lon);

        axios
          .post(
            `https://api.openweathermap.org/data/2.5/onecall?lat=${res.data.coord.lat}&lon=${res.data.coord.lon}&exclude=hourly,minutely&units=metric&appid=${api_key}`
          )
          .then((res1) => {
            settimeArray([]);
            console.log(city);
            console.log("city data=", res1.data);
            setdata1(res1.data.current);
            setdata0(res1.data.daily[0]);

            setdata2(res1.data.daily[1]);
            setdata3(res1.data.daily[2]);
            setdata4(res1.data.daily[3]);
            setdata5(res1.data.daily[4]);
            setdata6(res1.data.daily[5]);
            setdata7(res1.data.daily[6]);
            setdata8(res1.data.daily[7]);

            for (var i = 0; i < 8; i++) {
              date(res1.data.daily[i].sunrise);
              date(res1.data.daily[i].sunset);
            }

            setunixTimestamp(res1.data.current.dt);
          });
      });

  }, [city]);

  return (
    <div>
      <div
        className=" googlefont1 bg-gradient-to-t px-2 from-green-400 to-blue-200
         h-full md:h-screen w-screen md:flex "
      >
        <div className="w-full md:w-2/5 h-full rounded-lg shadow-2xl py-1 md:py-8 ">
          <Link to="/">
            <button className=" ml-2 md:ml-4 bg-transparent border-2 border-gray-200 inline-block rounded-full  p-2 py-1">
              <div className="inline-block">
                <AiFillHome size="1.3rem" />
              </div>
            </button>
          </Link>

          <input
            className="md:hidden bg-white   border-2  mt-4 border-gray-300 rounded-full w-64 md:w-4/5 ml-2 md:ml-20 py-4 pl-2 md:px-6 text-gray-900 text-sm md:text-base leading-tight focus:outline-none "
            type="text"
            value={CITY}
            onChange={exactSearch}
            placeholder="Search any city and press search..."
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                onChangeHandler();
              }
            }}

          />


          <Link
            to="/next"
            onClick={() => { onChangeHandler() }}
            className="md:hidden no-underline ml-0 md:ml-2 "
          >
            <button className=" transform  hover:scale-105 md:-ml-3 rounded-xl text-base md:text-base relative top-3 px-2 py-2 "
            >
              <FcSearch size="1.9rem" />
            </button>

          </Link>

          

          <div className="text-5xl font-medium mt-5 md:mt-0 text-gray-800 text-center ">
            Today
          </div>

          <div className=" text-gray-500 font-bold mt-2 text-center ">
            <div className="inline-block ml-4 text-lg  w-32 h-8 overflow-hidden">
              <Moment unix>{data0 ? Math.round(data0.dt) : ""}</Moment>
            </div>

            <div className="inline-block relative top-2 ml-2  text-yellow-500  mr-2 ">
              <MdWbSunny size="3em" />
            </div>
          </div>

          <div className=" text-7xl md:text-8xl mt-8 pb-4   rounded-sm font-medium text-gray-900  justify-center  text-center   content-center  ">
            <div className="inline-block  relative -top-2  mr-4 text-gray-400 text-4xl md:text-5xl    ">
              <div className="inline-block text-blue-500">
                <div className=" text-blue-500  -ml-3 text-base">LOW</div>
                {data0 ? Math.round(data0.temp.min) : ""}
                <div className="  inline-block text-xl md:text-2xl  left-1 md:left-0 relative -top-4      md:-top-6 ">
                  °C
                </div>
              </div>
            </div>
            {data1 ? Math.round(data1.temp) : ""}{" "}
            <div className="  inline-block text-2xl  -left-5 relative -top-10 md:-top-12 ">
              °C
            </div>
            <div className="inline-block relative -top-2 mr-4 text-gray-400 text-4xl md:text-5xl   ">
              <div className="inline-block text-blue-500">
                <div className=" text-blue-500  -ml-3 text-base">HIGH</div>
                {data0 ? Math.round(data0.temp.max) : ""}
                <div className="  inline-block text-xl md:text-2xl  -left-0 relative -top-4   md:-top-6 ">
                  °C
                </div>
              </div>
            </div>
            <div className=" text-gray-600 -ml-8 md:-ml-16 text-2xl  font-bold mt-7 md:mt-4  ">
              <div className=" inline-block  relative -top-5">{city}</div>
            </div>
            <div className=" text-gray-500 -ml-8  text-base mt-2 md:mt-4  font-bold   ">
              Feels like {data1 ? Math.round(data1.feels_like) : ""}
              <div className="inline-block  ml-2 ">
                <FaFeather />
              </div>
            </div>
          </div>

          <div>

            <div className="inline-block text-center w-1/2 md:w-2/5 md:mr-4 md:ml-10 mt-6   bg-transparent p-2 md:p-4 rounded-xl ">
              <div className=" text-4xl md:text-6xl text-gray-50 md:text-gray-200">
                {data1 ? Math.round(data1.humidity) : ""}%
                <div className="inline-block ml-2 text-blue-400 ">
                  <BsFillDropletFill size="0.6em" />
                </div>
              </div>
              <div className=" text-xl text-gray-400 md:text-gray-500">Humidity</div>
            </div>

            <div className="inline-block text-center w-1/2  md:w-2/5  md:mr-8 md:ml-0 mt-6   bg-transparent p-2 md:p-4 rounded-xl  ">
              <div className="text-4xl md:text-6xl text-gray-50 md:text-gray-200">
                {data1 ? Math.round(data1.wind_speed) : ""}
                <div className="inline-block  text-3xl">Km/h</div>
                <div className="inline-block ml-2 text-blue-600 ">
                  <GiWhirlwind size="0.6em" />
                </div>
              </div>
              <div className=" text-xl text-gray-400 md:text-gray-500">Wind</div>
            </div>
          </div>

          <div>
            <div className="inline-block  text-center w-1/2  md:w-2/5 md:mr-8 md:ml-10 mt-6   bg-transparent p-2 md:p-4 rounded-xl ">
              <div className=" text-4xl md:text-6xl  text-gray-50 md:text-gray-200">
                {timeArray[0]}
                <div className="inline-block ml-1 text-xl">AM</div>
                <div className="inline-block ml-2 text-yellow-400  ">
                  <WiSunrise size="0.8em" />
                </div>
              </div>
              <div className=" text-xl text-gray-400 md:text-gray-500">Sunrise</div>
            </div>
            <div className="inline-block text-center w-1/2  md:w-2/5 md:mr-8 md:ml-0 mt-6   bg-transparent p-2 md:p-4 rounded-xl ">
              <div className="text-4xl md:text-6xl text-gray-50 md:text-gray-200">
                {timeArray[1]}
                <div className="inline-block ml-1 text-xl">PM</div>
                <div className="inline-block ml-2 text-yellow-400 ">
                  <WiSunset size="0.8em" />
                </div>
              </div>
              <div className=" text-xl text-gray-400 md:text-gray-500">Sunset</div>
            </div>
          </div>
        </div>

        <div className=" w-full md:w-3/5 h-full ">


          <input
            className=" invisible md:visible bg-white   border-2  mt-4 border-gray-300 rounded-full w-64 md:w-4/5 ml-2 md:ml-20 py-4 pl-2 md:px-6 text-gray-900 text-sm md:text-base leading-tight focus:outline-none "
            type="text"
            value={CITY}
            onChange={exactSearch}
            placeholder="Search any city and press search..."
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                onChangeHandler();
              }
            }}

          />


          <Link
            to="/next"
            onClick={() => { onChangeHandler() }}
            className=" invisible md:visible no-underline ml-0 md:ml-2 "
          >
            <button className=" transform  hover:scale-105 md:-ml-3 rounded-xl text-base md:text-base relative top-4      px-2 py-2 "
            >
              <FcSearch size="2.7rem" />
            </button>

          </Link>





          <Link
            to="/next"
            onClick={() => {
              localStorage.setItem("city", "Delhi");
            }}
          >

            <div className=" md:hidden w-full mt-0  ">

              <div className=" bg-transparent   px-2 inline-block mb-4  font-extrabold text-2xl text-gray-400 mx-3 ">
                Weekly
                <div className=" ml-2 text-2xl inline-block text-gray-900 ">
                  Weather Forcast
                </div>
              </div>
              <Carousel responsive={responsive} className=" md:hidden">

                <div className="text-center flex-col bg-transparent   shadow-md mx-5 mt-2 rounded-2xl mb-2  h-52">

                  <div className=" inline-block  mx-auto text-3xl w-56 h-10 mt-2  overflow-hidden text-gray-100">
                    <div className="inline-block text-gray-400">
                      <MdDateRange />{" "}
                    </div>{" "}
                    <Moment unix>{data2 ? Math.round(data2.dt) : ""}</Moment>
                  </div>

                  <div className=" w-1/3 text-gray-500 text-2xl inline-block  h-8 ">
                    <div className="inline-block ml-2 mr-1 text-xl text-blue-400 ">
                      <BsFillDropletFill size="1.5em" />
                    </div>
                    {data2 ? Math.round(data2.humidity) : ""}%
                  </div>

                  <div className="w-1/2 text-gray-500 inline-block   text-2xl  h-8 ">
                    <div className=" mr-0 text-green-200 inline-block">
                      <FaFeather />{" "}
                    </div>{" "}
                    {data2 ? Math.round(data2.temp.min) : ""}°C/
                    {data2 ? Math.round(data2.temp.max) : ""}°C
                  </div>

                  <div className="w-full mt-2 text-gray-500  text-2xl inline-block   h-8">
                    <div className="inline-block ml-2 text-yellow-600 ">
                      <WiSunrise size="1.5em" />
                    </div>

                    {timeArray[2]} AM

                    <div className=" inline-block ml-2 text-yellow-600 ">
                      <WiSunset size="1.5em" />
                    </div>{" "}
                    {timeArray[3]} PM
                  </div>
                  <div className="w-full text-gray-500 inline-block mx-auto mt-4 text-2xl  h-8 ">
                    <div className="inline-block mr-2 ml-2  text-blue-600 ">
                      <GiWhirlwind size="1em" />
                    </div>
                    {data2 ? data2.wind_speed : ""}Km/h
                  </div>

                </div>

                <div className="text-center">   <div className="text-center flex-col bg-transparent   shadow-md mx-5 mt-2 rounded-2xl mb-2  h-52">

                  <div className=" inline-block  mx-auto text-3xl w-56 h-10 mt-2  overflow-hidden text-gray-100">
                    <div className="inline-block text-gray-400">
                      <MdDateRange />{" "}
                    </div>{" "}
                    <Moment unix>{data3 ? Math.round(data3.dt) : ""}</Moment>
                  </div>

                  <div className=" w-1/3 text-gray-500 text-2xl inline-block  h-8 ">
                    <div className="inline-block ml-2 mr-1 text-xl text-blue-400 ">
                      <BsFillDropletFill size="1.5em" />
                    </div>
                    {data3 ? Math.round(data3.humidity) : ""}%
                  </div>

                  <div className="w-1/2 text-gray-500 inline-block   text-2xl  h-8 ">
                    <div className=" mr-0 text-green-200 inline-block">
                      <FaFeather />{" "}
                    </div>{" "}
                    {data3 ? Math.round(data3.temp.min) : ""}°C/
                    {data3 ? Math.round(data3.temp.max) : ""}°C
                  </div>

                  <div className="w-full mt-2 text-gray-500  text-2xl inline-block   h-8">
                    <div className="inline-block ml-2 text-yellow-600 ">
                      <WiSunrise size="1.5em" />
                    </div>

                    {timeArray[4]} AM

                    <div className=" inline-block ml-2 text-yellow-600 ">
                      <WiSunset size="1.5em" />
                    </div>{" "}
                    {timeArray[5]} PM
                  </div>
                  <div className="w-full text-gray-500 inline-block mx-auto mt-4 text-2xl  h-8 ">
                    <div className="inline-block mr-2 ml-2  text-blue-600 ">
                      <GiWhirlwind size="1em" />
                    </div>
                    {data3 ? data3.wind_speed : ""}Km/h
                  </div>

                </div></div>
                <div className="text-center">   <div className="text-center flex-col bg-transparent   shadow-md mx-5 mt-2 rounded-2xl mb-2  h-52">

                  <div className=" inline-block  mx-auto text-3xl w-56 h-10 mt-2  overflow-hidden text-gray-100">
                    <div className="inline-block text-gray-400">
                      <MdDateRange />{" "}
                    </div>{" "}
                    <Moment unix>{data4 ? Math.round(data4.dt) : ""}</Moment>
                  </div>

                  <div className=" w-1/3 text-gray-500 text-2xl inline-block  h-8 ">
                    <div className="inline-block ml-2 mr-1 text-xl text-blue-400 ">
                      <BsFillDropletFill size="1.5em" />
                    </div>
                    {data4 ? Math.round(data4.humidity) : ""}%
                  </div>

                  <div className="w-1/2 text-gray-500 inline-block   text-2xl  h-8 ">
                    <div className=" mr-0 text-green-200 inline-block">
                      <FaFeather />{" "}
                    </div>{" "}
                    {data4 ? Math.round(data4.temp.min) : ""}°C/
                    {data4 ? Math.round(data4.temp.max) : ""}°C
                  </div>

                  <div className="w-full mt-2 text-gray-500  text-2xl inline-block   h-8">
                    <div className="inline-block ml-2 text-yellow-600 ">
                      <WiSunrise size="1.5em" />
                    </div>

                    {timeArray[6]} AM

                    <div className=" inline-block ml-2 text-yellow-600 ">
                      <WiSunset size="1.5em" />
                    </div>{" "}
                    {timeArray[7]} PM
                  </div>
                  <div className="w-full text-gray-500 inline-block mx-auto mt-4 text-2xl  h-8 ">
                    <div className="inline-block mr-2 ml-2  text-blue-600 ">
                      <GiWhirlwind size="1em" />
                    </div>
                    {data4 ? data4.wind_speed : ""}Km/h
                  </div>

                </div></div>
                <div className="text-center">   <div className="text-center flex-col bg-transparent   shadow-md mx-5 mt-2 rounded-2xl mb-2  h-52">

                  <div className=" inline-block  mx-auto text-3xl w-56 h-10 mt-2  overflow-hidden text-gray-100">
                    <div className="inline-block text-gray-400">
                      <MdDateRange />{" "}
                    </div>{" "}
                    <Moment unix>{data5 ? Math.round(data5.dt) : ""}</Moment>
                  </div>

                  <div className=" w-1/3 text-gray-500 text-2xl inline-block  h-8 ">
                    <div className="inline-block ml-2 mr-1 text-xl text-blue-400 ">
                      <BsFillDropletFill size="1.5em" />
                    </div>
                    {data5 ? Math.round(data5.humidity) : ""}%
                  </div>

                  <div className="w-1/2 text-gray-500 inline-block   text-2xl  h-8 ">
                    <div className=" mr-0 text-green-200 inline-block">
                      <FaFeather />{" "}
                    </div>{" "}
                    {data5 ? Math.round(data5.temp.min) : ""}°C/
                    {data5 ? Math.round(data5.temp.max) : ""}°C
                  </div>

                  <div className="w-full mt-2 text-gray-500  text-2xl inline-block   h-8">
                    <div className="inline-block ml-2 text-yellow-600 ">
                      <WiSunrise size="1.5em" />
                    </div>

                    {timeArray[8]} AM

                    <div className=" inline-block ml-2 text-yellow-600 ">
                      <WiSunset size="1.5em" />
                    </div>{" "}
                    {timeArray[9]} PM
                  </div>
                  <div className="w-full text-gray-500 inline-block mx-auto mt-4 text-2xl  h-8 ">
                    <div className="inline-block mr-2 ml-2  text-blue-600 ">
                      <GiWhirlwind size="1em" />
                    </div>
                    {data5 ? data5.wind_speed : ""}Km/h
                  </div>

                </div></div>
                <div className="text-center">   <div className="text-center flex-col bg-transparent   shadow-md mx-5 mt-2 rounded-2xl mb-2  h-52">

                  <div className=" inline-block  mx-auto text-3xl w-56 h-10 mt-2  overflow-hidden text-gray-100">
                    <div className="inline-block text-gray-400">
                      <MdDateRange />{" "}
                    </div>{" "}
                    <Moment unix>{data6 ? Math.round(data6.dt) : ""}</Moment>
                  </div>

                  <div className=" w-1/3 text-gray-500 text-2xl inline-block  h-8 ">
                    <div className="inline-block ml-2 mr-1 text-xl text-blue-400 ">
                      <BsFillDropletFill size="1.5em" />
                    </div>
                    {data6 ? Math.round(data6.humidity) : ""}%
                  </div>

                  <div className="w-1/2 text-gray-500 inline-block   text-2xl  h-8 ">
                    <div className=" mr-0 text-green-200 inline-block">
                      <FaFeather />{" "}
                    </div>{" "}
                    {data6 ? Math.round(data6.temp.min) : ""}°C/
                    {data6 ? Math.round(data6.temp.max) : ""}°C
                  </div>

                  <div className="w-full mt-2 text-gray-500  text-2xl inline-block   h-8">
                    <div className="inline-block ml-2 text-yellow-600 ">
                      <WiSunrise size="1.5em" />
                    </div>

                    {timeArray[10]} AM

                    <div className=" inline-block ml-2 text-yellow-600 ">
                      <WiSunset size="1.5em" />
                    </div>{" "}
                    {timeArray[11]} PM
                  </div>
                  <div className="w-full text-gray-500 inline-block mx-auto mt-4 text-2xl  h-8 ">
                    <div className="inline-block mr-2 ml-2  text-blue-600 ">
                      <GiWhirlwind size="1em" />
                    </div>
                    {data6 ? data6.wind_speed : ""}Km/h
                  </div>

                </div></div>
                <div className="text-center">   <div className="text-center flex-col bg-transparent   shadow-md mx-5 mt-2 rounded-2xl mb-2  h-52">

                  <div className=" inline-block  mx-auto text-3xl w-56 h-10 mt-2  overflow-hidden text-gray-100">
                    <div className="inline-block text-gray-400">
                      <MdDateRange />{" "}
                    </div>{" "}
                    <Moment unix>{data7 ? Math.round(data7.dt) : ""}</Moment>
                  </div>

                  <div className=" w-1/3 text-gray-500 text-2xl inline-block  h-8 ">
                    <div className="inline-block ml-2 mr-1 text-xl text-blue-400 ">
                      <BsFillDropletFill size="1.5em" />
                    </div>
                    {data7 ? Math.round(data7.humidity) : ""}%
                  </div>

                  <div className="w-1/2 text-gray-500 inline-block   text-2xl  h-8 ">
                    <div className=" mr-0 text-green-200 inline-block">
                      <FaFeather />{" "}
                    </div>{" "}
                    {data7 ? Math.round(data7.temp.min) : ""}°C/
                    {data7 ? Math.round(data7.temp.max) : ""}°C
                  </div>

                  <div className="w-full mt-2 text-gray-500  text-2xl inline-block   h-8">
                    <div className="inline-block ml-2 text-yellow-600 ">
                      <WiSunrise size="1.5em" />
                    </div>

                    {timeArray[12]} AM

                    <div className=" inline-block ml-2 text-yellow-600 ">
                      <WiSunset size="1.5em" />
                    </div>{" "}
                    {timeArray[13]} PM
                  </div>
                  <div className="w-full text-gray-500 inline-block mx-auto mt-4 text-2xl  h-8 ">
                    <div className="inline-block mr-2 ml-2  text-blue-600 ">
                      <GiWhirlwind size="1em" />
                    </div>
                    {data7 ? data7.wind_speed : ""}Km/h
                  </div>

                </div></div>
                <div className="text-center">   <div className="text-center flex-col bg-transparent   shadow-md mx-5 mt-2 rounded-2xl mb-2  h-52">

                  <div className=" inline-block  mx-auto text-3xl w-56 h-10 mt-2  overflow-hidden text-gray-100">
                    <div className="inline-block text-gray-400">
                      <MdDateRange />{" "}
                    </div>{" "}
                    <Moment unix>{data8 ? Math.round(data8.dt) : ""}</Moment>
                  </div>

                  <div className=" w-1/3 text-gray-500 text-2xl inline-block  h-8 ">
                    <div className="inline-block ml-2 mr-1 text-xl text-blue-400 ">
                      <BsFillDropletFill size="1.5em" />
                    </div>
                    {data8 ? Math.round(data8.humidity) : ""}%
                  </div>

                  <div className="w-1/2 text-gray-500 inline-block   text-2xl  h-8 ">
                    <div className=" mr-0 text-green-200 inline-block">
                      <FaFeather />{" "}
                    </div>{" "}
                    {data8 ? Math.round(data8.temp.min) : ""}°C/
                    {data8 ? Math.round(data8.temp.max) : ""}°C
                  </div>

                  <div className="w-full mt-2 text-gray-500  text-2xl inline-block   h-8">
                    <div className="inline-block ml-2 text-yellow-600 ">
                      <WiSunrise size="1.5em" />
                    </div>

                    {timeArray[14]} AM

                    <div className=" inline-block ml-2 text-yellow-600 ">
                      <WiSunset size="1.5em" />
                    </div>{" "}
                    {timeArray[15]} PM
                  </div>
                  <div className="w-full text-gray-500 inline-block mx-auto mt-4 text-2xl  h-8 ">
                    <div className="inline-block mr-2 ml-2  text-blue-600 ">
                      <GiWhirlwind size="1em" />
                    </div>
                    {data8 ? data8.wind_speed : ""}Km/h
                  </div>

                </div></div>
              </Carousel>
            </div>

           <div>

           </div>
            
            <div className=" md:hidden ml-5 mt-5 text-2xl text-gray-400 font-extrabold ">
                Frequently Searched
            </div>
            <div className="ml-5 md:hidden w-12 mt-1 h-1 bg-gray-500 rounded-lg">

            </div>

            <button className="text-gray-300 w-80  md:w-52  mt-4 transform  hover:scale-105 bg-transparent    bg-cover bg-no-repeat z-10    rounded-xl ml-5  mb-4   text-xl mr-2   ">
              <div className=" text-center bg-transparent mx-2 mb-2 font-extrabold mt-1   text-blue-50 text-2xl md:text-lg  block">
                New Delhi , India
              </div>

              <img src={Clouds} alt="" className="w-full rounded-xl h-72 md:h-52" />
            </button>
          </Link>

          <Link
            to="/next"
            onClick={() => {
              localStorage.setItem("city", "Kolkata");
            }}
          >
            <button className="text-gray-300  w-80 md:w-52  mt-2 transform  hover:scale-105 bg-transparent    bg-cover bg-no-repeat z-10    rounded-xl ml-5 md:ml-2   mb-4   text-xl mr-2  ">
              <div className="text-4xl mx-2  font-bold  text-green-900  block  text-left"></div>
              <div className=" text-center bg-transparent mx-2 mb-2 font-extrabold mt-1   text-blue-50 text-2xl md:text-lg  block">
                Kolkata , India
              </div>

              <img src={Kolkata} alt="" className="w-full rounded-xl h-72 md:h-52" />
            </button>
          </Link>

          <Link
            to="/next"
            onClick={() => {
              localStorage.setItem("city", "Mumbai");
            }}
          >
            <button className="text-gray-300  w-80 md:w-52  mt-2 transform  hover:scale-105 bg-transparent    bg-cover bg-no-repeat z-10    rounded-xl  ml-5 md:ml-2   mb-4   text-xl mr-2  ">
              <div className="text-4xl mx-2  font-bold  text-gray-900  block  text-left"></div>
              <div className=" text-center bg-transparent mx-2 mb-2 font-extrabold mt-1   text-blue-50 text-2xl  block">
                Mumbai , India
              </div>

              <img src={Mumbai} alt="" className="w-full rounded-xl h-72 md:h-52" />
            </button>
          </Link>

          <Link
            to="/next"
            onClick={() => {
              localStorage.setItem("city", "Chennai");
            }}
          >
            <button className="text-gray-300 w-80 md:w-52  mt-2 transform  hover:scale-105 bg-transparent    bg-cover bg-no-repeat z-10    rounded-xl ml-5 md:ml-2  mb-4    text-xl mr-2  ">
              <div className="text-4xl mx-2  font-bold  text-gray-900  block  text-left"></div>
              <div className=" text-center bg-transparent mx-2 mb-2 font-extrabold mt-1   text-blue-50 text-2xl md:text-lg  block">
                Chennai , India
              </div>

              <img src={Chennai} alt="" className="w-full rounded-xl h-72 md:h-52" />
            </button>
          </Link>



          <div className=" invisible md:visible bg-transparent   px-2 inline-block mb-2  font-extrabold text-2xl text-gray-400 mx-3 ">
                Weekly
                <div className=" ml-2 text-2xl inline-block text-gray-900 ">
                  Weather Forcast
                </div>
              </div>




          <div className=" invisible md:visible h-72 ml-3 flex-col mr-4  rounded-md">
            <div className="w-full h-8 mt-2 flex mb-2">
              <div className="w-1/5   h-8 ">
                <div className="block ml-4 text-base  w-32 h-6 overflow-hidden">
                  <div className="inline-block text-gray-600">
                    <MdDateRange />{" "}
                  </div>{" "}
                  <Moment unix>{data2 ? Math.round(data2.dt) : ""}</Moment>
                </div>
              </div>

              <div className=" w-1/12 text-base  h-8 ">
                <div className="inline-block ml-2 mr-2 text-base text-blue-400 ">
                  <BsFillDropletFill size="1em" />
                </div>
                {data2 ? Math.round(data2.humidity) : ""}%
              </div>
              <div className="w-1/5 ml-10  text-base  h-8 ">
                <div className=" mr-2 text-green-200 inline-block">
                  <FaFeather />{" "}
                </div>{" "}
                {data2 ? Math.round(data2.temp.min) : ""}°C/
                {data2 ? Math.round(data2.temp.max) : ""}°C
              </div>
              <div className="w-1/3  text-base   h-8">
                <div className="inline-block ml-2 text-yellow-600 ">
                  <WiSunrise size="1.5em" />
                </div>
                {timeArray[2]} AM
                <div className="inline-block ml-2 text-yellow-600 ">
                  <WiSunset size="1.5em" />
                </div>{" "}
                {timeArray[3]} PM
              </div>
              <div className="w-1/5 text-base  h-8 ">
                <div className="inline-block mr-2 ml-2  text-blue-600 ">
                  <GiWhirlwind size="1em" />
                </div>
                {data2 ? data2.wind_speed : ""}Km/h
              </div>
            </div>

            <div className="w-full bg-green-400 h-8 flex mb-2 ">
              <div className="w-1/5    h-8 ">
                <div className="block ml-4 text-base  w-32 h-6 overflow-hidden">
                  <div className="inline-block text-gray-600">
                    <MdDateRange />{" "}
                  </div>{" "}
                  <Moment unix>{data3 ? Math.round(data3.dt) : ""}</Moment>
                </div>
              </div>

              <div className=" w-1/12 text-base  h-8 ">
                <div className="inline-block ml-2 mr-2 text-base text-blue-400 ">
                  <BsFillDropletFill size="1em" />
                </div>
                {data3 ? Math.round(data3.humidity) : ""}%
              </div>
              <div className="w-1/5 ml-10  text-base  h-8 ">
                <div className="mr-2 text-green-200 inline-block">
                  <FaFeather />{" "}
                </div>{" "}
                {data3 ? Math.round(data3.temp.min) : ""}°C/
                {data3 ? Math.round(data3.temp.max) : ""}°C
              </div>
              <div className="w-1/3  text-base   h-8">
                <div className="inline-block ml-2 text-yellow-600 ">
                  <WiSunrise size="1.5em" />
                </div>{" "}
                {timeArray[4]} AM
                <div className="inline-block ml-2 text-yellow-600 ">
                  <WiSunset size="1.5em" />
                </div>{" "}
                {timeArray[5]} PM
              </div>
              <div className="w-1/5 text-base  h-8 ">
                <div className="inline-block mr-2 ml-2  text-blue-600 ">
                  <GiWhirlwind size="1em" />
                </div>
                {data3 ? data3.wind_speed : ""} Km/h
              </div>
            </div>

            <div className="w-full h-8 flex mb-2 ">
              <div className="w-1/5   h-8 ">
                <div className="block ml-4 text-base  w-32 h-6 overflow-hidden">
                  <div className="inline-block text-gray-600">
                    <MdDateRange />{" "}
                  </div>{" "}
                  <Moment unix>{data4 ? Math.round(data4.dt) : ""}</Moment>
                </div>
              </div>

              <div className=" w-1/12 text-base  h-8 ">
                <div className="inline-block ml-2 mr-2 text-base text-blue-400 ">
                  <BsFillDropletFill size="1em" />
                </div>
                {data4 ? Math.round(data4.humidity) : ""}%
              </div>
              <div className="w-1/5 ml-10  text-base  h-8 ">
                <div className="mr-2 text-green-200 inline-block">
                  <FaFeather />{" "}
                </div>{" "}
                {data4 ? Math.round(data4.temp.min) : ""}°C/
                {data4 ? Math.round(data4.temp.max) : ""}°C
              </div>
              <div className="w-1/3  text-base   h-8">
                <div className="inline-block ml-2 text-yellow-600 ">
                  <WiSunrise size="1.5em" />
                </div>{" "}
                {timeArray[6]} AM
                <div className="inline-block ml-2 text-yellow-600 ">
                  <WiSunset size="1.5em" />
                </div>{" "}
                {timeArray[7]} PM
              </div>
              <div className="w-1/5 text-base  h-8 ">
                <div className="inline-block mr-2 ml-2  text-blue-600 ">
                  <GiWhirlwind size="1em" />
                </div>
                {data4 ? data4.wind_speed : ""} Km/h
              </div>
            </div>
            <div className="w-full bg-green-400 h-8 flex mb-2 ">
              <div className="w-1/5   h-8 ">
                <div className="block ml-4 text-base  w-32 h-6 overflow-hidden">
                  <div className="inline-block text-gray-600">
                    <MdDateRange />{" "}
                  </div>{" "}
                  <Moment unix>{data5 ? Math.round(data5.dt) : ""}</Moment>
                </div>
              </div>

              <div className=" w-1/12 text-base  h-8 ">
                <div className="inline-block ml-2 mr-2 text-base text-blue-400 ">
                  <BsFillDropletFill size="1em" />
                </div>
                {data5 ? Math.round(data5.humidity) : ""}%
              </div>
              <div className="w-1/5 ml-10  text-base  h-8 ">
                <div className="mr-2 text-green-200 inline-block">
                  <FaFeather />{" "}
                </div>{" "}
                {data5 ? Math.round(data5.temp.min) : ""}°C/
                {data5 ? Math.round(data5.temp.max) : ""}°C
              </div>
              <div className="w-1/3  text-base   h-8">
                <div className="inline-block ml-2 text-yellow-600 ">
                  <WiSunrise size="1.5em" />
                </div>{" "}
                {timeArray[8]} AM
                <div className="inline-block ml-2 text-yellow-600 ">
                  <WiSunset size="1.5em" />
                </div>{" "}
                {timeArray[9]} PM
              </div>
              <div className="w-1/5 text-base  h-8 ">
                <div className="inline-block mr-2 ml-2  text-blue-600 ">
                  <GiWhirlwind size="1em" />
                </div>
                {data5 ? data5.wind_speed : ""} Km/h
              </div>
            </div>
            <div className="w-full h-8 flex mb-2 ">
              <div className="w-1/5   h-8 ">
                <div className="block ml-4 text-base  w-32 h-6 overflow-hidden">
                  <div className="inline-block text-gray-600">
                    <MdDateRange />{" "}
                  </div>{" "}
                  <Moment unix>{data6 ? Math.round(data6.dt) : ""}</Moment>
                </div>
              </div>

              <div className=" w-1/12 text-base  h-8 ">
                <div className="inline-block ml-2 mr-2 text-base text-blue-400 ">
                  <BsFillDropletFill size="1em" />
                </div>
                {data6 ? Math.round(data6.humidity) : ""}%
              </div>
              <div className="w-1/5 ml-10  text-base  h-8 ">
                <div className="mr-2 text-green-200 inline-block">
                  <FaFeather />{" "}
                </div>{" "}
                {data6 ? Math.round(data6.temp.min) : ""}°C/
                {data6 ? Math.round(data6.temp.max) : ""}°C
              </div>
              <div className="w-1/3  text-base   h-8">
                <div className="inline-block ml-2 text-yellow-600 ">
                  <WiSunrise size="1.5em" />
                </div>{" "}
                {timeArray[10]} AM
                <div className="inline-block ml-2 text-yellow-600 ">
                  <WiSunset size="1.5em" />
                </div>{" "}
                {timeArray[11]} PM
              </div>
              <div className="w-1/5 text-base  h-8 ">
                <div className="inline-block mr-2 ml-2  text-blue-600 ">
                  <GiWhirlwind size="1em" />
                </div>
                {data6 ? data6.wind_speed : ""} Km/h
              </div>
            </div>
            <div className="w-full bg-green-400 h-8 flex mb-2 ">
              <div className="w-1/5   h-8 ">
                <div className="block ml-4 text-base  w-32 h-6 overflow-hidden">
                  <div className="inline-block text-gray-600">
                    <MdDateRange />{" "}
                  </div>{" "}
                  <Moment unix>{data7 ? Math.round(data7.dt) : ""}</Moment>
                </div>
              </div>

              <div className=" w-1/12 text-base  h-8 ">
                <div className="inline-block ml-2 mr-2 text-base text-blue-400 ">
                  <BsFillDropletFill size="1em" />
                </div>
                {data7 ? Math.round(data7.humidity) : ""}%
              </div>
              <div className="w-1/5 ml-10  text-base  h-8 ">
                <div className="mr-2 text-green-200 inline-block">
                  <FaFeather />{" "}
                </div>{" "}
                {data7 ? Math.round(data7.temp.min) : ""}°C/
                {data7 ? Math.round(data7.temp.max) : ""}°C
              </div>
              <div className="w-1/3  text-base   h-8">
                <div className="inline-block ml-2 text-yellow-600 ">
                  <WiSunrise size="1.5em" />
                </div>{" "}
                {timeArray[12]} AM
                <div className="inline-block ml-2 text-yellow-600 ">
                  <WiSunset size="1.5em" />
                </div>{" "}
                {timeArray[13]} PM
              </div>
              <div className="w-1/5 text-base  h-8 ">
                <div className="inline-block mr-2 ml-2  text-blue-600 ">
                  <GiWhirlwind size="1em" />
                </div>
                {data7 ? data7.wind_speed : ""} Km/h
              </div>
            </div>
            <div className="w-full h-8 flex mb-2 ">
              <div className="w-1/5   h-8 ">
                <div className="block ml-4 text-base  w-32 h-6 overflow-hidden">
                  <div className="inline-block text-gray-600">
                    <MdDateRange />{" "}
                  </div>{" "}
                  <Moment unix>{data8 ? Math.round(data8.dt) : ""}</Moment>
                </div>
              </div>

              <div className=" w-1/12 text-base  h-8 ">
                <div className="inline-block ml-2 mr-2 text-base text-blue-400 ">
                  <BsFillDropletFill size="1em" />
                </div>
                {data8 ? Math.round(data8.humidity) : ""}%
              </div>
              <div className="w-1/5 ml-10  text-base  h-8 ">
                <div className="mr-2 text-green-200 inline-block">
                  <FaFeather />{" "}
                </div>{" "}
                {data8 ? Math.round(data8.temp.min) : ""}°C/
                {data8 ? Math.round(data8.temp.max) : ""}°C
              </div>
              <div className="w-1/3  text-base   h-8">
                <div className="inline-block ml-2 text-yellow-600 ">
                  <WiSunrise size="1.5em" />
                </div>{" "}
                {timeArray[14]} AM
                <div className="inline-block ml-2 text-yellow-600 ">
                  <WiSunset size="1.5em" />
                </div>{" "}
                {timeArray[15]} PM
              </div>
              <div className="w-1/5 text-base  h-8 ">
                <div className="inline-block mr-2 ml-2  text-blue-600 ">
                  <GiWhirlwind size="1em" />
                </div>
                {data8 ? data8.wind_speed : ""} Km/h
              </div>
            </div>
          </div>

          {/* <div className="block  w-24 h-6 overflow-hidden">
                          <Moment unix>{data2?(Math.round(data2.dt)):""}</Moment>
                        </div>
                        <div className="block  w-24 h-6 overflow-hidden">
                          <Moment unix>{unixTimestamp}</Moment>
                        </div>
                        <div className="block  w-24 h-6 overflow-hidden">
                          <Moment unix>{unixTimestamp}</Moment>
                        </div>
                        <div className="block  w-24 h-6 overflow-hidden">
                          <Moment unix>{unixTimestamp}</Moment>
                        </div>
                        <div className="block  w-24 h-6 overflow-hidden">
                          <Moment unix>{unixTimestamp}</Moment>
                        </div>
                        <div className="block  w-24 h-6 overflow-hidden">
                          <Moment unix>{unixTimestamp}</Moment>
                        </div>
                        <div className="block  w-24 h-6 overflow-hidden">
                          <Moment unix>{unixTimestamp}</Moment>
                        </div> */}

          <table>
            <th></th>
          </table>
        </div>
      </div>
    </div>
  );
}
