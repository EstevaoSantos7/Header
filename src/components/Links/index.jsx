import sty from './style.module.css'

export default function Link({ icone: Icone, titulo }) {
  return (
    <div className={sty.link}>
      <Icone size={20} className={sty.icon}/>
      <a href="">{titulo}</a>
    </div>
  )
}