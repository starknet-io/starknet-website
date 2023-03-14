import TextField from "@mui/material/TextField";
import type {
  BaseField,
  WidgetControlProps,
  WidgetOptions,
  WidgetParam,
  WidgetPreviewProps,
} from "@staticcms/core";
import { youtube_v3 } from "googleapis";
import type { ChangeEvent } from "react";
import { useCallback, useMemo, useState } from "react";

const API_BASE_URL = "/api";

function youtubeVideoIdFromURL(url: string): string | undefined {
  try {
    const obj = new URL(url);

    if (obj.hostname === "www.youtube.com") {
      if (obj.searchParams.get("v")) return obj.searchParams.get("v")!;

      if (obj.pathname.startsWith("/live/")) {
        return obj.pathname.replace("/live/", "");
      }
    } else if (obj.hostname === "youtu.be") {
      return obj.pathname.slice(1);
    }
  } catch {
    console.log("youtubeVideoIdFromURL", url);
  }
}

export interface YoutubeField extends BaseField {
  readonly widget: "youtube";
}

interface YoutubeFieldValue {
  readonly url: string;
  readonly id?: string | null | undefined;
  readonly data?: youtube_v3.Schema$Video | null | undefined;
}

export function YoutubeControl({
  value,
  label,
  isDuplicate,
  onChange,
  hasErrors,
}: WidgetControlProps<YoutubeFieldValue, YoutubeField>): JSX.Element {
  const [internalRawValue, setInternalValue] = useState<YoutubeFieldValue>(
    value ?? { url: "" },
  );
  const internalValue: YoutubeFieldValue = useMemo(
    () => (isDuplicate ? value ?? { url: "" } : internalRawValue),
    [internalRawValue, isDuplicate, value],
  );
  const [fetching, setFetching] = useState<string | null>(null);

  const setValue = useCallback(
    (newValue: YoutubeFieldValue) => {
      setInternalValue(newValue);
      onChange(newValue);
    },
    [onChange],
  );
  const handleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setValue({ ...value, url: e.target.value });
    },
    [setValue, value],
  );

  const handleBlur = useCallback(async () => {
    try {
      if (!value?.url) return;

      const id = youtubeVideoIdFromURL(value.url);

      if (!id) return;

      if (value?.id === id) return;

      if (fetching === id) return;

      try {
        setFetching(id);

        const res = await fetch(
          `${API_BASE_URL}/youtube?id=${encodeURIComponent(id)}`,
        );

        const { data, message } = await res.json();

        if (message != null) throw new Error(message);
        if (data == null) throw new Error("Video not found!");

        setFetching((fetching) => {
          if (fetching !== id) return fetching;

          setValue({ url: value.url, id, data });

          return null;
        });
      } catch (err) {
        console.log(err);
        setValue({ url: value.url, id, data: undefined });
      }

      setFetching(null);
    } catch (err) {
      console.log(err);
    }
  }, [fetching, setValue, value?.id, value?.url]);

  const title = value?.data?.snippet?.title ?? null;

  return (
    <TextField
      label={label}
      variant="outlined"
      value={internalValue.url}
      onChange={handleChange}
      onBlur={handleBlur}
      fullWidth
      error={hasErrors}
      helperText={
        fetching
          ? `Fetching: ${fetching}`
          : title
          ? `Video: ${title}`
          : "No Video Data!"
      }
    />
  );
}

export function YoutubePreview({
  value,
}: WidgetPreviewProps<YoutubeFieldValue, YoutubeField>): JSX.Element {
  return <pre>{JSON.stringify(value, null, "  ")}</pre>;
}

export const YoutubeSchema: WidgetOptions["schema"] = {
  properties: {
    // default: { type: "string" },
  },
};

export function YoutubeWidget(): WidgetParam<YoutubeFieldValue, YoutubeField> {
  return {
    name: "youtube",
    controlComponent: YoutubeControl,
    previewComponent: YoutubePreview,
    options: {
      schema: YoutubeSchema,
    },
  };
}
