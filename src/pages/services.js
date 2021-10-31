import React from 'react';

class Services extends React.Component {

    render(){
        return(
            <div>
            <div className="panelH container">
				<img src="/imgs/GirlDuringToilette.jpg" style={{width:'100%'}} className="img-responsive" title="Conservation" alt="Holmes Panel Conservation"/>
			</div>
			<div className="container">
				<div className="col-md-6">
					<p className="descHome colum">
						<strong>Artis Aegis, LLC</strong> provides the following services:	<br /><br />					
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
						Artis Aegis, LLC emphasizes preventive care as a means for minimizing the need for undertaking treatment of works of art. Treatments reflect current conservation practice, employ minimally invasive treatment methods as a standard of care, and seek to preserve the structural, aesthetic, and historical integrity of works of art. 
						<br /><br />
						All works are evaluated on an individual basis; treatment decisions cannot be made without first examining a work of art.
					</p>
				</div>
			</div>
            </div>
        );
    }
}

export default Services;