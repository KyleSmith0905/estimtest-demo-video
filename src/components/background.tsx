import {staticFile, Video} from 'remotion'

export const Background: React.FC = () => {
	return (
		<Video src={staticFile('/estimtest.mkv')} />
	);
};
