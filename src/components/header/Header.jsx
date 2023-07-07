import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBed, faPlane, faCar, faLandmark} from '@fortawesome/free-solid-svg-icons'
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRange } from 'react-date-range';
import "./header.css"
import { useState } from "react";
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";


export const Header = (props) => {
    
    const [destination, setDestination] = useState("");
    const [openDate, setOpenDate] = useState(false);
    const [openCounter, setOpenCounter] = useState(false);

    const [noofpeople, setNoofpeople] = useState({
        adults: 1,
        children: 0,
        rooms: 1
    })
    const navigate = useNavigate();

    function handleSearch () {
        navigate("/hotels", {state:{destination, date, noofpeople}})
    }

    function handleClick (name, id) {
        setNoofpeople(prev => ({
            ...prev,
            [name]: id === "i" ? prev[name] + 1 : prev[name] - 1
        }))
    }
    const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection'
    }
  ]);

  return (
    <div className="header">
        <div className="headerContainer">
        <div className="headerlist">
            <div className="listitem">
                <FontAwesomeIcon icon={faBed}  className="icon"/>
                <span className="first">Stays</span>
            </div>

            <div className="listitem">
                <FontAwesomeIcon icon={faPlane} className="icon" />
                <span>Flights</span>
            </div>

            <div className="listitem">
                <FontAwesomeIcon icon={faCar}  className="icon"/>
                <span>Car Rental</span> 
            </div>

            <div className="listitem">
                <FontAwesomeIcon icon={faLandmark}  className="icon"/>
                <span>Attractions</span>
            </div>

            <div className="listitem">
                <FontAwesomeIcon icon={faCar}  className="icon"/>
                <span>Taxis</span>
            </div>
        </div>

        { props.type !== "list" && <>
            <div className="headertitle">
            <h1>Find your next stay</h1>
            <p className="description">Search low prices on hotels, homes and much more...</p>
        </div>
    
        <div className="searchcontainer">
        <div className="searchbar">
            <div className="searchitem">
                <input 
                className = "inputs"
                type="text" 
                placeholder="Where are you going?"
                onChange={(e) => setDestination(e.target.value)} 
                />
            </div>

            <div className="searchitem datebar">
                <span onClick={() => setOpenDate(!openDate)}>{`${format(date[0].startDate, "dd/MM/yyyy")} to ${format(date[0].endDate, "dd/MM/yyyy")}`}</span>
                {openDate && <DateRange 
                editableDateInputs={true}
                onChange={item => setDate([item.selection])}
                moveRangeOnFirstSelection={false}
                ranges={date}
                className="date"
            />}
            </div>

            <div className="searchitem">
                <span onClick={() => setOpenCounter(!openCounter)}>{`${noofpeople.adults} adults · ${noofpeople.children} children · ${noofpeople.rooms} rooms`}</span>
                { openCounter && <div className="counteritems">
                    <div className="counter">
                    <span className="person">Adult</span>
                        <div className="counterchild">
                            <button  disabled = {noofpeople.adults <=1}onClick={()=> handleClick("adults","d")}>-</button>
                            <span>{noofpeople.adults}</span>
                            <button onClick={()=> handleClick("adults","i")}>+</button>
                        </div> 
                    </div>
                    <div className="counter">
                    <span className="person">Children</span>
                        <div className="counterchild">
                            <button disabled = {noofpeople.children <= 0}onClick={()=> handleClick("children","d")}>-</button>
                            <span>{noofpeople.children}</span>
                            <button onClick={()=> handleClick("children","i")}>+</button>
                        </div> 
                    </div>
                    <div className="counter">
                    <span className="person">Rooms</span>
                        <div className="counterchild">
                            <button disabled = {noofpeople.rooms <= 1}onClick={()=> handleClick("rooms","d")}>-</button>
                            <span>{noofpeople.rooms}</span>
                            <button onClick={()=> handleClick("rooms","i")}>+</button>
                        </div> 
                    </div>
                </div>}  
            </div>
            
            <div className="searchitem">
                <button className="searchbutton" onClick={handleSearch}>Search</button>
            </div>  
        </div>
        </div>
        </>}
        </div>
        
      
    </div>
  )
}
