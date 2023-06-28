"use client";

import React, { useEffect, useState } from "react";
import {
  PublicationId,
  publicationId,
  useProfile,
  usePublication,
} from "@lens-protocol/react-web";
import { Header } from "../../../components/header/Header";
import { Center, Divider, Flex, Heading, Text, Box } from "@chakra-ui/react";
import { remark } from "remark";
import html from "remark-html";
import matter from "gray-matter";
import { useRouter } from "next/router";

const ReadPublication: React.FC<{ publicationId?: PublicationId }> = ({
  publicationId = "0x00-0x01",
}) => {
  const [postData, setPostData] = useState<{
    title: string;
    id: string;
    content: string;
  }>({ title: "Title", id: "uxox", content: "test test test" });

  const mockContent = `# Filia Gorgoneum init
  ## Serpentis tractu Troum quibus
  
  Lorem markdownum [non et conataeque](http://www.suspiriahastam.org/meres) auso:
  inposuit crinibus tenent, hic qui sed mora partem! Omnes unde in sunto servare,
  certa, materiamque fugam **classes**! Est sensit convexum matutinis muros, unde
  brevi, relatu? Elususque dicor stabulorum amplectitur voluntas noctis piosque
  utque pascat peregrino canibusve, aera.
  
  1. Illic Phlegethontide percussit permulcetque
  2. Abiit mali damno litis simulacra dicta
  3. Illis manes de viso
  4. Cum artus vix
  5. Loqueretur noctes
  6. Poenas tellus iuncti quaesitique tumidum
  
  Erat adhaerent tabuerant saeva incesto, et suique alto qua Dymantida. Atque
  sicut fulvae vindicet, iacentes et ulla et saepe quo fuissem *neptis* sic erat
  et.`;

  useEffect(() => {
    const parseContent = async () => {
      const matterResult = matter(mockContent);
      const processedContent = await remark()
        .use(html)
        .process(matterResult.content);
      const contentHtml = processedContent.toString();
    };

    parseContent();
  }, []);

  return (
    <Flex p={"2em"} direction={"column"} border={"2px"}>
      <Heading>{postData.title}</Heading>
      <Text size="sm">{postData.id}</Text>
      <Box>
        <div dangerouslySetInnerHTML={{ __html: postData.content }} />
      </Box>
    </Flex>
  );
};

const Page = () => {
  const router = useRouter();
  const { data: profile, loading } = usePublication({
    publicationId: publicationId(router.query.publicationId as string),
  });

  return (
    <>
      <Header />
      <Divider my={"2em"} />
      {profile?.id ? (
        <Center p={"2em"}>
          <ReadPublication />
        </Center>
      ) : null}
    </>
  );
};

export default Page;
