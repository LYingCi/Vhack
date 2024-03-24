import React from "react";
import './discussion.css';
import Cabbage from "../assets/cabbageP.jpg";
import Phosphorous from "../assets/phosphorous.jpg";
import Orange from "../assets/orange.jpg";
import PestP from "../assets/pestP.jpg";

const discussion = () => {
  return (
    <div className="Dissc">
      <div className="c2">
        <h1>Discussion Board </h1>
      </div>
      <div className="section-bottom">
        <div class="card">
          <img className="image" src={Cabbage} alt="cabbage"></img>
          <div className="c1">
            <h2>How to treat this cabbage disease?</h2>
            <p>
              Use of black rot tolerant varieties is the best method to control
              the disease.{" "}
            </p>
            <div className="empty-box"></div>
            <button class="button">Add Comment</button>
          </div>
        </div>
        <div class="card">
          <img className="image" src={Phosphorous} alt="phosphorous"></img>
          <div className="c1">
            <h2>Why the leaf look unhealthy?</h2>
            <p>
              This is phosphorus,i think adding manure to the soil may help.{" "}
            </p>
            <p>Yes , do not overwater plants too.</p>
            <div className="empty-box"></div>
            <button class="button">Add Comment</button>
          </div>
        </div>
        <div class="card">
          <img className="image" src={Orange} alt="orange"></img>
          <div className="c1">
            <h2>Why are my oranges spliting?</h2>

            <div className="empty-box"></div>
            <button class="button">Add Comment</button>
          </div>
        </div>
        <div class="card">
          <img className="image" src={PestP} alt="pestP"></img>
          <div className="c1">
            <h2>🌾 Pest probs on the farm! Any quick fixes? 🐜🚫</h2>
            <p>Use a soil barrier or clean the leaves.</p>
            <div className="empty-box"></div>
            <button class="button">Add Comment</button>
          </div>
        </div>
        <div class="card">
          <div className="c1">
            <h2>What do all of you plant? </h2>
            <p>
              Well, in my garden, we're all about planting dreams... and maybe a
              few tomatoes on the side.🍅✨
            </p>
            <p>
              HAHAHAHHAA, Maybe I'll plant some laughter and a sprinkle of magic
              beans in mine.😂😂
            </p>
            <div className="empty-box"></div>
            <button class="button">Add Comment</button>
          </div>
        </div>
        <div class="card">
          {/* <img className="image" src={Paddy} alt="paddy"></img> */}
          <div className="c1">
            <h2>Can i grow apple in Malaysia? </h2>
            <p>It is so challenging due to the country's tropical climate.</p>
            <div className="empty-box"></div>
            <button class="button">Add Comment</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default discussion;