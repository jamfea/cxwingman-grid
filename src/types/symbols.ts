import { Emitter } from 'mitt'
import { InjectionKey } from 'vue'
import type { GridLayoutEvent } from './components'

export type Events = {
  setColNum?: number | undefined
  'recalculate-styles': void
  resizeEvent: GridLayoutEvent
  'drag-event': GridLayoutEvent
}

export const emitterKey: InjectionKey<Emitter<Events>> = Symbol('$emitter')
