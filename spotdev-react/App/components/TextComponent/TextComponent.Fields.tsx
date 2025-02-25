import { ModuleFields, TextField } from "@hubspot/cms-components/fields";
import React from "react";

export const TextComponentFields = () => (
    <ModuleFields>
        <TextField 
            name="textTitle"
            label="Title section"
            default="Advanced Calculator"
            required 
        />
        <TextField name="textSection" label="Text section" required default="Lore ipsum sit dolor amet nunquam consequitur azarat mithrion zinthos raxacorico"/>
    </ModuleFields>
)

export const fields = (
    <ModuleFields>
        <TextComponentFields />
    </ModuleFields>
)