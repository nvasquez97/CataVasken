import React from 'react';


class Home extends React.Component {

    //Render function
    render(){
        return(
        <div>
            <div className="panelH container">
				<img src="/imgs/HolmesPanel.jpg" style={{width:'100%'}} className="img-responsive" title="Holmes Panel" alt="Holmes Panel Conservation" />
			</div>
			<div className="container">
				<p className="descHome">
					<strong>ArtisAegis, LLC,</strong> a woman-owned small busines founded and operated by Catalina Vasquez-Kennedy, provides conservation services to individual collectors and institutions in the Greater Denver area and beyond. Services range from examination to treatment of paintings and period frames, collections surveys, storage and exhibitions advise, courier services for transit, and disaster remediation.
				</p>
				<p className="cent">
					All phone inquiries are welcomed.
					<br /> <br/>
					Beacause of COVID-19 pandemic, studio visits are not allowed until further notice. Please call to schedule an in-situ consultation if needed.
				</p>
			</div>
        </div>
        );
    }

}

export default Home;