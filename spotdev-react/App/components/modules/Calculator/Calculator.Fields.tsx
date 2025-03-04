import { ColorField, ModuleFields, TextField } from "@hubspot/cms-components/fields";
import React from "react";

export const fields = (
    <ModuleFields>
       <TextField 
            name="textTitle"
            label="Title section"
            default="Advanced Calculator"
            required 
        />
        <TextField name="textSection" label="Text section" required default="Lore ipsum sit dolor amet nunquam consequitur azarat mithrion zinthos raxacorico"/>
        <TextField name="calculateText" label="Calculate button text" required default="Calculate"/>
        <TextField name="inputFieldOne" label="Set input field label for the first input" required default="First Number"/>
        <TextField name="inputFieldTwo" label="Set input field label for the second input" required default="Second Number"/>
        <ColorField name="primaryColor" label="Select primary color" default={{color: "#544DB4"}}></ColorField>
    </ModuleFields>
)
