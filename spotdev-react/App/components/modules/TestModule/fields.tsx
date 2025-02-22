import { ModuleFields, TextField } from '@hubspot/cms-components/fields';
import React from 'react';

export const fields = (
  <ModuleFields>
    <TextField
      label="Heading"
      name="heading"
      default="Hello World Test Update! Den"
    />
  </ModuleFields>
);
