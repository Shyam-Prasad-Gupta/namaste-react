# namaste-react
# why and what parse is doing
- Dev build
- Local Server
- HMR - Hot Module Reload - Parcel can do as it used File watching algo written in c++
- It caches the things for faster build
- Image optimazation
- Minification
- Bundling
- File compression
- Consistent Hashing
- Code splitting
- Differential Bundling - means support for older browsers
- Diagnostic
- Error Handing
- HTTPs
- Tree shaking - emove unused code
- Different build for dev and prod bundles 

# There are two types of import/export in react
- Default import/export
    - export default <function/variable to export>;
    - import <function/variable to import> from "....";

- Named import/export 
    - export const var = "dsfsdf";
            OR
    - export function fxn() {....};
    - import {<function/variable to import>} from "....";

# React Hooks
- These are just JS utility functions written by Facebook Devs for us
    - Most used react hooks are
        - useState() - it gives superpowerful react variables
        - useEffect() - Its takes 2 arguments one is callback function and other is dependency array here dependency array is not mandatory. 
            case 1: This react hook function will be called at least once irrespective of the dependency array value. If the dependency array is not passed then useEffect will be called after every page render.
            case 2: If the dependency array is passed as empty array ([]) => in that case callback function will be called only after the first time rendering of the component.
            case 3: If there is any items in dependency array then ([reactBtnName]) => call back function will be called after first time rendering of the component and will be called again once there is any change in dependency array items.

# more about react fiber/reconciliation/re-rendering etc.
 - https://github.com/acdlite/react-fiber-architecture

# Array Destructing
# Object Destructing
# Optional Chaining Operator (?.)
 - The optional chaining (?.) operator accesses an object's property or calls a function. If the object accessed or function called using this operator is undefined or null, the expression short circuits and evaluates to undefined instead of throwing an error.
 # Shimmer UI
 # Conditional Rendering
 # React Routing or Client Side Routing
    - We achieve the client side routing with the help of react-router-dom which helps in client side routing.
    - react-router-dom gives the createBrowserRouter, RouterProvider, Link components which enables us to do the following:
        - createBrowserRouter: with the help of this we can create the routing
        - RouterProvider: with the help of this we let configure the routing
        - Link: By using this componet we can achieve the linking of pages/components inside page or components
    - *Note: Never use the anchor tag to link pages inside another page as it will lead to the re-rendering of the whole page, instead use the Link compnent that will only rerender the new components as configured in the child routing of the parent or ecnclosing page/component. 
