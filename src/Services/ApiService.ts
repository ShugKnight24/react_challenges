const baseUrl = '';

const buildConfig = (config: any) => {
	return {
		...config,
		headers: {
			'Content-Type': 'application/json'
		}
	};
};

const parseJSON = (response: any) => {
	return new Promise((resolve) => response.json()
		.then((json: any) => resolve({
			status: response.status,
			statusText: response.statusText,
			json
		}))
	);
};

const makeRequest = (uri: string, config: any) => {
	return fetch(baseUrl + uri, buildConfig(config))
		.then(parseJSON)
		.then((response: any) => {
			if (response.status < 200 || response.status >= 300){
				throw new Error(response.json.message);
			} else {
				return response.json;
			}
		});
};

export const doGet = (uri: string) => {
	return makeRequest(uri, {
		method: "GET"
	});
};