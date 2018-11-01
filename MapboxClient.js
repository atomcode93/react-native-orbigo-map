import MapboxClient from 'mapbox'
import configEnv from './configEnv'

const client = new MapboxClient(configEnv.get('accessToken'))
export default client
