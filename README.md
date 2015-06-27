# React On Rails

This is a demo app to experiment with the [react-rails](https://github.com/reactjs/react-rails) library. It also explores how to pass state changes around inside a set of nested components.

It isn't intended to be an introduction to React: for that, I've created [React Step-by-Step](https://github.com/billgathen/react-step-by-step) which starts with the basics and adds in many of the cool features of React itself. Once you've played around with the examples found there, the React components in this repo will make a lot more sense. :)

## react-rails

The app is a vanilla [Rails 4](https://github.com/rails/rails) application exposing a [ColorPicker component](app/assets/javascripts/components/color_picker.js.jsx) powered by [React](https://facebook.github.io/react/). The configuration data to set up the component is supplied by the Rails [controller](app/controllers/color_picker_controller.rb) (to simulate getting data from a database) and passed into the React components via the ```react_component``` call in the [view](app/views/color_picker/index.html.erb).

In a react-rails app, all react components live in [app/assets/javascripts/components](app/assets/javascripts/components) and are rendered automatically via the asset pipeline, so no JS build tools (Grunt/Gulp/Webpack) are required. Components follow a ```widget.js.jsx``` naming convention so react-rails knows to parse their JSX into regular JS prior to rendering.

This demo is isomorphic, meaning it renders the initial HTML for the page on the server, including the React components, but React takes over for all user interactions once the page finishes loading. This speeds up the initial render, avoiding the "white flash" at page load, and [improves SEO](http://www.sitepoint.com/isomorphic-javascript-applications/). All that's needed to enable this feature is adding ```{ prerender: true }``` to the ```react_component``` call!

## Sharing state between nested components

The ColorPicker component is built on sub-components in the standard React style. ColorPicker delegates behavior to ColorDisplay and ColorList. ColorList further delegates to Color.

The behavior we want to handle is clicking a color to select it. When that happens, we want ColorDisplay to display the new selection without directly tying the Color components to ColorDisplay.

For nested components, React [recommends](https://facebook.github.io/react/tips/communicate-between-components.html) communicating via props. We hand the currently-selected color to ColorDisplay and the list of available colors to ColorList using this approach.

What complicates matters is that we maintain state (i.e., which color is selected) in **ColorPicker**, but we want that state to update whenever a **Color** component is clicked. When it does, ColorPicker and all the child components will re-render themselves internally and look for changes. If any are found, React updates the relevant bits of the page to match.

To implement the state change, we create a ```colorChanged``` function on the ColorPicker component, which accepts a new color name and calls ```setState``` with it, triggering the re-render.

However, ColorPicker doesn't know when something is clicked, so we use a ```colorChanged``` prop to hand the ```colorChanged``` function itself from ColorPicker to ColorList, and then from ColorList to Color. In Color, we have a function called ```chosen``` that is fired whenever the component is clicked. ```chosen``` uses the passed-in ```colorChanged``` function and ```this.props.name``` to send a message back to ColorPicker and let it know we've selected a new color.
