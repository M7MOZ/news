import styles from "./Side.module.css";
import New from "./New";
const NEWS = [
  {
    header: "Hydrogen VS Electric Cars",
    content: "Will hydrogen-fueled cars ever catch up to EVs?",
  },
  {
    header: "The Downsides of AI Artistry",
    content:
      "What are the possible adverse effects of on-demand AI image generation?",
  },
  {
    header: "Is VC Funding Drying Up?",
    content:
      "Private funding by VC firms is down 50% YOY. We take a look at what that means",
  },
];
function Side() {
  return (
    <div className={styles.side}>
      <h1>New</h1>
      {NEWS.map((n, i) => (
        <New header={n.header} content={n.content} key={i} />
      ))}
    </div>
  );
}

export default Side;
