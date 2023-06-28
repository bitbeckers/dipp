"use client";

import { Divider, Flex, Heading, Link, Text } from "@chakra-ui/react";
import { Connected } from "../components/Connected";
import { Header } from "../components/header/Header";

const Post = () => {
  const mockPosts = {
    title: "MockPost",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  };

  return (
    <Flex
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      outline={"1em"}
      flexDir={"column"}
      boxSize={"md"}
      gap={"0.5em"}
      p={"2rem"}
    >
      <Link href={"/publications/read"} key={crypto.randomUUID()}>
        <Heading size="lg">{mockPosts.title}</Heading>
        <Divider />
        <Text size="md" noOfLines={5}>
          {mockPosts.content}
        </Text>
      </Link>
    </Flex>
  );
};

const Content: React.FC<{ children: any }> = ({ children }) => {
  return (
    <Flex flexDirection={"column"} gap={"1em"} padding={"2em"}>
      {children}
    </Flex>
  );
};

const Page = () => {
  return (
    <>
      <Header />
      <Divider m={"2rem"} />
      <Content>
        {Array.from(Array(5)).map(() => (
          <Post />
        ))}
        <Connected>
          {Array.from(Array(5)).map(() => (
            <Post />
          ))}
        </Connected>
      </Content>
    </>
  );
};

export default Page;
