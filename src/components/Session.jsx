import React from 'react'

export default function Session(){
  return (
    <div>
      <h2>Сесія — Live</h2>
      <div style={{height:260,background:'#eef2ff',borderRadius:8,display:'flex',alignItems:'center',justifyContent:'center'}}>
        <div>Поле: натисни щоб додати подію (тут буде карта/heatmap)</div>
      </div>
      <div style={{marginTop:10,display:'flex',gap:8}}>
        <button>Додати подію</button>
        <button>Підключити GPS</button>
      </div>
    </div>
  )
}
