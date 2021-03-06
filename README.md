[![npm][npm-badge]][npm-badge-url]

# Stencil State Tunnel

This project was built to provide additional functionality to developers working with stencil
components and sharing state across components and through slots.

## Example Usage

### 1. Create a Tunnel.

Define the structure of data to be passed through the tunnel.  Also provide a default value to the tunnel.
The first argument is the default value and the second argument is how the consumer works.  Mostly you will just need
to copy and paste this. 'context-consumer' is a component that is included in this package.

`./data/message.tsx`

```jsx
import { createProviderConsumer } from '@stencil/state-tunnel';

export interface State {
  message: string,
  increment?: () => void
}

export default createProviderConsumer<State>({
    message: 'Hello!'
  },
  (subscribe, child) => <context-consumer subscribe={subscribe} renderer={child} />
);
```

### 2. Place your tunnel entry.
Usually this will be at the top of your component tree. Think of this as a way to take state from this
component and then push it down components further down the tree.

`./components/my-app.tsx`
```jsx
import Tunnel from './data/message.ts';

@Component({
  tag: 'my-app',
})
export class MyApp {

  @Prop() intro: string = 'Hello!';
  @State() message: string = '';

  count: number = 0;

  componentWillLoad() {
    this.increment();
  }

  increment = () => {
    this.count = this.count + 1;
    this.message = `${this.intro} ${this.count}`;
  }

  render() {
    const state = {
      message: this.message,
      increment: this.increment
    };
    return (
      <div>
        <header>
          <h1>Stencil App Starter</h1>
        </header>
        <Tunnel.Provider state={state}>
          <some-child-component/>
        </Tunnel.Provider>
      </div>
    );
  }
}
```

### 3. Place your tunnel exit points.
You can then create an exit point any where within your component tree that lives below the Tunnel.Provider.

`./components/way-down-child.tsx`
```jsx
import { Component } from '@stencil/core';
import Tunnel from './data/message.ts';

@Component({
  tag: 'way-down-child',
})
export class WayDownChild {
  render() {
    return (
      <Tunnel.Consumer>
        {({ message, increment }) => (
          <div class='app-profile'>
            <button onClick={increment}>Increment Num</button>
            <p>{message}</p>
          </div>
        )}
      </Tunnel.Consumer>
    );
  }
}

```
[npm-badge]: https://img.shields.io/npm/v/@stencil/state-tunnel.svg
[npm-badge-url]: https://www.npmjs.com/package/@stencil/state-tunnel
