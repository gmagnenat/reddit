import './HotTopic.css';

const HotTopic = () => {
    const hotTopic = (topic) => (
        <div className="bar__hotTopic">
            <span className="fire">🔥r/</span>
            <a href="/" onClick={handleTopicClick}>
                {topic}
            </a>
        </div>
    );

    function handleTopicClick(e) {
        e.preventDefault();
        console.log(e.target.innerHTML);
    }

    return (
        <div className="hotTopic">
            {hotTopic('AskReddit')}
            {hotTopic('leagueoflegends')}
            {hotTopic('Aww')}
            {hotTopic('News')}
            {hotTopic('Gaming')}
        </div>
    );
};

export default HotTopic;
