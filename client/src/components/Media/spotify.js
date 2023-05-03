import axios from 'axios'

var params = {
  grant_type: 'client_credentials',
}

var clientId = '797026eab6634e19919806d733bc9b34'
var clientSecret = 'efc2fd3bfe1c4f938ef7cf292de845a8'

var authOptions = {
  url: 'https://accounts.spotify.com/api/token',
  method: 'POST',
  headers: {
    Authorization: 'Basic ' + btoa(clientId + ':' + clientSecret),
  },
  params,
}
export const createSpotifyToken = async () => {
  try {
    const { data } = await axios(authOptions)
    const token = data.access_token
    console.log(token)
    return token
  } catch (error) {
    console.log(error)
  }
}
