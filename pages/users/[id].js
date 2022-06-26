import { useRouter } from "next/router";
import MainContainer from "../../components/MainContainer";
import styles from "../../styles/User.module.scss";

export default ({ user }) => {
  return (
    <MainContainer keywords={user.name} title={user.name}>
      <div className={styles.user}>
        <h1>User {user.id}</h1>
        <div>User name: {user.name}</div>
      </div>
    </MainContainer>
  );
};

export async function getServerSideProps({ params }) {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/users/" + params.id
  );
  const user = await response.json();
  return {
    props: { user }, // will be passed to the page component as props
  };
}
