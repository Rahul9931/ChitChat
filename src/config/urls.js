export const API_BASE_URL='https://dummyapi.io/data/v1/'
export const getApiUrl=(endpoint)=> API_BASE_URL+endpoint
export const GET_USERS=getApiUrl('/user')