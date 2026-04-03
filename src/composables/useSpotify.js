import axios from "axios"

export const getSpotifyToken = async () => {

const clientId = import.meta.env.VITE_SPOTIFY_CLIENT_ID
const clientSecret = import.meta.env.VITE_SPOTIFY_CLIENT_SECRET

const res = await axios.post(
"https://accounts.spotify.com/api/token",
new URLSearchParams({
grant_type:"client_credentials"
}),
{
headers:{
"Content-Type":"application/x-www-form-urlencoded",
Authorization:"Basic " + btoa(clientId + ":" + clientSecret)
}
}
)

return res.data.access_token
}