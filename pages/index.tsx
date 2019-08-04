import { NextPage } from "next";
import "../styles/main.css";

interface Props {
  userAgent?: string;
}

const Page: NextPage<Props> = ({ userAgent }) => <main>Your user agent: {userAgent}</main>;

Page.getInitialProps = async ({ req }) => {
  const userAgent = req ? req.headers["user-agent"] : navigator.userAgent;
  return { userAgent };
};

export default Page;
