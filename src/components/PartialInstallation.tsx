import * as React from "react"
import { graphql, QueryRenderer } from "react-relay"

import { Container } from "semantic-ui-react"
import initEnvironment from "../lib/createRelayEnvironment"
import SetJSONPathForm from "./partial/SetJSONPathForm"

export default class PartialInstallation extends React.Component<any> {
  public render() {
    const installationID = this.props.match.params.installationID

    return (
      <QueryRenderer
        environment={initEnvironment()}
        query={graphql`
          query PartialInstallationQuery($id: Int!) {
            installation(iID: $id) {
              login
              ...SetJSONPathForm_installation
            }
          }
        `}
        variables={{ id: installationID }}
        render={({ error, props }) => {
          if (error) {
            return <div>Error!</div>
          }
          if (!props) {
            return <div>Loading...</div>
          }

          return (
            <Container style={{ paddingTop: "5em", paddingBottom: "5em" }} text>
              <h1>{props.installation.login}</h1>
              <p>
                The Peril-side of the integration is ready. To get started, you will need to have a peril settings JSON
                url. These look like:{" "}
                <a href="https://github.com/danger/peril-settings/blob/master/settings.json">
                  <code>danger/peril-settings@settings.json</code>
                </a>
              </p>
              <SetJSONPathForm installation={props.installation as any} />
            </Container>
          )
        }}
      />
    )
  }
}
