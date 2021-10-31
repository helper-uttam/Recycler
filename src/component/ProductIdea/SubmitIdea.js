import { useState } from "react";
import Modal from "../Modal/Modal";
import classes from "./SubmitIdea.module.css";

const SubmitIdea = (props) => {
    const [materialName, setMaterialName] = useState();
    const [materialDiscription, setMaterialDiscription] = useState();

    const submitHandler = async (userData) => {
            await fetch('https://creativist-4300f-default-rtdb.firebaseio.com/ideas.json',{
                method: 'POST',
                body: JSON.stringify({
                    material: materialName,
                    description: materialDiscription
                })
            });
        };
        const materialNameHandler = (e) => {
            setMaterialName(e.target.value);
        }
        const materialDiscriptionHandler = (e) => {
            setMaterialDiscription(e.target.value);
        }
    
        return <Modal onClose={props.onClose}>
        <label htmlFor="ProductName" className={classes.text}><h3>What is the name of your produt that you want to recycle?</h3></label>
        <input className={classes.input} placeholder="eg- plastic bags" onChange={materialNameHandler}/>
        <label htmlFor="Description" className={classes.text}><h3>Provide a small Description about your idea.</h3></label>
        <textarea className={classes.input} placeholder="eg- We can reuse the product by ..." onChange={materialDiscriptionHandler}/>
        <br/>
        <button type="button" class="btn btn-success" style={{textAlign:"center"}} onClick={submitHandler}>Post Idea</button>
        <button type="button" class="btn btn-danger" style={{textAlign:"center"}} onClick={props.onClose}>Cancel</button>
        </Modal>
    }

    



export default SubmitIdea;