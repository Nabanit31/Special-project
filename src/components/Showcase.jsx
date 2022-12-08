import "../scss/showcase.scss";
import showcase_car from "../images/showcase_car.svg";
import Card from 'react-bootstrap/Card';

//TODO: work on the showcase 
function Showcase() {
    return (
        <>
        <section className="showcase_wrapper">
            <div className="showcase_img_container">
                <img src={showcase_car}  alt="showcase img" />
            </div>
            <div className="showcase_headings">
                <h1>
                    ACCOMPANY YOUR JOURNEY WITH COMFORT
                </h1>
                <p>
                    Car rent services for various terrain with guaranteed quality
                    
                    
                </p>
                <button type="button" className="ctn">
  Get started
</button>

            </div>
            
            
        </section>
        <>
  <label className="form-label" htmlFor="customRange1">
    Kilometer You Want to Ride....
  </label>
  <div className="range">
    <input type="range" className="form-range" id="customRange1" />
  </div>
</>

        <Card className="bg-dark text-white">
      <Card.Img src="https://www.drivespark.com/img/2019/11/tata-nexon-1574054580.jpg" alt="Card image" />
      
      <Card.ImgOverlay>
        
        <Card.Title>Our Best cars...</Card.Title>
        <Card.Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </Card.Text>
        <Card.Text>Last updated 3 mins ago</Card.Text>
      </Card.ImgOverlay>
    </Card>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://www.drivespark.com/img/2019/11/xtata-harrier-1574054618.jpg.pagespeed.ic.xlIQI-GWZ_.jpg" />
      <Card.Body>
        <Card.Title>Our new available Cars</Card.Title>
        <Card.Text>
          You can check and book our new available cars....Grab it asap....
        </Card.Text>
        <button type="button" className="ctn">More details</button>
      </Card.Body>
    </Card>
    <br></br>
      <section className="footer">
        <p>Santipara|Agartala|phone:7005696612|Email:Nabanitroy514@gmail.com|</p>
      </section>
    </>
    );
}
export default Showcase;
