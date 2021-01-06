import React from "react";
import { Box, BoxProps, Flex, Heading, Text } from "@chakra-ui/layout";
import { Field, Form } from "react-final-form";
import { Button, Input, useBoolean, useToast } from "@chakra-ui/react";
import { localStorageEffect } from "utils/shared";
import { atom, useRecoilState } from "recoil";
import subscribeToNewsletter from "../mutations/newsletter";

interface SubscribeCardProps extends BoxProps {}

interface FormValues {
  email: string;
}

const getFieldName = (k: keyof FormValues) => k;

const hasSubscribedState = atom({
  key: "subscribe/hasSubscribed",
  default: false,
  effects_UNSTABLE: [localStorageEffect("subscribe/hasSubscribed")],
});

export function SubscribeCard({ ...rest }: SubscribeCardProps) {
  const [isLoading, { on, off }] = useBoolean();
  const [hasSubscribed, setHasSubscribed] = useRecoilState(hasSubscribedState);
  const toast = useToast();
  const onSubmit = async ({ email }: FormValues) => {
    on();

    try {
      if (!email) {
        throw new Error("Please provide an email.");
      }

      await subscribeToNewsletter({ email });

      setHasSubscribed(true);
    } catch (error) {
      toast({
        title: error.message,
        status: "error",
      });
      console.error(error);
    }
    off();
  };

  return (
    <Box p={4} maxW={500} borderRadius="md" bg="whiteAlpha.200" position="relative" {...rest}>
      <Heading mb={1} size="md">
        Get the latest from me
      </Heading>
      <Text mb={4}>
        If you want to hear about updates about this place (new posts, new awesome products I find
        etc) add your email below:
      </Text>
      {hasSubscribed ? (
        <Text color="brand.500" fontWeight={500}>
          Thanks! You're subscribed. Catch you on email.
        </Text>
      ) : (
        <Form
          onSubmit={onSubmit}
          render={({ handleSubmit }) => (
            <Flex as="form" onSubmit={handleSubmit}>
              <Field name={getFieldName("email")}>
                {({ input }) => (
                  <Input
                    bg="whiteAlpha.50"
                    placeholder="andyasprou@gmail.com"
                    w="100%"
                    _focus={{
                      borderColor: "brand.500",
                      bg: "blackAlpha.800",
                    }}
                    isDisabled={isLoading}
                    type="email"
                    autoComplete="email"
                    {...input}
                  />
                )}
              </Field>

              <Button
                minW={140}
                colorScheme="brand"
                bg="brand.500"
                ml={2}
                isLoading={isLoading}
                loadingText="Loading..."
                type="submit"
              >
                Subscribe
              </Button>
            </Flex>
          )}
        />
      )}
    </Box>
  );
}
