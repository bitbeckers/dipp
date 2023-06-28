import { useActiveProfile } from "@lens-protocol/react-web";
import Link from "next/link";

import { CATEGORIES } from "../../config/ui";
import { LoginButton } from "../auth/LoginButton";
import {
  Button,
  ButtonGroup,
  Divider,
  Flex,
  Grid,
  GridItem,
  Heading,
  Spacer,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";
import { NetworkSwitcher } from "../NetworkSwitcher";

export function Header() {
  const { data: profile } = useActiveProfile();

  return (
    <>
      <Grid
        maxW={"1600px"}
        templateAreas={`"title "
                  "nav"`}
        gridTemplateRows={"repeat(2, 40px)"}
        gap="0.5em"
        fontWeight="bold"
        p={"1rem"}
      >
        <GridItem area={"title"} p={"0.5rem"}>
          <Flex>
            <Heading>D I P P</Heading>

            <Spacer />
            <Flex gap={"1rem"}>
              {profile && <strong>{profile.handle}</strong>}
              <LoginButton />
            </Flex>
          </Flex>
        </GridItem>

        <GridItem area={"nav"} w={"100%"}>
          <Flex flexDir={"row"} gap={"0.5em"} p={"0.5rem"}>
            <Link href={"/publications/create"} key={"create"}>
              <Button colorScheme="green">{"Create what Matters"}</Button>
            </Link>
            <ButtonGroup>
              {CATEGORIES.map(({ path, label }) => (
                <Link href={path} key={label}>
                  <Button w="125px">{label}</Button>
                </Link>
              ))}
            </ButtonGroup>
          </Flex>
        </GridItem>
      </Grid>
    </>
  );
}
