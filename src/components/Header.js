function Header(){
    const headerStyle = {
        backgroundColor:"",
        backgroundImage:'url("")',
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundRepeat: 'repeat-x',
        height: '150px',
        width: "auto"
    };

    return(
        <div  style={headerStyle}>
        <div className=" row text-center text-light p-3 mt-3">
            
            <div className="col-4" style={{color:'#272343'}}><i className="fa fa-regular fa-envelope fa-beat fa-sm"></i>
            <p style={{fontFamily: 'cursive'}}>mail@admin.com</p></div>
            <div className="col-4"style={{color:'#272343'}}><i className="fa fa-thin fa-phone-volume fa-fade"></i>
            <p style={{fontFamily: 'cursive'}}>9943339565</p></div>
            <div className="col-4" style={{color:'#272343'}} ><i className="fa-solid fa-location fa-bounce" ></i>
            <p style={{fontFamily: 'cursive'}}>VIT Vellore ,Tamil Nadu</p></div>
        </div>
        </div>
    );
}
export default Header;