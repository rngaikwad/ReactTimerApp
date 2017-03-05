var React = require('react');
var {Link} = require('react-router');


var Examples = (props) => {

		return (
			<div>
				<h3>Examples</h3>
				<p>Here are a few exaple locations to try out:</p>
				<ol>
					<li>
						<Link to='/?location=Philadelphia'>Philadelphia, PA </Link>
					</li>
					<li>
						<Link to='/?location=Rio'>Rio, Brazil </Link>
					</li>
				</ol>
			</div>
			);

};
module.exports = Examples;
