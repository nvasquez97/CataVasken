import React from 'react';

class Contact extends React.Component{

    render(){
        return(
            <div>
                <div className="panelH container">
				<img src="/imgs/ArabianHorses.jpg" style={{width:'100%'}} className="img-responsive" title="Arabian Horses" alt="Arabian Horses"/>
			    </div>
			<div className="container">
				<div className="col-md-6 map">
					<p className="descHome">
					We can discuss your inquiry over the phone, but an appointment to inspect your art object is best to assess your conservation needs. This preliminary 30-minute consultation is usually followed by a careful examination of the art object. The process generates a formal condition report in electronic format that includes photographic documentation, as well as a treatment proposal with a binding estimate. The fee for this step is $150.
					</p>
				</div>
				<div className="col-md-6 cont">
					<p className="descHome">
					Treatment starts as soon as the treatment proposal and a contract are signed, and a down payment of 30% of the estimate is received. Treatments are typically completed within two or three months, depending on the complexity of the project. Rush orders can sometimes be accommodated for an additional charge. The balance of the treatment cost is due when the work is retrieved from the studio.
				</p>
				</div>
				
			</div>
			<div className="panelH">
					<p className="descHome centerText">
						Please contact Artis Aegis, LLC with any questions about conservation or to request our services.
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