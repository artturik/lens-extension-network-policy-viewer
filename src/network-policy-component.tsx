import { Renderer } from "@k8slens/extensions";
import React from "react";
import { NetworkPolicyViewer } from "network-policy-viewer";
import "network-policy-viewer/index.css";
import * as yaml from "js-yaml";
import { observable } from "mobx";
import { observer } from "mobx-react";

const {
  K8sApi: { podsApi, namespacesApi },
} = Renderer;

@observer
export class NetworkPolicyComponent extends React.Component<
  Renderer.Component.KubeObjectDetailsProps<Renderer.K8sApi.NetworkPolicy>
> {
  @observable private pods: string[];
  @observable private namespaces: string[];

  async componentDidMount() {
    this.pods = (await podsApi.list()).map((p) => yaml.dump(p.toPlainObject()));
    this.namespaces = (await namespacesApi.list()).map((n) =>
      yaml.dump(n.toPlainObject())
    );
    // force rerender hack
    this.setState({});
  }

  render() {
    return (
      <div>
        <Renderer.Component.DrawerTitle>
          NetworkPolicyViewer
        </Renderer.Component.DrawerTitle>
        <NetworkPolicyViewer
          networkPolicy={yaml.dump(this.props.object.toPlainObject())}
          pods={this.pods}
          namespaces={this.namespaces}
          style={{ display: "flex", width: "100%", height: "30vh" }}
          canvasStyle={{ width: "100%", height: "30vh" }}
        />
      </div>
    );
  }
}
