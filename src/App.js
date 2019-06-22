import React from "react";
import * as Flex from "@twilio/flex-ui";

const style =  {
  header:{
    background: "aqua"
  },
  footer:{
    background: "aqua"
  },
  dummyText: {
    background: "aqua"
  }
};

/**
 * Dummy text component
 */
class DummyTextComponent extends React.Component {

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
      <p
        style={style.dummyText}
      >
        {this.lorem}
      </p>
    );
  }
}

/**
 * this component houses the Flex Context and root container. It needs a manager for the Context provider though the rest is modular.
 * you can add,remove and replace just as you would if the Flex container was in App.js
 */
class FlexComponents extends React.Component {

  componentDidMount() {

    //adding customizations
    Flex.MainHeader.Content.add(
      <CustomContainer
        key={'custom-container-key'}
      />
    );
  }

  render() {
    const { manager } = this.props;

    if (!manager) {
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

/**
 * simulates an existing app to place flex in
 */
class CustomContainer extends React.Component {

  render() {

    return (
      <div
        className={"custom-container"}
      >
        <section
          className={'header'}
          style={style.header}
        >
          <h1>My Flex in a Box -- Example</h1>
        </section>
          <DummyTextComponent />
          <FlexComponents
            manager={this.props.manager}
          />
        <footer
          style={style.footer}
        >
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

    //  using a custom component container
    return (
      <CustomContainer
        manager={manager}
      />
    );
  }
}

export default App;
