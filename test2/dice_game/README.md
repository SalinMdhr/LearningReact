### `npm init -y`
        generates package.json file. 
        -y skips the prompts like entering project name, etc.


### `npx create-react-app dice_game`
        creates dice_game folder with all the necessary files and folders included.
        
### STYLED COMPONENT
    styled-components is the result of wondering how we could enhance CSS for styling React component systems. By focusing on a single use case we managed to optimize the experience for developers as well as the output for end users.

    Apart from the improved experience for developers, styled-components provides:

    Automatic critical CSS: styled-components keeps track of which components are rendered on a page and injects their styles and nothing else, fully automatically. Combined with code splitting, this means your users load the least amount of code necessary.
    No class name bugs: styled-components generates unique class names for your styles. You never have to worry about duplication, overlap or misspellings.
    Easier deletion of CSS: it can be hard to know whether a class name is used somewhere in your codebase. styled-components makes it obvious, as every bit of styling is tied to a specific component. If the component is unused (which tooling can detect) and gets deleted, all its styles get deleted with it.
    Simple dynamic styling: adapting the styling of a component based on its props or a global theme is simple and intuitive without having to manually manage dozens of classes.
    Painless maintenance: you never have to hunt across different files to find the styling affecting your component, so maintenance is a piece of cake no matter how big your codebase is.
    Automatic vendor prefixing: write your CSS to the current standard and let styled-components handle the rest.
    You get all of these benefits while still writing the CSS you know and love, just bound to individual components.


### INSTALLATION `styledComponent`
    # with npm
    npm install styled-components

    # with yarn
    yarn add styled-components


### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

