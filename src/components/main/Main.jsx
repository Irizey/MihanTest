import './main.scss'
import Card from "./card/Card.jsx";
import cardsData from './../../data/data.json'
function Main() {
    return (
       <main className="main" >
           <div className="container">
               {
                   cardsData.map((item) => {
                      return <Card data={item} key={item.id}/>
                   })
               }
           </div>
       </main>
    )

}

export default Main