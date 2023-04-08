import type { TinaField } from "tinacms";
export function comicsFields() {
  return [
    {
      type: "string",
      name: "title",
      label: "Title",
    },
    {
      type: "datetime",
      name: "date",
      required: true,
      label: "Date",
    },
    {
      type: "string",
      name: "type",
      required: true,
      options: ["comics"],
      label: "Type",
    },
    {
      type: "string",
      name: "setting",
      label: "Setting",
    },
    {
      type: "number",
      name: "Chapter",
      label: "Chapter",
    },
  ] as TinaField[];
}
