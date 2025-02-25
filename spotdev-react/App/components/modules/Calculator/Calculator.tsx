import { Island } from "@hubspot/cms-components"
import CalculatorIsland from "./CalculatorIsland.tsx?island"
import { CalculatorProps } from "./Calculator.type.tsx"
import React from "react"

export const Component = (props: CalculatorProps) => {
    return(
        <Island
            module={CalculatorIsland}
            hydrateOn="load"
            {...props}          
        />
    )
}