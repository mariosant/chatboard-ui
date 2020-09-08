import { useStoreon } from 'storeon/react'
import type { State } from 'app/store'

export default (v: keyof State) => useStoreon<State>(v)
