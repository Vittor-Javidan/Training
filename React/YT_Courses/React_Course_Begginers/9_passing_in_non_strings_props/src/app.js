import Joke from "./Components/Joke"

function App(props) {

   return (
      <div>
         <Joke
            punchline="It's hard to eaxplain puns to kleptomaniacs because they alway take things literally."
            isPun={true}
            upvotes={10}
            downvotes={2}
            comments={[{author: "", body: "", title: ""}]}
         />
         <Joke
            setup="I got my daughter a fridge for her birthday."
            punchline="I can't wait to see her face light up when she opens it."
            isPun={false}
         />
         <Joke
            setup="How did the kacker scape the police?"
            punchline="He just ransomware!"
            isPun={true}
         />
         <Joke
            setup="Why don't pirates travel on mountain roads?"
            punchline="Scurvy."
            isPun={true}
         />
         <Joke
            setup="Why do bees stay in the hive in the winter?"
            punchline="Swarm."
            isPun={true}
         />
         <Joke
            setup="What's the best thing about Switzerland?"
            punchline="I don't know, but the flag is a big plus"
            isPun={true}
         />
      </div>
   )
}

export default App