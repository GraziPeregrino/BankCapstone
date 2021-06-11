function Withdraw(){
    const ctx = React.useContext(UserContext);
    return (
        <h1>Withdraw<br/>
        {JSON.stringify(ctx)}
        </h1>
    )
}