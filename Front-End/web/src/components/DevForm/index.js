import React, {useState, useEffect} from 'react'

function DevForm({ onSubmit }) {
    
    
    const [github_username, setGithubUsername] = useState('')
    const [techs, setTechs] = useState('') 
    const [latitude, setLatitude] = useState('')
    const [longitude, setLongitude] = useState('')
    
    useEffect(() => {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const { latitude, longitude } = position.coords
    
            setLatitude(latitude)
            setLongitude(longitude)
          },
          (err) => {
            console.log(err)
          },
          {
            timeout: 30000
          }
        )
      }, [])

      async function handleSubmit(e){
        e.preventDefault()
        await onSubmit({
            github_username,
            techs,
            latitude,
            longitude
        })
        setGithubUsername('')
        setTechs('')
      }

    return (
        
        <form>
            <div className="input-block">
                <label htmlFor="username_github">Usuário do GitHub</label>
                <input
                    name="github_username"
                    id="username_github"
                    onChange={e => setGithubUsername(e.target.value)}
                    required />
            </div>

            <div className="input-block">
                <label htmlFor="techs">Tecnologias</label>
                <input
                    name="techs"
                    id="techs"
                    onChange={e => setTechs(e.target.value)}
                    required />
            </div>

            <div className="input-group">
                <div className="input-block">
                    <label htmlFor="latitude">Latitude</label>
                    <input
                        name="latitude"
                        id="latitude"
                        value={latitude}
                        onChange={e => setLatitude(e.target.value)}
                        required />
                </div>

                <div className="input-block">
                    <label htmlFor="longitude">Longitude</label>
                    <input
                        name="longitude"
                        id="longitude"
                        value={longitude}
                        onChange={e => setLongitude(e.target.value)}
                        required />
                </div>
            </div>
            <button type="submit" onClick={handleSubmit}>Cadastrar</button>
        </form>
    )
}      

export default DevForm