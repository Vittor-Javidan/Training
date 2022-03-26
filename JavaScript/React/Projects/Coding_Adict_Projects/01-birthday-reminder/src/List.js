export default function List ({ people }) {						// List Component

	return (										// List JSX structure
		<>
			{people.map((person) => {							// mapping people to return a JSX structure for each person inside people

				const {id, name, age, image} = person						// spliting the properties inside person

				return (
					<article key={id} className="person">
						<img src={image} alt={name}></img>
						<div>
							<h4>{name}</h4>
							<p>{age} years</p>
						</div>
					</article>
				)
			})}
		</>
	)
}