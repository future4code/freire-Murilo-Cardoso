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
              <Route index="/" element ={<HomePage/>}/>    
              <Route path="trips/application" element ={<ApplicationFormPage/>}/>    
              <Route path="AdminHome" element ={<AdminHomePage/>}/>
              <Route path="trips/list" element ={<ListTripsPage/>}/>
              <Route path="admin/trips/create" element ={<CreateTripPage/>}/>
              <Route path="Login" element ={<LoginPage/>}/>
              <Route path="admin/trips/:id  " element ={<TripDetailsPage/>}/>
            </Routes>
          </BrowserRouter>
        )
    }