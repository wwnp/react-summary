import React from "react";
import { Posts } from "../components/Posts";
export class HomeClass extends React.Component {
  state = {
    counter: 0,
    loading: true,
    posts: []
  };
  // or
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     counter: 0
  //   };
  //   this.counterHandler = this.counterHandler.bind(this) // *1
  // }
  counterHandler() {
    this.setState({
      counter: this.state.counter + 1
    });
    // to add 3 to counter at once
    // this.setState(
    //   (prevState) => {
    //     return { counter: prevState.counter + 1 };
    //   },
    //   () => {
    //     console.log("cb counter 1");
    //   }
    // );
    // // short -v (without return)
    // this.setState(
    //   (prevState) => ({ counter: prevState.counter + 1 }),
    //   () => {
    //     console.log("cb counter 2");
    //   }
    // );
    // this.setState(
    //   (prevState) => ({ counter: prevState.counter + 1 }),
    //   () => {
    //     console.log("cb counter 3");
    //   }
    // );
  }
  // const counterHandler = () => {
  //   this.setState({
  //     counter: this.state.counter + 1
  //   });
  // } // *4
  componentDidMount() {
    console.log("HomeClass::ComponentDidMount");

    fetch("https://jsonplaceholder.typicode.com/posts?_start=10&_limit=10")
      .then((response) => response.json())
      .then((json) => {
        this.setState({
          loading: false,
          posts: json
        });
        console.log(json);

        window.testDel = this.deletePost.bind(this);
      });

    // this.cnt = 0;
    // this.interval = setInterval(() => {
    //   this.cnt++;
    //   console.log(this.cnt);
    //   if (this.cnt === 5) {
    //     clearInterval(this.interval);
    //   }
    // }, 3000);
  }
  componentDidUpdate() {
    console.log("HomeClass::componentDidUpdate");
    // after change window size: to hide certain dom-element
  }
  deletePost = (id) => {
    const posts = this.state.posts.filter((item) => {
      return item.id !== id;
    });
    this.setState({
      posts
    });
  };
  render() {
    return (
      <div className="Home">
        {/* DATA ATRIBUTES */}
        <div>
          <h1
            data-name="dataHome"
            onClick={(e) => console.log(e.target.dataset.name)}
          >
            HomeClass
          </h1>
        </div>
        <hr />
        {/* COUNTER */}
        <div>
          <p>{this.state.counter}</p>
          {/*  *2 */}
          <button onClick={this.counterHandler.bind(this)}>Add (.bind)</button>
          {/*  *3 */}
          <button onClick={() => this.counterHandler()}>Add (arr fn)</button>
        </div>
        <hr />
        {/* FETCH POSTS */}
        <div>
          {this.state.loading ? (
            <h1>Loading...</h1>
          ) : (
            <Posts posts={this.state.posts} cb={this.deletePost} />
          )}
        </div>
        <hr />
      </div>
    );
  }
}
// Do not lose this:
// 1 binding in constructor *1
// 2 binding in onCLick (this.counterHandler.bind(this) ) *2
// 3 use () => this.counterHandler() *3
// 4 use arrow fn *4
