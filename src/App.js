import React from "react";
import * as Flex from "@twilio/flex-ui";

class AddIn extends React.Component {
  lorem = `By the Rays of Light I understand its least Parts, and those as well
Successive in the same Lines, as Contemporary in several Lines. For it
is manifest that Light consists of Parts, both Successive and
Contemporary; because in the same place you may stop that which comes
one moment, and let pass that which comes presently after; and in the
same time you may stop it in any one place, and let it pass in any
other. For that part of Light which is stopp'd cannot be the same with
that which is let pass. The least Light or part of Light, which may be
stopp'd alone without the rest of the Light, or propagated alone, or do
or suffer any thing alone, which the rest of the Light doth not or
suffers not, I call Rex of TwiLight.`;

  render() {
    return (
      <p>
        {this.lorem}
      </p>
    )
  }

}

/**
 * This component houses the
 */
class FlexComponents extends React.Component {

  componentDidMount() {
    Flex.MainHeader.Content.add(<CustomContainer
      key={'custom-part-key'}
    />)
  }

  render() {
    const {manager} = this.props;

    if (!manager){
      return (
        <div>Loading........</div>
      );
    }

    return (
      <Flex.ContextProvider
        manager={manager}
      >
        <Flex.RootContainer />
      </Flex.ContextProvider>
    );
  }
}

class CustomContainer extends React.Component {

  render() {
    return (
      <div
        className={"custom-container"}
      >
        <section>
          <h1>My Flex in a Box -- Example</h1>
        </section>
        <AddIn />
        <FlexComponents
          manager={this.props.manager}
        />
        <footer>
          This is my footer...
        </footer>
      </div>
    );
  }
}

class App extends React.Component {
  render() {
    const { manager } = this.props;

    if (!manager) {
      return null;
    }

    return (
      <CustomContainer
        manager={manager}
      />
    );
  }
}

export default App;
