export const DividerStyle = {
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
      border: "0.5px solid #D9D9D9",
    }),
  },

  // default values for `size` and `variant`
  defaultProps: {
    variant: "primary",
  },
};
