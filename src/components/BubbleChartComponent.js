import React, { Component } from 'react'
import PropTypes from 'prop-types'
import util from 'util'
import * as d3 from 'd3'
const d3jetpack = require('d3-jetpack')


class BubbleChartComponent extends React.Component {
  // static propTypes = {
  //   data: PropTypes.array,
  //   width: PropTypes.number,
  //   height: PropTypes.number,
  //   useLabels: PropTypes.bool
  // }

  // static defaultProps = {
  //   data: [],
  //   width: 600,
  //   height: 480
  // }

  constructor(props) {
    super(props)
    this.mounted = false

    this.state = {
      data: []
    }

    this.tickCount = 0
    this.simulatePositions = this.simulatePositions.bind(this)

    this.addCategoryBubbles = this.addCategoryBubbles.bind(this)

    this.focusOnCategoryBubble = this.focusOnCategoryBubble.bind(this)
    this.unfocusOnCategoryBubble = this.unfocusOnCategoryBubble.bind(this)

    this.centerCategoryBubble = this.centerCategoryBubble.bind(this)
    this.decenterCategoryBubble = this.decenterCategoryBubble.bind(this)

    this.lJustifyCategoryBubble = this.lJustifyCategoryBubble.bind(this)
    this.rJustifyCategoryBubble = this.rJustifyCategoryBubble.bind(this)

    this.fadeInCategoryBubble = this.fadeInCategoryBubble.bind(this)
    this.fadeOutCategoryBubble = this.fadeOutCategoryBubble.bind(this)

    this.addSubcategoryBubbles = this.addSubcategoryBubbles.bind(this)
    this.removeSubcategoryBubbles = this.removeSubcategoryBubbles.bind(this)

    this.fadeInTitleText = this.fadeInTitleText.bind(this)
    this.fadeOutTitleText = this.fadeOutTitleText.bind(this)

    this.handleCategoryBubbleClick = this.handleCategoryBubbleClick.bind(this)
    this.handleSubcategoryBubbleClick = this.handleSubcategoryBubbleClick.bind(this)
  }

  componentWillMount() {
    this.mounted = true
  }

  componentDidMount() {
    if (this.props.data.length > 0) {
      this.simulatePositions(this.props.data)
    }
  }

  componentWillUnmount() {
    this.mounted = false
  }

  componentDidUpdate() {
    console.log("componentDidUpdate ****************************************************************************************")

    let svg = d3
      .select('svg')

    let length = this.props.data.length

    for (let i = 0; i < length; i++) {
      let categoryData = this.props.data[i]

      var circleGroup = svg
        .select("#group_" + i)

      const nameSplit = categoryData.name.split(/[ ]/)

      console.log("nameSplit is " + util.inspect(nameSplit))

      const lineHeight = 15
      let newDY = 0

      if (nameSplit.length === 1) {
        newDY = lineHeight / 2
      }
      else if (nameSplit.length === 2) {
        newDY = 0
      }
      else if (nameSplit.length === 3) {
        newDY = -(lineHeight / 2)
      }
      else if (nameSplit.length === 4) {
        newDY = -lineHeight
      }
      else if (nameSplit.length) {
        newDY = -(lineHeight + lineHeight / 2)
      }

      let circleGroupText = circleGroup
        .select("text")

      let tspans = circleGroupText
        .text("")
        .attr("dy", newDY)
        .tspans(nameSplit)

      tspans.filter(function (d, i, list) {
        return i === 0
      }).attr('dy', newDY)
    }
  }

  async fadeOutCategoryBubble(index, duration = 200) {
    console.log("fadeOutCategoryBubble index: " + index)

    return new Promise(async (resolve, reject) => {
      let circleId = "#circle_" + index
      let circle = d3.select(circleId)

      console.log("fadeOutCategoryBubble circleId: " + circleId)

      let circleGroup = circle.select(function () { return this.parentNode; })

      circleGroup
        .transition()
        .duration(duration)
        .style("opacity", 0.0)
        .on("end", () => {
          console.log("fadeOutCategoryBubble resolved")
          resolve()
        })
    })
  }

  async fadeInCategoryBubble(index, duration = 200) {
    return new Promise(async (resolve, reject) => {
      let selectId = "#circle_" + index
      let circle = d3.select(selectId)

      let circleGroup = circle.select(function () { return this.parentNode; })
      console.log("circleGroup : " + util.inspect(circleGroup))

      circleGroup
        .transition()
        .duration(duration)
        .style("opacity", 1.0)
        .on("end", () => {
          console.log("fadeOutCategoryBubble resolved")
          resolve()
        })
    })
  }

  async centerCategoryBubble(index, duration = 500) {
    return new Promise(async (resolve, reject) => {
      let circleId = "#circle_" + index
      let circle = d3.select(circleId)

      console.log("centerCategoryBubble circleId: " + circleId)

      let circleGroup = circle.select(function () { return this.parentNode; })

      circleGroup
        .transition()
        .duration(duration)
        .attr("transform", `translate(${this.props.width / 2}, ${this.props.height / 2})`)
        .on("end", () => {
          resolve()
        })
    })
  }

  async decenterCategoryBubble(index) {
    return new Promise(async (resolve, reject) => {
      let circle = d3.select("#circle_" + index)

      let circleGroup = circle.select(function () { return this.parentNode; })

      circleGroup
        .transition()
        .duration(500)
        .attr("transform", `translate(${this.props.width / 2 + 10}, ${this.props.height / 2 + 10})`)
        .on("end", () => {
          resolve()
        })
    })
  }

  async lJustifyCategoryBubble(index) {
    return new Promise(async (resolve, reject) => {
      let circle = d3.select("#circle_" + index)
      let circleGroup = await circle.select(() => { return this.parentNode; })
      console.log("circleGroup : " + util.inspect(circleGroup))

      circleGroup
        .transition()
        .duration(500)
        .attr("transform", `translate(${this.props.data[index].radius}, ${this.props.height / 2})`)
        .on("end", () => {
          resolve()
        })
    })
  }

  async rJustifyCategoryBubble(index) {
    return new Promise(async (resolve, reject) => {
      let circle = d3.select("#circle_" + index)
      let circleGroup = await circle.select(() => { return this.parentNode; })
      console.log("circleGroup : " + util.inspect(circleGroup))

      circleGroup
        .transition()
        .duration(500)
        .attr("transform", `translate(${this.props.width - this.props.data[index].radius}, ${this.props.height / 2})`)
        .on("end", () => {
          resolve()
        })
    })
  }

  async addSubcategoryBubbles(index) {
    let svg = d3
      .select('svg')
    //    console.log("svg is: " + util.inspect(svg))

    const subcategoryClass = "subcategoryClass"
    const subcategories = this.props.data[index].subcategories
    const categoryRadius = this.props.data[index].radius

    let length = subcategories.length

    for (let i = 0; i < length; i++) {
      let subcategoryData = subcategories[i]

      var circleGroup = svg
        .append("g")
        .attr("class", subcategoryClass)

      circleGroup
        .append("circle")
        .attr("r", subcategoryData.radius)
        .attr("fill", subcategoryData.color)
        .on("click", () => {
          this.handleSubcategoryBubbleClick(index, i) // parent index and self index
        })

      const nameSplit = subcategoryData.name.split(/[ ]/)

      circleGroup
        .append("text")
        .tspans(nameSplit)
        .attr("id", "subcategory_circle_" + i)
        .attr("text-anchor", "middle")
        .attr("fill", "#FFFFFF")
        .attr("font-weight", "bold")
        .attr("font-size", "14px")
        .on("click", () => {
          this.handleSubcategoryBubbleClick(index, i) // parent index and self index
        })

      const lineHeight = 15
      let newDY = 0

      if (nameSplit.length === 1) {
        newDY = lineHeight / 2
      }
      else if (nameSplit.length === 2) {
        newDY = 0
      }
      else if (nameSplit.length === 3) {
        newDY = -(lineHeight / 2)
      }
      else if (nameSplit.length === 4) {
        newDY = -lineHeight
      }
      else if (nameSplit.length) {
        newDY = -(lineHeight + lineHeight / 2)
      }

      d3
        .select("#subcategory_circle_" + i)
        .attr("dy", newDY)

      const angleRadians = i * 360 / length * Math.PI / 180
      const cx = (this.props.width / 2) + (categoryRadius * 2 + 15) * Math.cos(angleRadians)
      const cy = (this.props.height / 2) + (categoryRadius * 2 + 15) * Math.sin(angleRadians)

      circleGroup
        .attr("transform", `translate(${cx}, ${cy})`)
    }
  }

  async removeSubcategoryBubbles(index) {
    d3
      .selectAll(".subcategoryClass")
      .remove()
  }

  async focusOnCategoryBubble(index) {
    const filtered = [0, 1, 2].filter((e) => { return e !== index })

    await this.fadeOutCategoryBubble(filtered[0])
    await this.fadeOutCategoryBubble(filtered[1])

    console.log("about to center category bubble")
    await this.centerCategoryBubble(index)
    await this.addSubcategoryBubbles(index)
  }

  async unfocusOnCategoryBubble(index) {
    this.removeSubcategoryBubbles(index)
    const filtered = [0, 1, 2].filter((e) => { return e !== index })

    console.log("handleCategoryBubbleClick filtered: " + JSON.stringify(filtered))

    await this.fadeInCategoryBubble(filtered[0])
    await this.fadeInCategoryBubble(filtered[1])
    await this.centerCategoryBubble(filtered[0])
    await this.centerCategoryBubble(filtered[1])

    this.setState({ ...this.props, categorySelected: null })
    this.simulatePositions(this.props.data)
  }

  fadeInTitleText(text, duration = 1000) {
    d3
      .select("#text_title")
      .style("opacity", 0.0)
      .transition()
      .duration(duration)
      .style("opacity", 1.0)
      .text(text)
  }

  fadeOutTitleText(text, duration = 1000) {
    d3
      .select("#text_title")
      .transition()
      .duration(duration)
      .style("opacity", 0)
      .text(text)
  }

  async handleCategoryBubbleClick(index) {
    console.log("handleCategoryBubbleClick index: " + index)
    console.log("handleCategoryBubbleClick categorySelected: " + this.state.categorySelected)

    if (this.state.categorySelected === null) {
      // console.log("handleCategoryBubbleClick data: " + JSON.stringify(this.props.data[index]))
      this.state.categorySelected = index
      this.fadeInTitleText(this.props.data[index].description)
      this.focusOnCategoryBubble(index)
    }
    else {
      this.fadeOutTitleText("")
      this.unfocusOnCategoryBubble(index)
    }
  }

  async handleSubcategoryBubbleClick(parentIndex, index) {
    console.log("handleSubcategoryBubbleClick parentIndex: " + parentIndex)
    console.log("handleSubcategoryBubbleClick index: " + index)

    const category = this.props.data[parentIndex]
    this.fadeInTitleText(category.subcategories[index].description)
  }

  simulatePositions(data) {
    this.tickCount = 0
    this.simulation = d3
      .forceSimulation()
      .nodes(data)
      .velocityDecay(0.38)
      .force("x",
        d3.forceX().strength(0.7))
      .force("y",
        d3.forceY().strength(0.7))
      .force("collide",
        d3.forceCollide(d => {
          return d.radius + 20
        })
      )
      .on("tick", () => {
        if (this.mounted) {
          this.tickCount++
          //  console.log("***************************** this.tickCount: " + this.tickCount)

          if (this.tickCount >= 50) {
            this.simulation.stop()
          }
          else {
            this.setState({ data })
          }
        }
      })
  }

  addCategoryBubbles(data) {
    const groups = data.map((item, index) => {
      const props = this.props
      const fontSize = 14

      //console.log("addCategoryBubbles item.x: " + item.x)
      // console.log("addCategoryBubbles item.y: " + item.y)
      console.log("addCategoryBubbles data item " + JSON.stringify(item))
      //
      // console.log("props.width: " + props.width)
      // console.log("props.height: " + props.height)

      return (
        <g
          key={index}
          id={"group_" + index}
          className={"group_" + index}
          transform={`translate(${props.width / 2 + item.x}, ${props.height / 2 + item.y})`}
        //transform={`translate(${props.width / 2}, ${props.height / 2})`}
        >
          <circle
            id={"circle_" + index}
            className={"circle_" + index}
            key={"circle_" + index}
            r={item.radius}
            fill={item.color}
            stroke={d3.rgb(item.color).brighter(0.5)}
            strokeWidth="2"
            onClick={() => {
              console.log("circle.onClick set to: " + index + " for " + item.name)
              this.handleCategoryBubbleClick(index)
            }}
          />
          <text
            id={"text_" + index}
            className={"text_" + index}
            key={"text_" + index}
            dy={fontSize / 2}
            fill="#FFFFFF"
            textAnchor="middle"
            fontSize={`${fontSize}px`}
            fontWeight="bold"
            onClick={() => {
              console.log("text.onClick set to: " + index + " for " + item.name)
              this.handleCategoryBubbleClick(index)
            }}
          >
            {item.name}
          </text>
        </g>
      )
    })

    return groups
  }

  render() {

    console.log("calling render() !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!")
    if (this.state.data.length) {

      console.log("calling inside render() state: " + util.inspect(this.state))
      console.log("calling inside render() props: " + util.inspect(this.props))
      return (
        <svg
          id={"svg"}
          className={"svg"}
          key={"svg"}
          width={this.props.width}
          height={this.props.height} >
          <text
            width={this.props.width}
            textAnchor="middle"
            x={"50%"}
            y={35}
            id={"text_title"}
            className={"text_title"}
            key={"text_title"}
            fontWeight={"bold"}
            fontSize={20}
          >Click a bubble for more information...</text>
          {this.addCategoryBubbles(this.state.data)}
        </svg>
      )
    }

    return (<div>
    </div>)
  }
}

export default BubbleChartComponent
