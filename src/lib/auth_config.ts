import { PUBLIC_POST_LOGIN_URI, PUBLIC_REDIRECT_URI } from '$env/static/public';
// const PUBLIC_POST_LOGIN_URI = "";
// const PUBLIC_REDIRECT_URI = "";

export const oauth_config = {
	app_name: 'VRU Area Prioritisation Tool',
	client_id: 'vis-apps',
	redirect_uri: PUBLIC_REDIRECT_URI || 'http://localhost:5173/',
	authorization_endpoint:
		'https://keycloak.ldn-gis.co.uk/realms/dev-city-data/protocol/openid-connect/auth',
	token_endpoint:
		'https://keycloak.ldn-gis.co.uk/realms/dev-city-data/protocol/openid-connect/token',
	requested_scopes: 'profile',
	logout_endpoint:
		'https://keycloak.ldn-gis.co.uk/realms/dev-city-data/protocol/openid-connect/logout',
	role_name: 'app-vru-user',
	post_login_url: PUBLIC_POST_LOGIN_URI || './'
};
