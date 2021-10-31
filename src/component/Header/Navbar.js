import classes from "./Navbar.module.css";
import recycle from "../../assets/recycle.png";
const Navbar = (props) => {
    return <nav className="navbar navbar-light" style={{backgroundColor: "#B53471"}}>
    <div className={classes.container}>
    <div className={classes.child}>
    <h3 className={classes.brand}>Recycler</h3>
    <p className={classes.description}>Let's Recycle and Reuse!</p>
    </div>
    <div className={classes.child}><img className={classes.recycleImg} src={recycle} alt="recycle"/></div>
    </div>
    <div className={classes.container}>
    <button className={classes.button} className="btn  btn-lg  btn-light" style={{fontSize:"30px"}} onClick={props.openIdeaForm}>Add your Idea &nbsp;<i className="bi bi-plus-square-dotted"></i>
    </button>
</div>
  </nav>
}

export default Navbar;