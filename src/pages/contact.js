import React from 'react';

class Contact extends React.Component{

    render(){
        return(
            <div>
                <div className="panelH container">
				<img src="/imgs/ArabianHorses.jpg" style={{width:'100%'}} className="img-responsive" title="Arabian Horses" alt="Arabian Horses"/>
				<p className="minnesota">
					Fire-damage 19th cent. oil painting by Aldolf Schreyer titled  <em>Arab Horsemen in Battle</em>
				</p>
			    </div>
			<div className="container">
				<div className="col-md-6 map">
					<p className="descHome">
					We can discuss your inquiry over the phone, but an appointment to inspect your art object is best to assess your conservation needs. This preliminary 30-minute consultation is usually followed by a careful examination of the art object. The process generates a formal condition report in electronic format that includes photographic documentation, as well as a treatment proposal with a binding estimate. The fee for preparing a condition assessment which includes a written and photographic report accompanied by a treatment proposal is $150.
					</p>
				</div>
				<div className="col-md-6 cont">
					<p className="descHome">
					Treatment starts as soon as the treatment proposal and a contract are signed, and a down payment of 50% of the estimate is received. Treatments are typically completed within two or three months, depending on the complexity of the project. Rush orders can sometimes be accommodated for an additional 20% charge. The balance of the treatment cost is due upon delivery of the artwork. A small delivery surcharge will be applied depending on travel distance from our studio.
				</p>
				</div>
				
			</div>
			<div className="panelH">
					<p className="descHome centerText">
						Please contact ArtisAegis, LLC with any questions about conservation or to request our services.
						<br /><br />
						<strong>Tel:</strong> 757-405-2971
						<br />
						<strong>Email:</strong> artisaegis@gmail.com
						<br />
						<strong>City:</strong> Denver, Colorado
					</p>
			</div>
            </div>
        );
    }
}

export default Contact;