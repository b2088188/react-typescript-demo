import { useState } from "react";

const users = [
	{ name: "Sarah", age: 20 },
	{ name: "Alex", age: 25 },
	{ name: "Michael", age: 30 },
];

const UserSearch: React.FC = () => {
	const [name, setName] = useState("");

	const [user, setUser] = useState<{ name: string; age: number } | undefined>();

	function onClick() {
		const foundedUser = users.find((el) => el.name === name);
		setUser(foundedUser);
	}

	return (
		<div>
			User Search
			<input
				type="text"
				value={name}
				onChange={(e) => setName(e.target.value)}
			/>
			<button onClick={onClick}>Find User</button>
			<div>{user?.name}</div>
			<div>{user?.age}</div>
		</div>
	);
};

export default UserSearch;
