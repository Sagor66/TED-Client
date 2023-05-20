import {
  faDiscord,
  faForumbee,
  faReddit,
  faSlack,
  faTelegram,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ParentsCommunity = () => {
  return (
    <div className="mb-32">
      <h2 className="text-gradient bg-gradient-to-r from-gray-500 to-gray-100 font-fredoka text-5xl font-bold text-center mb-10">
        Join Our Parents Community
      </h2>
      <div className="font-fredoka flex flex-col md:flex-row justify-around text-gray-300 font-semibold text-xl">
        <div className="flex flex-col items-center gap-4 justify-center">
          <h4>Discord Channel</h4>
          <FontAwesomeIcon className="fa-2xl text-gray-400 hover:text-indigo-500" icon={faDiscord} />
        </div>
        <div className="flex flex-col items-center gap-4 justify-center">
          <h4>Slack</h4>
          <FontAwesomeIcon className="fa-2xl text-gray-400 hover:text-yellow-500" icon={faSlack} />
        </div>
        <div className="flex flex-col items-center gap-4 justify-center">
          <h4>Telegram Channel</h4>
          <FontAwesomeIcon className="fa-2xl text-gray-400 hover:text-sky-500" icon={faTelegram} />
        </div>
        <div className="flex flex-col items-center gap-4 justify-center">
          <h4>Reddit Channel</h4>
          <FontAwesomeIcon className="fa-2xl text-gray-400 hover:text-orange-500" icon={faReddit} />
        </div>
        <div className="flex flex-col items-center gap-4 justify-center">
          <h4>Forumbee</h4>
          <FontAwesomeIcon className="fa-2xl text-gray-400 hover:text-emerald-500" icon={faForumbee} />
        </div>
      </div>
    </div>
  );
};

export default ParentsCommunity;
