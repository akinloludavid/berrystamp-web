export const ButtonStyles = {
  // style object for base or default style
  baseStyle: {
    outline: "none",
    _focus: { boxShadow: "none" },
  },
  // styles for different sizes ("sm", "md", "lg")
  sizes: {},
  // styles for different visual variants ("outline", "solid")
  variants: {
    primary: (props: any) => ({
      bg: "pryColor",
      fontSize: "16px",
      fontWeight: "400",
      lineHeight: "24px",
      borderRadius: "10px",
      color: "#FDFDFD",
      padding: "10px 20px",
      minWidth: "164px",
      _hover: {
        bg: "#342773",
        color: "#FDFDFD",
      },
      _disabled: {
        bg: "#D8D5E8",
        color: "#9E97C4",
      },
      "@media (max-width:480px)": {},
    }),
    secondary: (props: any) => ({
      bg: "none",
      fontSize: "16px",
      fontWeight: "400",
      lineHeight: "24px",
      borderRadius: "10px",
      border: "1px solid #3E2F8A",
      color: "pryColor",
      minWidth: "164px",
      _hover: {
        bg: "#E8E8E8",
        color: "#808080",
      },
      "@media (max-width:480px)": {
        maxWidth: "279px",
      },
    }),
  },

  // default values for `size` and `variant`
  defaultProps: {
    variant: "primary",
  },
};
