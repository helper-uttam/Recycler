import classes from "./Header.module.css";
import tree from "../../assets/tree.png";
import { useState } from "react";
import Donation from "../Donation/DonateForm";
const Header = () => {
const[donate, setDonate] = useState(false);

const openDonationHandler = () => {
    setDonate(true);
}
const closeDonationHandler = (e) => {
    e.preventDefault();
    setDonate(false);
}
    return <div className="header">
            <div className={classes.first_section}>
                <div className={classes.logo}>
                    <img  src={tree} alt="donation"/>
                </div>
                <div className={classes.text} onClick={openDonationHandler}>
                <h3>Donate tree's </h3>
                <br></br>
                <p>By Clicking here.</p>
                </div>
            </div>
            {donate?<Donation onCLose={closeDonationHandler}/>:""}
    </div>;
}


export default Header;