import { gql, useQuery } from '@apollo/client';
import { useState } from 'react';
import Launch from './Launch';

const Launches = () => {
	const [launchesNum, setLaunchesNum] = useState(10);
	const Launches = gql`
		query {
			launches(limit: ${launchesNum},order: "desc", sort: "launch_date_local") {
				id
				mission_name
				launch_date_local
				launch_success
			}
		}
	`;
	const { loading, error, data } = useQuery(Launches);
	console.log({ loading, error, data });
	return (
		<ul className='launches'>
			{loading
				? 'loading...'
				: error
				? 'something went wrong '
				: data.launches.map((launch) => (
						<Launch launch={launch} key={launch.id} />
				  ))}
			<button
				className='more'
				onClick={() => {
					setLaunchesNum(launchesNum + 10);
				}}>
				more
			</button>
		</ul>
	);
};

export default Launches;
