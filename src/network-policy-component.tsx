import { Renderer } from "@k8slens/extensions";
import React from "react";
import { NetworkPolicyViewer } from "network-policy-viewer";
import "network-policy-viewer/index.css"
import * as yaml from "js-yaml";

export class NetworkPolicyComponent extends React.Component<Renderer.Component.KubeObjectDetailsProps<Renderer.K8sApi.NetworkPolicy>> {
  render() {
    return <div>
      <Renderer.Component.DrawerTitle title="NetworkPolicyViewer"/>
      <NetworkPolicyViewer
        networkPolicy={yaml.dump(this.props.object.toPlainObject())}
        style={{ display: "flex", width: "100%", height: '30vh' }}
        canvasStyle={{ width: "100%", height: '30vh'}}
      />
    </div>;
  }
}
