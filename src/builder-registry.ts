"use client";
import { builder, Builder } from "@builder.io/react";
import Button from "./components/Button";
import Counter from "./components/Counter/Counter";
import Header from "./components/Header/Header";
import NtvCard from "./components/NtvCard/NtvCard";
import RadiantAutoComplete from "./components/RadiantAutoComplete/RadiantAutoComplete";
import RadiantBox from "./components/RadiantBox/RadiantBox";
import RadiantButton from "./components/RadiantButton/RadiantButton";
import RadiantInputField from "./components/RadiantInputField/RadiantInput";
import RadiantRadioButton from "./components/RadiantRadioButton/RadiantRadioButton";
import RadiantSampleContainer from "./components/RadiantSampleContainer/RadiantSampleContainer";

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

Builder.registerComponent(Counter, {
  name: "Counter",
  inputs: [
    {
      name: "initialCount",
      type: "number",
    },
  ],
});

Builder.registerComponent(Header, {
  name: "Header",
});

Builder.registerComponent(RadiantInputField, {
  name: "RadiantInputField",
  inputs: [
    {
      name: "inputType",
      type: "string",
      required: true,
    },
    {
      name: "label",
      type: "string",
      required: true,
    },
    {
      name: "required",
      type: "boolean",
    },
  ],
});

Builder.registerComponent(RadiantRadioButton, {
  name: "RadiantRadioButton",
  inputs: [
    {
      name: "label",
      type: "string",
      required: true,
    },
    {
      name: "radioValues",
      type: "object",
      hideFromUI: true,
      meta: {
        ts: "RadioValue[]",
      },
      required: true,
    },
    {
      name: "value",
      type: "string",
      required: true,
    },
  ],
});

Builder.registerComponent(RadiantAutoComplete, {
  name: "RadiantAutoComplete",
  inputs: [
    {
      name: "label",
      type: "string",
      required: true,
    },
    {
      name: "options",
      type: "object",
      hideFromUI: true,
      meta: {
        ts: "Option[]",
      },
      required: true,
    },
    {
      name: "required",
      type: "boolean",
    },
    {
      name: "value",
      type: "string",
      required: true,
    },
  ],
});

Builder.registerComponent(RadiantBox, {
  name: "RadiantBox",
});

Builder.registerComponent(RadiantButton, {
  name: "RadiantButton",
});

Builder.registerComponent(RadiantSampleContainer, {
  name: "RadiantSampleContainer",
});

Builder.registerComponent(Button, {
  name: "Button",
});

Builder.registerComponent(NtvCard, {
  name: "NtvCard",
});
