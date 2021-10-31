import React from 'react';

class Services extends React.Component {

    render(){
        return(
            <div>
            <div className="panelH container">
				<img src="/imgs/GirlDuringToilette.jpg" style={{width:'100%'}} className="img-responsive" title="Conservation" alt="Holmes Panel Conservation"/>
				<p className="minnesota">
					Late eighteenth century copy of <em>Titian's Portrait d'une Femme à sa Toilette</em>, ca. 1515, by an unknown French artist
				</p>
			</div>
			<div className="container">
				<div className="col-md-6">
					<p className="descHome colum">
						<strong>ArtisAegis, LLC</strong> provides the following services:	<br /><br />					
					</p>
					<ul>
						<li>
							<p className="descHome">
								Examination and treatment of paintings and frames
							</p>
						</li>
						<li>
							<p className="descHome">
								Condition assessment of art objects for loan or purchase
							</p>
						</li>
						<li>
							<p className="descHome">
								Collection surveys
							</p>
						</li>
						<li>
							<p className="descHome">
								Lectures and teaching
							</p>
						</li>
						<li>
							<p className="descHome">
								Storage and exhibition recommendations
							</p>
						</li>
						<li>
							<p className="descHome">
								Disaster remediation 
							</p>
						</li>
					</ul>
				</div>
				<div className="col-md-6">
					<p className="descHome">
						ArtisAegis, LLC emphasizes preventive care in order to minimize the need for future restoration treatments for your work of art. All treatments reflect current conservation practice, employ minimally invasive treatment methods as a standard of care, and seek to preserve the structural, aesthetic, and historical integrity of works of art. 
						<br /><br />
						All works are evaluated on an individual basis; treatment decisions cannot be made without first examining a work of art.
						<br /><br />
						<u>Please note</u>: The inherent market worth of a given artwork has no impact on the cost of treatment. All works of art are treated as equals and receive the same attention to detail regardless of their monetary value.  
					</p>
				</div>
			</div>
            </div>
        );
    }
}

export default Services;