const Form = ({title, firstName, lastName, onChangeFirstName, onChangeLastName, onSubmit}) => {
    return (
        <div className="col-6" style={{ border: '1px solid black'}}>
            <h2>{title}</h2>
            <form>
                <div className="form-group">
                    <label>First Name</label>
                    <input 
                        type="text" 
                        className="form-control"
                        onChange={onChangeFirstName}
                        value={firstName}
                    />
                </div>
                <div className="form-group">
                    <label>Last Name</label>
                    <input 
                        type="text" 
                        className="form-control"
                        onChange={onChangeLastName}
                        value={lastName}
                    />
                </div>
                <button type="button" className="btn btn-primary" onClick={onSubmit}>Submit</button>
          </form>
        </div> 
    )
}

export default Form;