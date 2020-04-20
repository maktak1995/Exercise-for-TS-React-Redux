import * as React from "react";

// Propの型定義
interface Props {
  name: string;
}

interface State {
  count: number;
}

export class SubComponent extends React.Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  handleClick(): void {
    console.log("clicked");

    this.setState({
      count: this.state.count + 1,
    });
  }

  render(): React.ReactNode {
    return (
      <div>
        <h2>{this.props.name}</h2>
        <div>{this.state.count}</div>
        <button onClick={this.handleClick.bind(this)}>Add +1</button>
      </div>
    );
  }
}
