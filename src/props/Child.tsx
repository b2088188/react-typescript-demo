interface ChildProps {
	color:string,
	onClick:()=>void
}

const ChildAsFC: React.FC<ChildProps> = ({color, onClick}) => {
	return (
		<div>
		{color}
		<button onClick={onClick}>Click Me</button>
		</div>
		);
}

export {ChildAsFC};