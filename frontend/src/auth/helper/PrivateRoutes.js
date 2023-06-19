// import React from 'react';
// import { Route, Navigate } from 'react-router-dom';
// import { isAuthenticated } from '../helper/index';

// const PrivateRoute = ({ component: Component, ...rest }) => {
//   return (
//     <Route
//       {...rest}
//       render={(props) =>
//         isAuthenticated() ? (
//           <Component {...props} />
//         ) : (
//           <Navigate
//             to="/signin"
//             state={{ from: props.location }}
//             replace
//           />
//         )
//       }
//     />
//   );
// };

// export default PrivateRoute;