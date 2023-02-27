import React from "react";
import Story from "./Story";

import "./StoryReel.css";

const StoryReel = () => {
  return (
    <div className="storyReel">
      <Story
        image={
          "https://serving.photos.photobox.com/790301874a86b84c5b9898183d6e9dce8e81ccd5751cad86b40eab871496ffd80bf63664.jpg"
        }
        profileSrc={
          "https://serving.photos.photobox.com/078512929def609f53ab31887eac40624e62123a415b2f596ff9c9111d224cc792248666.jpg"
        }
        title="Aditya Prasad"
      />
      <Story
        image={
          "https://serving.photos.photobox.com/06956648cb2657baef60c0b7e5bb1d34b2e6f7567bec6d126dd987efccc576d2fa127c88.jpg"
        }
        profileSrc={
          "https://serving.photos.photobox.com/8280341244a832c5f233d4c090497b95ff9dce7ac9e76f9889cf73648eb3ac6ce86b591d.jpg"
        }
        title="M_Citti"
      />
      <Story
        image={
          "https://serving.photos.photobox.com/34036825dafea40266858bf87522328d3ec40becbd8688c92e6aaa8125f623f8c5f5ec2f.jpg"
        }
        profileSrc={
          "https://serving.photos.photobox.com/22591586b030b557ed5be595b51d55ccabf5c883f580cd276a0f21ea31fd0a577a2d86be.jpg"
        }
        title="M_Venky"
      />
      <Story
        image={
          "https://serving.photos.photobox.com/419752495a9707c2dcb3ce7bb297ea90b53f444bda412ac53153af77c6e4bc2d18f70b32.jpg"
        }
        profileSrc={
          "https://serving.photos.photobox.com/215142833a5e3e5c1ec383407d2fd6fbb3fd9990343ea7f4fd8cde8933f2f7e152a588c9.jpg"
        }
        title="Ankit"
      />
    </div>
  );
};

export default StoryReel;
