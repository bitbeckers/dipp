"use client";

import React, { useState } from "react";
import {
  ProfileId,
  useActiveProfile,
  useProfile,
} from "@lens-protocol/react-web";
import { Header } from "../../../components/header/Header";
import {
  Button,
  ButtonGroup,
  Center,
  Divider,
  Flex,
  Textarea,
} from "@chakra-ui/react";
import {
  FormProvider,
  SubmitHandler,
  useForm,
  useFormContext,
} from "react-hook-form";
import { EditorState } from "prosemirror-state";
import { ProseMirror } from "@nytimes/react-prosemirror";
import { schema } from "prosemirror-schema-basic";

type FormInputs = {
  creator: ProfileId;
  content: string;
};

const CreateForm: React.FC<{ handle: string }> = ({ handle }) => {
  const { data: profile, loading } = useProfile({ handle });
  const methods = useForm<FormInputs>();
  const {
    handleSubmit,
    formState: { errors },
  } = methods;

  const onSubmit: SubmitHandler<FormInputs> = (data) => {
    console.log(data.content);
  };

  return (
    <Flex p={"2em"} direction={"column"} border={"2px"}>
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <InputField />
          <Button type="submit" colorScheme="green">
            Submit
          </Button>
        </form>
      </FormProvider>
    </Flex>
  );
};

const InputField: React.FC<{}> = () => {
  const { register } = useFormContext(); // retrieve all hook methods
  const [preview, setPreview] = React.useState(false);
  const [mount, setMount] = useState(null);

  return (
    <Flex flexDir={"column"} justifyContent={"flex-start"} minH={"350px"}>
      <ButtonGroup w={"100%"} mb={"1em"}>
        <Button w={"50%"} onClick={() => setPreview(false)}>
          {"Edit"}
        </Button>
        <Button w={"50%"} onClick={() => setPreview(true)}>
          {"Preview"}
        </Button>
      </ButtonGroup>
      <Flex h={"100%"}>
        {preview ? (
          <ProseMirror
            mount={mount}
            defaultState={EditorState.create({ schema })}
          >
            {/* <div ref={setMount} /> */}
          </ProseMirror>
        ) : (
          <Textarea
            minH={"250px"}
            variant={"outline"}
            size="lg"
            defaultValue={"Content input"}
            {...register("content")}
          />
        )}
      </Flex>
    </Flex>
  );
};

const Page = () => {
  const { data: profile, loading } = useActiveProfile();

  return (
    <>
      <Header />
      <Divider my={"2em"} />
      {profile?.id ? (
        <Center>
          <CreateForm handle={profile?.handle} />
        </Center>
      ) : null}
    </>
  );
};

export default Page;
