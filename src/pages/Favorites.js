import React, { useEffect, useState } from "react";
import axios from "axios";

const Favorites = () => {
	const [saved, setSaved] = useState([]);
	useEffect(() => {
		async function searchId() {
			const searchId = await axios.get(`http://localhost:3300/search/favorites
			`);
			setSaved(searchId);
		}
		searchId();
	}, []);
	return (
		<div>
			{saved.data &&
				saved.data.map(data => {
					const { id } = data;
					console.log(data);
					axios.post(`http://localhost:3300/search/favorite/${id}`, {
						id,
					});

					return <div key={data.id}>{data.name}</div>;
				})}
		</div>
	);
};

export default Favorites;
