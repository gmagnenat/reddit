import './HotTopic.css';
import { setSub } from './subSlice';
import { useDispatch } from "react-redux";

const HotTopic = () => {

  const dispatch = useDispatch()

    const hotTopic = (topic) => (

        // Is it bad practice to not use an <a> element?
        <div className="bar__hotTopic"  onClick={() => handleTopicClick(topic)}>
            <span className="fire">🔥r/</span>
            <p>
                {topic}
            </p>
        </div>
    );

    function handleTopicClick(topic) {
        return dispatch(setSub(topic));
    }

    return (
        <div className="hotTopic">
            {hotTopic('Popular')}
            {hotTopic('AskReddit')}
            {hotTopic('leagueoflegends')}
            {hotTopic('Aww')}
            {hotTopic('News')}
            {hotTopic('Gaming')}
            {hotTopic('Peru')}
            {hotTopic('Bulgaria')}
            {hotTopic('Canada')}
            {hotTopic('Gaming')}
        </div>
    );
};

export default HotTopic;
