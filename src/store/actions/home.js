import * as types from '../types'
import { createAction } from 'redux-actions'

export const initTimeline = createAction(types.INIT_TIMELINE)
export const appendTimeline = createAction(types.APPEND_TIMELINE)
export const prependTimeline = createAction(types.PREPEND_TIMELINE)
