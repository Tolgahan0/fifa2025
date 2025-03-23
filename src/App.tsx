import { useState, useEffect } from 'react'
import teamsData from './data/teams.json'
import './App.css'

interface Team {
  id: number
  name: string
  country: string
  logo: string
  league: string
  stars: number
}

function App() {
  const [redTeam, setRedTeam] = useState<Team | null>(null)
  const [blueTeam, setBlueTeam] = useState<Team | null>(null)

  const getRandomTeam = (excludeTeam?: Team) => {
    const teams = teamsData.teams
    const availableTeams = excludeTeam 
      ? teams.filter(team => team.id !== excludeTeam.id)
      : teams
    const randomIndex = Math.floor(Math.random() * availableTeams.length)
    return availableTeams[randomIndex]
  }

  const selectRandomTeams = () => {
    const red = getRandomTeam()
    const blue = getRandomTeam(red)
    setRedTeam(red)
    setBlueTeam(blue)
  }

  return (
    <div className="container">
      <h1>FIFA 2025 Team Selector</h1>
      <button onClick={selectRandomTeams} className="select-button">
      Random Team Pick
      </button>
      <div className="teams-container">
        <div className="team-card red">
          <h2>Red Player</h2>
          {redTeam && (
            <div className="team-info">
              <img 
                src={redTeam.logo} 
                alt={redTeam.name} 
                className="team-logo"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/FIFA_2023_logo.svg/180px-FIFA_2023_logo.svg.png';
                }}
              />
              <h3>{redTeam.name}</h3>
              <p>{redTeam.league}</p>
              <p>{redTeam.country}</p>
              <p className="stars">{"⭐".repeat(redTeam.stars)}</p>
            </div>
          )}
        </div>
        <div className="team-card blue">
          <h2>Blue Player</h2>
          {blueTeam && (
            <div className="team-info">
              <img 
                src={blueTeam.logo} 
                alt={blueTeam.name} 
                className="team-logo"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/FIFA_2023_logo.svg/180px-FIFA_2023_logo.svg.png';
                }}
              />
              <h3>{blueTeam.name}</h3>
              <p>{blueTeam.league}</p>
              <p>{blueTeam.country}</p>
              <p className="stars">{"⭐".repeat(blueTeam.stars)}</p>
            </div>
          )}
        </div>
      </div>
      <div className="creator-attribution">
        Created by Tolgahan Ayaz
      </div>
    </div>
  )
}

export default App
