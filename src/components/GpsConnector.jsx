import React from 'react'

export default function GpsConnector(){
  return (
    <div style={{marginTop:12}}>
      <h4>GPS Connector</h4>
      <p style={{fontSize:13,opacity:0.85}}>Підключай трекери через імпорт GPX/FIT або BLE (реалізація пізніше).</p>
      <div style={{marginTop:8}}>
        <input type="file" accept=".gpx,.fit" />
      </div>
    </div>
  )
}
