
import "./HotTopic.css"

const HotTopic = () => {

    const hotTopic = (topic) => (
        <div className="bar__hotTopic">
            <span className="fire">🔥r/</span>
            <p>{topic}</p>
        </div>
    )

  return (

    <div className='hotTopic'>
        {hotTopic('AskReddit')}
        {hotTopic('leagueoflegends')}
        {hotTopic('Aww')}
        {hotTopic('News')}
        {hotTopic('Gaming')}
        </div>
  )
}

export default HotTopic 