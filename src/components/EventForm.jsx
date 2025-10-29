import React from 'react'

export default function EventForm(){
  return (
    <div>
      <h4>Додати подію</h4>
      <form onSubmit={(e)=>{e.preventDefault(); alert('Подія додана (пример)')}}>
        <div style={{display:'grid',gap:8}}>
          <select defaultValue="shot">
            <option value="shot">Удар</option>
            <option value="pass">Пас</option>
            <option value="assist">Асист</option>
            <option value="duel">Єдиноборство</option>
          </select>
          <input placeholder="Час (наприклад 00:12:34)" />
          <button type="submit">Додати</button>
        </div>
      </form>
    </div>
  )
}
