import React from 'react';

//Presentation components
function Title(props) {
	return(
		<div className="col-sm-12">
			<p className="lead"> Hello React! <i className="fa fa-handshake-o" aria-hidden="true"></i></p>
		</div>
	)
}

export class Comp1 extends React.Component {
	render() {
		return(
			<div>
				<div className="row">
					<Title />
				</div>
				<div className="row">
					<div className="col-sm-6"><p className="">Col 1</p></div>
					<div className="col-sm-6"><p className="">Col 2</p></div>
				</div>
			</div>
		);
	}
}

export default Comp1;