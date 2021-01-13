import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components"; 
import avatarPlaceholder from "../assets/avatar_placeholder.png";
import { Link, useLocation } from "react-router-dom";

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
                        <Link to="/"> Home </Link>
                    </li>
                    <li>
                        <Link to="/tasks"> Your Tasks </Link>
                    </li>
                    <li>
                        <Link to="/categories"> Categories </Link>
                    </li>
                    <li>
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