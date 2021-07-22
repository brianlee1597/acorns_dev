const BiasStyleMap = new Map([
    ["nav", new Map([
        ["Blackpink", {
            linkcolor: "#f4a6ba",
            backgroundcolor: "#030203"
        }]
    ])]
])

const biasStyle = (component, bias) => BiasStyleMap.get(component).get(bias)

export default biasStyle