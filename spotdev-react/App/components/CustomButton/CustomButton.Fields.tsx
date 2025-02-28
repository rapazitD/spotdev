import { ModuleFields, TextField } from "@hubspot/cms-components/fields"
import React from "react"

export const fields = (
    <ModuleFields>
        <TextField name="calculateText" label="Calculate button text" required default="Calculate"/>
    </ModuleFields>
)
