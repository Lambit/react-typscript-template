import { ComponentPropsWithRef, ElementType, HTMLProps } from 'react'

// useful thought I needed it for Nav

export type RenderAsType = keyof JSX.IntrinsicElements | ElementType

export type GetRenderAsProps<T extends RenderAsType> =
  T extends JSX.IntrinsicElements
    ? HTMLProps<T>
    : T extends ElementType
    ? ComponentPropsWithRef<T>
    : {}