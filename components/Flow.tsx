import { FC } from 'react'
import ReactFlow from 'react-flow-renderer'
import { edge, nodes } from '../data'

const edgeOptions = {
	animated: true,
	style: {
		stroke: '#ED4107',
	},
}

const connectionLineStyle = { stroke: '#F10086' }

const Flow: FC = () => {
	return (
		<ReactFlow
			defaultNodes={nodes}
			defaultEdges={edge}
			defaultEdgeOptions={edgeOptions}
			fitView
			connectionLineStyle={connectionLineStyle}
		/>
	)
}

export default Flow
