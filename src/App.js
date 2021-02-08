import "./App.css";
import ProfileComponent from "./Profile/ProfileComponent";
import PropTypes from "prop-types";
const App = () => {
  const styleObject = {
    backgroundColor: "pink",
    color: "grey",
    textAlign: "center",
    fontSize: "150%",
  };
  const handleName = (name) => {
    alert(`Hi, I'm EMNA LABIADH`);
  };
  return (
    <div style={styleObject}>
      <ProfileComponent
        FullName="Emna Labiadh"
        bio="My name is Emna Labiadh i'm 19 years old i'm a student in GOMYCODE institute an i'm tunisian and i live in Tunis"
        profession="Student"
        className="bio"
        image="https://image.freepik.com/premium-vector/woman-girl-female-cartoon-avatar-icon_25030-13347.jpg"
        className="image"
        handleName={handleName}
      />
    </div>
  );
};
ProfileComponent.defaultProps = {
  FullName: "uncknown",
  image:
    "https://cdn1.vectorstock.com/i/thumb-large/45/70/female-avatar-profile-picture-silhouette-light-vector-4684570.jpg",
};
ProfileComponent.PropTypes = {
  FullName: PropTypes.string,
  bio: PropTypes.string,
  profession: PropTypes.string,
  image: PropTypes.string,
};
export default App;
