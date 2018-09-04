/* tslint:disable */

import { ConcreteFragment } from "relay-runtime";
export type Overview_installation = {
    readonly iID: number;
    readonly login: string;
};



const node: ConcreteFragment = {
  "kind": "Fragment",
  "name": "Overview_installation",
  "type": "Installation",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "iID",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "login",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": "__id",
      "name": "id",
      "args": null,
      "storageKey": null
    }
  ]
};
(node as any).hash = 'b4cd241cba8edc04b20720ca2774e167';
export default node;
