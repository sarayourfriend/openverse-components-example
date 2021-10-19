import type { PropType } from 'vue'

type Space =
  | 0
  | 1
  | 2
  | 4
  | 5
  | 6
  | 8
  | 10
  | 12
  | 14
  | 16
  | 20
  | 24
  | 30
  | 70
  | "px"
  | "ch"
  | "ex"
  | "half"
  | "full";

interface SpacingProps {
  marginStart?: Space;
  marginEnd?: Space;
  marginTop?: Space;
  marginBottom?: Space;
  marginX?: Space;
  marginY?: Space;
  margin?: Space;
  paddingStart?: Space;
  paddingEnd?: Space;
  paddingTop?: Space;
  paddingBottom?: Space;
  paddingX?: Space;
  paddingY?: Space;
  padding?: Space;
}

const SpaceProp = {
  type: String as PropType<Space>,
  required: false,
}

export const SpacingPropTypes = {
  marginStart: SpaceProp,
  marginEnd: SpaceProp,
  marginTop: SpaceProp,
  marginBottom: SpaceProp,
  marginX: SpaceProp,
  marginY: SpaceProp,
  margin: SpaceProp,
  paddingStart: SpaceProp,
  paddingEnd: SpaceProp,
  paddingTop: SpaceProp,
  paddingBottom: SpaceProp,
  paddingX: SpaceProp,
  paddingY: SpaceProp,
  padding: SpaceProp,
}

type TailwindSpacingPrefix =
  | "ms"
  | "me"
  | "mt"
  | "mb"
  | "mx"
  | "my"
  | "m"
  | "ps"
  | "pe"
  | "pt"
  | "pb"
  | "px"
  | "py"
  | "p"

const prefixToProp: Record<TailwindSpacingPrefix, keyof SpacingProps> = {
  ms: "marginStart",
  me: "marginEnd",
  mt: "marginTop",
  mb: "marginBottom",
  mx: "marginX",
  my: "marginY",
  m: "margin",
  ps: "paddingStart",
  pe: "paddingEnd",
  pt: "paddingTop",
  pb: "paddingBottom",
  px: "paddingX",
  py: "paddingY",
  p: "padding",
};

type SpacingClasses = Record<`${TailwindSpacingPrefix}-${Space}`, undefined | Space>

/**
 * Generates a `:class` object of Tailwind spacing classes based on the passed in props
 */
export function useSpacing(props: SpacingProps): SpacingClasses {
  return Object.entries(prefixToProp).reduce(
    (acc, [prefix, propName]) => ({
      ...acc,
      [`${prefix}-${props[propName]}`]: props[propName]
    }),
    {} as SpacingClasses
  );
}
