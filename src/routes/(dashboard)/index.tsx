import { Button } from "~/components/ui/button";
import { signOut } from "~/lib/utils/auth";

const Home = () => {
  return (
    <section>
      <p>Home</p>
      <Button onClick={signOut}>Signout</Button>
    </section>
  );
};

export default Home;
