import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components"; 
import avatarPlaceholder from "../assets/avatar_placeholder.png";
import { Link, useLocation } from "react-router-dom";
import wrench from "../assets/wrench.png"
import homeWhite from "../assets/homeWhite.png"

const SideMenu = (props) => {
    const location = useLocation();
    const { user, signOut } = props;

    const handleSignOutClick = () => {
        signOut();
    }

    return (
        <React.Fragment>
            <div className="sideInfo">
                <img src={user.photoURL || avatarPlaceholder} alt="avatar" />
                <h6> {user.email}  <span style={{textDecoration: "underline", cursor:"pointer"}} onClick={handleSignOutClick}> (logout) </span></h6>                
            </div>
            <div className="sideUL">
                <ul>
                    <li>
                        <img src={homeWhite} alt="home" />
                        <Link to="/"> Home </Link>
                    </li>
                    <li>
                        <img src={wrench} alt="addTask" />
                        <Link to="/add"> Add a Task </Link>
                    </li>
                </ul>
            </div>
        </React.Fragment>
    )
}

SideMenu.propTypes = {
    user: PropTypes.object.isRequired,
    signOut: PropTypes.func.isRequired
  
};

export default SideMenu;