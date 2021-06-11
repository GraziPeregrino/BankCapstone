function Login(){
    const [show,setShow]          = React.useState(true);
    const [status, setStatus]     = React.useState('');
    const [email, setEmail]       = React.useState('');
    const [password, setPassword] = React.useState('');
    const ctx = React.useContext(UserContext);

    function validate(field, label){
        if(!field){
            setStatus('Error: ' + label);
            setTimeout(() =>setStatus(''),3000);
            return false;
        }
        return true;
    }

    function handleCreate(){
        console.log(email,password);
        if(!validate(email,     'email'))    return;
        if(!validate(password,  'password')) return;
        ctx.users.push({email,password,balance:100});
        setShow(false);
    }
    function clearForm(){
        setEmail('');
        setPassword('');
        setShow(true);
    }

    return (
        <Card
            bgcolor="primary"
            header="Login"
            status={status}
            body={show ? (
                <>
                Email Address<br/>
                <input type="input" className="form-control" id="email"
                placeholder="Enter email" value={email} onChange={e => setEmail(e.currentTarget.value)}/><br/>
                Password<br/>
                <input type="password" className="form-control" id="password"
                placeholder="Enter Password" value={password} onChange={e => setPassword(e.currentTarget.value)}/><br/>
                <button type="submit" className="btn btn-light" onClick={handleCreate}>Login</button>
                </>
            ):(
                <>
                <h5>Sucess</h5>
                <button type="submit" className="btn btn-light" onClick={clearForm}>Add another account</button>
                </>
            )}
        />
  )
}