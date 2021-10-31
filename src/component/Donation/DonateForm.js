import "./DonateForm.module.css";
const DonateForm = (props) => {


  const submitHandler = (event) => {
    event.preventDefault();
    /* Write Logic for payment */
  }
 

    return (<form>
    <div className="form-group">
      <label htmlFor="exampleInputEmail1">Email address</label>
      <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
      <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
    </div>
    <div className="form-group">
      <label htmlFor="exampleInputPassword1">Amount</label>
      <input type="text" className="form-control" id="exampleInputPassword1" placeholder="Amount to donate" />
    </div>
    <div className="form-group">
    <label htmlFor="exampleFormControlSelect2">Your Country</label>
    <select multiple className="form-control" id="exampleFormControlSelect2">
      <option>India</option>
      <option>USA</option>
      <option>Japan</option>
      <option>Russia</option>
      <option>Other's</option>
    </select>
  </div>
    <div className="form-group form-check">
      <input type="checkbox" className="form-check-input" id="exampleCheck1" />
      <label className="form-check-label" htmlFor="exampleCheck1">I agree with the tems and condition.</label>
      <small className="form-text text-muted">We can't return your money after you had donated, And we appreciate even a small donation.</small>
    </div>
    <button type="reset" className="btn btn-outline-dark">Reset</button> &nbsp; &nbsp;
    <button className="btn btn-outline-danger" onClick={props.onClose} >Cancel</button> &nbsp; &nbsp;
    <button type="submit" className="btn btn-outline-success" onClick={submitHandler}>Plant Tree's</button>
  </form>);
}


export default DonateForm;