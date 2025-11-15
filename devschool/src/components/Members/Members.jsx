const Members = ({members, handleBtnEdit, deleteUser}) => {
    return (
        <>
            {
              members.map((user) => 
                <div className="col-md-6" key={user.id}>
                    <div className="card" style={{ margin: 10}}>
                        <div className="card-body">
                            <h5 className="card-title">ID Member: {user.id}</h5>
                            <h5 className="card-title">{user.firstName}</h5>
                            <h5 className="card-title">{user.lastName}</h5>
                            <button className="btn btn-primary" onClick={()=> handleBtnEdit({'getUserId': user.id, 'getUserFirstName': user.firstName, 'getUserLastName': user.lastName})}>Edit</button>
                            <button className="btn btn-danger" onClick={() => deleteUser({'getUserId': user.id})}>Delete</button>
                        </div>
                    </div>
                </div>
              )   
            }
        </>
    )
}

export default Members;