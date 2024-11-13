// import React, { Component } from "react";

// class SignUp extends Component {
//   constructor() {
//     super();
//     this.state = {
//       username: "",
//       email: "",
//       password: "",
//     };
//   }

//   handleChange = (e) => {
//     this.setState({
//       [e.target.name]: e.target.value,
//     });
//   };

//   handleSubmit = (e) => {
//     e.preventDefault();
//     // You can add form submission logic here, e.g., sending data to a server
//     console.log("Form submitted with data:", this.state);
//   };

//   render() {
//     return (
//       <div>
//         <h2>Sign Up</h2>
//         <form onSubmit={this.handleSubmit}>
//           <div>
//             <label htmlFor="username">Username</label>
//             <input
//               type="text"
//               name="username"
//               value={this.state.username}
//               onChange={this.handleChange}
//             />
//           </div>
//           <div>
//             <label htmlFor="email">Email</label>
//             <input
//               type="email"
//               name="email"
//               value={this.state.email}
//               onChange={this.handleChange}
//             />
//           </div>
//           <div>
//             <label htmlFor="password">Password</label>
//             <input
//               type="password"
//               name="password"
//               value={this.state.password}
//               onChange={this.handleChange}
//             />
//           </div>
//           <button type="submit">Sign Up</button>
//         </form>
//       </div>
//     );
//   }
// }

// export default SignUp;

export default function SignUp() {
  return <div></div>;
}
