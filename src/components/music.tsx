import {Audio} from 'remotion'
import {staticFile} from 'remotion'

export const Music: React.FC = () => {
	return (
    <Audio
      src={staticFile("neffex-make-it-instrumental.mp3")}
      startFrom={1047}
      volume={0.5}
    />
  );
};
