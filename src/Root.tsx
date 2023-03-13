import {Composition} from 'remotion';
import {CompositionBody} from './components';

export const RemotionRoot: React.FC = () => {
	return (
		<>
			<Composition
				id="estimtest-demo"
				component={CompositionBody}
				durationInFrames={1215}
				fps={29.97}
				width={1920}
				height={1080}
			/>
		</>
	);
};