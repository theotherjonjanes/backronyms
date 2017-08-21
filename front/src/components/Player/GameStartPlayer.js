import React from 'react';
import './css/GameStartPlayer.css';

function StateGameStartPlayer(props) {
	return (
		<div>
			<h1>{props.judgeName} is the judge!</h1>
			<h3>waiting for a category to be selected...</h3>
		</div>
	)
}

export default StateGameStartPlayer;