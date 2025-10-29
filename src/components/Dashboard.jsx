import React from 'react'

export default function Dashboard(){
  return (
    <div>
      <h2>Дашбоард</h2>
      <div style={{display:'flex',gap:12,flexWrap:'wrap',marginTop:8}}>
        <Stat label="Удари" value={0}/>
        <Stat label="Паси" value={0}/>
        <Stat label="Асисти" value={0}/>
        <Stat label="Виграні єдиноборства" value={0}/>
        <Stat label="Пройдено" value={'0 m'}/>
      </div>
    </div>
  )
}

function Stat({label, value}){
  return (
    <div style={{minWidth:120,background:'#f8fafc',padding:10,borderRadius:8}}>
      <div style={{fontSize:12,opacity:0.8}}>{label}</div>
      <div style={{fontSize:18,fontWeight:600}}>{value}</div>
    </div>
  )
}
