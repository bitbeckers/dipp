"use client";
import { useActiveProfile } from "@lens-protocol/react-web";
import { Header } from "../../components/header/Header";
import { Divider, Flex, Heading, Text } from "@chakra-ui/react";

const Profile = () => {
  const { data: profile, loading } = useActiveProfile();
  return (
    <Flex p={"2em"} direction={"column"} w={"450px"}>
      <Heading>{profile?.handle}</Heading>
      <Divider />
      <Text>{profile?.bio}</Text>
      <Text>{profile?.interests}</Text>
    </Flex>
  );
};

const Page = () => {
  return (
    <>
      <Header />

      <Profile />
    </>
  );
};

export default Page;
