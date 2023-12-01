import React from 'react'

const SkillsCard = ({icon, title, text}) => {
  return (
    <article>
      <span>{icon}</span>
      <h4 className='mt-6 font-bold'>
        {title}
       <p className='mt-2 text-slate-500 '>{text}</p>

       
      </h4>
    </article>
  )
}

export default SkillsCard ;