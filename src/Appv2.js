// import { useState } from "react";

const storyTime = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    story: "My name is enyinnaya wisdom chiemezie, a 25 year-old man",
    category: "Romance",
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    story: "I am from Abia state, Nigeria. I love eating beans and plantain",
    category: "action",
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    story:
      "I am a front-end developer with interest in back-end development too",
    category: "Sci-fi",
  },
];

function Button({ children }) {
  return <button className="button">{children}</button>;
}

export default function App() {
  // const [story, setStory] = useState(null);
  // const [selectedStory, setSelectedstory] = useState(true);

  return (
    <div className="app">
      <div className="sidebar">
        <Writers />
        <AddStory />
        {/* <ReadStory /> */}
      </div>

      <ThisStory story={storyTime} />
    </div>
  );
}

// function ReadStory({ setStory }) {
//   setStory((story) => !story);
// }
function ThisStory(story) {
  return (
    <div>
      <p>{story.story}</p>
    </div>
  );
}

function Writers({ setSelectedstory }) {
  return (
    <ul>
      {storyTime.map((story) => (
        <AddWriter writer={story} key={story.id} />
      ))}
    </ul>
  );
}

function AddWriter({ writer, setSelectedstory }) {
  return (
    <li>
      <h3>{writer.name}</h3>
      <img src={writer.image} alt={writer.name} />
      <button className="button">Read</button>
      {/* <div className="tab-actions">
        <button onClick={() => setShowDetails((h) => !h)}>
          {showDetails ? "Hide" : "Show"} details
        </button> */}
      <p
        className={
          writer.category === "Romance"
            ? "green"
            : writer.category === "action"
            ? "red"
            : ""
        }
      >
        category: {writer.category}
      </p>
    </li>
  );
}

function AddStory() {
  return (
    <div className="scroll">
      <form className="form-add-friend">
        <label>📝story Title:</label>
        <input type="text" />

        <label>😝category:</label>
        <input type="text" />
      </form>
      <form>
        <label>🖋 Write Story</label>
        <textarea className="text-area" rows="10" cols="50" />
      </form>
      <Button>click me</Button>
    </div>
  );
}
