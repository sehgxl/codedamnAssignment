import { FunctionComponent, useState } from "react";
import { Switch } from "@headlessui/react";

const SwitchToggle: FunctionComponent<{
  enabled: boolean;
  setEnabled: (checked: boolean) => void;
}> = ({ enabled, setEnabled }) => {
  return (
    <Switch
      checked={enabled}
      onChange={setEnabled}
      className={`${
        enabled ? "bg-violet-600" : "bg-gray-500"
      } relative inline-flex h-6 w-11 items-center rounded-full`}
    >
      <span className="sr-only">Enable notifications</span>
      <span
        className={`${
          enabled ? "translate-x-6" : "translate-x-1"
        } inline-block h-4 w-4 transform rounded-full bg-white transition`}
      />
    </Switch>
  );
};

export default SwitchToggle;
