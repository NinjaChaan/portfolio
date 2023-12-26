import styled from 'styled-components'
import VideoList from './VideoList'

const Contents = styled.div`
	display: flex;
	width: 100%;
	height: 100%;
`

function App() {

	return (
		<Contents>
			<VideoList />
		</Contents>
	)
}

export default App
