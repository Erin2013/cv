import React from 'react'

const withAOS = (Component: React.ComponentType) =>
  class extends React.PureComponent<{
    aos: string
  }> {
    render() {
      return (
        <div data-aos={this.props.aos}>
          <Component {...this.props} />
        </div>
      )
    }
  }

export default withAOS
