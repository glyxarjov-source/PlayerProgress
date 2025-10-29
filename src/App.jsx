import React from 'react'
import Dashboard from './components/Dashboard'
import Session from './components/Session'
import PlayerProfile from './components/PlayerProfile'
import GpsConnector from './components/GpsConnector'
import EventForm from './components/EventForm'

export default function App(){
  return (
    <div className="app">
      <header className="header">
        <h1>PlayerProgress</h1>
        <small>Відстеження прогресу футболіста — UA</small>
      </header>
      <main className="main">
        <section className="left">
          <PlayerProfile />
          <GpsConnector />
        </section>
        <section className="center">
          <Dashboard />
          <Session />
        </section>
        <aside className="right">
          <EventForm />
        </aside>
      </main>
      <footer className="footer">PWA-ready • Capacitor • GitHub Actions</footer>
    </div>
  )
}
