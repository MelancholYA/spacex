import { gql, useQuery } from '@apollo/client';

const LaunchDetails = ({ id, close }) => {
	const Launches = gql`
		query {
            launch(id: ${id}) {
              details
              launch_site {
                site_name_long
              }
              launch_success
              launch_year
              links {
                flickr_images
              }
              mission_name
            }
          }
          
	`;
	const { loading, error, data } = useQuery(Launches);
	console.log(data);
	return (
		<div className='details'>
			{loading ? (
				'loading...'
			) : error ? (
				'something wrnt wrong'
			) : (
				<div className='wrapper'>
					<button
						className='close'
						onClick={() => close({ show: false, id: null })}>
						<svg width={30} height={30} fill='white' viewBox='0 0 20 20'>
							<path d='M10.185,1.417c-4.741,0-8.583,3.842-8.583,8.583c0,4.74,3.842,8.582,8.583,8.582S18.768,14.74,18.768,10C18.768,5.259,14.926,1.417,10.185,1.417 M10.185,17.68c-4.235,0-7.679-3.445-7.679-7.68c0-4.235,3.444-7.679,7.679-7.679S17.864,5.765,17.864,10C17.864,14.234,14.42,17.68,10.185,17.68 M10.824,10l2.842-2.844c0.178-0.176,0.178-0.46,0-0.637c-0.177-0.178-0.461-0.178-0.637,0l-2.844,2.841L7.341,6.52c-0.176-0.178-0.46-0.178-0.637,0c-0.178,0.176-0.178,0.461,0,0.637L9.546,10l-2.841,2.844c-0.178,0.176-0.178,0.461,0,0.637c0.178,0.178,0.459,0.178,0.637,0l2.844-2.841l2.844,2.841c0.178,0.178,0.459,0.178,0.637,0c0.178-0.176,0.178-0.461,0-0.637L10.824,10z'></path>
						</svg>
					</button>
					<div className='header'>
						<h1>{data.launch.mission_name}</h1>
						<div>
							<h4>{data.launch.launch_year}</h4>
							<h4
								style={{ color: data.launch.launch_success ? 'green' : 'red' }}>
								{data.launch.launch_success ? 'Success' : 'Failure'}
							</h4>
						</div>
					</div>
					<h3>It took place in :{data.launch.launch_site.site_name_long} </h3>
					<p>{data.launch.details || 'No details were available'}</p>
				</div>
			)}
		</div>
	);
};

export default LaunchDetails;
