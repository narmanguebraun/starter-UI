import { style, globalStyle } from '@vanilla-extract/css'

export const container = style({
  padding: 10,
})

globalStyle('body', {
  fontFamily: 'Arial, sans-serif',
})
