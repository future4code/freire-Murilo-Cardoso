import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AdminHomePage } from "../pages/AdminHomePage"
import { ApplicationFormPage } from "../pages/ApplicationFormPage"
import { ListTripsPage } from "../pages/ListTripsPage"
import { CreateTripPage } from "../pages/CreateTripPage"
import { LoginPage } from "../pages/LoginPage"
import { TripDetailsPage } from "../pages/TripDetailsPage"
import { HomePage } from "../pages/HomePage"


export const Router = () => {
        return(
            <BrowserRouter>
            <Routes>
              <Route index element ={<HomePage/>}/>    
              <Route path="Application" element ={<ApplicationFormPage/>}/>    
              <Route path="AdminHome" element ={<AdminHomePage/>}/>
              <Route path="ListTrips" element ={<ListTripsPage/>}/>
              <Route path="Create" element ={<CreateTripPage/>}/>
              <Route path="Login" element ={<LoginPage/>}/>
              <Route path="TripDetail" element ={<TripDetailsPage/>}/>
            </Routes>
          </BrowserRouter>
        )
    }