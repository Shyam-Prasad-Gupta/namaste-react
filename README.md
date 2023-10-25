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
        - useState() - superpowerful react variables
        - useEffect()

# more about react fiber/reconciliation/re-rendering etc.
 - https://github.com/acdlite/react-fiber-architecture

#