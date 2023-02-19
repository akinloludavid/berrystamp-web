export const TextStyle = {
  // style object for base or default style
  baseStyle: {
    color: "#757575",
  },
  // styles for different sizes ("sm", "md", "lg")
  sizes: {},
  // styles for different visual variants ("outline", "solid")
  variants: {
    body1: {
      fontSize: "20px",
      fontWeight: "400",
      lineHeight: "19px",
      color: "#757575",
    },
    body2: {
      fontSize: "16px",
      fontWeight: "400",
      lineHeight: "24px",
      color: "#757575",
    },
    body3: {
      fontSize: "14px",
      fontWeight: "400",
      lineHeight: "18px",
      color: "#323232",
    },
    body4: {
      fontSize: "16px",
      fontWeight: "400",
      lineHeight: "18px",
      color: "#323232",
    },
  },
  // default values for `size` and `variant`
  defaultProps: {
    variant: "body1",
  },
};
