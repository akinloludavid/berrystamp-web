export const HeadingStyle = {
  // style object for base or default style
  baseStyle: {
    color: "#323232",
  },
  // styles for different sizes ("sm", "md", "lg")
  sizes: {},
  // styles for different visual variants ("outline", "solid")
  variants: {
    h1: {
      fontSize: "48px",
      fontWeight: "700",
      lineHeight: "56px",
      color: "#323232",
    },
    h2: {
      fontSize: "32px",
      fontWeight: "400",
      lineHeight: "40px",
      color: "#323232",
    },
    h3: {
      fontSize: "24px",
      fontWeight: "700",
      lineHeight: "32px",
      color: "#323232",
    },
    h4: {
      fontSize: "18px",
      fontWeight: "500",
      lineHeight: "23px",
      color: "",
    },
    h5: {
      fontSize: "16px",
      fontWeight: "700",
      lineHeight: "24px",
      color: "",
    },
  },
  // default values for `size` and `variant`
  defaultProps: {
    variant: "primary",
  },
};
