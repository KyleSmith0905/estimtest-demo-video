import { Background } from "./background"
import { Music } from "./music"
import { TextBox } from "./text-box"

export const CompositionBody: React.FC = () => {
	return (
    <>
      <TextBox
        content={'Estimtest - Experiment Your Website\'s accessibility'}
        start={9}
        end={96}
      />
      <TextBox
        content='Emulate common accessibility pitfalls, such as large and small default font size'
        start={96}
        end={212}
      />
      <TextBox
        content={'Live in other people\'s shoes, see through their eyes'}
        start={212}
        end={337}
      />
      <TextBox
        content='Be informed on all the ways someone may need accessibility options'
        start={401}
        end={519}
      />
      <TextBox
        content='Experience the ways others surf the web'
        start={530}
        end={850}
      />
      <TextBox
        content='Write notes on ways to accommodate a wider audience'
        start={900}
        end={1017}
      />
			<Background />
			<Music />
		</>
	)
}