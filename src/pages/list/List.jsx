import { useLocation } from "react-router-dom"
import { Header } from "../../components/header/Header"
import { Navbar } from "../../components/navbar/Navbar"
import "./list.css"
import { useState } from "react"
import { format } from "date-fns"
import { DateRange } from "react-date-range"
import { SearchItem } from "../../components/searchItem/SearchItem"

export const List = () => {

  const location = useLocation();
  
  const [destination, setDestination] = useState(location.state.destination);
  const [date, setDate] = useState(location.state.date);
  const [openDate, setOpenDate] = useState(false);
  const [noofpeople, setNoofpeople] = useState(location.state.noofpeople);

  return (
    <div>
      <Navbar/>
      <Header type = "list"/>
      <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch">
            <h1 className="lsTitle">Search</h1>
            <div className="lsItems">
              <label >Desciption</label>
              <input type="text" placeholder={destination}/>
            </div>

            <div className="lsItems">
              <label >Check-In Date</label>
              <span onClick={() => setOpenDate(!openDate)}>
                {`${format(date[0].startDate, "dd/MM/yyyy")} to ${format(date[0].endDate, "dd/MM/yyyy")}`}
              </span>
              {openDate &&<DateRange 
              onChange={item => setDate([item.selection])}
              ranges={date}
              minDate ={new Date()}
              />}
            </div>

            <div className="lsItems">
              <label>Options</label>

              <div className="optionContainer">
                <div className="optionItem">
                  <span>Min price</span>
                  <input type="text"  />
                </div>

                <div className="optionItem">
                  <span>Max price</span>
                  <input type="text"  />
                </div>

                <div className="optionItem">
                  <span>Adults</span>
                  <input type="text" placeholder={noofpeople.adults} />
                </div>

                <div className="optionItem">
                  <span>Children</span>
                  <input type="text" placeholder={noofpeople.children}/>
                </div>

                <div className="optionItem">
                  <span>Rooms</span>
                  <input type="text" placeholder={noofpeople.rooms} />
                </div>
            </div>
          </div>
            <div className="searchButton">
              <button className="but">Search</button>
            </div>
          </div>
          <div className="listResult">
            <SearchItem/>
            <SearchItem/>
            <SearchItem/>
            <SearchItem/>
            <SearchItem/>
            <SearchItem/>
            <SearchItem/>
            <SearchItem/>
          </div>
        </div>
      </div>
    </div>
  )
}
