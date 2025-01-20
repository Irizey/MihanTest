import './card.scss'
import as from '../../../../public/images/Fighter.jpg'

 function Card({data}) {
    const {img, title, desc} = data



    return (
            <button  className="card">
                <img src={img} alt="Card"/>
                <div className="outline">
                    <p className="title">{title}</p>
                    <p className="descript">{desc}</p>
                </div>
            </button>
    )
}

export default Card