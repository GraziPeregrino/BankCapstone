function Home(){
     return (
        <Card
            bgcolor="primary"
            textcolor= "white"
            header= "BadBank Landing Page"
            title= "Welcome to the Bank"
            text= "You can use this Bank"
            body={(<img src="bank.png" className="img-fluid" alt="responsive image"/>)}
        />
    );
}