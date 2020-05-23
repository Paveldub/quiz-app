import React from 'react';
import classes from './bg-video.module.css';

const Video = () => {
	const videoURL = 'https://www.w3schools.com/tags/movie.mp4';

	return (
		<div className={classes.Video}>
			<video autoPlay="autoplay" loop="loop" muted>
				<source src={videoURL} type="video/mp4" />
				<source src={videoURL} type="video/ogg" />
				Your browser does not support the video tag.
			</video>
		</div>
	);
};

export default Video;
