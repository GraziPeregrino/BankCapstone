function Spa(){
    return(

       <HashRouter>
         
            
            <NavBar/>
            <UserContext.Provider value={{users:[{name:'grazi', email:'grazi@mit.edu', password:'secret',balance:100}]}}>
                <Route path="/" exact component={Home} />
                <Route path="/createaccount/" component={CreateAccount} />
                <Route path="/login/" component={Login}/>
                <Route path="/deposit/" component={Deposit}/>
                <Route path="/withdraw/" component={Withdraw}/>
                <Route path="/balance/" component={Balance}/>
                <Route path="/alldata/" component={AllData}/>
            </UserContext.Provider>
        </HashRouter>
    );
}
ReactDOM.render(
    <Spa/>,
    document.getElementById('root')
)