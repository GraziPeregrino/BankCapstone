function Balance(){
    const [show,setShow]          = React.useState(true);
    const [status, setStatus]     = React.useState('');
    const [balance,setBalance]          = React.useState('');
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
        console.log(balance);
        if(!validate(balance,  'balance')) return;
        ctx.users.push({balance:100});
        setShow(false);
    }
    function clearForm(){
        setbalance('');
        setShow(true);
    }

    return (
        <Card
            bgcolor="primary"
            header="Balance"
            status={status}
            body={show ? (
                <>
                Balance<br/>
                <input type="input" className="form-control" id="name" 
                placeholder="Enter Balance" value={balance} onChange={e => setBalance(e.currentTarget.value)} /><br/>
                
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