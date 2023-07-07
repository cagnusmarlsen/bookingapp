import { Featured } from "../../components/featured/Featured"
import { Header } from "../../components/header/Header"
import { Homeslove } from "../../components/homeslove/Homeslove"
import { MailList } from "../../components/mailList/MailList"
import {Navbar} from "../../components/navbar/Navbar"
import { Propertylist } from "../../components/propertylist/Propertylist"
import "./home.css"
export const Home = () => {
  return (
    <div>
        <Navbar></Navbar>
        <Header></Header>

        <div className="homeContainer">
          <h1 className="homeTitle1">Trending Destinations</h1>
          <Featured/>
          <h1 className="homeTitle">Browse by property type</h1>  
          <Propertylist/>
          <h1 className="homeTitle">Homes guests love</h1>
          <Homeslove/>
          <MailList/>
        </div>
    </div>
  )
}


