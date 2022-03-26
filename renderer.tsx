import { Renderer } from "@k8slens/extensions";
import React from "react";
import { NetworkPolicyComponent } from "./src/network-policy-component";

export default class CertificateInfoExtension extends Renderer.LensExtension {
  kubeObjectDetailItems = [
    {
      kind: "NetworkPolicy",
      apiVersions: ["networking.k8s.io/v1"],
      priority: 10,
      components: {
        Details: (props: Renderer.Component.KubeObjectDetailsProps<Renderer.K8sApi.NetworkPolicy>) => (
          <NetworkPolicyComponent {...props} />
        )
      }
    }
  ];
}
