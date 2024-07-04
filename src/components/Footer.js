
function Footer() {
    return (
        <div class="" style={{ backgroundColor: '#272343',borderRadius:"10px" }}>
           <div class="text-center text-white pt-2"> <p>&copy; 2024 Health Education Program. All rights reserved.</p></div>
            <div className="container">
                <div className="row">
                    <div className="col-4" style={{ backgroundColor: '#272343', fontFamily: 'cursive' }}><div style={{ marginLeft: 'auto', marginRight: 'auto', marginTop: '10px' }}><p style={{ color: 'white', textAlign: 'center' }}><i className="fa fa-thin fa-copyright fa-fade fa-duotune fa-md"></i><br />
                        <b>wellnesswise<i class="fa fa-solid fa-person-walking" size="2xl" style={{ color: 'white' }}></i></b></p></div> </div>

                    <div className="col-4" style={{ backgroundColor: ' #272343', fontFamily: 'cursive' }} ><div style={{ marginLeft: 'auto', marginRight: 'auto', marginTop: '10px' }}><p style={{ color: 'white' }}><i class="fa fa-ranking-star fa-duotune fa-fade fa-2xl"></i>
                        <b className="m-3"><a className="ai" href="/" style={{ color: 'white' }}>Privacy policy</a></b><br />
                        <b className="m-5"><a className="ai" href="/" style={{ color: 'white' }}>Support policy</a></b><br />
                        <b className="m-5"><a className="ai" href="/" style={{ color: 'white' }}>Feedback</a></b><br />
                        <b className="m-5"><a className="ai" href="/" style={{ color: 'white' }}>terms & condition</a></b></p></div></div>

                    <div class="col-4" style={{ backgroundColor: '#272343', fontFamily: 'cursive' }}>
                        <div style={{ marginLeft: '100px', marginRight: '100px' }}><p style={{ color: 'white' }}><b style={{ textAlign: 'left' }}>Follow us at:</b><br />
                            <a href="/" style={{ color: 'white' }}><i class="fa fa-brands fa-fade fa-instagram fa-2xl"></i></a>
                            <a href="/" style={{ color: 'white' }}><i class="fa fa-brands fa-fade fa-facebook fa-2xl"></i></a>
                            <br /><br />
                            <a href="/" style={{ color: 'white' }}><i class="fa fa-brands fa-fade fa-youtube fa-2xl"></i></a>
                            <a href="/" style={{ color: 'white' }}><i class="fa fa-brands fa-fade fa-linkedin fa-2xl"></i></a></p></div></div>
                </div>
            </div>
        </div>
    );
};
export default Footer;