import React, { Component } from 'react'
import BubbleChartComponent from './BubbleChartComponent'
import '../css/rtt.css'


class RttPageContainer extends Component {
  constructor(props) {
    super(props)
    this.data = [{
      name: "Motivation",
      description: "Degree to which we want the innovation to happen.",
      color: "#A2D45E",
      radius: 85,
      subcategories: [{
        name: "Relative Advantage",
        description: "This innovation seems better than what we are currently doing.",
        color: "#A2D45E",
        radius: 70,
      }, {
        name: "Compatibility",
        description: "This innovation fits with how we do things.",
        color: "#A2D45E",
        radius: 70,
      }, {
        name: "Simplicity",
        description: "This innovation seems simple to use.",
        color: "#A2D45E",
        radius: 70,
      }, {
        name: "Ability to Pilot",
        description: "Degree to which this innovation can be tested and experimented with.",
        color: "#A2D45E",
        radius: 70,
      }, {
        name: "Observability",
        description: "Ability to see that this innovation is leading to outcomes.",
        color: "#A2D45E",
        radius: 70,
      }, {
        name: "Priority",
        description: "Importance of this innovation compared to other things we do.",
        color: "#A2D45E",
        radius: 70,
      }]
    }, {
      name: "Innovation-specific Capacity",
      description: "What is needed to make this particular innovation happen.",
      color: "#0071CE",
      radius: 85,
      subcategories: [{
        name: "Champion",
        description: "A well-connected person who supports and models this innovation.",
        color: "#0071CE",
        radius: 70,
      }, {
        name: "Innovation-specific Knowledge & Skills",
        description: "Sufficient abilities to do the innovation.",
        color: "#0071CE",
        radius: 70,
      }, {
        name: "Supportive Climate",
        description: "Necessary supports, processes, and resources to enable this innovation.",
        color: "#0071CE",
        radius: 70,
      }, {
        name: "Inter-organizational Relationships",
        description: "Relationships between organizations that support this innovation.",
        color: "#0071CE",
        radius: 70,
      }, {
        name: "Intra-organizational Relationships",
        description: "Relationships within organization that support this innovation.",
        color: "#0071CE",
        radius: 70,
      }]
    }, {
      name: "General Capacity",
      description: "Our overall functioning.",
      color: "#00B2E3",
      radius: 85,
      subcategories: [{
        name: "Culture",
        description: "Norms and values of how we do things here.",
        color: "#00B2E3",
        radius: 70,
      }, {
        name: "Climate",
        description: "The feeling of being part of this organization.",
        color: "#00B2E3",
        radius: 70,
      }, {
        name: "Innovativeness",
        description: "Openness to change in general.",
        color: "#00B2E3",
        radius: 70,
      }, {
        name: "Resource Utilization",
        description: "Ability to acquire and allocate resources including time, money, effort, and technology.",
        color: "#00B2E3",
        radius: 70,
      }, {
        name: "Leadership",
        description: "Effectiveness of our leaders.",
        color: "#00B2E3",
        radius: 70,
      }, {
        name: "Internal Operations",
        description: "Effectiveness at communication and teamwork.",
        color: "#00B2E3",
        radius: 70,
      }, {
        name: "Staff Capacities",
        description: "Having enough of the right people to get things done.",
        color: "#00B2E3",
        radius: 70,
      }, {
        name: "Process Capacities",
        description: "Ability to plan, implement, and evaluate.",
        color: "#00B2E3",
        radius: 70,
      }]
    }]
  }

  componentDidMount() {
  }

  componentDidUpdate() {
  }

  render() {
    return (
      <div>
        <div id="rtt_row1">
          <div id="rtt_row1Tint">
            <p id="rtt_row1Header">
              Readiness Thinking
            </p>
          </div>
        </div>
        <div id="signin_row2">
          <p id="signin_row2Body">
            This can help you think about your organization’s readiness to implement a new program, policy, practice or process.
            Write down the innovation you are considering.
            Reflect and consider whether the areas below are challenges or a strength for your innovation.
            Discuss your rationale with colleagues also involved in implementation.
          </p>
          <div>
            <BubbleChartComponent data={this.data} width={700} height={620} />
          </div>
        </div>
      </div>
    )
  }
}

export default RttPageContainer
