import TextField from "@mui/material/TextField";
import type {
  BaseField,
  WidgetControlProps,
  WidgetOptions,
  WidgetParam,
  WidgetPreviewProps,
} from "@staticcms/core";
import type { ChangeEvent } from "react";
import { useCallback, useMemo, useState } from "react";
import { v4 as uuidv4 } from "uuid";

export interface UUIDField extends BaseField {
  readonly widget: "uuid";
}

export function UUIDControl({
  value,
  label,
  isDuplicate,
  onChange,
  hasErrors,
}: WidgetControlProps<string, UUIDField>): JSX.Element {
  const defaultValue = useMemo(() => uuidv4(), []);
  const [internalRawValue, setInternalValue] = useState(value ?? defaultValue);
  const internalValue = useMemo(
    () => (isDuplicate ? value ?? defaultValue : internalRawValue),
    [defaultValue, internalRawValue, isDuplicate, value],
  );

  const handleChange = useCallback(
    (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setInternalValue(event.target.value);
      onChange(event.target.value);
    },
    [onChange],
  );

  return (
    <TextField
      key="uuid-widget-control-input"
      inputProps={{
        "data-testid": "uuid-widget-control-input",
      }}
      label={label}
      variant="outlined"
      value={internalValue}
      onChange={handleChange}
      fullWidth
      error={hasErrors}
    />
  );
}

export function UUIDPreview({
  value = "",
}: WidgetPreviewProps<string, UUIDField>): JSX.Element {
  return <div>{value}</div>;
}

export const UUIDSchema: WidgetOptions["schema"] = {
  properties: {
    // default: { type: "string" },
  },
};

export function UUIDWidget(): WidgetParam<string, UUIDField> {
  return {
    name: "uuid",
    controlComponent: UUIDControl,
    previewComponent: UUIDPreview,
    options: {
      schema: UUIDSchema,
    },
  };
}
