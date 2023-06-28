"use client";
import {
  ProfileId,
  useActiveProfile,
  useProfile,
  usePublications,
} from "@lens-protocol/react-web";
import { Header } from "../../components/header/Header";
import { Flex, Text } from "@chakra-ui/react";

const Publications: React.FC<{ handle: string }> = ({ handle }) => {
  const { data: profile, loading } = useProfile({ handle });
  return (
    <Flex p={"2em"} direction={"column"} w={"450px"}>
      {profile?.id ? <Publication profileId={profile?.id} /> : undefined}
    </Flex>
  );
};

const Publication: React.FC<{ profileId: ProfileId }> = ({ profileId }) => {
  const { data: posts, loading } = usePublications({ profileId: profileId });
  return (
    <Flex p={"2em"} direction={"column"} w={"450px"}>
      {!loading
        ? posts?.map((post) => <Text key={post.id}>{post.id}</Text>)
        : null}
    </Flex>
  );
};

const Page = () => {
  const { data: profile, loading } = useActiveProfile();

  return (
    <>
      <Header />
      {profile?.id ? <Publications handle={profile?.handle} /> : null}
    </>
  );
};

export default Page;
