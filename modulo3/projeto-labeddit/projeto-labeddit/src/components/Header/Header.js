import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import { StyledToolBar } from './styled';
import Button from '@material-ui/core/Button';
import { goToLogin } from '../../Routes/coordinator';
import { useNavigate } from "react-router-dom"
import { goToFeed } from '../../Routes/coordinator';


const Header = ({rightButtonText, setRightButtonText}) => {
    
  const token = localStorage.getItem("token")
  const navigate = useNavigate()
    
  const logout = () => {
    localStorage.removeItem("token")
  }

  const rightButtonAction = () => {
    if (token){
      logout()
      setRightButtonText("Login")
      goToLogin(navigate)
    } else {
      goToLogin(navigate)
    }
  }

  return (
      <AppBar position="static">
        <StyledToolBar>
          <Button onClick={()=>goToFeed(navigate)} color="inherit">LabEddit</Button>
          <Button onClick={rightButtonAction} color="inherit">{rightButtonText}</Button>
        </StyledToolBar>
      </AppBar>
  );
}
export default Header;