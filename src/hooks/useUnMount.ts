import { useEffect } from "react"

export const useUnMount = (fn: () => any): void => {
    useEffect(() => () => fn(), [])
}
