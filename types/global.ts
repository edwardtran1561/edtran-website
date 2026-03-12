import { VARIANTS, INPUT_VARIANTS } from "@/constants/global";

export type Variant = (typeof VARIANTS)[number];
export type InputVariant = (typeof INPUT_VARIANTS)[number];

export type AsProp<C extends React.ElementType> = {
  as?: C;
};

type PropsToOmit<C extends React.ElementType, P> = keyof (AsProp<C> & P);

export type PolymorphicComponentProps<
  C extends React.ElementType,
  Props = object,
> = React.PropsWithChildren<Props & AsProp<C>> &
  Omit<React.ComponentPropsWithoutRef<C>, PropsToOmit<C, Props>>;
