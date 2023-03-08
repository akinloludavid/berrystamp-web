import { extendTheme } from "@chakra-ui/react";
import { ButtonStyles as Button } from "./customComponents/Button";
import { TextStyle as Text } from "./customComponents/Text";
import { HeadingStyle as Heading } from "./customComponents/Heading";
import { InputStyles as Input } from "./customComponents/Input";
import { FormLabelStyle as FormLabel } from "./customComponents/FormLabel";
import { DividerStyle as Divider } from "./customComponents/Divider";

import { colors } from "./customComponents/colors";
const components = {
  Button,
  Text,
  Heading,
  Input,
  FormLabel,
  Divider,
};
export const customTheme = extendTheme({
  fonts: {
    heading: "Lato, sans-serif",
    body: "Lato, sans-serif",
  },
  components,
  colors,
});
