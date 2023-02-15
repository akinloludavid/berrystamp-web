// https://github.com/chakra-ui/chakra-ui/blob/main/packages/theme/components/input.ts

const search = {
  field: {
    borderRadius: "8px",
    outline: "none",
    bgColor: "#EFEFEFCC",
    fontSize: "16px",
    fontWeight: "300",
    height: "44px",
    w: ["100%"],
    color: "#323232",
    _placeholder: {
      color: "#757575",
      fontSize: ["16px"],
      fontWeight: "400",
      lineHeight: "24px",
    },
    _focus: {
      border: "1px solid #342773",
    },
  },
};
const primary = {
  field: {
    borderRadius: "8px",
    outline: "none",
    border: "1px solid #C9C9C9",
    bgColor: "#EFEFEFCC",
    fontSize: "16px",
    fontWeight: "300",
    height: "44px",
    w: ["100%"],
    color: "#323232",
    _placeholder: {
      color: "#757575",
      fontSize: ["16px"],
      fontWeight: "400",
      lineHeight: "24px",
    },
    _focus: {
      border: "1px solid #342773",
    },
  },
};
export const InputStyles = {
  baseStyle: {},
  variants: {
    search,
    primary,
  },
  defaultProps: {
    variant: "search",
  },
};
