/* eslint-disable react/no-unknown-property */
import { Link } from "react-router-dom";
import "./index.scss";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth, goofleProvider } from "../../config/firebase";
function Login() {
  const handleLoginGoogle = () => {
    signInWithPopup(auth, goofleProvider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        // const token = credential.accessToken;
        // // The signed-in user info.
        // const user = result.user;
        // // IdP data available using getAdditionalUserInfo(result)
        // // ...
        console.log(credential);
      })
      .catch((error) => {
        // // Handle Errors here.
        // const errorCode = error.code;
        // const errorMessage = error.message;
        // // The email of the user's account used.
        // const email = error.customData.email;
        // // The AuthCredential type that was used.
        // const credential = GoogleAuthProvider.credentialFromError(error);
        // // ...
        console.log(error);
      });
  };
  return (
    <div className="login">
      <iframe
        className="login_video"
        src="https://player.vimeo.com/video/695343114?h=1a71dea0f0?controls=0&sidedock=0&title=0&autoplay=1&muted=1&loop=1"
        width="640"
        height="360"
        frameborder="0"
        allow="autoplay; fullscreen; picture-in-picture"
        allowfullscreen
      ></iframe>
      <div className="wrapper">
        <div className="login_logo">
          <Link to="/">
            <img
              src="https://movie-eta-sage.vercel.app/assets/movix-logo-d720c325.svg"
              width={200}
              alt=""
            />
          </Link>
        </div>
        <div className="line"></div>
        <div className="login_form">
          <h3>Login into your account</h3>
          <input type="text" placeholder="Username" />
          <input type="password" placeholder="Password" />
          <button>Login</button>
          <button className="login_google" onClick={handleLoginGoogle}>
            <img
              src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-webinar-optimizing-for-success-google-business-webinar-13.png"
              width={30}
              alt=""
            />
            <span>Login with Google</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
