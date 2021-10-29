import React from 'react';


class Links extends React.Component {

    render(){
        return(
            <div class="container">
				<div class="col-md-4 link">
					<img src="/imgs/DecoratedTiles.jpg" style={{width:'100%'}} class="img-responsive" title="Tiles" alt="Tiles"/>
				</div>
				<div class="col-md-8 link">
					<p class="descHome">
						<a href="http://aata.getty.edu/Home" class="copyRight">Abstracts of International Conservation Literature</a>
						<br /><br />
						<a href="http://www.conservation-us.org/home" class="copyRight">American Institute for Conservation of Historic and Artistic Works (AIC)</a>
						<br /><br />
						<a href="https://www.britishmuseum.org/research/publications/research_publications_series/2004/selection_of_materials.aspx" class="copyRight">The British Museum Oddy Testing Database</a>
						<br /><br />
						<a href="http://artconservation.buffalostate.edu/" class="copyRight">Buffalo State University Art Conservation Department</a>
						<br /><br />
						<a href="http://cameo.mfa.org/wiki/Main_Page" class="copyRight">CAMEO: Conservation & Art Materials Encyclopedia Online</a>
						<br /><br />
						<a href="http://canada.pch.gc.ca/eng/1454704828075" class="copyRight">Canadian Conservation Institute</a>
						<br /><br />
						<a href="https://www.connectingtocollections.org/" class="copyRight">Connecting to Collections</a>
						<br /><br />
						<a href="http://cool.conservation-us.org/" class="copyRight">Conservation Online (CoOL)</a>
						<br /><br />
						<a href="http://www.getty.edu/conservation/" class="copyRight">The Getty Conservation Institute</a>
						<br /><br />
						<a href="https://www.iiconservation.org/" class="copyRight">International Institute for Conservation of Historic and Artistic Works (IIC)</a>
						<br /><br />
						<a href=" https://www.artcons.udel.edu/mitra" class="copyRight">Materials Information & Technical Resources for Artists (MITRA)</a>
					</p>
				</div>
			</div>
        );
    }
}

export default Links;