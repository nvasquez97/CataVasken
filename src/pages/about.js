import React from 'react';


class About extends React.Component {

    //Render function
    render(){
        return(
            <div>
                <div className="container">
                    <div className="col-md-5 aboutI">
                        <img src="/imgs/Mural.JPG" alt="Minnesota State Capitol Restoration Project" title="Minnesota State Capitol Restoration Project" className="img-responsive" />
                        <p className="minnesota">
                            Minnesota State Capitol Restoration Project
                        </p>
                    </div>
                    <div className="col-md-7 aboutD">
                        <p className="descHome">
                            Catalina Vasquez-Kennedy is the founder and owner of ArtisAegis, LLC in Denver, CO. A peer-reviewed Professional Associate in the American Institute for Conservation (AIC), Catalina has about twenty-five years of conservation experience working with art institutions, regional centers, and private clients, large and small. She primarily focuses on the examination and treatment of paintings and period frames, and treats all art objects in compliance with the Code of Ethics and Guidelines for Practice as set out by AIC.
                            <br /><br />
                            In 2008, Catalina received from Buffalo State College her Master of Arts in Art Conservation and corresponding Certificate of Advance Study in Conservation, with concentration in Paintings Conservation. Initially trained as a musicologist and a translator, in the years following her professional training in conservation she completed various internships, fellowships, and multiple projects around the country and abroad under mentors from The National Museum in Warsaw, Poland; the Monastery of Santa Catalina, in Arequipa, Peru; the Hispanic Society of America, in New York City; the Walters Art Museum in Baltimore, MD; the Balboa Art Conservation Center, in San Diego, CA; the Chrysler Museum of Art, in Norfolk, VA; the Minnesota State Capitol, in St Paul, MN; and others.  
                            <br /><br />
                            Catalina’s résumé is available upon request.
                        </p>
                    </div>
			    </div>
            </div>
        );
    }
}

export default About;